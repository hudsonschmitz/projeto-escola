const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


app.listen(3333);

let jsonNotas = require("./json/notas.json");
let jsonSala = require("./json/sala.json");
let jsonProf = require("./json/prof.json");
let jsonBoletos = require("./json/boletos.json");


app.get('/boleto/:matricula', (request, response) => {
    const { matricula } = request.params;
    return response.json(jsonBoletos.boletos.filter((alunoBoleto) => alunoBoleto.matricula === matricula));
});

app.get('/notas/:turmaAno', (request, response) => {
    const { turmaAno } = request.params;
    return response.json(jsonNotas.notas.filter((alunoNota) => alunoNota.turmaAno === turmaAno));
});

app.delete('/notas/aluno/:matricula', (request, response) => {
    const { matricula } = request.params;
    for(let i = 0; i < jsonNotas.notas.length; i++) {
        if(jsonNotas.notas[i].matricula) {
            if(jsonNotas.notas[i].matricula === matricula) {
                jsonNotas.notas.splice(i, 1);
                console.log(jsonNotas);
            }
        }
    }
    return response.send();
});

app.put('/notas/aluno/:matricula/:nota/:falta', (request, response) => {
    const { matricula, nota, falta } = request.params;
    for(let i = 0; i < jsonNotas.notas.length; i++) {
        if(jsonNotas.notas[i].matricula) {
            if(jsonNotas.notas[i].matricula === matricula) {
                jsonNotas.notas[i].nota = nota;
                jsonNotas.notas[i].faltas = falta;
            }
        }
    }
    return response.send();
});
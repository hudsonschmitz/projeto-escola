const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3333)

app.get('/sala', (request, response) => {
    const jsonSala = require("./json/sala.json");
    return response.json(jsonSala);
});

app.get('/sala', (request, response) => {
    const jsonProf = require("./json/prof.json");
    return response.json(jsonProf);
});
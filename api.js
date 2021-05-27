const { request } = require('Express');
const express = require('Express');

const db = require('./db.json');

const app = express();

app.get("/GetTrainers", function (req, res) {
    const trainers = db.map(t => {
        return {
            id: t.id,
            nombre: t.nombre
        }
    });

    res.json(trainers);
});

app.get("/getTrainerInfo/:id", function(req, res) {
    const { id } = request.params;
})

app.listen(8080, function () {
    console.log("> Escuchando puerto 8080");
});
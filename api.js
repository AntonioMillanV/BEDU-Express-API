const express = require('Express');

const db = require('./db.json');

let lastID = db.length;

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
    const { id } = req.params;

    if(!id){
        res.end("Error, No se encontró un ID");
        return;
    }

    const {id, nombre, region} = db.find((t) => t.id === id);

    if (!nombre.length) {
        res.end("No se encontró el ID especificado");
    } else {
        res.json({
            id: id,
            nombre: nombre,
            region: region
        });
    }
});

app.get("/getTrainerPokemons/:id", function(req, res) {
    const { id } = req.params;

    if(!id){
        res.end("Error, No se encontró un ID");
        return;
    }

    const {pokemon} = db.find((t) => t.id === id);

    if (!nombre.length) {
        res.end("No se encontró el ID especificado");
    } else {
        res.json({
            pokemon: pokemon
        });
    }
});

app.post("/addTrainer", (req, res) => {
    const newTrainer = req.body;
    db.push({ id: ++db.length, ...newTrainer, pokemon: []});

    res.end("Nuevo entrenador añadido con éxito");
});

app.post("/attachPokemonToTrainer/:id", (req, res) => {
    const { id } = req.params;
    const {newPokemon} = req.body;

    if(!id){
        response.end("Error, No se encontró un ID");
        return;
    }

    const trainer = db.find((t) => t.id === id);

    if (!trainer.length) {
        res.end("No se encontró el ID especificado");
    } else {
        trainer.pokemon.push(newPokemoon);
    }
})

app.listen(8080, function () {
    console.log("> Escuchando puerto 8080");
});
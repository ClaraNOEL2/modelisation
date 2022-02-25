const express = require('express')
const app = express()
const perso = require("personnage");
app.get('/', function (req, res) {
    res.send('Bienvenue sur Gamez tapez personnages sur url');
  });



app.listen(4567, () => {
    console.log("Serveur à l'écoute")
})
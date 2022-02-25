const express = require('express');
const app = express();
const chatRoutes = require("./routes/personnage.router");
app.use("/personnage", chatRoutes);

app.get('/', function (req, res) {
    res.send('Bienvenue sur Gamez tapez personnages sur url');
  });



app.listen(4567, () => {
    console.log("Serveur à l'écoute")
})
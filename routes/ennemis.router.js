const express = require('express');
const router = express.Router();/
const chemRouter = require('../controller/ennemis.controller');
router.get('/', chemRouter);
app.get('/ennemis', (req,res) => {
    res.status(200).json(ennemis)
})

app.get('/ennemis/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const enn = ennemis.find(enn => enn.id === id)
    res.status(200).json(enn)
})

app.get('/ennemis/:nom', (req,res) => {
    const nom = parseInt(req.params.nom)
    const enn = ennemis.find(enn => enn.nom === nom)
    res.status(200).json(enn)
})

app.get('/ennemis/:vie', (req,res) => {
    const vie = parseInt(req.params.vie)
    const enn = ennemis.find(enn => enn.vie === vie)
    res.status(200).json(enn)
})

app.get('/ennemis/:epee', (req,res) => {
    const epee = parseInt(req.params.epee)
    const enn = ennemis.find(enn => enn.epee === epee)
    res.status(200).json(enn)
})
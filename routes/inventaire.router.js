const express = require('express');
const router = express.Router();/
const chemRouter = require('../controllers/inventaire.controller');
router.get('/', chemRouter);
app.get('/inventaires', (req,res) => {
    res.status(200).json(inventaires)
})

app.get('/inventaires/:alimentaire', (req,res) => {
    const alimentaire = parseInt(req.params.alimentaire)
    const invent = inventaires.find(invent => invent.alimentaire === alimentaire)
    res.status(200).json(invent)
})

app.get('/inventaires/:medicament', (req,res) => {
    const medicament = parseInt(req.params.medicament)
    const invent = inventaires.find(invent => invent.medicament === medicament)
    res.status(200).json(invent)
})
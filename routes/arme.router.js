const express = require('express');
const router = express.Router();
const chemRouter = require('../src/controller/arme.controller');

app.get('/armes', (req,res) => {
    res.status(200).json(armes)
})

app.get('/armes/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const arm = armes.find(arm => arm.id === id)
    res.status(200).json(arm)
})

app.get('/armes/:categorie', (req,res) => {
    const categorie = parseInt(req.params.categorie)
    const arm = armes.find(arm => arm.categorie === categorie)
    res.status(200).json(arm)
})
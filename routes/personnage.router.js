const express = require('express');
const router = express.Router();
const chemRouter = require('../controller/personnage.controller');
router.get('/', chemRouter);
const personnages = require('./personnages.json');

app.get('/personnages', (req,res) => {
    res.status(200).json(personnages)
})

app.get('/personnages/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const user = personnages.find(user => user.id === id)
    res.status(200).json(user)


})

module.exports = router;
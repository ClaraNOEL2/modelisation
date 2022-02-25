const express = require('express');
const router = express.Router();
const chemRouter = require('../src/controller/personnage.controller');

const personnages = require('../personnages.json');


router.get('/', (req,res) => {
    res.status(200).json(personnages)
})

router.get('/personnages/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const user = personnages.find(user => user.id === id)
    res.status(200).json(user)


})

module.exports = router;
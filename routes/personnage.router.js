const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const chemRouter = require('../controller/personnage.controller');
router.get('/', chemRouter);
const personnages = require('./personnages.json');
=======
const chemRouter = require('../src/controller/personnage.controller');

const personnages = require('../personnages.json');
const app = express();
>>>>>>> 6404f240867f377924211e017ca3c2caa2988b80

app.get('/personnages', (req,res) => {
    res.status(200).json(personnages)
})

app.get('/personnages/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const user = personnages.find(user => user.id === id)
    res.status(200).json(user)


})

module.exports = router;
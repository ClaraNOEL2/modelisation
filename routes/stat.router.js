const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const chemRouter = require('../controller/stat.controller');
router.get('/', chemRouter);
=======
const chemRouter = require('../src/controller/stat.controller');

>>>>>>> 6404f240867f377924211e017ca3c2caa2988b80
app.get('/stats', (req,res) => {
    res.status(200).json(stats)
})

app.get('/stats/:xp', (req,res) => {
    const xp = parseInt(req.params.xp)
    const stat = stats.find(stat => stat.xp === xp)
    res.status(200).json(stat)
})

app.get('/stats/:niveau', (req,res) => {
    const niveau = parseInt(req.params.niveau)
    const stat = stats.find(stat => stat.niveau === niveau)
    res.status(200).json(stat)
})

app.get('/stats/:vie', (req,res) => {
    const vie = parseInt(req.params.vie)
    const stat = stats.find(stat => stat.vie === vie)
    res.status(200).json(stat)
})
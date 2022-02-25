app.get('/personnages', (req,res) => {
    res.status(200).json(personnages)
})

app.get('/personnages/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const user = personnages.find(user => user.id === id)
    res.status(200).json(user)
})

app.get('/personnages/:nom', (req,res) => {
    const nom = parseInt(req.params.nom)
    const user = personnages.find(user => user.nom === nom)
    res.status(200).json(user)
})

app.get('/personnages/:sexe', (req,res) => {
    const sexe = parseInt(req.params.sexe)
    const user = personnages.find(user => user.sexe === sexe)
    res.status(200).json(user)
})
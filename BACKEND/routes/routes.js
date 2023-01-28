const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        id: req.body.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        email: req.body.email,
        position: req.body.position,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


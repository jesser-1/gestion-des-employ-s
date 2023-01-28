const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    nom: {
        required: true,
        type: String
    },
     prenom: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
     email: {
        required: true,
        type: String
    },
     position: {
        required: true,
        type: String
    }
   
})

module.exports = mongoose.model('Data', dataSchema)
const mongoose = require('mongoose');

var marsupilamiSchema = new mongoose.Schema({
    age: {
        type: Number,
    },
    famille: {
        type: String
    },
    race: {
        type: String
    },
    nourriture: {
        type: String
    },
      password:{
        type: String,
        required: true
      }
    });




mongoose.model('marsupilami', marsupilamiSchema);
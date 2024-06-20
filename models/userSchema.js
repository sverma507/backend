const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({ 
    first_Name: { 
        type: String, 
        require: true
    }, 
    last_Name: { 
        type: String, 
    }, 
    email: {
        type: String
    },
    password: {
        type: String
    },
    admin:{
        type:Boolean
    }
    // mana_power: Number, 
    // health: Number, 
    // gold: Number 
}) 
 
module.exports = mongoose.model('users', mySchema)
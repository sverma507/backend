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
    confirm_Password: {
        type: String
    },
    // mana_power: Number, 
    // health: Number, 
    // gold: Number 
}) 
 
module.exports = mongoose.model('users', mySchema)
const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        require: true
    }, 
    mobileNo: { 
        type: String, 
    }, 
    address: {
        type: String
    },
    mana_power: Number, 
    health: Number, 
    gold: Number 
}) 

module.exports = mongoose.model('user', mySchema)
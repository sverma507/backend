const mongoose = require('mongoose');

const food_itemSchema = new mongoose.Schema({ 
    foodItemName:{
    type:String,
    require:true
   }
}) 

module.exports = mongoose.model('foodItem', food_itemSchema)
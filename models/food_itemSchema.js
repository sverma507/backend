const mongoose = require('mongoose');

const food_itemSchema = new mongoose.Schema({ 
   categoryName:{
    type:String,
    require:true
   },
   productName:{
    type:String,
    require:true,
   },
   description:{
    type:String,
   },
   foodType:{
    type:String,
    require:true
   },
   price:{
    type:Number,
    require:true,
   },
   discount:{
    type:Number,
    require:true,
   },
   added:{
      type:Boolean
   }
}) 

module.exports = mongoose.model('fooditems', food_itemSchema)
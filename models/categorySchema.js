const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({ 
   categoryName:{
    type:String,
    require:true
   }
}) 

module.exports = mongoose.model('categories', categorySchema)
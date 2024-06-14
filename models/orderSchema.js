const mongoose = require('mongoose');

const orderSchema=new mongoose.Schema({
    productName:{
        type:String,
    },
    qty:{
        type:Number
    },
    price:{
        type:Number
    }
})

module.exports=mongoose.model("orders",orderSchema)
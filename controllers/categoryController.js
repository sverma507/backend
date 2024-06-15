// const user = require('../models/userSchema')
const categories=require('../models/categorySchema')
// const foodItem=require('../models/food_itemSchema')

const addCategory = async (req, res) => {
     console.log("req.body=>", req.body);
     const result = await categories.create(req.body);
     if(result){
        res.send(result);
    }else{
        res.send("Error")
    }
     
}

const getCategory = async (req, res) =>{
    // console.log("All Categories");
    const result = await categories.find();
    if(result){
        res.send(result);
    }else{
        res.send("Error")
    }
}

const countCategory = async (req, res) =>{
    // console.log("All Categories");
    const result = await categories.find().count();
    console.log("result=>",result);
    if(result){
        res.send({result});

    }else{
        res.send("Error")
    }
}

const deleteCategory = async (req, res) =>{
    console.log("req.body=>",req.body.id);
   const rslt= await categories.deleteOne({_id:req.body.id});
   if(rslt){
    res.send(rslt)
   }
   else{
    res.send("error in deletion")
   }
}

module.exports = {addCategory, getCategory,deleteCategory,countCategory}
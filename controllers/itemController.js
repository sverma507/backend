
// const { findByIdAndUpdate } = require('../models/categorySchema');
const fooditems=require('../models/food_itemSchema')
const addItem = async (req, res) => {
     console.log("req.body=>", req.body);
     const result = await fooditems.create(req.body);
     if(result){
        res.send(result);
    }else{
        res.send("Error")
    }
     
}

const getItem = async (req, res) =>{
    console.log("All Categories");
    const result = await fooditems.find();
    console.log("result=>",result);
    if(result){
        res.send(result);
    }else{
        res.send("Error")
    }
}

const updateItem = async (req, res) =>{
    console.log("req.body=>",req.body);

    const result = await fooditems.findByIdAndUpdate(req.body._id,req.body,{new:true});
    console.log("result=>",result);
    if(result){
        res.send({result});

    }else{
        res.send("Error")
    }
}

const deleteItem = async (req, res) =>{
    // console.log("req.body=>",req.body.id);
   const rslt= await fooditems.deleteOne({_id:req.body.id});
   if(rslt){
    res.send(rslt)
   }
   else{
    res.send("error in deletion")
   }
}

const getItemByCategory = async (req, res) => {
    console.log("Category Name:", req.query.categoryName);
    try {
        const result = await fooditems.find({ categoryName: req.query.categoryName });
        console.log("result=>", result);
        // if (result.length > 0) {
        //     res.send({ result });
        // } 
        res.send({ result });
    } catch (err) {
        console.log("error while fetching the data from the backend on the basis of category name", err);
        res.status(500).send("Error");
    }
}

module.exports = {addItem, getItem,deleteItem,updateItem,getItemByCategory}
const order=require('../models/orderSchema')

const addOrder=async(req,res)=>{
    console.log("orderdata: req.body=>", req.body);
    const result = await order.create(req.body);
    if(result){
       res.send(result);
   }else{
       res.send("Error")
   }
}

const getOrder=async(req,res)=>{
    console.log("Category Name:", req.query);
    try {
        const result = await order.find({ _id: req.query.id });
        // console.log("result=>", result);
        res.send({ result });
    } catch (err) {
        console.log("error while fetching the data from the backend on the basis of category name", err);
        res.status(500).send("Error");
    }
}

module.exports={addOrder,getOrder}
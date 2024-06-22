
// const { findByIdAndUpdate } = require('../models/categorySchema');
const fooditems=require('../models/food_itemSchema')
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dzhhthvtm', 
    api_key: '558114168948977', 
    api_secret: 'yfDDN-TjP8gVExMrFWB3peNGgSc'
  });

//   const photoUpload=async(req,res)=>{
   
//   }

// const photoUpload = async (req, res) => {
//     // Check if files are present in the request
//     if (!req.files || !req.files.photo) {
//         return res.status(400).send("No files were uploaded.");
//     }

//     const file = req.files.photo;

//     // Debugging: Log the file information
//     console.log("file=>", file);

//     // Use the correct file path property, depending on your setup it might be `tempFilePath` or `path`
//     const filePath = file.tempFilePath || file.path;

//     cloudinary.uploader.upload(filePath, (err, result) => {
//         if (err) {
//             console.error("Error uploading to Cloudinary:", err);
//             return res.status(500).send("Error uploading to Cloudinary.");
//         }

//         console.log("photo result=>", result);
//         res.send(result); // Send the Cloudinary result back to the client
//     });
// }


const addItem = async (req, res) => {
     console.log("req.body=>", req.body);
     const photo=null;
     const file =req.files.photo;
     await cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        photo=result;
     })

     const data={...req.body,["photo"]:photo};
     const result = await fooditems.create(data);
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
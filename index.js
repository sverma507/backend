const express = require('express');
const mongoose = require('mongoose');
const fileupload=require('express-fileupload')
const app = express();
// const user = require('./models/userSchema')
require("./config/dbConnection");
const cors= require('cors');
const {addCategory, getCategory,deleteCategory,countCategory} = require('./controllers/categoryController');
const {addItem, getItem,deleteItem,updateItem,getItemByCategory}=require('./controllers/itemController');
const {addOrder,getOrder}=require('./controllers/orderController')
const {Register,Verify,Login,Sendmail}=require('./controllers/userController')
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  app.use(cors(corsOptions));
app.use(fileupload({
    useTempFiles:true
}))
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('server is ready');
});


// app.post('/uploadphoto',photoUpload)

app.post('/addcategory', addCategory)
app.get('/getcategory', getCategory);
app.delete('/deletecategory',deleteCategory);
app.get('/countcategory',countCategory)



app.post('/additem',addItem)
app.get('/getitem',getItem)
app.delete('/deleteitem',deleteItem)
app.put('/updateitem',updateItem)
app.get('/getitembycategory',getItemByCategory)


app.post('/addorder',addOrder)
app.get('/getorder',getOrder)


app.post('/register',Register)
app.post('/login',Login)

app.post('/sendmail',Sendmail)

const port = 4000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})

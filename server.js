const express = require('express');
const mongoose = require('mongoose');

const app = express();
// const user = require('./models/userSchema')
require("./config/dbConnection");
const cors= require('cors');
const {addCategory, getCategory,deleteCategory,countCategory} = require('./controllers/categoryController');
const {addItem, getItem,deleteItem,updateItem,getItemByCategory}=require('./controllers/itemController');
const {addOrder,getOrder}=require('./controllers/orderController')
const {Register,Verify,Login,Sendmail}=require('./controllers/userController')
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('server is ready');
});

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
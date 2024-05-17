const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const user = require('./models/userSchema')
require("./config/dbConnection");
const cors= require('cors');
const {addCategory, getCategory,deleteCategory,countCategory} = require('./controllers/userController');

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('server is ready');
});

app.post('/addcategory', addCategory)
app.get('/getcategory', getCategory);
app.delete('/deletecategory',deleteCategory);
app.get('/countcategory',countCategory)

const port = 4000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const user = require('./models/userSchema')
require("./config/dbConnection");

const {addUser, getAllUser} = require('./controllers/userController');

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('server is ready');
});

app.post('/adduser', addUser)
app.delete('/adduser', getAllUser);

const port = 4000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})
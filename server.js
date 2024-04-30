const express = require('express');
const mongoose = require('mongoose');
const app = express();
const user = require('./models/userSchema')
require("./config/dbConnection");

const {addUser} = require('./controllers/userController');

  
// const MySchema = new mongoose.model("MySchema", mySchema)

  
// const mage_1 = new MySchema({ 
//     name: "Takashi", 
//     power_type: 'Element', 
//     mana_power: 2009, 
//     health: 1000, 
//     gold: 10000 
// }); 
  
// mage_1.save();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('server is ready');
});

app.post('/adduser', addUser)

// app.post('/welcome',(req,res)=>{
//     console.log("req.body", req.body)
//     res.send('data from req.body');
//     if(req.body.Name.length<2)
//     {
//         console.log("name should be grtear then 2 character");
//     }
//     if(req.body.Phone.length<10)
//     {
//         console.log("Phone no must consists of 10 number");
//     }
//     if(req.body.Email.includes('@gmail.com'))
//     {
//         console.log("Enter a vaild mail address");
//     }

// });

// app.get('/api/jokes',(req,res)=>{
//     const arr=[
//         {
//             id:1,
//             title:"ist joke",
//             content:"contenct of jkoke is ...",
//         },
//         {
//             id:2,
//             title:"ist joke",
//             content:"contenct of jkoke is ...",
//         },
//         {
//             id:3,
//             title:"ist joke",
//             content:"contenct of jkoke is ...",
//         },
//         {
//             id:4,
//             title:"ist joke",
//             content:"contenct of jkoke is ...",
//         },
//         {
//             id:5,
//             title:"ist joke",
//             content:"contenct of jkoke is ...",
//         },
//     ]
//     res.send(arr);
// })
// // const port =process.env.PORT||5002;

const port = 4000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})
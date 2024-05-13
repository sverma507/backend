const user = require('../models/userSchema')
const addUser = async (req, res) => {
     console.log("req.body=>", req.body);
     const result = await user.create(req.body);
     if(result){
        res.send(result);
    }else{
        res.send("Error")
    }
     
}

const getAllUser = async (req, res) =>{
    console.log("Inside getAllUser");
    const result = await user.deleteOne({name:"hollywood"});
    if(result){
        res.send(result);
    }else{
        res.send("Error")
    }
}

module.exports = {addUser, getAllUser}
const user = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const Register = async (req, res) => {
    try {
        console.log("req.body=>", req.body);
        const data={
            // first_name:req.body.first_name,
            email:req.body.email,
            password:req.body.password
        };
        const result = await user.create(req.body);
        // console.log("rslt==>",result);
        const token = jwt.sign(data,'xyz0');
        console.log("token==>",token);
        res.status(201).send(token);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send("Error registering user");
    }
};

const Verify=async(req,res,next)=>{
    // console.log("verify called");
    // console.log("headers=>",req.headers);
    const authHeader = req.headers['authorization'];
    console.log("authHeadr=>",authHeader);
    if (!authHeader) return res.sendStatus(403);

    const token = authHeader.split(' ')[1];
    console.log("verify token",token);
    if (!token) return res.sendStatus(403);

    jwt.verify(token,'xyz0', (err, decoded) => {
        if (err) return res.sendStatus(403);

        req.user = decoded;
        console.log("decode=>",decoded);
        next();
    });
}

const Login=async(req,res)=>{
    console.log("req.body ghj=>",req.body);
   const result= await user.findOne({email:req.body.email,password:req.body.password})
   console.log("result=>",result);
    if(result)
        {
           if(req.user.email==req.body.email&&req.body.email==result.email&&result.password==req.body.password)
             {
                console.log("req.user=>",req .user);
                res.sendStatus(200)
            }
            else{
                res.send(403)

            } 

           
        }
        else{
            res.send(403)
        }
}

module.exports = { Register,Verify,Login };

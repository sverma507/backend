
const user = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

const Register = async (req, res) => {
    try {
        console.log("req.body=>", req.body);
        const result = await user.create(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send("Error registering user");
    }
};

const Verify = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log("authHeader=>", authHeader);
    if (!authHeader) return res.sendStatus(403);

    const token = authHeader.split(' ')[1];
    console.log("verify token", token);
    if (!token) return res.sendStatus(403);

    jwt.verify(token, 'xyz0', (err, decoded) => {
        if (err) return res.sendStatus(403);

        req.user = decoded;
        console.log("decode=>", decoded);
        next();
    });
}

const Login = async (req, res) => {
    console.log("req.body ghj=>", req.body);
    const result = await user.findOne({ email: req.body.email, password: req.body.password });
    console.log("result=>", result);
    if (result) {
        if ((req.body.email == result.email) && (result.password == req.body.password)) {
            console.log("called in if");
            const payload = {
                _id: result._id,
                email: result.email,
                first_Name: result.first_Name,
                last_Name: result.last_Name
            };
            const token = jwt.sign(payload, 'xyz0');
            console.log("token==>", token);
            res.status(200).send({ token ,result});
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
}

const Sendmail = (req, res) => {
    let gtotal=0;
    // const order=req.body.order;
    const formatOrderData = (order) => {
        return order.map((item, index) => {
            {gtotal=item.qty * item.price+gtotal}
            return `Item ${index + 1}:
            - Name: ${item.productName}
            - Quantity: ${item.qty}
            - Unit Price: ${item.price}
            - Sub-Total: ${item.qty * item.price}
            `;
        }).join('\n');
    };
    
    console.log("order data=>", req.body);
    
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "sverma70568@gmail.com",
            pass: "uvtn sdkg pxyg ykhx" // Make sure to use environment variables for sensitive information
        }
    });

    const formattedOrderData = formatOrderData(req.body.order);
    const receiver = {
        from: "XYZ Company",
        to: req.body.email,
        subject: "Bill from XYZ Company...",
        text: `Hello,

Here are the details of your order:

${formattedOrderData}   

Grand Total=${gtotal}
Thank you for your purchase!

Best regards,
XYZ Company`
    };
    
    auth.sendMail(receiver, (err, emailResponse) => {
        if (err) {
            console.log("Error in mail sending ", err);
            res.send("Error");
        } else {
            console.log("Success");
            res.send("Success");
        }
    });
};

module.exports = { Register, Verify, Login, Sendmail };



module.exports = { Register, Verify, Login,Sendmail };


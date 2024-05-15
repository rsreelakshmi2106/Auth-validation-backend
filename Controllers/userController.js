const user = require('../Models/userSchema')

const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    console.log("Inside register method");

    const { username, email, password } = req.body
    // console.log(username, email, password);

    try {
        const existingUser = await user.findOne({ email })
        if (existingUser) {
            res.status(406).json("User already exists")
        }
        else {
            const newUser = new user({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
            console.log(newUser);
        }
    }
    catch (err) {
        res.status(500).json("Registration Failed " + err)
    }
}

exports.login = async(req,res)=>{
    console.log("Inside login method");
    const { email, password } = req.body
    console.log(email,password);
    try {
        const existingUser = await user.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "super2024")
            console.log(token);
            res.status(200).json({ existingUser, token })
        }
        else {
            res.status(404).json("Invalid email or password")
        }
    }
    catch (err) {
        res.status(500).json("Login Failed..." + err)
    }
}
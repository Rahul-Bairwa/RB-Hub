const express = require('express');
const router = express.Router();
const userSchema = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleError = (res, message, code = 500) => {
    return res.status(code).json({ success: false, error: message });
};

const generateAuthToken = (userId) => {
    const jwtSecret = process.env.JWT_SECRET;
    return jwt.sign({ id: userId }, jwtSecret);
}

const validateUserData = ({ name, email, password }) => {
    if (typeof name !== 'string' || name.length < 3) {
        return "Name must be at least 3 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email";
    }
    if (typeof password !== 'string' || password.length < 5) {
        return "Password must be at least 5 characters long";
    }
    return null;
}


router.post('/createUser', async (req, res) => {
    const { name, email, password } = req.body;
    const validationError = validateUserData({ name, email, password });
    if (validationError) {
        return handleError(res, validationError, 400);
    }
    try {
        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            return handleError(res, "User with this email already exists", 409);
        }
        const securedPassword = await bcrypt.hash(password, 10);
        const newUser = new userSchema({
            name,
            email,
            password: securedPassword
        });
        const user = await newUser.save();
        const authToken = generateAuthToken(user.id);
        return res.status(201).json({ success: true, authToken, user });
    } catch (error) {
        console.error("Error creating user:", error.message);
        return handleError(res, "Internal Server Error");
    }
})

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) {
        return handleError(res,"Email and password are required",400);
    }
    try {
        const user =await userSchema.findOne({email});
        if(!user){
            return handleError(res,"Invalid credentials",401);
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        console.log("rahul",isPasswordValid)
        if(!isPasswordValid){
            return handleError(res,"Invalid credentials", 401);
        }
        const authToken =generateAuthToken(user.id);
        return res.status(200).json({ success: true, authToken, user });
    } catch (error) {
        console.error("Error during login:",error.message);
        return handleError(res,"Internal Server Error");
    }
});
module.exports = router;
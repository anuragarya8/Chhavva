import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        
        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            // Create JWT token
            const token = createToken(user._id);
            res.json({ success: true, token });
        }else {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
    } catch (error) {
        console.error("Error in user login:", error);
    }
}

// Route for user registration
const registerUser = async (req, res) => {

    try{
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        //validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Please enter valid email" });
        }

        //validate password length
        if (password.length < 8) {
            return res.status(400).json({ message: "Please enter strong password" });
        }

        // hasing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });
        const user = await newUser.save();

        // Create JWT token
        const token  = createToken(user._id);
        res.json({success: true , token});

    }catch (error) {
        console.error("Error in user registration:", error);
        res.json({
            success: false,
            message: error.message,
        });
    }
}

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        // Check if user exists
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        }else {
            res.json({ success: false, message: "Invalid admin credentials" });
        }
    } catch (error) {
        console.log("Error in admin login:", error);
        res.json({ success: false, message: error.message });
    }
};

export { loginUser, registerUser, adminLogin };
const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const home = async (req, res) => {
    try {
        res.status(200).send("welcom to our page by using router controllers")
    } catch (error) {
        console.log(error);
    }
}

// Register route logic
const register = async (req, res) => {
    try {
        const { userName, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "Email Already Registerd" })
        }

        const userCreated = await User.create({ userName, email, phone, password });

        res.status(201).send({
            message: "registeration successfuly",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });

    } catch (error) {
        res.status(500).json({ message: "Internal Server error while user login" })
        console.log("Internal Server error while user register", error);
    }
}
// Login route logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid email or password" })
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(200).send({
                message: "login successfuly",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" })
        }


    } catch (error) {
        res.status(500).json({ message: "Internal Server error while user login" })
        console.log("Internal Server error while user login", error);
    }
}

// user route controllers

const user = async (req, res) => {
    try {
        const userData = req.user;
        // console.log(userData)
        return res.status(200).json({ userData })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { home, register, login, user };
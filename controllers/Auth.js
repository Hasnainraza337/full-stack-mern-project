const User = require("../models/userModel")
const home = async (req, res) => {
    try {
        res.status(200).send("welcom to our page by using router controllers")
    } catch (error) {
        console.log(error);
    }
}

// Register
const register = async (req, res) => {
    try {
        const { userName, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "Email Already Registerd" })
        }

        const userCreated = await User.create({ userName, email, phone, password });

        res.status(201).send(userCreated);

    } catch (error) {
        console.log("Error occure while user register", error);
    }
}


module.exports = { home, register };
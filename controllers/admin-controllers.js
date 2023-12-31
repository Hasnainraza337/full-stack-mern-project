const User = require("../models/userModel");
const Contact = require("../models/contactModel");

// get all user from data base 
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select({ password: 0 })
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "Users not found" })
        }
        return res.status(200).json({ users })
    } catch (error) {
        next(error)
    }
}
// get all user from data base 
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "Contacts not found" })
        }
        return res.status(200).json({ contacts })
    } catch (error) {
        next(error)
    }
}


module.exports = { getAllUsers, getAllContacts };
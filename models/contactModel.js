const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    message: {
        type: String,
        require: true
    },

})

const Contact = new mongoose.model("contacts", contactSchema);
module.exports = Contact;

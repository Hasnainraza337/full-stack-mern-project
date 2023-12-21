const mongoose = require("mongoose");
const becrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})


// secure password by using becrypt
userSchema.pre("save", async function () {
    // console.log("pre", this)
    const user = this

    if (!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await becrypt.genSalt(10);
        const hashPassword = await becrypt.hash(user.password, saltRound)
        user.password = hashPassword
    } catch (error) {
        next(error)
    }

})


const User = new mongoose.model("users", userSchema);

module.exports = User;
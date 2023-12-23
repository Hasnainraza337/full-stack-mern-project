const mongoose = require("mongoose");
const becrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

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

// json web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.SECRET_KEY,
            {
                expiresIn: "30d"
            }
        )
    } catch (error) {
        console.log(error)
    }
}



const User = new mongoose.model("users", userSchema);

module.exports = User;
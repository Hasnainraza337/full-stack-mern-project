const mongoose = require("mongoose")

const mongo_URL = process.env.CONNECTION_STRING

const dbConnect = async () => {
    try {
        await mongoose.connect(mongo_URL)
        console.log("Connectio Successfull")
    } catch (error) {
        console.log("No connection")
        process.exit(0)
    }
}


module.exports = dbConnect;
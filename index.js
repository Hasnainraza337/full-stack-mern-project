require("dotenv").config()
const express = require("express");
const app = express()
const dbConnect = require("./utils/dbConection")
const router = require("./Router/Auth")
app.use(express.json());

app.use("/", router)

const port = 8000

dbConnect().then(() => {
    app.listen(port, () => {
        console.log("server is running at port:", port)
    })
})
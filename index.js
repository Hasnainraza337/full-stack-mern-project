require("dotenv").config()
const express = require("express");
const app = express()
const dbConnect = require("./utils/dbConection")
const authRouter = require("./Router/Auth");
const contactRouter = require("./Router/Contact");
const errorMiddleware = require("./middlewares/errorMiddleware");
app.use(express.json());




app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)





app.use(errorMiddleware);


const port = 8000
dbConnect().then(() => {
    app.listen(port, () => {
        console.log("server is running at port:", port)
    })
})
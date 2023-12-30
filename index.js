require("dotenv").config()
const express = require("express");
const cors = require("cors")
const app = express()
const dbConnect = require("./utils/dbConection")
const authRouter = require("./Router/Auth");
const contactRouter = require("./Router/Contact");
const serviceRouter = require("./Router/Service");
const errorMiddleware = require("./middlewares/errorMiddleware");

const corsoptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    Credentials: true
}
app.use(cors(corsoptions));

app.use(express.json());


app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)
app.use("/api/data", serviceRouter)





app.use(errorMiddleware);


const port = 8000
dbConnect().then(() => {
    app.listen(port, () => {
        console.log("server is running at port:", port)
    })
})
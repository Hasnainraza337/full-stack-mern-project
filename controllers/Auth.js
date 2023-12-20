
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
        res.status(200).json({ message: req.body })
        // res.status(200).send("welcom to our register page by using router controller")
    } catch (error) {
        console.log(error);
    }
}


module.exports = { home, register };
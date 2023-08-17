const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/database.js");
// const authRoutes = require("./routes/authRoute.js");
// const categoryRoutes = require("./routes/categoryRoutes.js");
// const productRoutes = require("./routes/productRoutes.js");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
    res.send("Welcome to The E-commerce ElevateHub Backend");
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
})
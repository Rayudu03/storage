const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" })); 
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://SYSTEM:admin@store-management.kqyroi8.mongodb.net/?retryWrites=true&w=majority&appName=store-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("MongoDB connected"));


app.use("/api", require("./routes/registration"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

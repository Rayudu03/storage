const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  area: { type: String, required: true },
  image: { type: String, required: true }, // base64 image
  createdAt: { type: Date, default: Date.now },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  timings: { type: String, required: true },
  dates: { type: [String], required: true },
  tshirtSize: { type: String }, 
});

module.exports = mongoose.model("Registration", RegistrationSchema);

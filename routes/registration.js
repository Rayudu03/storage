const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      number,
      text,
      age,
      gender,
      timings,
      dates,
      tshirtSize,
      image
    } = req.body;

    if (
      !name ||
      !number ||
      !text ||
      !image ||
      !age ||
      !gender ||
      !timings ||
      !Array.isArray(dates) || !dates.length
    ) {
      return res.status(400).json({ success: false, message: "All required fields must be filled." });
    }

    const newEntry = new Registration({
      name,
      number,
      area: text,
      image,
      age,
      gender,
      timings,
      dates,
      tshirtSize,
    });

    await newEntry.save();
    res.json({ success: true, message: "Data saved successfully!" });

  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;

const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  phone: {
    type: String,
    required: true,
  },

 
  course: {
    type: String,
    required: true,
    enum: [
      "AWS Cloud Graduate Programme",
    "Center for Artificial Intelligence",
    "AI Lab for Schools",
    "AI-Infinity (Technical / Fundamental)",
    "Others",
    ],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Enquiry", enquirySchema);
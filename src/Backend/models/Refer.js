const mongoose = require("mongoose");
const { Schema } = mongoose;

const referSchema = new Schema(
  {
    refereeName: {
      type: String,
      required: true,
      trim: true,
    },
    refereeEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    refereePhone: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9]{10}$/, "Please provide a valid 10-digit phone number"],
    },
    programInterested: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "AI-for-Developer",
        "Cloud-Developer",
        "Center-for-AI",
        "AI-Lab",
      ], // You can update this list based on your actual programs
    },
    referredBy: {
      type: String,
      required: true,
      trim: true,
    },
    refererBatchCode: {
      type: String,
      trim: true,
      required: true,
    },
    refererPhone: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9]{10}$/, "Please provide a valid 10-digit phone number"],
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

module.exports = mongoose.model("Refer", referSchema);
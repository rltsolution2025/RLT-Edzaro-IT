const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    // Candidate Basic Details
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },

    phone: {
      type: String,
      required: true
    },

    dateOfBirth: {
      type: Date
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"]
    },

    // Address Details
    // address: {
    //   street: String,
    //   city: String,
    //   state: String,
    //   pincode: String,
    //   country: {
    //     type: String,
    //     default: "India"
    //   }
    // },

    // Educational Details
    highestQualification: {
      type: String,
      required: true
    },

    specialization: {
      type: String
    },

    passingYear: {
      type: Number
    },

    institutionName: {
      type: String
    },

    // Course Enrollment Details
   courseApplied: {
  type: String,
  required: true,
  enum: [
    "AWS Cloud Developer Graduate",
    "AWS - AI Developer Graduate",
    "AWS - Cloud Operator Graduate",
    "Center for AI - Colleges"
  ]
},
branch: {
  type: String,
  enum: ["Kodambakkam", "Maraimalai Nagar"],
  required: true
},

    courseMode: {
      type: String,
      enum: ["Offline", "Online", "Hybrid"],
      required: true
    },

    preferredBatch: {
      type: String,
      enum: ["Weekdays", "Weekend"],
      required: true
    },

    // Experience Details
    experienceLevel: {
      type: String,
      enum: ["Fresher", "0-2 Years", "2-5 Years", "5+ Years"],
      required: true
    },

    currentStatus: {
      type: String,
      enum: ["Student", "Working Professional", "Career Break", "Job Seeker"]
    },

    // Resume Upload (Optional)
 

    // Consent & Declaration
    agreeToTerms: {
      type: Boolean,
      required: true
    },

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Application", applicationSchema);

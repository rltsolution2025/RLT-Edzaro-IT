const Application = require("../models/Application");

// Minimal Email validation
const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Minimal Phone validation (India – 10 digits)
const validatePhone = (phone) =>
  /^[6-9]\d{9}$/.test(phone);

/**
 * Submit Application
 * POST /api/registration
 */
const submitApplication = async (req, res) => {
  try {
    const { fullName, email, phone, ...rest } = req.body;

    // 🔹 Mandatory fields
    if (!fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Full Name, Email, and Phone are required"
      });
    }

    // 🔹 Email validation
    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address"
      });
    }

    // 🔹 Phone validation
    if (!validatePhone(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number"
      });
    }

    // 🔹 Prevent duplicate (email + courseApplied)
    const existingApplication = await Application.findOne({
      email,
      courseApplied: rest.courseApplied || null
    });

    if (existingApplication) {
      return res.status(409).json({
        success: false,
        message: "You have already applied for this course"
      });
    }

    // ✅ Save application (other fields optional)
    const application = new Application({
      fullName,
      email,
      phone,
      ...rest, // includes dateOfBirth, gender, courseApplied, etc.
    });

    await application.save();

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: {
        applicationId: application._id
      }
    });
  } catch (error) {
    console.error("Application submission error:", error.name, error.message);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later."
    });
  }
};

module.exports = { submitApplication };

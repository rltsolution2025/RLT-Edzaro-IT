const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true, 
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
        },
        phone: {
            type: String,
            required: true,
            match: [/^[0-9]{10}$/, "Please provide a valid 10-digit phone number"],
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt automatically
    }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
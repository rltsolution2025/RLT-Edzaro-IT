const mongoose = require("mongoose");
const { Schema } = mongoose;

const hiringPartnerSchema = new Schema({
  companyName: { type: String, required: true },
  yourName: { type: String, required: true },
  email: { type: String, required: true },
  roles: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("HiringPartner", hiringPartnerSchema);

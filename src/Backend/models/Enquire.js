const mongoose = require("mongoose");
const { Schema } = mongoose;
const enquireSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },  
    phone: { type: String, required: true },
  agree: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Enquire", enquireSchema);
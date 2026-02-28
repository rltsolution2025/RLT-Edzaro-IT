const mongoose = require("mongoose");

const liveChatSchema = new mongoose.Schema(
  {
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["sent", "delivered", "seen"], default: "sent" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LiveChatMessage", liveChatSchema);

const LiveChatMessage = require("../models/LiveChat");

const getChatHistory = async (req, res) => {
  try {
    const { user1, user2 } = req.params;
    const chats = await LiveChatMessage.find({
      $or: [
        { senderId: user1, receiverId: user2 },
        { senderId: user2, receiverId: user1 },
      ],
    }).sort({ createdAt: 1 });

    res.json(chats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching chat history" });
  }
};

module.exports = { getChatHistory };

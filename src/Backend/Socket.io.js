const LiveChatMessage = require("./models/LiveChat");

const liveChatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinRoom", (userId) => {
      socket.join(userId);
      console.log(`User ${userId} joined room`);
    });

    socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
      try {
        const newMessage = await LiveChatMessage.create({ senderId, receiverId, message });
        io.to(receiverId).emit("receiveMessage", newMessage);
        io.to(senderId).emit("messageDelivered", newMessage);
      } catch (err) {
        console.error("Error sending message:", err);
      }
    });

    socket.on("typing", ({ senderId, receiverId }) => {
      io.to(receiverId).emit("typing", { senderId });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

module.exports = liveChatSocket;

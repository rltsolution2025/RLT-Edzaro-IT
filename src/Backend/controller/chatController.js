const Chat = require("../models/Chat");

const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    let botResponse = "";

    // 🧩 Simple logic-based responses
    if (message.includes("program offering")) {
      botResponse =
        "We offer comprehensive programs in Full Stack Development, Data Science, and AI with hands-on mentorship.";
    } else if (message.includes("job assistance")) {
      botResponse =
        "We provide job assistance through resume workshops, mock interviews, and direct connections with hiring partners.";
    } else if (message.includes("don't know coding")) {
      botResponse =
        "Edzaro's programs are designed to help individuals from non-IT backgrounds transition into tech roles successfully.";
    } else if (message.includes("curriculum")) {
      botResponse =
        "Our curriculum includes practical projects, capstone assignments, and mentorship sessions to ensure real-world readiness.";
    } else {
      botResponse = "Can you please clarify what you'd like to know more about?";
    }

    // 🧾 Save chat
    const chat = await Chat.create({
      userMessage: message,
      botResponse,
    });

    res.status(200).json({
      response: botResponse,
      nextOptions: [
        "View curriculum of your programs",
        "Tell me about the program offerings",
        "How do you provide job assistance?",
      ],
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handleChat };
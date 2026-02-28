// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const EnquireForm = require("./routes/EnquireForm");
const HireForm = require("./routes/HireForm");
const ReferForm = require("./routes/ReferForm");
const chatRoutes = require("./routes/chatRoutes");
const leadRoutes = require("./routes/leadRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const liveChatRoutes = require("./routes/LiveChatRoutes");
const CallbackRoutes = require("./routes/CallbackRoutes");
const ContactRoute = require("./routes/ContactRoute");
const liveChatSocket = require("./Socket.io");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const applicationRoutes = require("./routes/applicationRoutes");

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});


// ✅ Routes
app.use("/api", EnquireForm);
app.use("/api", HireForm);
app.use("/api", ReferForm);
app.use("/api", chatRoutes);
app.use("/api", leadRoutes);
app.use("/api", enquiryRoutes);
app.use("/api", liveChatRoutes);
app.use("/api", CallbackRoutes);
app.use("/api", ContactRoute);
app.use("/api", applicationRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Enquiry API");
});

// ✅ Socket.io setup
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000",
      "https://rltedzaro.com",
      "https://www.rltedzaro.com",
      "https://rlt-edzaro.vercel.app"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

liveChatSocket(io);


// Start server


server.listen(PORT,"0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

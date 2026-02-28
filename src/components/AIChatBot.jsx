// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { motion, AnimatePresence } from "framer-motion";
// import { io } from "socket.io-client";

// const SOUND_URL = "/sound.mp3";
// const socket = io("http://localhost:5000"); // 🔹 Ensure port matches backend
// // const socket = io("https://rlt-edzaro-1.onrender.com");

// const AIChatBot = () => {
//   const [messages, setMessages] = useState([
//     { from: "bot", text: "👋 Welcome to Edzaro! I'm your virtual assistant. How can I help you today?" },
//   ]);
//   const [showInitialOptions, setShowInitialOptions] = useState(true);
//   const [showFollowUps, setShowFollowUps] = useState(false);
//   const [showNextQuestions, setShowNextQuestions] = useState(false);
//   const [collectInfo, setCollectInfo] = useState(false);
//   const [showLiveChatOption, setShowLiveChatOption] = useState(false);
//   const [liveChatActive, setLiveChatActive] = useState(false);
//   const [newMessage, setNewMessage] = useState("");
//   const [chatId, setChatId] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const chatEndRef = useRef(null);

//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     qualification: "",
//     course: "",
//   });

//   const playSound = () => {
//     const audio = new Audio(SOUND_URL);
//     audio.volume = 0.4;
//     audio.play().catch(() => {});
//   };

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     playSound();
//   }, [messages]);

//   const handleInitialOption = (option) => {
//     let botReply = "";
//     if (option === "I am looking to up-skill") {
//       botReply = `💡 Edzaro offers several upskilling programs tailored to your career goals.`;
//     } else if (option === "I am a fresher & looking for my first job") {
//       botReply = `🚀 We help freshers become industry-ready with real projects and mock interviews.`;
//     } else if (option === "I am planning to switch my job") {
//       botReply = `🎯 We guide professionals to switch to tech careers with real-time mentorship.`;
//     } else {
//       botReply = `That's great! You can explore various learning paths.`;
//     }

//     setMessages((prev) => [...prev, { from: "user", text: option }, { from: "bot", text: botReply }]);
//     setShowInitialOptions(false);
//     setShowFollowUps(true);
//   };

//   const handleFollowUp = (option) => {
//     let botReply = "";

//     if (option === "Tell me about your program offering") {
//       botReply = `📘 We provide Full Stack Development, QA Automation, Data Analytics, and Cloud programs.`;
//     } else if (option === "How do you provide job assistance?") {
//       botReply = `💼 We help you with resume building, mock interviews, and placement drives.`;
//     } else {
//       botReply = `🧭 Even without coding background, our step-by-step learning helps you transition into tech.`;
//     }

//     setMessages((prev) => [...prev, { from: "user", text: option }, { from: "bot", text: botReply }]);
//     setShowFollowUps(false);
//     setShowNextQuestions(true);
//   };

//   const handleNextQuestion = (option) => {
//     setMessages((prev) => [
//       ...prev,
//       { from: "user", text: option },
//       { from: "bot", text: "📋 Before we proceed, please share your details so our team can reach out to you." },
//     ]);
//     setShowNextQuestions(false);
//     setCollectInfo(true);
//   };

//   const handleInputChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };
// // 🔹 Updated: SOCKET.IO Live Chat integration
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   // 🔹 Phone validation
//   if (!/^\d{10}$/.test(userData.phone)) {
//     setMessages((prev) => [
//       ...prev,
//       {
//         from: "bot",
//         text: "📱 Please enter a valid 10-digit phone number.",
//       },
//     ]);
//     return;
//   }

//   // 🔹 Email validation
//   if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(userData.email)) {
//     setMessages((prev) => [
//       ...prev,
//       {
//         from: "bot",
//         text: "✉️ Please enter a valid email address.",
//       },
//     ]);
//     return;
//   }

//   // 🔹 Add user message bubble
//   setMessages((prev) => [
//     ...prev,
//     {
//       from: "user",
//       text: `👤 ${userData.name} | ✉️ ${userData.email} | 📘 ${userData.course}`,
//     },
//   ]);

//   try {
    
//       const response = await fetch("http://localhost:5000/api/enquiry", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userData),
//     });

//     if (response.ok) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           from: "bot",
//           text: "✅ Thank you! Our counselor will reach out to you soon.",
//         },
//       ]);
//       setShowLiveChatOption(true);
//     } else {
//       setMessages((prev) => [
//         ...prev,
//         { from: "bot", text: "⚠️ Something went wrong. Please try again later." },
//       ]);
//     }
//   } catch {
//     setMessages((prev) => [
//       ...prev,
//       { from: "bot", text: "❌ Server error. Please check your connection." },
//     ]);
//   }

//   setCollectInfo(false);
// };

//   useEffect(() => {
//     // Listen for agent accepting the chat
//     socket.on("chatAccepted", ({ agentName, chatId: acceptedChatId }) => {
//       if (acceptedChatId === chatId) { // 🔹 ensure correct chatId
//         setMessages((prev) => [
//           ...prev,
//           { from: "bot", text: `🎉 ${agentName} has joined the chat!` },
//         ]);
//         setLiveChatActive(true);
//       }
//     });

//     // Listen for incoming messages
//     socket.on("receiveMessage", (msg) => {
//       if (msg.chatId === chatId) { // 🔹 only show messages for this chat
//         setMessages((prev) => [...prev, msg]);
//       }
//     });

//     return () => {
//       socket.off("chatAccepted");
//       socket.off("receiveMessage");
//     };
//   }, [chatId]);

//   const initiateLiveChat = () => {
//     const id = Date.now().toString();
//     setChatId(id);
//     socket.emit("requestLiveChat", { ...userData, chatId: id }); // 🔹 send chatId to backend
//     setMessages((prev) => [
//       ...prev,
//       { from: "bot", text: "🔔 Request sent to our agents. Please wait for someone to accept..." },
//     ]);
//     setShowLiveChatOption(false);
//   };

//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;
//     socket.emit("sendMessage", { chatId, from: "user", text: newMessage }); // 🔹 include chatId
//     setMessages((prev) => [...prev, { from: "user", text: newMessage }]);
//     setNewMessage("");
//   };

//   return (
//     <>
//       {/* Floating Chat Icon */}
//       <motion.button
//         className="position-fixed bottom-0 end-0 m-4 rounded-circle shadow-lg"
//         style={{
//           width: "60px",
//           height: "60px",
//           border: "none",
//           background: "linear-gradient(135deg, #1f4b7aff, #1d6c81ff)",
//           color: "white",
//           fontSize: "24px",
//           zIndex: 10000,
//         }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <img
//           src="/assets/Chatbot.png"
//           alt="Edzaro AI"
//           style={{ width: "100%", height: "100%", borderRadius: "50%" }}
//         />
//       </motion.button>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="card position-fixed bottom-0 end-0 m-4 shadow-lg"
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 100 }}
//             transition={{ type: "spring", stiffness: 80 }}
//             style={{
//               width: "360px",
//               height: "520px",
//               borderRadius: "15px",
//               overflow: "hidden",
//               zIndex: 9999,
//               background: "linear-gradient(180deg, #f0f7ff, #ffffff)",
//             }}
//           >
//             {/* Header */}
//             <div
//               className="card-header text-white d-flex align-items-center justify-content-between"
//               style={{
//                 background: "linear-gradient(90deg, #007bff, #00c6ff)",
//                 fontWeight: "bold",
//               }}
//             >
//               Edzaro HelpChat
//               <button className="btn btn-sm btn-light" onClick={() => setIsOpen(false)}>
//                 ✖
//               </button>
//             </div>

//             {/* Messages Area */}
//             <div className="card-body overflow-auto p-3" style={{ height: "420px" }}>
//               {messages.map((msg, i) => (
//                 <motion.div
//                   key={i}
//                   className={`d-flex mb-2 ${
//                     msg.from === "bot" ? "justify-content-start" : "justify-content-end"
//                   }`}
//                   initial={{ opacity: 0, x: msg.from === "bot" ? -20 : 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                 >
//                   <div
//                     className={`p-2 rounded-3 shadow-sm ${
//                       msg.from === "bot" ? "bg-white text-dark border" : "bg-primary text-white"
//                     }`}
//                     style={{ maxWidth: "75%" }}
//                   >
//                     {msg.text}
//                   </div>
//                 </motion.div>
//               ))}
//               <div ref={chatEndRef}></div>

//               {/* Initial options */}
//               {showInitialOptions && (
//                 <div className="d-flex flex-column mt-3">
//                   {[
//                     "I am planning to switch my job",
//                     "I am a fresher & looking for my first job",
//                     "I am looking to up-skill",
//                     "I am only exploring",
//                   ].map((opt, i) => (
//                     <button key={i} className="btn btn-outline-primary mb-2" onClick={() => handleInitialOption(opt)}>
//                       {opt}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {/* Follow ups */}
//               {showFollowUps && (
//                 <div className="d-flex flex-column mt-3">
//                   {[
//                     "Tell me about your program offering",
//                     "How do you provide job assistance?",
//                     "I don't know coding — how could I benefit from you?",
//                   ].map((opt, i) => (
//                     <button key={i} className="btn btn-outline-primary mb-2" onClick={() => handleFollowUp(opt)}>
//                       {opt}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {/* Next question */}
//               {showNextQuestions && (
//                 <div className="mt-3">
//                   <p className="fw-bold text-secondary">What do you wish to know more?</p>
//                   {[
//                     "View curriculum of your programs",
//                     "Tell me about the program offerings.",
//                     "How do you provide job assistance?",
//                   ].map((opt, i) => (
//                     <button key={i} className="btn btn-outline-primary mb-2" onClick={() => handleNextQuestion(opt)}>
//                       {opt}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {/* Form */}
// {collectInfo && (
//   <motion.form
//     onSubmit={handleSubmit}
//     className="mt-3"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//   >
//     {["name", "email", "phone", "qualification", "course"].map((field, i) => (
//       <div className="mb-2" key={i}>
//         <input
//           type={
//             field === "email"
//               ? "email"
//               : field === "phone"
//               ? "tel"
//               : "text"
//           }
//           name={field}
//           placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//           className="form-control"
//           value={userData[field]}
//           onChange={handleInputChange}
//           required
//           {...(field === "phone"
//             ? {
//                 pattern: "[0-9]{10}",
//                 maxLength: 10,
//                 title: "Please enter a valid 10-digit phone number",
//               }
//             : {})}
//           {...(field === "email"
//             ? {
//                 pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,}$",
//                 title: "Please enter a valid email address",
//               }
//             : {})}
//         />
//       </div>
//     ))}

//     <button className="btn btn-primary w-100" type="submit">
//       Submit
//     </button>
//   </motion.form>
// )}

//               {/* Live Chat Offer */}
//               {/* {showLiveChatOption && (
//                 <div className="mt-3 text-center">
//                   <button className="btn btn-success me-2" onClick={initiateLiveChat}>
//                     Yes, connect me
//                   </button>
//                   <button className="btn btn-outline-secondary" onClick={() => setShowLiveChatOption(false)}>
//                     No, thanks
//                   </button>
//                 </div>
//               )} */}

//               {/* Live Chat Active */}
//               {/* {liveChatActive && (
//                 <form onSubmit={sendMessage} className="d-flex mt-3">
//                   <input
//                     className="form-control me-2"
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                     placeholder="Type a message..."
//                   />
//                   <button className="btn btn-primary">Send</button>
//                 </form>
//               )} */}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AIChatBot;

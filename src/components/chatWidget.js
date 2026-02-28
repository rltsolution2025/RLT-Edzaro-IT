import React, { useState } from "react";
import AIChatBot from "./AIChatBot"; // your existing chatbot component
import "bootstrap/dist/css/bootstrap.min.css";


const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="position-fixed bottom-0 end-0 m-3"
      style={{ zIndex: 9999 }}
    >
      {!isOpen ? (
        // 👇 Initial small widget (icon + message)
        <div
          onClick={() => setIsOpen(true)}
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <div
            className="bg-white shadow p-2 rounded-4"
            style={{
              maxWidth: "180px",
              position: "relative",
              right: "10px",
              border: "1px solid #e3e3e3",
            }}
          >
            <p className="m-0" style={{ fontSize: "13px" }}>
              Hi, I am Edzaro AI.
              <br />
              How may I help you?
            </p>
          </div>
          <img
            src='/assets/Chatbot.png'
            alt="Edzaro AI"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      ) : (
        // 👇 Full Chatbot when opened
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-light position-absolute top-0 end-0 m-1"
            style={{ zIndex: 10000, borderRadius: "50%" }}
          >
            ✕
          </button>
          <AIChatBot />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

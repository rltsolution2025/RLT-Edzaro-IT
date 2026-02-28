import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryForm from "./EnquiryForm";

const backdropStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  zIndex: 1040,
};

const modalVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

const MAX_SHOWS = 3;
const REOPEN_DELAY = 60 * 1000; // 1 minute

const EnquiryPopup = () => {
  const [show, setShow] = useState(false);
  const showCountRef = useRef(0);
  const timerRef = useRef(null);

  // Initial popup (after 800ms)
  useEffect(() => {
    if (showCountRef.current < MAX_SHOWS) {
      timerRef.current = setTimeout(() => {
        setShow(true);
        showCountRef.current += 1;
      }, 800);
    }

    return () => clearTimeout(timerRef.current);
  }, []);

  // Reopen logic
  const scheduleReopen = () => {
    if (showCountRef.current >= MAX_SHOWS) return;

    timerRef.current = setTimeout(() => {
      setShow(true);
      showCountRef.current += 1;
    }, REOPEN_DELAY);
  };

  // Close button OR form success
  const closePopup = () => {
    setShow(false);
    scheduleReopen();
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            style={backdropStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="position-fixed top-50 start-50 translate-middle"
            style={{ zIndex: 1050, width: "100%", maxWidth: "420px" }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white rounded-4 shadow-lg p-4">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="m-0 fw-semibold">For Course Enquiry</h5>
                <button className="btn-close" onClick={closePopup} />
              </div>

              {/* Form */}
              <EnquiryForm onSuccess={closePopup} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquiryPopup;
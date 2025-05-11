"use client";
import { useState, useRef, useEffect, use } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

export default function WhatsAppButton({ phoneNumber = "917453947573" }) {
  const [showPopup, setShowPopup] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const iconControls = useAnimation();

  // Animate icon on mount and every 4 seconds
  useEffect(() => {
    iconControls.start({
      scale: 1,
      transition: { type: "spring", stiffness: 300 },
    });

    const interval = setInterval(() => {
      iconControls.start({
        rotate: [0, -10, 10, -10, 10, 0],
        transition: { duration: 1, ease: "easeInOut" },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [iconControls]);

  // ✅ 1. Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        popupRef.current &&
        !popupRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  // ✅ 2. Optional: Reset user message when popup closes
  useEffect(() => {
    if (!showPopup) setUserMessage("");
  }, [showPopup]);

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(
      userMessage || "Hello, I would like to know more about your services."
    );
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setShowPopup(false);
    setUserMessage("");
  };

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none sm:right-6">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="popup"
            ref={popupRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="w-72 sm:w-80 mb-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden pointer-events-auto"
          >
            <div className="bg-[#075E54] text-white px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">Meta AC Service Support</p>
                <p className="text-xs opacity-80">
                  Typically replies within 30 mins
                </p>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="text-white text-2xl leading-none cursor-pointer"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-2 px-4 py-4 bg-[#f0f0f0]">
              <label htmlFor="msg" className="text-sm text-gray-700">
                Type your message:
              </label>
              <textarea
                id="msg"
                rows={3}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Hello, I would like to know more about your services..."
                className="rounded-md p-2 text-sm outline-none border border-gray-300 bg-white text-gray-800 placeholder-gray-500 resize-none"
              />

              <button
                onClick={handleSendMessage}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Send on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto"
        ref={buttonRef}
      >
        <motion.button
          onClick={() => setShowPopup((prev) => !prev)}
          className="bg-[#25D366] text-white p-2.5 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
          aria-label="Chat with us"
          whileHover={{
            backgroundColor: "#128C7E",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={iconControls}
            whileHover={{ rotate: 10 }}
          >
            <FaWhatsapp size={38} />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}

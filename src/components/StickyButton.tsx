import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export function StickyButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile: width < 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      className={`fixed z-50 ${
        isMobile ? "bottom-0 left-0 right-0 flex justify-center" : "top-5 right-5"
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-lg font-bold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isMobile ? { scale: [1, 1.1, 1] } : {}}
        transition={isMobile ? { repeat: Infinity, duration: 1.5 } : {}}
      >
        <FaPhoneAlt />
        Call Now
      </motion.button>
    </motion.div>
  );
}

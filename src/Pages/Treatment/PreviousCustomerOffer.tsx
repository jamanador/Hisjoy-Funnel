import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const offerCards = [
  {
    title: "🔥 Combo Pack Deal",
    message: "Customers often buy the 2-Month Combo Pack for the best value.",
  },
  {
    title: "🎁 Free Trial Available",
    message: "Try our 1-week starter kit completely free for new customers!",
  },
  {
    title: "✅ Proven Results",
    message: "97% of users report noticeable results within 2 weeks!",
  },
];

const PreviousCustomerOffer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 9000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const cycleTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offerCards.length);
    }, 9000);

    return () => clearInterval(cycleTimer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-6 right-6 max-w-sm w-full z-50"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white shadow-sm border border-gray-200 p-4 rounded-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold focus:outline-none"
                aria-label="Close"
              >
                &times;
              </button>

              <h3 className="font-bold text-lg mb-2 text-brand-primary">
                {offerCards[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-700">
                {offerCards[currentIndex].message}
              </p>
              <button className="py-1 font-medium text-sm px-6 bg-brand-secondary text-white mt-4">
                Get Your Deal
              </button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviousCustomerOffer;

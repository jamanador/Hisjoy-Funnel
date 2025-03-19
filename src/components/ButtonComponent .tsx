import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const ButtonComponent = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string | null>(null);



  const location = useLocation();

  useEffect(() => {
    if (location.hash && location.hash === "#categorySection") {
      scroller.scrollTo("categorySection", {
        smooth: true,
        duration: 700,
        offset: -140, // Adjust if needed
      });
    }
  }, [location.hash]);


  const buttons = [
    { text: "Get Erections More Easily", bg: "#6fb1c8", route: "/home/treatment#categorySection" },
    { text: "Get Firmer erections", bg: "#6fb1c8", route: "/home/treatment#categorySection" },
    { text: "Maintain Erections Longer", bg: "#6fb1c8", route: "/home/treatment#categorySection" },
    { text: "All of the above", bg: "#21bd00", route: "/home/treatment#categorySection" },
  ];

  const handleClick = (route: string, index: number) => {
    setActive(index.toString());

    // Wait for 500ms before navigating (shows color briefly)
    setTimeout(() => {
      navigate(route);
    }, 500);
  };

  return (
    <div className="flex flex-col gap-4 p-6 max-w-md mx-auto">
      {buttons.map((btn, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
          className={`w-full py-3 px-7 text-white text-sm sm:text-lg font-semibold rounded-md transition-all duration-200 ${active === index.toString() ? "bg-blue-900" : ""
            }`}
          style={{
            backgroundColor: active === index.toString() ? "#164e63" : btn.bg,
          }}
          onClick={() => handleClick(btn.route, index)}
        >
          {btn.text.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
};

export default ButtonComponent;

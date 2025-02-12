import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ButtonComponent = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string | null>(null);

  const buttons = [
    { text: "Get erections more easily", bg: "#21bd00", route: "/home/treatment" },
    { text: "Get firmer erections", bg: "#6fb1c8", route: "/home/treatment" },
    { text: "Maintain erections longer", bg: "#6fb1c8", route: "/home/treatment" },
    { text: "All of the above", bg: "#6fb1c8", route: "/home/treatment" },
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
        <button
          key={index}
          className={`w-full py-3 text-white text-lg font-semibold rounded-md transition-all duration-200 ${
            active === index.toString() ? "bg-blue-900" : ""
          }`}
          style={{
            backgroundColor: active === index.toString() ? "#164e63" : btn.bg,
          }}
          onClick={() => handleClick(btn.route, index)}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
};

export default ButtonComponent;

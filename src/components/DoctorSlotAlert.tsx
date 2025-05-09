import { useEffect, useState } from "react";
import { FaHourglassHalf } from "react-icons/fa";

const DoctorSlotAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: "long", month: "long", day: "numeric" };
    setCurrentDate(today.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div
      className={`flex items-center mx-2 justify-center text-center border border-red-300 bg-red-50 text-red-700 rounded-lg p-4 shadow-sm mt-6 transition-all duration-500 ease-out transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-3 scale-95"
        }`}
    >
      <FaHourglassHalf className="text-red-500 text-xl mr-2 flex-shrink-0 text-center" />
      <div>
        <p className="font-bold text-sm md:text-base">
          Limited In-State Doctor Slots for <span className="text-black animate-pulse">{currentDate}</span>
        </p>
        <p className="text-sm md:text-base text-black">
          Your <span className="font-semibold">40-minute window</span> for a guaranteed slot is closing fast.
          Confirm immediately!
        </p>
      </div>
    </div>
  );
};

export default DoctorSlotAlert;

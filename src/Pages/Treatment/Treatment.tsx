import { useState } from "react";
import "../../styles/index.css";
export default function Treatment() {
    const [isClicked, setIsClicked] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            setShowThankYou(true);
        }, 500); // Show thank you message after animation
    };

    return (
        <div className="text-center ">
           <div className="max-w-xl mx-auto">
           <div className="bg-gray-100 border border-gray-200 text-black px-4 py-6 rounded my-14 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Under Development</h1>
                <p className="text-lg text-gray-600 mb-8">
                    I'm currently working on something exciting! Be cool!
                </p>
                {!showThankYou && (
                    <button
                        className={`notifybutton bg-blue-500 animate animate-bounce text-white px-4 py-2 rounded hover:bg-blue-600 ${isClicked ? 'clicked' : ''}`}
                        onClick={handleClick}
                    >
                        Notify Me
                    </button>
                )}
                {showThankYou && (
                    <p className="text-lg text-green-600 mt-4 font-bold animate-pulse">
                        Thank you for your interest! I'll notify you soon. he
                    </p>
                )}
            </div>
           </div>
        </div>
    );
}

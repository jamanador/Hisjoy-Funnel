import { useState } from "react";

const UnderDevelopment = () => {
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
        <div className="text-center">
            <div className="max-w-xl mx-auto">
                <div className="bg-gray-50 border border-gray-200 text-black py-0 rounded text-center">
                    {/* Added Image Here */}
                    <img
                        src="/images/Underdevelopment.avif"
                        alt="Under Development"
                        className="mx-auto w-full h-auto rounded-lg shadow-lg"
                    />
                    <h1 className="text-3xl font-bold text-gray-800 my-2 mt-8">Under Development</h1>
                    <p className="text-lg text-gray-600 mb-4">
                        I'm currently working on this page. Please check back later.
                    </p>



                    {!showThankYou && (
                        <button
                            className={`notifybutton bg-blue-500 animate animate-bounce text-white px-4 py-2 mb-6 rounded hover:bg-blue-600 ${isClicked ? 'clicked' : ''}`}
                            onClick={handleClick}
                        >
                            Notify Me
                        </button>
                    )}

                    {showThankYou && (
                        <p className="text-lg text-green-600 mb-8 mt-4 font-bold animate-pulse">
                            Thank you for your interest! I'll notify you soon.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UnderDevelopment;

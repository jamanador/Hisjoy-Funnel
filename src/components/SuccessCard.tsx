import { useEffect, useState } from "react";

const SuccessCard = () => {
    const [borderColor, setBorderColor] = useState("border-brand-secondary");
    const [textColor, setTextColor] = useState("text-brand-secondary");
    const [bgColor, setBgColor] = useState("bg-blue-50");

    useEffect(() => {
        const interval = setInterval(() => {
            setBorderColor(prev => prev === "border-brand-secondary" ? "border-brand-maroon" : "border-brand-secondary");
            setTextColor(prev => prev === "text-brand-secondary" ? "text-white" : "text-brand-secondary");
            setBgColor(prev => prev === "bg-blue-50" ? "bg-gradient-to-r from-blue-100 to-blue-300" : "bg-blue-50");
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-2 flex justify-center my-4 md:my-8 text-center">
            <div className={`border ${borderColor} rounded-lg w-full transition-all duration-700 ease-in-out ${bgColor}`}>
                {/* Clinically Proven Badge */}
                <div className="justify-center justify-items-center border-b pb-3 mb-3 w-full text-center">
                    <div className="flex items-center justify-center mb-4">
                        <img src="/images/bnr-img.jpg" alt="Clinically Proven" className="w-full" />
                    </div>
                    <span className="text-brand-maroon font-bold text-md sm:text-xl md:text-2xl animate-fade-in-up">Clinically Proven</span>
                </div>

                {/* Success Rate Section */}
                <div className="text-center">
                    <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-500 text-4xl animate-bounce">★</span>
                        ))}
                    </div>
                    <h2 className={`${textColor} font-bold text-2xl animate-pulse md:text-3xl`}>94% Success Rate</h2>
                    <p className="text-green-800 font-bold text-lg">In Improving Erections</p>
                </div>

                {/* Study Information */}
                <p className="text-black text-sm mt-4 mb-7 text-center px-2">
    In a well-published study, <span className="font-bold">91% of men with ED reported improvement</span> with Viagra® (Sildenafil) and an <span className="font-bold">88% success rate</span> for Cialis® (Tadalafil).
</p>


            </div>
        </div>
    );
};

export default SuccessCard;

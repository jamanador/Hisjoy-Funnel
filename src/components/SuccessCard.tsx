import { useEffect, useState } from "react";

const SuccessCard = () => {
    const [borderColor, setBorderColor] = useState("border-brand-secondary");
    const [textColor, setTextColor] = useState("text-brand-secondary");

    useEffect(() => {
        const interval = setInterval(() => {
            setBorderColor(prev => prev === "border-brand-secondary" ? "border-maroon" : "border-brand-secondary");
            setTextColor(prev => prev === "text-brand-secondary" ? "text-brand-maroon" : "text-brand-secondary");
        }, 1400);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4 flex justify-center">
            <div className={`border ${borderColor} rounded-lg p-4 bg-blue-50 w-full transition duration-500 ease-in-out`}>
                {/* Clinically Proven Badge */}
                <div className="justify-center justify-items-center border-b pb-3 mb-3">
                    <div className="flex items-center bg-green-100 border-2 border-brand-secondary rounded-full w-12 h-12 justify-center mb-4">
                        <img src="/images/clinic.png" alt="Clinically Proven" className="w-6 h-6" />
                    </div>
                    <span className="text-green-700 font-bold text-sm md:text-xl">Clinically Proven</span>
                </div>

                {/* Success Rate Section */}
                <div className="text-center">
                    <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-500 text-4xl">★</span>
                        ))}
                    </div>
                    <h2 className={`${textColor} font-bold text-xl animate-pulse md:text-3xl`}>94% Success Rate</h2>
                    <p className="text-green-800 font-bold text-lg">in Improving Erections</p>
                </div>

                {/* Study Information */}
                <p className="text-green-700 text-sm mt-4 text-center">
                    A clinical study of <span className="font-bold">979 men found that 94% were satisfied</span> with Sildenafil’s effects on their erections. PMID:
                    <a href="#" className="text-green-800 font-semibold underline ml-1">18516312</a>
                </p>
            </div>
        </div>
    );
};

export default SuccessCard;

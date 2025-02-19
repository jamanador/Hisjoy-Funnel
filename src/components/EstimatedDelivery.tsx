import React from "react";

const EstimatedDelivery: React.FC = () => {
    // Get today's date
    const today = new Date();

    // Add 3 days
    const estimatedDate = new Date();
    estimatedDate.setDate(today.getDate() + 3);

    // Format date as "Friday, Feb 21st"
    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            month: "short",
            day: "numeric",
        };
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <div className="flex items-center space-x-2 text-gray-700 justify-center justify-items-center">
            <img src="/images/delivery.aff68c6.png" alt="USPS" className="w-6 h-6" />
            <p className="font-semibold">
                <span className="text-black">Est. Delivery:</span>{" "}
               <span className="text-brand-maroon"> {formatDate(estimatedDate)}</span> via USPS
            </p>
        </div>
    );
};

export default EstimatedDelivery;

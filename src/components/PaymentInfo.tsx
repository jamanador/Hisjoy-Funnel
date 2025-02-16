import { FaCheckCircle } from "react-icons/fa";

const PaymentInfo = () => {
    return (
        <div className="flex items-center border bg-blue-50 border-blue-200 rounded-lg p-4 mx-2 md:my-8 my-4">
            {/* Green Sidebar */}
            <div className="bg-green-600 w-2 rounded-full h-full"></div>

            {/* Icon */}
            <div className="flex items-center justify-center bg-white border border-green-500 rounded-full w-10 h-10 ml-3 shadow-sm">
                <FaCheckCircle className="text-green-500 text-2xl" />
            </div>

            {/* Text Content */}
            <div className="ml-4 text-sm md:text-base text-gray-800">
                <p>
                    <span className="font-bold text-blue-900">You pay $0 today.</span> You will only be charged if your prescription is approved.
                </p>
            </div>
        </div>
    );
};

export default PaymentInfo;

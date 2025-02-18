import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { useState } from "react";
import UnderDevelopment from "./UnderDevelopment";

export default function DeliveryButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center p-4 md:mt-8 my-4">
            {/* Delivery Estimate */}
            <div className="flex items-center space-x-2 text-sm font-semibold text-gray-800">
                <Package className="w-5 h-5 text-blue-600" />
                <span>
                    <span className="font-bold">Est. Delivery:</span> Thursday, Feb 20th via USPS
                </span>
            </div>

            {/* Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-brand-maroon hover:bg-brand-secondary text-white font-semibold py-3 px-6 rounded-full w-10/12 text-lg shadow-md transition-all mt-3"
            >
                Continue to Questions »
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center"
                    >
                        <UnderDevelopment />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 bg-red-400 hover:bg-brand-secondary text-white font-semibold py-2 px-4 rounded-md transition-all w-full"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
}

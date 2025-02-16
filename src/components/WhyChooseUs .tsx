import { useEffect, useState } from "react";
import { FaFlagUsa, FaHeadset } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("why-choose-us");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 300) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            id="why-choose-us"
            className={`bg-white border border-gray-100 rounded-lg mt-6 mx-2 transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
        >
            {/* Header */}
            <div className="bg-brand-maroon text-white text-center py-3 rounded-t-lg font-bold text-lg">
                Why Choose Hisjoy
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-6 text-center">
                {/* U.S. Pharmacy */}
                <div>
                    <FaFlagUsa className="text-4xl mx-auto text-brand-maroon" />
                    <h3 className="font-bold mt-2">U.S. Pharmacy: Speed Guaranteed</h3>
                    <p className="text-gray-700 text-sm">
                        Benefit from direct, speedy deliveries via USPS First Class
                        shipping from a trusted, FDA-approved U.S. pharmacy—get it in 2-3
                        days.
                    </p>
                </div>

                {/* Customer Service */}
                <div>
                    <FaHeadset className="text-4xl mx-auto text-brand-maroon" />
                    <h3 className="font-bold mt-2">Free 24/7 Customer Service</h3>
                    <p className="text-gray-700 text-sm">
                        Need help anytime? Our Free 24/7 Customer Service is always ready to
                        help. <br />
                        Email{" "}
                        <a href="mailto:support@fridayplans.com" className="text-brand-maroon font-semibold">
                            support@hisjoy.com
                        </a>{" "}
                        or call{" "}
                        <a href="tel:+844-640-0722" className="text-brand-maroon font-semibold">
                            +844-640-0722
                        </a>{" "}
                        (Toll-free). We’ll make sure you’re 110% happy.
                    </p>
                </div>

                {/* Secure Delivery */}
                <div>
                    <MdOutlineMail className="text-4xl mx-auto text-brand-maroon" />
                    <h3 className="font-bold mt-2">Secure & Discreet Delivery</h3>
                    <p className="text-gray-700 text-sm">
                        What happens in your bedroom is your business, and we want to keep
                        it that way. That’s why we ship your medication in a plain white
                        envelope, and why we individually package each tablet to look like a
                        condom.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

import React from "react";

const NewFooter: React.FC = () => {
    return (
        <footer className="bg-brand-maroon w-full py-8 text-white mt-8 lg:mt-16 footer_cls">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6">
                {/* Logo Section */}
                <div className="mb-6 md:mb-0">
                    <img src="/images/logo.svg" alt="Hisjoy Logo" className="h-14" />
                    <div className="text-left md:mt-40 text-sm hidden md:block">
                <p>© Hisjoy LLC</p>
                <p>All Rights Reserved</p>
            </div>
                </div>

                {/* Links Sections */}
                <div className="flex flex-col sm:flex-row sm:justify-between w-full md:w-auto gap-6 text-center md:text-left">
                    <div>
                        <h3 className="font-bold mb-3">What we treat</h3>
                        <ul className="space-y-2">
                            {["Acid Reflux", "Cold Sores", "Erectile Dysfunction", "Hair Loss", "Herpes", "Premature Ejaculation", "Stop Smoking", "Weight Loss"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:underline">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-3">Legal</h3>
                        <ul className="space-y-2">
                            {["HIPAA Notice", "Privacy Policy", "Returns & Refund Policy", "Terms Of Use", "CCPA Opt-Out"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:underline">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-3">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center mt-6 text-sm block md:hidden">
                <p>© Hisjoy LLC</p>
                <p>All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default NewFooter;

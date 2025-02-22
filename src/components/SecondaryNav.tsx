import { motion } from 'framer-motion';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// Define the props interface
interface NavbarProps {
    isScrollingDown: boolean;
}

const SecondaryNavbar: React.FC<NavbarProps> = ({ isScrollingDown }) => {
    const location = useLocation();
    // Check if the current path is the home page or the single product page
    const isHomePage = location.pathname === '/home';
    const isProductPage = location.pathname.startsWith('/home/treatment');

    if (!isHomePage && !isProductPage) {
        return null; // Don't render the navbar if not on the home or product page
    }

    return (
        <nav
            className={`fixed bottom-0 left-0 right-0 z-40 bg-gray-50 shadow-sm transition-transform duration-300 md:bottom-auto md:top-0 ${isScrollingDown ? "translate-y-0" : "md:-translate-y-full"
                }`}
        >
            <div className="w-full border-b border-gray-200">
                <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Left Section */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="flex items-center justify-center gap-2 text-xl font-bold md:hidden"
                        >
                            <img
                                className="h-[35px] sm:h-[52px] w-auto"
                                src="/images/twoproduct.png"
                                alt="SNAP"
                            />
                            <div className="md:text-sm text-xs font-semibold">
                            GET TWO MONTHS 
                                <br />FREE
                            </div>
                        </a>
                    </div>
                    <div className="gap-6 md:flex md:items-center">
                        <div className="hidden md:block">
                            <div className="text-sm font-semibold">
                                Top Notch Customer Support
                            </div>
                            <div className="text-sm text-gray-600">
                                90-Day Money Back Guarantee
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-sm font-semibold">
                                Ships from US Licensed Pharmacies
                            </div>
                            <div className="text-sm text-gray-600">FDA Approved Medications</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">


                        {isHomePage &&  <Link to="/home/treatment">
                                <motion.button
                                    className="flex items-center gap-2 rounded-md bg-[#28A745] px-4 py-2 text-xs font-medium text-white shadow-lg transition-colors hover:bg-[#218838] sm:px-6 sm:py-2 sm:text-sm"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        transition: {
                                            duration: 1.4,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                        },
                                    }}
                                >
                                    <span className="text-[14px] font-bold">
                                        Get Offer
                                    </span>
                                </motion.button>
                            </Link>}

                        {isProductPage && <ScrollLink
                            to="productSection"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                        >
                            <motion.button
                                className="flex items-center gap-2 rounded-md bg-[#28A745] px-4 py-2 text-xs font-medium text-white shadow-lg transition-colors hover:bg-[#218838] sm:px-6 sm:py-2 sm:text-sm"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    scale: [1, 1.05, 1],
                                    transition: {
                                        duration: 1.4,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                    },
                                }}
                            >
                                <span className="text-[14px] font-bold">
                                    {isProductPage ? "Select Your Package" : "Get Offer"}
                                </span>
                            </motion.button>
                        </ScrollLink>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SecondaryNavbar;

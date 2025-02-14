import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCapsules,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaHeadset,
  FaPhoneAlt,
  FaShippingFast,
  FaUserMd,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const slides = [
  {
    text: "Top Notch Customer Service",
    link: "#",
    icon: FaHeadset,
  },
  {
    text: "Free Doctor Visit - Prescriptions",
    link: "#",
    icon: FaUserMd,
  },
  {
    text: "Ships from US Licensed Pharmacies",
    link: "#",
    icon: FaCapsules,
  },
  {
    text: "FDA Approved Medications",
    link: "#",
    icon: FaCheckCircle,
  },
  {
    text: "Fast Free Shipping",
    link: "#",
    icon: FaShippingFast,
  },
];

// export default slides;


export function Header() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Top green navbar - shows when scrolling up */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 md:mb-9 transition-transform duration-300 ${isScrollingDown ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="w-full">
          <div className="min-h-[1.875rem] overflow-hidden bg-[#EFEFE9] text-center text-black py-2">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
              <button className="outline-none" onClick={prevSlide}>
                <FaChevronLeft className="size-[0.875rem] opacity-75 hover:scale-105 hover:opacity-100" />
              </button>
              <div className="relative w-[95%] md:w-[80%] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`group flex flex-wrap items-center justify-center gap-x-2 py-1 hover:cursor-pointer`}
                  >
                    <a
                      href={slides[currentSlide].link}
                      className={`flex items-center gap-2 whitespace-nowrap text-[12px] sm:text-sm font-bold capitalize ${slides[currentSlide].icon === FaPhoneAlt && "hover:underline"}`}
                    >
                      {React?.createElement(slides[currentSlide].icon, {
                        className: "size-4 sm:size-5",
                      })}
                      {slides[currentSlide].text}
                    </a>
                    {slides[currentSlide].icon === FaPhoneAlt && (
                      <FaArrowRight className="size-[0.875rem] transition-transform group-hover:translate-x-[1px]" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <button className="outline-none" onClick={nextSlide}>
                <FaChevronRight className="size-[0.875rem] opacity-75 hover:scale-105 hover:opacity-100" />
              </button>
            </div>
          </div>
          <div className="color-green">
            <div className="relative mx-auto flex min-h-[52px] sm:min-h-[60px] md:min-h-[70px] max-w-7xl items-center justify-end px-4 md:y-8 text-white lg:py-1">
              <Link to="/home"
                className="absolute right-1/2 translate-x-1/2 p-1 text-2xl"
              >
                <h1 className="sr-only">Eco Health Funnel</h1>
                <img
                  className="h-full w-[8rem]"
                  src="/images/logo.svg"
                  alt="logo"
                />
              </Link>
              <div className="">
                <h3 className="text-white font-bold hidden md:block">
                  <a href="tel:844-640-0722">Call Us 844-640-0722</a>
                </h3>

                <MobileMenu />
              </div>
            </div>

          </div>
        </div>
      </header>
      {/* Spacer to prevent content from jumping */}
      {/* Add a spacer div to push content down */}
      <div className="h-[90px] md:h-[110px] lg:h-[110px]"></div>

    </>
  );
}

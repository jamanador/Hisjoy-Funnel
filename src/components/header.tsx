import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { BsCart3, BsHeadset } from "react-icons/bs";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
  FaTruck,
} from "react-icons/fa";

const slides = [
  {
    text: "Need Assistance? (844)-640-0728",
    link: "tel:(844)-640-0728",
    icon: FaPhoneAlt,
  },
  {
    text: "90 Day Money Back Guarantee",
    link: "#",
    icon: BiSolidBadgeCheck,
  },
  {
    text: "Free Shipping on orders over $50",
    link: "#",
    icon: FaTruck,
  },
  {
    text: "Top Notch Customer Support ",
    link: "#",
    icon: BsHeadset,
  },
  {
    text: "Fast Delivery ",
    link: "#",
    icon: FaTruck,
  },
];

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
        className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
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
            <div className="relative mx-auto flex min-h-[52px] sm:min-h-[60px] md:min-h-[70px] max-w-7xl items-center justify-end px-4 py-8 text-white lg:py-1">
              <a
                className="absolute right-1/2 translate-x-1/2 p-1 text-2xl focus:ring"
                href="#"
              >
                <h1 className="sr-only">Eco Health Funnel</h1>
                <img
                  className="h-full w-[8rem]"
                  src="/images/logo.svg"
                  alt="logo"
                />
              </a>
              <button className="transition-transform hover:scale-110">
                <BsCart3 className="size-6" strokeWidth="0.5" />
              </button>
            </div>
            <div className="text-center w-full bg-[#21bd00] py-4">
              <h3 className="font-bold text-2xl text-white">Today Only: Sign Up and Save $10—With Speedy, Free Shipping</h3>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary navbar - shows when scrolling down */}

      {/* Spacer to prevent content from jumping */}
      <div className="h-[calc(1.4rem+3rem)] md:h-[calc(1.4rem+5rem)]"></div>
    </>
  );
}

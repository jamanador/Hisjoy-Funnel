import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Toggle Button */}
      <button
        className="transition-transform hover:scale-110 text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu className="size-8" strokeWidth="0.5" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-brand-maroon text-white transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="p-6">
          <button
            className="text-white text-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            ✕ Close
          </button>
          <nav className="mt-6 space-y-4">
            <a href="#" className="block text-lg font-medium">
              Home
            </a>
            <a href="#" className="block text-lg font-medium">
              About
            </a>
            <a href="#" className="block text-lg font-medium">
              Services
            </a>
            <a href="#" className="block text-lg font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

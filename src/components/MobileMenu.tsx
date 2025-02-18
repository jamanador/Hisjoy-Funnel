import { useState } from "react";
import Modal from "./Modal";
const MobileMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={openModal}
        className="border border-gray-300 text-white px-2 py-1 text-sm rounded hover:bg-brand-maroon hover:border-brand-maroon"
      >
        Help?
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default MobileMenu;

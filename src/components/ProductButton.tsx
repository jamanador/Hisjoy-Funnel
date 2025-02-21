import React, { useState } from 'react';
import CheckoutModal from './CheckoutModal'; // Adjust the import according to your file structure

const ProductButton: React.FC<{ productLink: string }> = ({ productLink }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="text-center lg:mx-4 mx-2">
            <button
                onClick={openModal}
                className="bg-brand-maroon hover:bg-brand-secondary text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline cursor-pointer"
            >
                ADD TO CART
            </button>
            <CheckoutModal isOpen={isModalOpen} onClose={closeModal} productLink={productLink} />
        </div>
    );
};

export default ProductButton;

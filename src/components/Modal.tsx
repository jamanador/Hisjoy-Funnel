import React, { useCallback, useEffect, useRef } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleClickOutside]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 border-b border-gray-900 border-2">
            <div className="absolute inset-0 bg-gray-800 opacity-75" onClick={onClose}></div>
            <div
                ref={modalRef}
                className="bg-gray-100 p-6 rounded-lg z-50 max-w-md w-full mx-auto my-auto text-black"
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-400 hover:text-gray-800 text-2xl"
                >
                    <AiOutlineCloseSquare /> {/* Using the close icon from react-icons */}
                </button>
                <h2 className="text-xl font-semibold mb-4">Need Quick Answers?</h2>
                <p className="text-sm">Prefer to call?</p>
                <p className="text-sm mb-2 font-semibold text-brand-maroon">
                    Dial: <a href="tel:+18446400722" className="text-brand-maroon hover:underline">844-640-0722</a>
                </p>

                <p className="text-sm mb-2">Monday – Sunday, 10am-6pm EST</p>
                <p className="text-sm">Or email us at:</p>
                <p className="text-sm text-brand-maroon font-semibold">support@hisjoy.com</p>
            </div>
        </div>
    );
};

export default Modal;

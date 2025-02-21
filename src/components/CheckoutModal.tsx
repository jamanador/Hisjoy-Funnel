import React, { useEffect, useState } from 'react';

interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    productLink: string;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, productLink }) => {
    const [formData, setFormData] = useState<FormData>({ firstname: '', lastname: '', email: '', phone: '' });

    useEffect(() => {
        // Retrieve data from local storage or URL parameters
        const savedData = localStorage.getItem('checkoutData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setFormData(parsedData);
        } else {
            const params = new URLSearchParams(window.location.search);
            const urlFormData = {
                firstname: params.get('firstname') || '',
                lastname: params.get('lastname') || '',
                email: params.get('email') || '',
                phone: params.get('phone') || ''
            };
            setFormData(urlFormData);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const encodedFirstname = encodeURIComponent(formData.firstname);
        const encodedLastname = encodeURIComponent(formData.lastname);
        const encodedEmail = encodeURIComponent(formData.email);
        const encodedPhone = encodeURIComponent(formData.phone);

        const checkoutURL = `${productLink}?firstname=${encodedFirstname}&lastname=${encodedLastname}&email=${encodedEmail}&phone=${encodedPhone}`;

        // Save data to local storage
        localStorage.setItem('checkoutData', JSON.stringify(formData));

        console.log("Checkout URL:", checkoutURL); // Debugging log

        window.location.href = checkoutURL;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center rounded-xl">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Checkout Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-50"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-50"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-50"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-50"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-brand-maroon hover:to-brand-secondary text-white rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutModal;

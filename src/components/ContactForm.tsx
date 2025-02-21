import React, { useState } from 'react';

interface ContactFormProps {
    onContinue: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onContinue }) => {
    const [fullName, setFullName] = useState('');
    const [lastname, setlastname] = useState('');

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(true); // State for the checkbox

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { fullName, email, phoneNumber, agreeToTerms });
        onContinue(); // Call the continue handler
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className='font-bold text-center mt-16 mb-0 text-2xl'>Please Provide Your Info To <br/> <span className='text-lg'>Receive Your 2 Free Months</span></h3>
            <form
                onSubmit={handleSubmit}
                className="w-full p-8 rounded-lg"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        What is your full name?
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="flex-1 border rounded w-full py-2 px-3 text-gray-700 mr-2"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            value={lastname}
                            onChange={(e) => setlastname(e.target.value)}
                            className="flex-1 border rounded w-full py-2 px-3 text-gray-700"
                            placeholder="Last Name"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        What is your email address?
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                        placeholder="example@example.com"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Please enter the best phone number to reach you in case there are any
                        questions regarding your prescription information.
                    </label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                        placeholder="0000 000 0000"
                    />
                    <p className="text-xs text-gray-600 mt-1">
                        By clicking here, you agree to receive doctor correspondence,
                        promotional emails, and marketing messages from HisJoy. In the email
                        section, please enter the best email address to reach you in case the
                        doctor has any questions regarding your medical information.
                    </p>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        <input
                            type="checkbox"
                            checked={agreeToTerms}
                            onChange={(e) => setAgreeToTerms(e.target.checked)}
                            className="mr-2"
                        />
                        I agree to receive a checkbox message that will go under the phone number.
                    </label>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface ContactFormProps {
    onContinue: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onContinue }) => {
    const [fullName, setFullName] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Form data to be submitted
        const formData = {
            fullName,
            lastname,
            email,
            phoneNumber,
            agreeToTerms
        };

        // Save form data to local storage
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        try {
            // Construct the URL with query parameters
            const url = new URL('https://api.whitelabelmd.com/webhook/partials/110/');
            url.searchParams.append('phone', phoneNumber);
            url.searchParams.append('firstname', fullName);
            url.searchParams.append('lastname', lastname);
            url.searchParams.append('email', email);
            url.searchParams.append('contactOptin', agreeToTerms ? '1' : '0');
            // Add any other necessary parameters here

            // Submit data to the webhook
            const response = await fetch(url.toString(), {
                method: 'POST',
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                toast.success("Thank You For the Submit the Info, You'll Get Follow Up Message")
                onContinue(); // Call the continue handler
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className='font-bold text-center mt-16 mb-0 text-2xl'>Please Provide Your Info To <br/> <span className='text-lg'>Receive Your 2 Free Months</span></h3>
            <form onSubmit={handleSubmit} className="w-full p-8 rounded-lg">
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

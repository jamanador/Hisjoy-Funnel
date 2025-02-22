import React, { useEffect, useState } from 'react';

interface ContactFormProps {
    onContinue: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onContinue }) => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(true);
    const [errors, setErrors] = useState({
        firstname: false,
        lastname: false,
        email: false,
        phone: false,
        terms: false,
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('contactFormData');
        if (savedData) {
            const formData = JSON.parse(savedData);
            setfirstname(formData.firstname);
            setlastname(formData.lastname);
            setEmail(formData.email);
            setPhoneNumber(formData.phone);
        }
    }, []);

    const isFormValid = firstname && lastname && email && phone.length === 14 && agreeToTerms;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check for errors
        const errors = {
            firstname: !firstname,
            lastname: !lastname,
            email: !email,
            phone: !phone || phone.length !== 14,
            terms: !agreeToTerms,
        };

        if (errors.firstname || errors.lastname || errors.email || errors.phone || errors.terms) {
            setErrors(errors);
            return;
        }

        setLoading(true);
        setErrors({
            firstname: false,
            lastname: false,
            email: false,
            phone: false,
            terms: false,
        });

        // Retrieve discount code from local storage or any other source if needed
        const discountCode = localStorage.getItem('discountCode') || '';

        // Form data to be submitted
        const formData = {
            firstname,
            lastname,
            email,
            phone,
            discount_code: discountCode, // Include discount code in form data
        };

        // Save form data to local storage
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        try {
            // Construct the URL with query parameters
            const url = new URL('https://api.whitelabelmd.com/webhook/partials/110/');
            url.searchParams.append('phone', phone);
            url.searchParams.append('firstname', firstname);
            url.searchParams.append('lastname', lastname);
            url.searchParams.append('email', email);
            url.searchParams.append('discount_code', discountCode); // Append discount code to URL

            // Submit data to the webhook
            const response = await fetch(url.toString(), {
                method: 'POST',
            });

            if (response.ok) {
                onContinue(); // Call the continue handler
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto animate-fade-in-up text-center font-Inter">
            <h1 className="text-2xl md:text-3xl font-bold text-black mt-12">
                PLEASE PROVIDE YOUR INFO
            </h1>
            <p className="mt-0 text-xl font-semibold text-red-500">
                Get 2 Free Months
            </p>
            <p className="mt-1 text-sm text-gray-600">
                Your information will remain confidential
            </p>
            <form onSubmit={handleSubmit} className="w-full py-4  md:py-8 px-3 rounded-lg text-center">
                <div className="mb-4">
                    <label className="block text-gray-700 text-md font-extrabold mb-2">
                        What is your full name?
                    </label>
                    <div className="flex">
                        <div className="flex-1 mr-2">
                            <input
                                type="text"
                                value={firstname}
                                onChange={(e) => setfirstname(e.target.value)}
                                className={`border rounded w-full py-2 px-3 text-gray-700 text-center ${errors.firstname ? 'border-red-500' : ''}`}
                                placeholder="First Name"
                            />
                            {errors.firstname && (
                                <div className="bg-red-500 text-white text-xs py-1 px-2 rounded mt-1 flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    This field is required.
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                value={lastname}
                                onChange={(e) => setlastname(e.target.value)}
                                className={`border rounded w-full py-2 px-3 text-gray-700 text-center ${errors.lastname ? 'border-red-500' : ''}`}
                                placeholder="Last Name"
                            />
                            {errors.lastname && (
                                <div className="bg-red-500 text-white text-xs py-1 px-2 rounded mt-1 flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    This field is required.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        What is your email address?
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`border rounded w-full py-2 px-3 text-gray-700 text-center ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="example@example.com"
                    />
                    {errors.email && (
                        <div className="bg-red-500 text-white text-xs py-1 px-2 rounded mt-1 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            This field is required.
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-semibold mb-2">
                        Please enter the best phone number to reach you in case there are any
                        questions regarding your prescription information.
                    </label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                            let val = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                            if (val.length > 10) val = val.slice(0, 10); // Limit to 10 digits

                            // Format (XXX) XXX-XXXX
                            let formatted = val;
                            if (val.length > 6) {
                                formatted = `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6)}`;
                            } else if (val.length > 3) {
                                formatted = `(${val.slice(0, 3)}) ${val.slice(3)}`;
                            } else if (val.length > 0) {
                                formatted = `(${val}`;
                            }

                            setPhoneNumber(formatted);
                        }}
                        className={`border rounded w-full text-center py-2 px-3 text-gray-700 ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="(000) 000-0000"
                    />
                    {errors.phone && (
                        <div className="bg-red-500 text-white text-xs py-1 px-2 rounded mt-1 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            This field is required.
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex items-center mb-2 ">
                        <input
                            type="checkbox"
                            checked={agreeToTerms}
                            onChange={(e) => setAgreeToTerms(e.target.checked)}
                            className={`w-4 h-4 border-2 ${agreeToTerms ? 'border-blue-500' : 'border-red-500'} rounded focus:ring-blue-500 focus:ring-1`}
                        />
                        <label className="ml-2 text-gray-500 text-xs md:text-sm font-medium">
                            I agree to the <a href="https://www.hisjoy.com/terms/" target='https://www.hisjoy.com/terms/' className="text-blue-500 hover:underline">Terms</a>, <a href="https://www.hisjoy.com/privacy/" target='https://www.hisjoy.com/privacy/' className="text-blue-500 hover:underline">Privacy Policy</a>, and consent to <a href="https://www.hisjoy.com/contact-us/" target='https://www.hisjoy.com/contact-us/' className="text-blue-500 hover:underline">Telehealth</a>.
                        </label>
                    </div>
                    {errors.terms && (
                        <div className="bg-red-500 text-white text-xs py-1 px-2 rounded mt-1 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            This field is required.
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    title='Submit The Data To Continue'
                    className={`font-bold py-3 px-4 rounded-xl w-full text-lg mt-3 flex items-center justify-center transition-all duration-300 ${isFormValid ? "bg-brand-maroon hover:bg-brand-secondary text-white" : "bg-gray-600 text-gray-200 cursor-not-allowed"
                        }`}
                // disabled={!isFormValid || loading}
                >
                    {loading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                    ) : (
                        "CONTINUE →"
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

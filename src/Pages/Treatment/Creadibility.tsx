import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';

const CredibilityPage: React.FC = () => {
    const navigate = useNavigate();
    const { category } = useParams<{ category: string }>();

    const handleContinue = () => {
        if (category) {
            navigate(`/home/treatment/processing/${category}`);
        }
    };

    return (
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center p-4">
            <div className="max-w-md text-center bg-blue-50 mt-12 p-8 rounded-xl">
                <h1 className="text-lg md:text-2xl font-extrabold text-black mb-4">
                    Great Choice!<br /> Your Selection is Clinically <br />Proven to Improve Erections!
                </h1>
                <div className="flex justify-center">
                    <img
                        src="/images/clinically-proven.ee555b8.png" // Replace with the actual path to your shield image
                        alt="Clinically Proven"
                        className="w-6/12 mr-2"
                    />
                </div>
                <p className="text-gray-800 mb-6 mt-3 font-semibold">
                    In studies, 94% of users reported satisfaction with their results when using treatments like Viagra & Cialis. Your selected treatment is backed by science and trusted by thousands!
                </p>
                <p className="text-gray-800 mt-2 font-medium">PMID: 18516312</p>
            </div>

            <ContactForm onContinue={handleContinue} />
        </div>
    );
};

export default CredibilityPage;

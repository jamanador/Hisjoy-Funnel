import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import ContactForm from '../../components/ContactForm';
const CredibilityPage: React.FC = () => {
    const navigate = useNavigate();
    const { category } = useParams<{ category: string }>();

    const handleContinue = () => {
        if (category) {
            navigate(`/home/treatment/processing/${category}#checking`);
        }
    };
    const location = useLocation();

    useEffect(() => {
        if (location.hash && location.hash === "#greatchoice") {
            scroller.scrollTo("greatchoice", {
                smooth: true,
                duration: 500,
                offset: -140,
            });
        }
    }, [location.hash]);
    return (
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center md:py-4">
            <div className="max-w-md text-center bg-blue-50 md:mt-12 p-8 rounded-xl" id="greatchoice">
                <h1 className="text-lg md:text-2xl font-extrabold text-black mb-4">
                    Great Choice!<br /> Your Selection is Clinically <br />Proven to Improve Erections!
                </h1>
                <div className="flex justify-center animate-bounce">
                    <img
                        src="/images/clinically-proven.ee555b8.png"
                        alt="Clinically Proven"
                        className="md:w-4/12 mr-2 w-5/12"
                    />
                </div>
                <p className="text-gray-800 mb-6 mt-3 font-semibold">
                    In studies, 94% of users reported satisfaction with their results when using treatments like Viagra & Cialis. Your selected treatment is backed by science and trusted by thousands!
                </p>
                <p className="text-gray-800 mt-2 font-medium">PMID: <span className='underline'>18516312</span></p>
            </div>

            <ContactForm onContinue={handleContinue} />
        </div>
    );
};

export default CredibilityPage;

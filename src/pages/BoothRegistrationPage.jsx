import React, { useEffect } from 'react';
import BoothRegistrationForm from '../components/BoothRegistrationForm';

const BoothRegistrationPage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="pt-16">
            <BoothRegistrationForm />
        </div>
    );
};

export default BoothRegistrationPage;

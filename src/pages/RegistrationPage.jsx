import React, { useEffect } from 'react';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="pt-16">
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;

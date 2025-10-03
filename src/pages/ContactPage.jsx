import React, { useEffect } from 'react';
import ContactSection from "../components/ContactSection.jsx";

function ContactPage() {
    // Scroll về đầu trang khi component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <ContactSection />
        </>
    );
}

export default ContactPage;

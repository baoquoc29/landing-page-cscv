import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import RegistrationPage from './pages/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <div className="min-h-screen bg-black">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/register" element={<RegistrationPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;

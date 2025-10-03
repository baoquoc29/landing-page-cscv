import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <div className="min-h-screen bg-black">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;

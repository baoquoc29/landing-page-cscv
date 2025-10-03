import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const EventBanner = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section
            className="w-full min-h-screen bg-center bg-cover relative flex flex-col items-center justify-center text-center px-4"
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
        >
            {/* Lớp phủ mờ (overlay) với gradient đen đỏ */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/50 to-black opacity-80"></div>

            {/* Nội dung */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Tiêu đề với animation */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 drop-shadow-lg animate-fade-in text-glow">
                    {t.banner.title}
                </h1>

                {/* Buttons với animation */}
                <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-in-up">
                    <button className="px-6 py-3 text-white bg-red-600 rounded-lg font-medium shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 animate-glow w-full md:w-auto">
                        {t.banner.registerCompetition}
                    </button>
                    <button className="px-6 py-3 text-white bg-gradient-to-r from-red-700 to-red-900 rounded-lg font-medium shadow-lg hover:from-red-600 hover:to-red-800 hover:scale-105 transition-all duration-300 w-full md:w-auto border border-red-500">
                        {t.banner.registerActivities}
                    </button>
                </div>
            </div>

            {/* Scroll indicator animation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default EventBanner;

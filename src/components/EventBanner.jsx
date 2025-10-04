import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const EventBanner = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section
            className="w-full min-h-screen mt-8 bg-center bg-contain bg-no-repeat bg-black relative flex flex-col items-center justify-center text-center px-4"
            style={{backgroundImage: "url('/images/banner2.png')"}}
        >


            {/*<div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/50 to-black opacity-80"></div>*/}

            {/* Nội dung */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Buttons với animation */}
                <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-in-up">
                </div>
            </div>

        </section>
    );
};

export default EventBanner;

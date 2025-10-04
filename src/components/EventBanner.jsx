import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const EventBanner = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section
            className="w-full min-h-screen mt-4 bg-center bg-contain bg-no-repeat bg-black relative flex flex-col items-center justify-center text-center px-4"
            style={{backgroundImage: "url('/images/banner2.png')"}}
        >


            {/*<div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/50 to-black opacity-80"></div>*/}

            {/* Nội dung */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Buttons với animation */}
                <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-in-up">
                    {/*<button*/}
                    {/*    className="px-6 py-3 text-white bg-red-600 rounded-lg font-medium shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 animate-glow w-full md:w-auto">*/}
                    {/*    {t.banner.registerCompetition}*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className="px-6 py-3 text-white bg-gradient-to-r from-red-700 to-red-900 rounded-lg font-medium shadow-lg hover:from-red-600 hover:to-red-800 hover:scale-105 transition-all duration-300 w-full md:w-auto border border-red-500">*/}
                    {/*    {t.banner.registerActivities}*/}
                    {/*</button>*/}
                </div>
            </div>

        </section>
    );
};

export default EventBanner;

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const EventBanner = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Chọn banner dựa trên ngôn ngữ
    const bannerImage =
        language === "EN" ? "/images/Banner.png" : "/images/Banner.png";
    const bannerVertical =
        language === "EN" ? "/images/banner_vertical_en.jpg" : "/images/banner_vertical.jpg";

    return (
        <section className="relative w-full min-h-screen mt-18 bg-black flex flex-col items-center justify-center text-center px-4">
            <div
                className="hidden md:block absolute inset-0 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url('${bannerImage}')` }}
            ></div>

            <div
                className="block md:hidden mt-8 absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('${bannerVertical}')` }}
            ></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-in-up">
                </div>
            </div>
        </section>
    );
};

export default EventBanner;

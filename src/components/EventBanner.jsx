import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const EventBanner = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section
            className="w-full min-h-screen bg-center bg-cover relative flex flex-col items-center justify-center text-center px-4"
            style={{ backgroundImage: "url('/images/banner.jpg')" }} // 👉 thay link ảnh banner
        >
            {/* Lớp phủ mờ (overlay) */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Nội dung */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Tiêu đề */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
                    {t.banner.title}
                </h1>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 text-white bg-red-600 rounded-lg font-medium shadow hover:bg-red-700 transition w-full md:w-auto">
                        {t.banner.registerCompetition}
                    </button>
                    <button className="px-6 py-3 text-white bg-blue-600 rounded-lg font-medium shadow hover:bg-blue-700 transition w-full md:w-auto">
                        {t.banner.registerActivities}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventBanner;

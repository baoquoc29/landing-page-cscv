import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const EventStats = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const stats = [
        { number: "200+", label: t.stats.teams },
        { number: "1000+", label: t.stats.studentsOffline },
        { number: "600,000+", label: t.stats.studentsReached },
        { number: "10,000,000+", label: t.stats.views },
        { number: "100+", label: t.stats.mediaArticles },
        { number: "50+", label: t.stats.partners },
    ];

    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-gray-300 divide-x divide-gray-300">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center py-6 px-2 text-center"
                    >
            <span className="text-lg md:text-xl font-bold text-black">
              {item.number}
            </span>
                        <span className="text-xs md:text-sm lg:text-base text-gray-700">
              {item.label}
            </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventStats;

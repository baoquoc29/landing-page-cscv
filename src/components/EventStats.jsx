import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import CountUp from "./CountUp";

const EventStats = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const stats = [
        { number: "200", suffix: "+", label: t.stats.teams },
        { number: "1000", suffix: "+", label: t.stats.studentsOffline },
        { number: "600000", suffix: "+", label: t.stats.studentsReached },
        { number: "10000000", suffix: "+", label: t.stats.views },
        { number: "100", suffix: "+", label: t.stats.mediaArticles },
        { number: "50", suffix: "+", label: t.stats.partners },
    ];

    return (
        <section className="w-full bg-gradient-to-r from-black via-red-950 to-black py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-red-600 divide-x divide-red-600">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center py-6 px-2 text-center hover:bg-red-950 transition-all duration-300 group"
                    >
                        <CountUp 
                            end={item.number}
                            suffix={item.suffix}
                            className="text-lg md:text-xl font-bold text-red-500 group-hover:text-red-400 transition-colors text-glow"
                        />
                        <span className="text-xs md:text-sm lg:text-base text-gray-300 mt-1">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventStats;

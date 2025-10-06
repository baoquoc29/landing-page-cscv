import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const MainActivities = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [ref, isVisible, animationClass] = useScrollAnimation(0.2, 'up');

    const activities = [
        {
            title: t.mainActivities.activities[0].title,
            date: t.mainActivities.activities[0].date,
            desc: t.mainActivities.activities[0].desc,
            img: "/images/sk_main_activities.webp",
            reverse: false,
        },
        {
            title: t.mainActivities.activities[1].title,
            date: t.mainActivities.activities[1].date,
            desc: t.mainActivities.activities[1].desc,
            img: "/images/ck_main_activities.jpg",
            reverse: true,
        },
    ];

    return (
        <section id="hoat-dong-chinh" className="w-full bg-black py-12 px-4">
            <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-[1200ms] ease-out ${animationClass}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-500 text-glow">
                    {t.mainActivities.title}
                </h2>

                <div className="space-y-16">
                    {activities.map((a, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch`}
                        >
                            {/* Ảnh */}
                            <div
                                className={`${
                                    a.reverse ? "md:order-2" : "md:order-1"
                                } flex`}
                            >
                                <img
                                    src={a.img}
                                    alt={a.title}
                                    className="w-full h-full object-cover rounded-xl shadow-lg border border-red-900 hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Nội dung */}
                            <div
                                className={`${
                                    a.reverse ? "md:order-1" : "md:order-2"
                                } flex flex-col justify-center`}
                            >
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-red-500">
                                    {a.title}
                                </h3>
                                <p className="font-semibold mb-3 text-red-400">{a.date}</p>
                                <p className="text-gray-300 text-sm md:text-base whitespace-pre-line leading-relaxed text-justify">
                                    {a.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainActivities;

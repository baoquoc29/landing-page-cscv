import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const EventTimeline = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [ref, isVisible, animationClass] = useScrollAnimation(0.2, 'scale');

    const timeline = [
        {
            title: t.timeline.events[0].title,
            date: t.timeline.events[0].date,
            desc: t.timeline.events[0].desc,
            img: "/images/register.jpg",
        },
        {
            title: t.timeline.events[1].title,
            date: t.timeline.events[1].date,
            desc: t.timeline.events[1].desc,
            img: "/images/sk.jpg",
        },
        {
            title: t.timeline.events[2].title,
            date: t.timeline.events[2].date,
            desc: t.timeline.events[2].desc,
            img: "/images/social.webp",
        },
        {
            title: t.timeline.events[3].title,
            date: t.timeline.events[3].date,
            desc: t.timeline.events[3].desc,
            img: "/images/ck.jpg",
        },
    ];

    return (
        <section id="lich-trinh" className="w-full bg-gradient-to-b from-black via-red-950 to-black py-12 px-4">
            <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${animationClass}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-500 text-glow">
                    {t.timeline.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden shadow-lg flex flex-col items-center text-center p-6 text-white border border-red-900 hover:scale-105 transition-all duration-300 hover:border-red-500"
                            style={{
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Overlay đen mờ */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-red-950/40 to-black/80"></div>

                            {/* Nội dung */}
                            <div className="relative z-10">
                                <h3 className="text-lg md:text-xl font-extrabold mb-2 text-red-400">
                                    {item.title}
                                </h3>
                                <p className="font-semibold mb-2 text-red-300">{item.date}</p>
                                <p className="text-sm md:text-base leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventTimeline;

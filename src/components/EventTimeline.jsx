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
                {/* Tiêu đề */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-500 text-glow">
                    {t.timeline.title}
                </h2>

                {/* Timeline cards */}
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
                            {/* Overlay đậm hơn */}
                            <div className="absolute inset-0">
                                {/* lớp đen mờ đậm hơn */}
                                <div className="absolute inset-0 bg-black/60"></div>
                                {/* lớp đỏ gradient thêm chiều sâu */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/30 to-black/80"></div>
                            </div>

                            {/* Nội dung */}
                            <div className="relative z-10">
                                <h3 className="text-lg md:text-xl font-extrabold mb-2 text-red-400 drop-shadow-lg">
                                    {item.title}
                                </h3>
                                <p className="font-semibold mb-2 text-red-300">{item.date}</p>
                                <p className="text-sm md:text-base leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PDF Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
                    <a
                        href={language === 'VN' ? '/file/(Vie) Brochure CSCV 2025.pdf' : '/file/(Eng) Brochure CSCV 2025 .pdf'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-red-500 hover:border-red-400"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                            </svg>
                            <span>{t.timeline.buttons.overview}</span>
                        </div>
                    </a>
                    
                    <a
                        href={language === 'VN' ? '/file/04.10 Chương trình CSCV 2025.pdf' : '/file/(E)04.10 Agenda CSCV 2025 .pdf'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-red-500 hover:border-red-400"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                            </svg>
                            <span>{t.timeline.buttons.agenda}</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EventTimeline;

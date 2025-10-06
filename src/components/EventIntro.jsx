import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const EventIntro = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [ref, isVisible, animationClass] = useScrollAnimation(0.2, 'left');

    return (
        <section id="tong-quan" className="w-full bg-gradient-to-b from-black via-red-950 to-black py-12 px-4">
            <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${animationClass}`}>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-500 text-glow">
                    {t.intro.title}
                </h2>

                {/* Grid: Nội dung + Ảnh */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left: Nội dung */}
                    <div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 text-justify">
                            {t.intro.description}
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-sm md:text-base space-y-2 text-justify">
                            <li>
                                <strong className="text-red-500">{t.intro.objectives.awareness.title}</strong> {t.intro.objectives.awareness.description}
                            </li>
                            <li>
                                <strong className="text-red-500">{t.intro.objectives.skills.title}</strong> {t.intro.objectives.skills.description}
                            </li>
                            <li>
                                <strong className="text-red-500">{t.intro.objectives.talent.title}</strong> {t.intro.objectives.talent.description}
                            </li>
                            <li>
                                <strong className="text-red-500">{t.intro.objectives.ecosystem.title}</strong> {t.intro.objectives.ecosystem.description}
                            </li>
                        </ul>

                        {/* Venue Information */}
                        <div className="mt-6 bg-gradient-to-r from-red-900/40 via-red-800/50 to-red-900/40 border-2 border-red-500 rounded-xl p-5 shadow-xl backdrop-blur-sm">
                            <h3 className="text-lg md:text-xl font-bold mb-3 text-red-400 text-glow">
                                {t.intro.venue.title}
                            </h3>
                            <div className="space-y-2 text-gray-200">
                                <div className="flex items-start gap-2">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        <strong className="font-bold text-red-500">{t.intro.venue.mainLabel}</strong> {t.intro.venue.mainContent}
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        <strong className="font-bold text-red-500">{t.intro.venue.sideLabel}</strong> {t.intro.venue.sideContent}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Ảnh */}
                    <div className="flex justify-center items-center overflow-hidden">
                        <img
                            src="/images/3img.png"
                            alt="Ảnh minh họa"
                            className="w-full max-h-[480px] object-contain rounded-lg shadow-lg scale-150"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventIntro;

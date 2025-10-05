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
                        <ul className="list-disc list-inside text-gray-300 text-sm md:text-base space-y-2">
                            <li>
                                <strong
                                    className="text-red-500">{t.intro.objectives.awareness.title}</strong> {t.intro.objectives.awareness.description}
                            </li>
                            <li>
                                <strong
                                    className="text-red-500">{t.intro.objectives.skills.title}</strong> {t.intro.objectives.skills.description}
                            </li>
                            <li>
                                <strong
                                    className="text-red-500">{t.intro.objectives.talent.title}</strong> {t.intro.objectives.talent.description}
                            </li>
                            <li>
                                <strong
                                    className="text-red-500">{t.intro.objectives.ecosystem.title}</strong> {t.intro.objectives.ecosystem.description}
                            </li>
                        </ul>
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

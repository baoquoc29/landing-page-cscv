import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const EventIntro = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="tong-quan" className="w-full bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left: Nội dung */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left mb-6">
                        {t.intro.title}
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-justify">
                        {t.intro.description}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                        <li>
                            <strong>{t.intro.objectives.awareness.title}</strong> {t.intro.objectives.awareness.description}
                        </li>
                        <li>
                            <strong>{t.intro.objectives.skills.title}</strong> {t.intro.objectives.skills.description}
                        </li>
                        <li>
                            <strong>{t.intro.objectives.talent.title}</strong> {t.intro.objectives.talent.description}
                        </li>
                        <li>
                            <strong>{t.intro.objectives.ecosystem.title}</strong> {t.intro.objectives.ecosystem.description}
                        </li>
                    </ul>
                </div>

                {/* Right: Ảnh */}
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                        <img
                            src="/images/anh1.jpg"
                            alt="Ảnh 1"
                            className="w-full h-40 object-cover rounded-lg shadow"
                        />
                        <img
                            src="/images/anh2.jpg"
                            alt="Ảnh 2"
                            className="w-full h-40 object-cover rounded-lg shadow"
                        />
                        <img
                            src="/images/anh3.jpg"
                            alt="Ảnh 3"
                            className="w-full h-40 object-cover rounded-lg shadow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventIntro;

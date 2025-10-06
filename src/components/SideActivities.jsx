import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SideActivities = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [ref, isVisible, animationClass] = useScrollAnimation(0.2, 'scale');

    const activities = [
        {
            id: 0,
            title: "HỘI THẢO CÔNG NGHỆ",
            img: "/images/ht.jpg", // đổi thành ảnh thật
        },
        {
            id: 1,
            title: t.sideActivities.activities[0],
            img: "/images/img0.png",
        },
        {
            id: 2,
            title: t.sideActivities.activities[1],
            img: "/images/img1.jpeg",
        },
        {
            id: 3,
            title: t.sideActivities.activities[2],
            img: "/images/img2.jpg",
        },
        {
            id: 4,
            title: t.sideActivities.activities[3],
            img: "/images/img3.jpeg",
        },
    ];

    return (
        <section
            id="hoat-dong-ben-le"
            className="w-full bg-gradient-to-b from-black via-red-950 to-black py-12 px-4"
        >
            <div
                ref={ref}
                className={`max-w-7xl mx-auto transition-all duration-[800ms] ease-out ${animationClass}`}
            >
                {/* Tiêu đề */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-red-500 text-glow">
                    {t.sideActivities.title}
                </h2>

                {/* Dòng text nhỏ */}
                <p
                    className={`text-center italic text-red-300 text-sm mb-10 transition-opacity duration-700 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {t.sideActivities.subTitle}
                </p>

                {/* Danh sách hoạt động */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(5,minmax(0,1fr))] gap-6">
                    {activities.map((act) => (
                        <div
                            key={act.id}
                            className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-900 hover:border-red-500 hover:scale-105"
                        >
                            {/* Ảnh */}
                            <img
                                src={act.img}
                                alt={act.title}
                                className="w-full h-48 object-cover"
                            />
                            {/* Tiêu đề hoạt động */}
                            <div className="p-4 text-center">
                                <h3 className="text-sm md:text-base font-semibold text-red-400">
                                     {act.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SideActivities;

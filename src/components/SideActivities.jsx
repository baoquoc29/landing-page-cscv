import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const SideActivities = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const activities = [
        {
            id: 1,
            title: t.sideActivities.activities[0],
            img: "/images/hoatdong1.jpg",
        },
        {
            id: 2,
            title: t.sideActivities.activities[1],
            img: "/images/hoatdong2.jpg",
        },
        {
            id: 3,
            title: t.sideActivities.activities[2],
            img: "/images/hoatdong3.jpg",
        },
        {
            id: 4,
            title: t.sideActivities.activities[3],
            img: "/images/hoatdong4.jpg",
        },
    ];

    return (
        <section id="hoat-dong-ben-le" className="w-full bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                    {t.sideActivities.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.map((act) => (
                        <div
                            key={act.id}
                            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                        >
                            {/* Ảnh */}
                            <img
                                src={act.img}
                                alt={act.title}
                                className="w-full h-48 object-cover"
                            />
                            {/* Tiêu đề */}
                            <div className="p-4 text-center">
                                <h3 className="text-sm md:text-base font-semibold">
                                    {act.id}. {act.title}
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

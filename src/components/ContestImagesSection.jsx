import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const images = [
    "/images/ld1.jpg",
    "/images/ld2.jpg",
    "/images/ld3.jpg",
    "/images/ld4.jpg",
    "/images/ld5.jpg",
    "/images/ld6.jpg",
    "/images/ld7.webp",
    "/images/ld8.jpeg",
    "/images/ld9.jpg",
    "/images/ld10.jpg",
    "/images/ld11.jpg",
    "/images/ld12.jpg"
];

const ContestImagesSection = () => {
    const { language } = useLanguage();

    const titles = {
        VN: "MỘT SỐ HÌNH ẢNH CUỘC THI",
        EN: "SOME IMAGES OF THE CONTEST",
    };

    return (
        <section className="relative w-full bg-gradient-to-b from-black via-[#200] to-black py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Tiêu đề song ngữ */}
                <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-8">
                    {titles[language]}
                </h2>

                {/* Lưới ảnh */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden rounded-xl group"
                        >
                            <img
                                src={src}
                                alt={`Contest image ${idx + 1}`}
                                className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContestImagesSection;

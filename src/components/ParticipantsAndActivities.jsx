import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Participants = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [ref, isVisible, animationClass] = useScrollAnimation(0.2, 'right');

    const participants = [
        {
            title: t.participants.types[0].title,
            desc: t.participants.types[0].desc,
            icon: "/images/sv.png",
        },
        {
            title: t.participants.types[1].title,
            desc: t.participants.types[1].desc,
            icon: "/icons/company.png",
        },
        {
            title: t.participants.types[2].title,
            desc: t.participants.types[2].desc,
            icon: "/icons/government.png",
        },
    ];

    const activities = [
        {
            title: "VÒNG SƠ KHẢO",
            date: "(18/10/2025)",
            desc: `- Quy mô: 200 đội
- Hình thức: Thi online
- Thử thách theo chủ đề (jeopardy), gồm: Pwnable (Khai thác lỗ hổng phần mềm), buffer overflow, format string, shellcode …
- Reverse engineering: tập trung vào khả năng dịch ngược mã nguồn phần mềm, cách unpack các packer, crypter bảo vệ; Crypto/ACM (Các bài toán liên quan toán học và lập trình web); Web; Crypto/ACM; 
- Đánh giá: tổng điểm các thử thách. Top 20-30 đội xuất sắc sẽ được chọn thi vòng Chung khảo.`,
            img: "/images/so-khao.jpg",
        },
        {
            title: "VÒNG CHUNG KHẢO",
            date: "(15/11/2025)",
            desc: `- Quy mô: 30 – 40 đội (Chọn từ Sơ khảo)
- Hình thức: Thi trực tiếp và offline
- Chia thành 2 bảng thi:
   • Bảng A: Thi diễn dạng phòng thi trực tiếp (Jeopardy). Các đội Tốp đầu từ vòng Sơ khảo sẽ thi tại Hà Nội.
   • Bảng B: Thi online cho các đội còn lại.
- Bảng thi Jeopardy: tất cả các đội thi online từ xa.`,
            img: "/images/chung-khao.jpg",
        },
    ];

    return (
        <section id="doi-tuong" className="w-full bg-gradient-to-b from-black via-red-950 to-black py-12 px-4">
            <div ref={ref} className={`max-w-7xl mx-auto space-y-16 transition-all duration-1000 ${animationClass}`}>
                {/* ĐỐI TƯỢNG THAM DỰ */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-500 text-glow">
                        {t.participants.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {participants.map((p, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-lg p-6 text-center border border-red-900 hover:border-red-500 hover:scale-105 transition-all duration-300"
                            >
                                <img
                                    src={p.icon}
                                    alt={p.title}
                                    className="h-16 mx-auto mb-4 object-contain"
                                />
                                <h3 className="text-lg font-bold mb-2 text-red-500">{p.title}</h3>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Participants;

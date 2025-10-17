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
                        {/* Đoạn 1 */}
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 text-justify">
                            {language === 'VN' ? (
                                <>
                                    <strong className="text-white font-bold">Cuộc thi Sinh viên An ninh mạng năm 2025</strong> là sự kiện thường niên do <strong className="text-white font-bold">Hiệp hội An ninh mạng quốc gia (NCA)</strong> chủ trì, với sự bảo trợ của <strong className="text-white font-bold">Bộ Công an và Bộ Giáo dục và Đào tạo</strong>, phối hợp tổ chức cùng <strong className="text-white font-bold">Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05)</strong>. Bên cạnh đó, chương trình còn nhận được sự phối hợp, đồng hành của <strong className="text-white font-bold">Hội Sinh viên Việt Nam</strong>.
                                </>
                            ) : (
                                <>
                                    The <strong className="text-white font-bold">2025 Cybersecurity Student Competition</strong> is an annual event organized by the <strong className="text-white font-bold">National Cybersecurity Association (NCA)</strong>, sponsored by the <strong className="text-white font-bold">Ministry of Public Security and the Ministry of Education and Training</strong>, in coordination with the <strong className="text-white font-bold">Cybersecurity and High-Tech Crime Prevention Department (A05)</strong>. The competition is also supported by the <strong className="text-white font-bold">Vietnam Student Association</strong>.
                                </>
                            )}
                        </p>
                        
                        {/* Đoạn 2 */}
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 text-justify">
                            {language === 'VN' ? (
                                <>
                                    Cuộc thi hướng tới mục tiêu <strong className="text-white font-bold">nâng cao nhận thức</strong> về an toàn thông tin, lan tỏa kiến thức bảo mật dữ liệu và xây dựng văn hóa an ninh mạng trong cộng đồng sinh viên. Đồng thời, chương trình tạo điều kiện để <strong className="text-white font-bold">rèn luyện kỹ năng</strong>, giúp các thí sinh được trải nghiệm thực chiến, phát triển tư duy phản biện và khả năng sáng tạo. Thông qua đó, cuộc thi góp phần <strong className="text-white font-bold">phát hiện và nuôi dưỡng nhân tài</strong>, tìm kiếm những gương mặt trẻ tiềm năng cho thế hệ chuyên gia an ninh mạng tương lai. Không chỉ dừng lại ở đó, sự kiện còn đóng vai trò <strong className="text-white font-bold">kết nối hệ sinh thái</strong> giữa giáo dục, doanh nghiệp và quốc gia, góp phần phát triển nguồn nhân lực an ninh mạng chất lượng cao, đáp ứng nhu cầu ngày càng lớn của thời đại số.
                                </>
                            ) : (
                                <>
                                    The competition aims to <strong className="text-white font-bold">raise awareness</strong> about information security, spread knowledge of data protection, and build a cybersecurity culture within the student community. At the same time, the program provides opportunities to <strong className="text-white font-bold">develop skills</strong>, helping contestants gain hands-on experience, develop critical thinking, and foster creativity. Through this, the competition contributes to <strong className="text-white font-bold">discovering and nurturing talent</strong>, seeking young promising faces for the next generation of cybersecurity experts. Not stopping there, the event also plays a role in <strong className="text-white font-bold">connecting the ecosystem</strong> between education, business, and the nation, contributing to the development of high-quality cybersecurity human resources, meeting the growing demands of the digital age.
                                </>
                            )}
                        </p>
                        {/*<ul className="list-disc list-inside text-gray-300 text-sm md:text-base space-y-2 text-justify">*/}
                        {/*    <li>*/}
                        {/*        <strong className="text-red-500">{t.intro.objectives.awareness.title}</strong> {t.intro.objectives.awareness.description}*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <strong className="text-red-500">{t.intro.objectives.skills.title}</strong> {t.intro.objectives.skills.description}*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <strong className="text-red-500">{t.intro.objectives.talent.title}</strong> {t.intro.objectives.talent.description}*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <strong className="text-red-500">{t.intro.objectives.ecosystem.title}</strong> {t.intro.objectives.ecosystem.description}*/}
                        {/*    </li>*/}
                        {/*</ul>*/}

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

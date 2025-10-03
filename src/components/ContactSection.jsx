import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ContactSection = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [ref, isVisible, animationClass] = useScrollAnimation(0.2, 'down');

    return (
        <section
            id="contact"
            className="w-full bg-gradient-to-b from-black via-red-950 to-black pt-24 md:pt-28 pb-12 px-4"
        >
            <div
                ref={ref}
                className={`max-w-7xl mx-auto transition-all duration-1000 ${animationClass}`}
            >
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-500 text-glow">                   {t.contact.title}                </h2>

                {/* Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Thông tin tổ chức */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">
                            {t.contact.organizers}
                        </h3>

                        <div className="space-y-6 text-gray-300">
                            <div>
                                <p className="font-bold text-red-400">
                                    Hiệp hội An ninh mạng Quốc Gia
                                </p>
                                <p>38 Phan Đình Phùng, Quán Thánh, Ba Đình, Hà Nội</p>
                                <p>024 626 00 626</p>
                                <p>
                                    <a
                                        href="mailto:info@nca.org.vn"
                                        className="text-red-500 hover:text-red-400 hover:underline"
                                    >
                                        info@nca.org.vn
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://www.nca.org.vn"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-red-500 hover:text-red-400 hover:underline"
                                    >
                                        www.nca.org.vn
                                    </a>
                                </p>
                            </div>

                            <div>
                                <p className="font-bold text-red-400">IEC Consulting</p>
                                <p>66 Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội</p>
                                <p>0344334880</p>
                                <p>
                                    <a
                                        href="mailto:info@iecconsulting.com.vn"
                                        className="text-red-500 hover:text-red-400 hover:underline"
                                    >
                                        info@iecconsulting.com.vn
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://iecconsulting.com.vn"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-red-500 hover:text-red-400 hover:underline"
                                    >
                                        iecconsulting.com.vn
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form liên hệ */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">
                            {t.contact.sendInfo}
                        </h3>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder={t.contact.form.fullName}
                                    className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                                />
                                <input
                                    type="text"
                                    placeholder={t.contact.form.position}
                                    className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                                />
                                <input
                                    type="text"
                                    placeholder={t.contact.form.organization}
                                    className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                                />
                                <input
                                    type="text"
                                    placeholder={t.contact.form.phone}
                                    className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                                />
                                <input
                                    type="email"
                                    placeholder={t.contact.form.email}
                                    className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 md:col-span-2 focus:outline-none focus:border-red-500 transition"
                                />
                            </div>

                            <textarea
                                rows="5"
                                placeholder={t.contact.form.content}
                                className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                            ></textarea>

                            <button
                                type="submit"
                                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                {t.contact.form.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

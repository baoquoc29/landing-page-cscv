import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const ContactSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="w-full bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                    {t.contact.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t.contact.organizers}</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold">Hiệp hội An ninh mạng Quốc Gia</p>
                                <p>38 Phan Đình Phùng, Quán Thánh, Ba Đình, Hà Nội</p>
                                <p>024 626 00 626</p>
                                <p>
                                    <a
                                        href="mailto:info@nca.org.vn"
                                        className="text-blue-600 hover:underline"
                                    >
                                        info@nca.org.vn
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://www.nca.org.vn"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        www.nca.org.vn
                                    </a>
                                </p>
                            </div>

                            <div>
                                <p className="font-bold">IEC Consulting</p>
                                <p>66 Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội</p>
                                <p>0344334880</p>
                                <p>
                                    <a
                                        href="mailto:info@iecconsulting.com.vn"
                                        className="text-blue-600 hover:underline"
                                    >
                                        info@iecconsulting.com.vn
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://iecconsulting.com.vn"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        iecconsulting.com.vn
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bên phải: Form liên hệ */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t.contact.sendInfo}</h3>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder={t.contact.form.fullName}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder={t.contact.form.position}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder={t.contact.form.organization}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                                <input
                                    type="text"
                                    placeholder={t.contact.form.phone}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                                <input
                                    type="email"
                                    placeholder={t.contact.form.email}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 md:col-span-2"
                                />
                            </div>

                            <textarea
                                rows="5"
                                placeholder={t.contact.form.content}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            ></textarea>

                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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

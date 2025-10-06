import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <footer className="w-full bg-gradient-to-t from-black via-red-950 to-black border-t border-red-800 py-10 px-6">
            <div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[0.1fr_0.3fr_0.8fr] gap-4 text-sm md:text-base text-gray-300">

                {/* Logo */}
                <div className="flex flex-col items-center justify-center md:items-start">
                    <img
                        src="/images/logo2.png"
                        alt="CSCV 2025 Logo"
                        className="h-10 md:h-14 scale-[2] w-auto object-contain"
                    />
                </div>

                {/* Contact */}
                <div className="flex flex-col space-y-3 text-base md:text-lg">
                    <p className="font-bold text-red-500">Mr. DAI TRAN</p>
                    <p>{t.footer.partnership}</p>
                    <p>M: 0344334860</p>
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:info@iecgroup.com.vn"
                            className="text-red-500 hover:text-red-400 hover:underline"
                        >
                            info@iecgroup.com.vn
                        </a>
                    </p>
                    <button
                        className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 w-fit">
                        {t.footer.sponsor}
                    </button>
                </div>

                {/* Organizers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
                    <div>
                        <h3 className="font-bold mb-2 text-red-500">{t.footer.organizers}</h3>
                        <p className="font-semibold">Hiệp hội An ninh mạng quốc gia</p>
                        <p>38 Phan Đình Phùng, Quán Thánh, Ba Đình, Hà Nội</p>
                        <p>024 626 00 626</p>
                        <p>
                            <a href="mailto:info@nca.org.vn"
                               className="text-red-500 hover:text-red-400 hover:underline">
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
                        <h3 className="font-bold mb-2 text-red-500">IEC Consulting</h3>
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
        </footer>
    );
};

export default Footer;

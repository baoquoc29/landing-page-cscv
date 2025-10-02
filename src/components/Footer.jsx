import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <footer className="w-full bg-red-100 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
                {/* Logo */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="h-16 mb-4 object-contain"
                    />
                </div>

                {/* Contact */}
                <div className="flex flex-col space-y-2">
                    <p className="font-bold">Mr. DAI TRAN</p>
                    <p>{t.footer.partnership}</p>
                    <p>M: +84</p>
                    <p>Email: <a href="mailto:info@iecgroup.com.vn" className="text-blue-600 hover:underline">info@iecgroup.com.vn</a></p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 w-fit">
                        {t.footer.sponsor}
                    </button>
                </div>

                {/* Organizers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold mb-2">{t.footer.organizers}</h3>
                        <p className="font-semibold">Hiệp hội An ninh mạng quốc gia</p>
                        <p>38 Phan Đình Phùng, Quán Thánh, Ba Đình, Hà Nội</p>
                        <p>024 626 00 626</p>
                        <p>
                            <a href="mailto:info@nca.org.vn" className="text-blue-600 hover:underline">info@nca.org.vn</a>
                        </p>
                        <p>
                            <a href="https://www.nca.org.vn" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                                www.nca.org.vn
                            </a>
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">IEC Consulting</h3>
                        <p>66 Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội</p>
                        <p>0344334880</p>
                        <p>
                            <a href="mailto:info@iecconsulting.com.vn" className="text-blue-600 hover:underline">
                                info@iecconsulting.com.vn
                            </a>
                        </p>
                        <p>
                            <a href="https://iecconsulting.com.vn" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
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

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
                    <p className="font-bold text-red-500">
                        {language === 'VN' ? 'Ông Trần Viết Đại' : 'Mr. Tran Viet Dai'}
                    </p>
                    <p>{t.footer.partnership}</p>
                    <p>
                        {language === 'VN' ? 'Điện thoại: ' : 'Phone: '}
                        034 433 4860
                    </p>
                    <a
                        href="mailto:dai.tran@iecgroup.com.vn?subject=Hợp%20tác%20Tài%20trợ&body=Chào%20anh%20Đại,%0A%0ATôi%20quan%20tâm%20tài%20trợ..."
                        className="mt-2 inline-block px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md shadow-lg hover:from-red-700 hover:to-red-800 hover:scale-105 transition-all duration-300 w-fit"
                    >
                        {t.footer.sponsor}
                    </a>

                </div>

                {/* Organizers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
                    <div>
                        <h3 className="font-bold mb-2 text-red-500 uppercase">{t.footer.organizers}</h3>
                        <p className="font-semibold">{t.footer.ncaName}</p>
                        <p>{t.footer.ncaAddress}</p>
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
                        <h3 className="font-bold mb-2 text-red-500">
                            {t.footer.contactTitle}
                        </h3>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:bantochuc@cscv.vn"
                                className="text-red-500 hover:text-red-400 hover:underline"
                            >
                                bantochuc@cscv.vn
                            </a>{" "}
                            {t.footer.or}{" "}
                            <a
                                href="mailto:contact@cscv.vn"
                                className="text-red-500 hover:text-red-400 hover:underline"
                            >
                                contact@cscv.vn
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

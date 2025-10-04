import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // menu mobile
    const [langOpen, setLangOpen] = useState(false); // dropdown ngôn ngữ
    const { language, setLanguage } = useLanguage(); // ngôn ngữ từ context
    const location = useLocation();
    const navigate = useNavigate();

    // Scroll về đầu trang khi vào trang Contact
    useEffect(() => {
        if (location.pathname === "/contact") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location.pathname]);

    const scrollToTop = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/");
        }
    };

    const handleNavClick = (e, href) => {
        if (location.pathname !== "/") {
            e.preventDefault();
            navigate("/");
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    const t = translations[language]; // lấy bản dịch theo ngôn ngữ hiện tại

    // Check if nav item is active
    const isActiveNavItem = (item) => {
        if (item.isRoute) {
            return location.pathname === item.href;
        }
        return false;
    };

    const navItems = [
        { label: t.nav.overview, href: "#tong-quan", isRoute: false },
        { label: t.nav.schedule, href: "#lich-trinh", isRoute: false },
        { label: t.nav.participants, href: "#doi-tuong", isRoute: false },
        { label: t.nav.mainActivities, href: "#hoat-dong-chinh", isRoute: false },
        { label: t.nav.sideActivities, href: "#hoat-dong-ben-le", isRoute: false },
        { label: t.nav.contact, href: "/contact", isRoute: true },
    ];

    const languages = [
        { code: "VN", label: "Tiếng Việt" },
        { code: "EN", label: "English" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-95 backdrop-blur-sm border-b border-red-800 shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
                {/* Logo */}
                <div onClick={scrollToTop} className="cursor-pointer">
                    <img
                        src="/images/asset-1.png"
                        alt="CSCV 2025 Logo"
                        className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform"
                    />
                </div>

                {/* Menu desktop */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    {navItems.map((item, i) =>
                        item.isRoute ? (
                            <Link
                                key={i}
                                to={item.href}
                                className={`transition-colors ${
                                    isActiveNavItem(item)
                                        ? "text-red-500 font-bold"
                                        : "text-gray-300 hover:text-red-500"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <a
                                key={i}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="text-gray-300 hover:text-red-500 transition-colors"
                            >
                                {item.label}
                            </a>
                        )
                    )}
                </nav>

                {/* Khu vực ngôn ngữ + nút đăng ký */}
                <div className="flex items-center gap-3 ml-4">
                    {/* Dropdown ngôn ngữ */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="px-3 py-1 border border-red-600 rounded text-sm text-gray-300 hover:bg-red-600 hover:text-white transition"
                        >
                            {language}
                        </button>

                        {langOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-gray-900 border border-red-600 rounded shadow-md">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setLangOpen(false);
                                        }}
                                        className={`block w-full text-left px-3 py-2 text-sm hover:bg-red-900 ${
                                            language === lang.code
                                                ? "font-semibold text-red-500"
                                                : "text-gray-300"
                                        }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Nút đăng ký tham gia (desktop) */}
                    <Link
                        to="/register"
                        className="px-5 py-2.5
             bg-gradient-to-r from-red-600 via-red-500 to-red-700
             text-white text-sm font-semibold rounded-xl
             shadow-xl shadow-red-600/70
             transition-all duration-300
             hover:scale-110 hover:shadow-red-400/90
             animate-glow"
                    >
                        {t.registerButton}
                    </Link>


                </div>

                {/* Nút menu mobile */}
                <button
                    className="md:hidden ml-3 text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu mobile */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-red-800 shadow-md">
                    <nav className="flex flex-col p-4 space-y-3">
                        {navItems.map((item, i) =>
                            item.isRoute ? (
                                <Link
                                    key={i}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`transition-colors ${
                                        isActiveNavItem(item)
                                            ? "text-red-500 font-bold"
                                            : "text-gray-300 hover:text-red-500"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={i}
                                    href={item.href}
                                    onClick={(e) => {
                                        handleNavClick(e, item.href);
                                        setIsOpen(false);
                                    }}
                                    className="text-gray-300 hover:text-red-500 transition-colors"
                                >
                                    {item.label}
                                </a>
                            )
                        )}

                        {/* Dropdown ngôn ngữ trong mobile */}
                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="mt-3 px-3 py-1 border border-red-600 rounded text-sm text-gray-300 hover:bg-red-600 hover:text-white transition"
                            >
                                {language}
                            </button>
                            {langOpen && (
                                <div className="absolute left-0 mt-2 w-32 bg-gray-900 border border-red-600 rounded shadow-md">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setLangOpen(false);
                                                setIsOpen(false);
                                            }}
                                            className={`block w-full text-left px-3 py-2 text-sm hover:bg-red-900 ${
                                                language === lang.code
                                                    ? "font-semibold text-red-500"
                                                    : "text-gray-300"
                                            }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Nút đăng ký tham gia (mobile) */}
                        <Link
                            to="/register"
                            className="px-5 py-2.5 bg-gradient-to-r from-red-600 via-red-500 to-red-700
               text-white text-sm font-semibold rounded-xl
               shadow-xl shadow-red-500/50
               transform transition-all duration-300
               hover:scale-110 hover:shadow-red-400/70
               animate-pulse"
                        >
                            {t.registerButton}
                        </Link>

                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

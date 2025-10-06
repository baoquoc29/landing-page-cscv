import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useActiveSection } from "../hooks/useActiveSection";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    const sectionIds = ['tong-quan', 'lich-trinh', 'doi-tuong', 'hoat-dong-chinh', 'hoat-dong-ben-le'];
    const activeSection = useActiveSection(sectionIds);

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

    const t = translations[language];

    const isActiveNavItem = (item) => {
        if (item.isRoute) return location.pathname === item.href;
        if (location.pathname === "/" && item.href.startsWith('#')) {
            const sectionId = item.href.substring(1);
            return activeSection === sectionId;
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
        <header className="fixed top-0 left-0 w-full h-20 md:h-24 bg-black bg-opacity-95 backdrop-blur-sm border-b border-red-800 shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-full">
                <div onClick={scrollToTop} className="cursor-pointer flex mt-4 items-center">
                    <img
                        src="/images/logo.png"
                        alt="CSCV 2025 Logo"
                        className="
      h-12     /* mobile nhỏ */
      sm:h-14  /* mobile lớn */
      md:h-20  /* tablet */
      lg:h-24  /* laptop */
      xl:h-28  /* màn hình lớn */
      w-auto object-contain transition-transform
      scale-150
    "
                    />
                </div>


                {/* Menu desktop */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    {navItems.map((item, i) =>
                        item.isRoute ? (
                            <Link
                                key={i}
                                to={item.href}
                                className={`transition-all duration-300 relative ${
                                    isActiveNavItem(item)
                                        ? "nav-active"
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
                                className={`transition-all duration-300 relative ${
                                    isActiveNavItem(item)
                                        ? "nav-active"
                                        : "text-gray-300 hover:text-red-500"
                                }`}
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
                            <div
                                className="absolute right-0 mt-2 w-32 bg-gray-900 border border-red-600 rounded shadow-md">
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

                    {/* Nút đăng ký */}
                    <button
                        onClick={() => window.location.href = '/register'}
                        className="px-5 py-2.5 bg-gradient-to-r from-red-600 via-red-500 to-red-700
                                   text-white text-sm font-semibold rounded-xl
                                   shadow-xl shadow-red-600/70
                                   transition-all duration-300
                                   hover:scale-110 hover:shadow-red-400/90
                                   animate-glow"
                    >
                        {t.registerButton}
                    </button>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"/>
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
                                    className={`transition-colors ${
                                        isActiveNavItem(item)
                                            ? "text-red-500 font-bold"
                                            : "text-gray-300 hover:text-red-500"
                                    }`}
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

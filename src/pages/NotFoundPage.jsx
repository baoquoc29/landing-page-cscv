import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const NotFoundPage = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-dark-800 to-black flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl w-full text-center">
                {/* Logo */}
                <div className="mb-8 animate-bounce-in">
                    <img 
                        src="/images/logo.png" 
                        alt="CSCV Logo" 
                        className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain filter drop-shadow-2xl"
                    />
                </div>

                {/* 404 Text with glow effect */}
                <div className="mb-6 animate-scale-in">
                    <h1 className="text-8xl md:text-9xl font-heading font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-glow">
                        404
                    </h1>
                    <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></div>
                </div>

                {/* Error Message */}
                <div className="mb-8 animate-slide-in-up">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        {language === 'VN' ? 'Không Tìm Thấy Trang' : 'Page Not Found'}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {language === 'VN' 
                            ? 'Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. Vui lòng kiểm tra lại URL hoặc quay về trang chủ.'
                            : 'Sorry, the page you are looking for does not exist or has been moved. Please check the URL or return to the home page.'}
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="mb-10 flex justify-center items-center gap-4 animate-fade-in">
                    <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary-500"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary-500"></div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                    <Link 
                        to="/" 
                        className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-heading font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50 min-w-[200px]"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            {language === 'VN' ? 'Về Trang Chủ' : 'Back to Home'}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    
                    <Link 
                        to="/contact" 
                        className="group relative px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-400 font-heading font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/30 min-w-[200px]"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {language === 'VN' ? 'Liên Hệ' : 'Contact'}
                        </span>
                        <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </Link>
                </div>

                {/* Additional Info */}
                <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <p className="text-sm text-gray-500">
                        {language === 'VN' 
                            ? 'Mã lỗi: 404 | Nếu bạn nghĩ đây là lỗi, vui lòng liên hệ với chúng tôi'
                            : 'Error code: 404 | If you think this is an error, please contact us'}
                    </p>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;

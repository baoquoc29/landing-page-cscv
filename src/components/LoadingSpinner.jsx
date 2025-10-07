import React from "react";

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
                {/* Rotating Ring */}
                <div className="relative w-32 h-32">
                    {/* Outer spinning ring */}
                    <div className="absolute inset-0 border-4 border-transparent border-t-red-600 border-r-red-500 rounded-full animate-spin"></div>
                    
                    {/* Inner spinning ring (opposite direction) */}
                    <div className="absolute inset-2 border-4 border-transparent border-b-red-400 border-l-red-300 rounded-full animate-spin-slow"></div>
                    
                    {/* Logo in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                            src="/images/logo.png" 
                            alt="CSCV Logo" 
                            className="w-16 h-16 object-contain animate-pulse"
                        />
                    </div>
                </div>

                {/* Loading text */}
                <div className="mt-6 text-center">
                    <p className="text-white text-lg font-semibold mb-2 animate-pulse">
                        Đang xử lý đăng ký...
                    </p>
                    <div className="flex gap-1 justify-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;

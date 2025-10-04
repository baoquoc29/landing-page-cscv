import { useState, useEffect } from 'react';

/**
 * Custom hook để theo dõi section nào đang active khi scroll
 * @param {Array} sectionIds - Mảng các ID của sections cần theo dõi
 * @returns {string} - ID của section đang active
 */
export const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            // Lấy chiều cao của header (fixed header)
            const headerOffset = 80; // Điều chỉnh theo chiều cao header của bạn
            
            // Lấy vị trí scroll hiện tại + offset header
            const scrollPosition = window.scrollY + headerOffset + 50;

            // Nếu ở gần đầu trang (trong vòng 150px), luôn active section đầu tiên
            if (window.scrollY < 150) {
                setActiveSection(sectionIds[0]);
                return;
            }

            // Nếu ở cuối trang, active section cuối cùng
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                setActiveSection(sectionIds[sectionIds.length - 1]);
                return;
            }

            // Tìm section đang visible (duyệt từ cuối lên đầu)
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    
                    // Nếu scroll position đã qua section này
                    if (scrollPosition >= sectionTop) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }
        };

        // Gọi ngay khi mount để set active section ban đầu
        handleScroll();

        // Lắng nghe sự kiện scroll với throttle để tối ưu performance
        let timeoutId = null;
        const throttledHandleScroll = () => {
            if (timeoutId === null) {
                timeoutId = setTimeout(() => {
                    handleScroll();
                    timeoutId = null;
                }, 50); // Chỉ check mỗi 50ms
            }
        };

        window.addEventListener('scroll', throttledHandleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [sectionIds]);

    return activeSection;
};

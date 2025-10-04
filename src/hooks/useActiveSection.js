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
            // Lấy vị trí scroll hiện tại
            const scrollPosition = window.scrollY + 100; // offset 100px để trigger sớm hơn

            // Tìm section đang visible
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    // Nếu scroll position nằm trong khoảng của section này
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }

            // Nếu ở đầu trang, set section đầu tiên là active
            if (window.scrollY < 200) {
                setActiveSection(sectionIds[0]);
            }
        };

        // Gọi ngay khi mount để set active section ban đầu
        handleScroll();

        // Lắng nghe sự kiện scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds]);

    return activeSection;
};

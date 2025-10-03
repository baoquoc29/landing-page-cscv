import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, direction = 'up') => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Unobserve sau khi đã visible để animation chỉ chạy 1 lần
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    // Trả về animation class dựa trên direction
    const getAnimationClass = () => {
        if (!isVisible) {
            switch(direction) {
                case 'up':
                    return 'opacity-0 translate-y-10';
                case 'down':
                    return 'opacity-0 -translate-y-10';
                case 'left':
                    return 'opacity-0 translate-x-10';
                case 'right':
                    return 'opacity-0 -translate-x-10';
                case 'scale':
                    return 'opacity-0 scale-95';
                case 'fade':
                    return 'opacity-0';
                default:
                    return 'opacity-0 translate-y-10';
            }
        }
        return 'opacity-100 translate-y-0 translate-x-0 scale-100';
    };

    return [ref, isVisible, getAnimationClass()];
};

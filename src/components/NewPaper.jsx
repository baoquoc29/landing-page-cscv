import React, { useRef, useState, useEffect } from "react";

const NEWS_ITEMS = [
    {
        title: "Tìm kiếm nhân tài an ninh mạng",
        url: "https://vneconomy.vn/tim-kiem-nhan-tai-an-ninh-mang.htm",
        image: "/images/ld1.jpg",
    },
    {
        title: "Chính thức khởi tranh cuộc thi Sinh viên An ninh mạng 2025, lan tỏa tinh thần Công ước Hà Nội",
        url: "https://tcanninhmang.vn/an-ninh-mang/202510/chinh-thuc-khoi-tranh-cuoc-thi-sinh-vien-an-ninh-mang-2025-lan-toa-tinh-than-cong-uoc-ha-noi-d966e25/",
        image: "/images/ld2.jpg",
    },
    {
        title: "Khai mạc Cuộc thi sinh viên an ninh mạng 2025",
        url: "https://www.anninhthudo.vn/khai-mac-cuoc-thi-sinh-vien-an-ninh-mang-2025-post627223.antd",
        image: "/images/ld3.jpg",
    },
    {
        title: "An ninh mạng là bức tường thành bảo vệ thành quả chuyển đổi số",
        url: "https://dantri.com.vn/cong-nghe/an-ninh-mang-la-buc-tuong-thanh-bao-ve-thanh-qua-chuyen-doi-so-20251018104558863.htm",
        image: "/images/ld4.jpg",
    },
    {
        title: "Cuộc thi Sinh viên An ninh mạng 2025: Các đội tuyển của Việt Nam thi đấu xuất sắc",
        url: "https://www.qdnd.vn/giao-duc-khoa-hoc/tin-tuc/cuoc-thi-sinh-vien-an-ninh-mang-2025-cac-doi-tuyen-cua-viet-nam-thi-dau-xuat-sac-885596",
        image: "/images/ld5.jpg",
    },
    {
        title: "Tìm kiếm những “hạt mầm” chất lượng cho thế hệ chuyên gia an ninh mạng tương lai",
        url: "https://vietnamnet.vn/tim-kiem-nhung-hat-mam-chat-luong-cho-the-he-chuyen-gia-an-ninh-mang-tuong-lai-2454122.html",
        image: "/images/ld6.jpg",
    },
    {
        title: "Hơn 300 đội tranh tài tại cuộc thi Sinh viên An ninh mạng 2025",
        url: "https://www.vietnam.vn/hon-300-doi-tranh-tai-tai-cuoc-thi-sinh-vien-an-ninh-mang-2025",
        image: "/images/ld7.webp",
    },
    {
        title: "10 đội thi đến từ Việt Nam đứng đầu bảng vòng sơ loại Sinh viên với an ninh mạng",
        url: "https://hanoimoi.vn/10-doi-thi-den-tu-viet-nam-dung-dau-bang-vong-so-loai-sinh-vien-voi-an-ninh-mang-720191.html",
        image: "/images/ld8.jpeg",
    },
    {
        title: "Công bố kết quả vòng Sơ khảo Cuộc thi Sinh viên An ninh mạng 2025",
        url: "http://cand.com.vn/Khoa-hoc-Quan-su/cong-bo-ket-qua-vong-so-khao-cuoc-thi-sinh-vien-an-ninh-mang-2025-i785104/",
        image: "/images/ld9.jpg",
    },
    {
        title: "Cuộc thi Sinh viên An ninh mạng 2025 diễn ra kịch tính, Bluebox đứng đầu",
        url: "https://viettimes.vn/cuoc-thi-sinh-vien-an-ninh-mang-2025-dien-ra-kich-tinh-bluebox-dung-dau-post190622.html",
        image: "/images/ld6.jpg",
    },
    {
        title: "Việt Nam dẫn đầu Vòng Sơ khảo Cuộc thi Sinh viên An ninh mạng 2025",
        url: "https://www.vietnamplus.vn/viet-nam-dan-dau-vong-so-khao-cuoc-thi-sinh-vien-an-ninh-mang-2025-post1071205.vnp",
        image: "/images/ld8.jpeg",
    },
    {
        title: "Cuộc thi “Sinh viên An ninh mạng 2025” lan tỏa tinh thần Công ước Hà Nội",
        url: "https://baophapluat.vn/cuoc-thi-sinh-vien-an-ninh-mang-2025-lan-toa-tinh-than-cong-uoc-ha-noi.html",
        image: "/images/ld12.jpg",
    },
    {
        title: "Việt Nam dẫn đầu Vòng Sơ khảo Cuộc thi Sinh viên An ninh mạng 2025",
        url: "https://znews.vn/viet-nam-dan-dau-vong-so-khao-cuoc-thi-sinh-vien-an-ninh-mang-2025-post1595202.html",
        image: "/images/ld7.webp",
    },
    {
        title: "Các đội thi Việt Nam chiếm trọn top 10 vòng sơ khảo cuộc thi Sinh viên An ninh mạng 2025",
        url: "https://tuoitre.vn/cac-doi-thi-viet-nam-chiem-tron-top-10-vong-so-khao-cuoc-thi-sinh-vien-an-ninh-mang-2025-20251019112124439.htm",
        image: "/images/ld13.jpg",
    },
    {
        title: "20 đội bước vào vòng Chung kết bảng A Cuộc thi “Sinh viên An ninh mạng 2025”",
        url: "https://vneconomy.vn/20-doi-buoc-vao-vong-chung-ket-bang-a-cuoc-thi-sinh-vien-an-ninh-mang-2025.htm",
        image: "/images/ld11.jpg",
    },
    {
        title: "Sơ khảo Cuộc thi Sinh viên An ninh mạng 2025: Các đội Việt Nam xuất sắc chiếm 10 vị trí đầu bảng",
        url: "https://nhandan.vn/so-khao-cuoc-thi-sinh-vien-an-ninh-mang-2025-cac-doi-viet-nam-xuat-sac-chiem-10-vi-tri-dau-bang-post916715.html",
        image: "/images/ld10.jpg",
    },
];

const NewsCard = ({ title, url, image }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[24%]
                   snap-start rounded-xl overflow-hidden bg-black/60 hover:bg-black/80
                   transition-all duration-300 flex flex-col justify-between"
    >
        {/* Ảnh hiển thị */}
        <div className="relative h-52 sm:h-60 md:h-48 lg:h-52 overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
            />
        </div>

        {/* Tiêu đề */}
        <div className="p-3 text-center flex-1 flex items-center justify-center bg-black/70">
            <h3
                className="text-[14px] font-medium text-red-400 group-hover:text-red-300
                           leading-snug line-clamp-3 overflow-hidden text-ellipsis"
                style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}
            >
                {title}
            </h3>
        </div>
    </a>
);

const NewsSection = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const itemsPerSlide = 4;
    const totalSlides = Math.ceil(NEWS_ITEMS.length / itemsPerSlide);

    const handleScroll = () => {
        const container = scrollRef.current;
        const scrollLeft = container.scrollLeft;
        const slideWidth = container.scrollWidth / totalSlides;
        const index = Math.round(scrollLeft / slideWidth);
        setActiveIndex(index);
    };

    const scrollToSlide = (index) => {
        const container = scrollRef.current;
        const slideWidth = container.scrollWidth / totalSlides;
        container.scrollTo({
            left: slideWidth * index,
            behavior: "smooth",
        });
    };

    const scrollLeft = () => {
        if (activeIndex > 0) scrollToSlide(activeIndex - 1);
    };

    const scrollRight = () => {
        if (activeIndex < totalSlides - 1) scrollToSlide(activeIndex + 1);
    };

    useEffect(() => {
        const onResize = () => handleScroll();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <section className="relative w-full bg-gradient-to-b from-black via-[#200] to-black py-10 md:py-14 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Tiêu đề */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-500">
                    TIN TỨC
                </h2>

                {/* Thanh cuộn ngang */}
                <div className="relative">
                    {/* Nút trái */}
                    <button
                        onClick={scrollLeft}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
                                   bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
                    >
                        ‹
                    </button>

                    {/* Danh sách tin */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 no-scrollbar justify-between"
                    >
                        {NEWS_ITEMS.map((item, idx) => (
                            <NewsCard key={idx} {...item} />
                        ))}
                    </div>

                    {/* Nút phải */}
                    <button
                        onClick={scrollRight}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
                                   bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
                    >
                        ›
                    </button>
                </div>

                {/* Dots */}
                <div className="mt-6 flex justify-center gap-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <span
                            key={i}
                            onClick={() => scrollToSlide(i)}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
                                i === activeIndex ? "bg-red-500 w-3" : "bg-white/30"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const tiers = {
    VN: [
        {
            id: "diamond",
            label: "ĐƠN VỊ QUẢNG CÁO TRUYỀN THÔNG KIM CƯƠNG",
            logos: [
                { src: "/logos/vsec.png", alt: "VSEC", href: "#" },
            ],
        },
        {
            id: "gold",
            label: "ĐƠN VỊ QUẢNG CÁO TRUYỀN THÔNG VÀNG",
            logos: [
                { src: "/logos/singalarity.png", alt: "Singlarity" },
            ],
        },
        {
            id: "partner",
            label: "ĐƠN VỊ ĐỒNG HÀNH",
            logos: [
                { src: "/logos/abp.jpg", alt: "abp" },
                { src: "/logos/salework.png", alt: "SaleWork" },
                { src: "/logos/weedvina.png", alt: "WeedVina" },
            ],
        },
        {
            id: "infrastructure",
            label: "ĐƠN VỊ HỖ TRỢ HẠ TẦNG",
            logos: [
                { src: "/logos/cmc.png", alt: "CMC" },
                { src: "/logos/netnam.png", alt: "NETNAM" },
                { src: "/logos/mobifone.png", alt: "MOBIFONE" },
                { src: "/logos/verichans.png", alt: "VERCHAINS" },
            ],
        },
        {
            id: "supporting",
            label: "ĐƠN VỊ ĐỒNG HÀNH CHUYÊN MÔN",
            logos: [
                { src: "/logos/phip.jpg", alt: "phip" },
            ],
        },
    ],
    EN: [
        {
            id: "diamond",
            label: "DIAMOND MEDIA & ADVERTISING PARTNER",
            logos: [
                { src: "/logos/vsec.png", alt: "VSEC", href: "#" },
            ],
        },
        {
            id: "gold",
            label: "GOLD MEDIA & ADVERTISING PARTNER",
            logos: [
                { src: "/logos/singalarity.png", alt: "Singlarity" },
            ],
        },
        {
            id: "partner",
            label: "Companion Partner",
            logos: [
                { src: "/logos/abp.jpg", alt: "abp" },
                { src: "/logos/salework.png", alt: "SaleWork" },
                { src: "/logos/weedvina.png", alt: "WeedVina" },
            ],
        },
        {
            id: "infrastructure",
            label: "Infrastructure Support Partner",
            logos: [
                { src: "/logos/cmc.png", alt: "CMC" },
                { src: "/logos/netnam.png", alt: "NETNAM" },
                { src: "/logos/mobifone.png", alt: "MOBIFONE" },
                { src: "/logos/verichans.png", alt: "VERCHAINS" },
            ],
        },
        {
            id: "supporting",
            label: "Professional Supporting Partner",
            logos: [
                { src: "/logos/phip.jpg", alt: "phip" },
            ],
        },
    ],
};


const LogoCard = ({ src, alt, href }) => {
    const name = alt.toLowerCase();
    const isSingalarity = name.includes("singlarity");
    const isCmc = name.includes("cmc");
    const isVerchains = name.includes("verchains");
    const isPhip = name.includes("phip");
    const isAbp = name.includes("abp");
    const img = (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`mx-auto transition-transform duration-300 hover:scale-110 ${
                isSingalarity
                    ? "h-10 md:h-12 lg:h-14 object-contain scale-[2] rounded-lg"
                    : isCmc
                        ? "h-10 md:h-12 lg:h-14 object-contain scale-[1.3]"
                        : isPhip
                            ? "h-10 md:h-12 lg:h-14 object-contain scale-[1.3]"
                            : isAbp
                                ? "h-10 md:h-12 lg:h-14 object-contain scale-[1.3]"
                        : isVerchains
                            ? "h-10 md:h-12 lg:h-14 object-contain scale-[1.3]"
                            : "h-10 md:h-12 lg:h-14 object-contain"
            }`}
        />
    );

    return (
        <div
            className={`bg-white rounded-lg border border-neutral-200 flex items-center justify-center 
            transition-all duration-300 px-4 py-3 hover:shadow-lg hover:border-red-500`}
        >
            {href ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={alt}
                >
                    {img}
                </a>
            ) : (
                img
            )}
        </div>
    );
};



const SponsorsSection = () => {
    const { language } = useLanguage();
    const currentTiers = tiers[language] || tiers.VN;

    return (
        <section className="w-full bg-gradient-to-b from-black via-red-950 to-black py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-500 text-glow">
                    {language === "VN" ? "NHÀ TÀI TRỢ" : "SPONSORS"}
                </h2>

                {/* Tier blocks */}
                <div className="space-y-8">
                    {currentTiers.map((tier) => (
                        <div
                            key={tier.id}
                            className="grid grid-cols-1 gap-4 lg:grid-cols-[230px_1fr] lg:gap-6"
                        >
                            {/* Badge */}
                            <div className="flex lg:block">
                                <div
                                    className={`inline-flex lg:w-[230px] items-center justify-center text-center
                    text-white text-xs md:text-sm font-semibold uppercase
                    rounded-xl px-4 py-3
                    bg-gradient-to-r from-red-900 via-red-700 to-orange-600
                    shadow-[0_0_20px_rgba(255,0,0,0.55),0_0_35px_rgba(255,100,0,0.35)]
                    border border-red-700/60
                    transition-all duration-300 hover:scale-[1.03]
                  `}
                                >
                                    {tier.label}
                                </div>
                            </div>

                            {/* Logos grid */}
                            <div
                                className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
                            >
                                {tier.logos.map((logo, i) => (
                                    <LogoCard key={`${tier.id}-${i}`} {...logo} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;

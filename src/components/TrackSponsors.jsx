import React, { useMemo } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const tiers = {
    VN: [
        {
            id: "sponsors",
            label: "NHÀ TÀI TRỢ",
            logos: [
                { src: "/logos/vsec.png", alt: "VSEC" },
                { src: "/logos/singalarity.png", alt: "Singlarity" },
                { src: "/logos/salework.png", alt: "SaleWork" },
                { src: "/logos/weedvina.png", alt: "WeedVina" },
                { src: "/logos/cmc.png", alt: "CMC" },
                { src: "/logos/netnam.png", alt: "NETNAM" },
                { src: "/logos/mobifone.png", alt: "MOBIFONE" },
                { src: "/logos/verichans.png", alt: "verichans" },
            ],
        },
    ],
    EN: [
        {
            id: "sponsors",
            label: "SPONSORS",
            logos: [
                { src: "/logos/viettel-security.png", alt: "Viettel Security" },
                { src: "/logos/fortinet.png", alt: "Fortinet" },
                { src: "/logos/ibm.png", alt: "IBM" },
                { src: "/logos/mambu.png", alt: "Mambu" },
                { src: "/logos/visa.png", alt: "VISA" },
            ],
        },
    ],
};

const LogoCard = ({ src, alt }) => {
    const isSingalarity = alt.toLowerCase().includes("singlarity");
    const isCmc = alt.toLowerCase().includes("cmc");

    return (
        <div
            className={`bg-white rounded-lg border border-neutral-200 flex items-center justify-center mx-4 flex-shrink-0
      px-6 py-3 transition-all duration-300`}
            style={{ width: 180, height: 90 }}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`object-contain mx-auto transition-transform duration-300 ${
                    isSingalarity
                        ? "transform scale-[1.2]"
                        : isCmc
                            ? "transform scale-[1.4]"
                            : "transform scale-90"
                }`}
            />
        </div>
    );
};

const SponsorsSection = () => {
    const { language } = useLanguage();
    const currentTier = tiers[language] ? tiers[language][0] : tiers.VN[0];

    // Nhân đôi mảng logo để chạy liền mạch
    const track = useMemo(
        () => [...currentTier.logos, ...currentTier.logos],
        [currentTier]
    );

    return (
        <section className="relative w-full bg-gradient-to-b from-black via-red-950 to-black py-12 overflow-hidden">
            {/* Hàng chạy ngang */}
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-sponsor-marquee whitespace-nowrap">
                    {track.map((logo, i) => (
                        <LogoCard key={`${logo.alt}-${i}`} {...logo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;

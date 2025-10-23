import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const tiers = {
    VN: [
        {
            id: "diamond",
            label: "ĐƠN VỊ TÀI TRỢ KIM CƯƠNG",
            logos: [
                { src: "/logos/vsec.png", alt: "VSEC", href: "#" },
                // { src: "/logos/tpbank.png", alt: "TPBank", href: "#" },
                // { src: "/logos/viettel-security.png", alt: "Viettel Security", href: "#" },
            ],
        },
        {
            id: "gold",
            label: "ĐƠN VỊ TÀI TRỢ VÀNG",
            logos: [
                { src: "/logos/singalarity.png", alt: "Singlarity" },
                // { src: "/logos/hpe-adg.png", alt: "HPE ADG" },
                // { src: "/logos/infosys.png", alt: "Infosys Finacle" },
                // { src: "/logos/juniper.png", alt: "Juniper Networks" },
                // { src: "/logos/samsung.png", alt: "Samsung" },
                // { src: "/logos/weeds.png", alt: "WEEDS" },
            ],
        },
        {
            id: "silver",
            label: "ĐƠN VỊ TÀI TRỢ BẠC",
            logos: [
                // { src: "/logos/amigo.png", alt: "Amigo" },
                // { src: "/logos/ibm.png", alt: "IBM" },
                // { src: "/logos/dell-intel-ms.png", alt: "Dell • Intel • Microsoft" },
                // { src: "/logos/gigamon-extrahop.png", alt: "Gigamon • ExtraHop" },
                // { src: "/logos/group-ib.png", alt: "GROUP-IB" },
                // { src: "/logos/idigicloud.png", alt: "idigicloud" },
                // { src: "/logos/mambu.png", alt: "Mambu" },
                // { src: "/logos/trellix-mi2.png", alt: "Trellix • MI2" },
                // { src: "/logos/visa.png", alt: "VISA" },
            ],
        },
        {
            id: "partner",
            label: "ĐƠN VỊ ĐỒNG HÀNH",
            logos: [
                { src: "/logos/salework.png", alt: "SaleWork" },
                { src: "/logos/weedvina.png", alt: "WeedVina" },
                // { src: "/logos/visa.png", alt: "VISA" },
            ],
        },
        {
            id: "infrastructure",
            label: "ĐƠN VỊ HẠ TẦNG",
            logos: [
                { src: "/logos/cmc.png", alt: "CMC" },
                { src: "/logos/netnam.png", alt: "NETNAM" },
                { src: "/logos/mobifone.png", alt: "MOBIFONE" },
            ],
        },
    ],
    EN: [
        {
            id: "diamond",
            label: "DIAMOND SPONSORS",
            logos: [
                { src: "/logos/agribank.png", alt: "Agribank", href: "#" },
                { src: "/logos/tpbank.png", alt: "TPBank", href: "#" },
                { src: "/logos/viettel-security.png", alt: "Viettel Security", href: "#" },
            ],
        },
        {
            id: "gold",
            label: "GOLD SPONSORS",
            logos: [
                { src: "/logos/fortinet.png", alt: "Fortinet" },
                { src: "/logos/hpe-adg.png", alt: "HPE ADG" },
                { src: "/logos/infosys.png", alt: "Infosys Finacle" },
                { src: "/logos/juniper.png", alt: "Juniper Networks" },
                { src: "/logos/samsung.png", alt: "Samsung" },
                { src: "/logos/weeds.png", alt: "WEEDS" },
            ],
        },
        {
            id: "silver",
            label: "SILVER SPONSORS",
            logos: [
                { src: "/logos/amigo.png", alt: "Amigo" },
                { src: "/logos/ibm.png", alt: "IBM" },
                { src: "/logos/dell-intel-ms.png", alt: "Dell • Intel • Microsoft" },
                { src: "/logos/gigamon-extrahop.png", alt: "Gigamon • ExtraHop" },
                { src: "/logos/group-ib.png", alt: "GROUP-IB" },
                { src: "/logos/idigicloud.png", alt: "idigicloud" },
                { src: "/logos/mambu.png", alt: "Mambu" },
                { src: "/logos/trellix-mi2.png", alt: "Trellix • MI2" },
                { src: "/logos/visa.png", alt: "VISA" },
            ],
        },
        {
            id: "partner",
            label: "PARTNER ORGANIZATIONS",
            logos: [
                { src: "/logos/ibm.png", alt: "IBM" },
                { src: "/logos/mambu.png", alt: "Mambu" },
                { src: "/logos/visa.png", alt: "VISA" },
            ],
        },
        {
            id: "infrastructure",
            label: "INFRASTRUCTURE PROVIDERS",
            logos: [
                { src: "/logos/viettel-security.png", alt: "Viettel Security" },
                { src: "/logos/fortinet.png", alt: "Fortinet" },
                { src: "/logos/dell-intel-ms.png", alt: "Dell • Intel • Microsoft" },
            ],
        },
    ],
};

const LogoCard = ({ src, alt, href }) => {
    const isSingalarity = alt.toLowerCase().includes("singlarity");
    const isCmc = alt.toLowerCase().includes("cmc");

    const img = (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`mx-auto transition-transform duration-300 ${
                isSingalarity
                    ? "h-10 md:h-12 lg:h-14 object-contain transform scale-[2] rounded-lg"
                    : isCmc
                        ? "h-10 md:h-12 lg:h-14 object-contain scale-[1.3]"
                        : "h-10 md:h-12 lg:h-14 object-contain"
            }`}
        />
    );

    return (
        <div
            className={`bg-white rounded-lg border border-neutral-200 flex items-center justify-center 
      transition-all duration-300 px-4 py-3`}
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

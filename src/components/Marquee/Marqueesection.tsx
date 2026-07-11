"use client";

import Marquee from "react-fast-marquee";

const brands = [
    "NIKE",
    "ADIDAS",
    "PUMA",
    "UNDER ARMOUR",
    "REEBOK",
    "ASICS",
    "NEW BALANCE",
    "MIZUNO",
    "UMBRO",
    "FILA",
    "KAPPA",
    "YONEX",
    "WILSON",
    "HEAD",
    "BABOLAT",
    "LOTTO",
    "JOMA",
];

export default function BrandMarquee() {
    return (
        <section className="overflow-hidden  px-5 container mx-auto border-y border-white/10 bg-[#0B1220] py-6">
            <Marquee
                speed={50}
                gradient={false}
                autoFill
            // pauseOnHover
            >
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="mx-12 cursor-pointer"
                    >
                        <h2 className="text-3xl font-black uppercase italic tracking-wide text-white/30 transition duration-300 hover:text-red-500">
                            {brand}
                        </h2>
                    </div>
                ))}
            </Marquee>
        </section >
    );
}
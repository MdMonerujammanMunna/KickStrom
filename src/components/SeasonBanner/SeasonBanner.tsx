import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SeasonBanner() {
    return (
        <section className="px-5 py-10">
            <div className="mx-auto container md:px-10 px-2">
                <div
                    className="relative overflow-hidden rounded-3xl bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1678281967101-d350b502d17b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb3RiYWxsJTIwc3RhZGl1bXxlbnwwfDB8MHx8fDI%3D')",
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60" />

                    {/* linear */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />

                    <div className="relative z-10 max-w-2xl px-8 py-24 md:px-16">
                        <span className="text-sm font-bold uppercase tracking-[3px] text-red-500">
                            LIMITLESS PERFORMANCE
                        </span>

                        <h2 className="mt-5 text-5xl font-black uppercase leading-none text-white md:text-7xl">
                            Seasonal
                            <br />
                            <span className="italic font-light">
                                Collection
                            </span>
                            <br />
                            <span className="font-bold text-red-500 ">{new Date().getFullYear()}</span>
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
                            Elevate your game with premium sports apparel,
                            footwear and accessories engineered for athletes
                            who demand performance on every field.
                        </p>

                        <Link
                            href="/DealsZone"
                            className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700"
                        >
                            Explore Offers

                            <ArrowRight
                                size={20}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Trophy, Truck } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="bg-[#030712] py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left Image */}
                <div className="relative">
                    <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-red-600/20 blur-3xl"></div>

                    <Image
                        src="/man.PNG"
                        alt="Athlete"
                        width={650}
                        height={700}
                        className="rounded-3xl object-cover"
                    />

                    <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/70 px-6 py-4 backdrop-blur">
                        <p className="text-3xl font-black text-red-500">25K+</p>
                        <p className="text-sm text-gray-300">
                            Happy Athletes
                        </p>
                    </div>
                </div>

                {/* Right Content */}

                <div>
                    <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-red-500">
                        About Kickstrom
                    </span>

                    <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
                        Gear Up.
                        <br />
                        Train Hard.
                        <br />
                        Win Every Game.
                    </h2>

                    <p className="mt-6 leading-8 text-gray-400">
                        Kickstrom is your trusted destination for premium sports
                        apparel, footwear, and equipment. From football and
                        basketball to running and fitness, we bring together
                        high-quality products from leading brands to help every
                        athlete perform at their best.
                    </p>

                    {/* Features */}

                    <div className="mt-10 space-y-5">

                        <div className="flex items-center gap-4">
                            <ShieldCheck className="text-red-500" />
                            <span>100% Genuine Sports Products</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Truck className="text-red-500" />
                            <span>Fast Nationwide Delivery</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Trophy className="text-red-500" />
                            <span>Trusted by Thousands of Athletes</span>
                        </div>

                    </div>

                    <Link
                        href="/shop"
                        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-semibold transition hover:bg-red-700"
                    >
                        Shop Collection

                        <ArrowRight size={18} />
                    </Link>

                </div>

            </div>

            {/* Stats */}

            <div className="mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">

                {[
                    ["500+", "Products"],
                    ["50+", "Top Brands"],
                    ["25K+", "Happy Customers"],
                    ["4.9★", "Customer Rating"],
                ].map(([number, title]) => (
                    <div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-[#111827] p-8 text-center transition hover:border-red-500"
                    >
                        <h3 className="text-4xl font-black text-red-500">
                            {number}
                        </h3>

                        <p className="mt-2 text-gray-400">
                            {title}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}
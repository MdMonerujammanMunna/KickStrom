import Image from "next/image";
import Link from "next/link";

export default function HomePageBanner() {
    return (
        <section className="bg-[#030712]">
            <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 lg:flex-row">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                    <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
                        ⚽ New Football Collection 2026
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
                        Gear Up <br />
                        For Every <span className="text-red-500">Victory</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-gray-400">
                        Discover premium football boots, jerseys, balls, and accessories
                        designed for champions. Shop the latest collection today.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                        <Link
                            href="/shop"
                            className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
                        >
                            Shop Now
                        </Link>

                        <Link
                            href="/products"
                            className="rounded-xl border border-gray-700 px-8 py-4 font-semibold text-white transition hover:border-red-500 hover:text-red-400"
                        >
                            Explore Products
                        </Link>
                    </div>

                    <div className="mt-10 flex justify-center gap-10 lg:justify-start ">
                        <div>
                            <h3 className="text-3xl font-bold text-white">10K+</h3>
                            <p className="text-gray-400">Happy Customers</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-white">500+</h3>
                            <p className="text-gray-400">Products</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-white">4.9★</h3>
                            <p className="text-gray-400">Customer Rating</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex flex-1 justify-center ">
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 -z-10 rounded-full bg-red-600/30 blur-3xl"></div>

                        <Image
                            src="https://img.magnific.com/premium-vector/football-player-side-dribble-vector-illustration-dynamic-soccer-sports-mascot-design_1029561-1603.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Football Player"
                            width={550}
                            height={650}
                            priority
                            className="animate-pulse object-contain rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { TypeAnimation } from "react-type-animation";

export default function HomePageBanner() {

    const heroImages = [
        "https://cdn.pixabay.com/photo/2024/04/29/13/54/football-8727942_640.png"
        ,
        "https://cdn.pixabay.com/photo/2024/07/24/17/44/ai-generated-8918965_1280.png",
    ];
    return (
        <section className="bg-[#030712] container mx-auto px-10">
            <div className="mx-auto flex flex-col-reverse items-center gap-12 px-6 py-20 lg:flex-row">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                    <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
                        ⚽ New Football Collection {new Date().getFullYear()}
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl fade-up appear" style={{ animationDelay: '0.18s' }}>
                        Gear Up <br />
                        For   <br />
                        <span className="text-red-500">Every </span>
                        <span className="text-red-500">
                            <TypeAnimation
                                sequence={[
                                    'Victory',
                                    2000,
                                    "Moments",
                                    2000,
                                    "Tournaments",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={70}
                                // style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-400 fade-up appear" style={{ animationDelay: '0.34s' }}>
                        Discover premium football boots, jerseys, balls, and accessories
                        designed for champions. Shop the latest collection today.
                    </p>

                    <div className="mt-8 flex  justify-center gap-4 sm:flex-row lg:justify-start fade-up appear" style={{ animationDelay: '0.5s' }}>
                        <Link
                            href="/Products"
                        >

                            <button
                                className=" relative flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all bg-red-500 rounded-md group"
                                style={{ animationDelay: '0.6s' }}
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-red-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                > Shop Now</span>
                            </button>

                        </Link>

                        <Link
                            href="/Products"
                        >
                            <button className="button" style={{ animationDelay: '0.72s' }}>Explore Products</button>
                        </Link>
                    </div>

                    <div className="mt-10 flex justify-center gap-10 lg:justify-start " style={{ animationDelay: '0.86s' }}>
                        <div>
                            <h3 className="text-3xl font-bold text-white fade-up appear" style={{ animationDelay: '0.9s' }}>10K+</h3>
                            <p className="text-gray-400 fade-up appear" style={{ animationDelay: '1.02s' }}>Happy Customers</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-white fade-up appear" style={{ animationDelay: '1.14s' }}>500+</h3>
                            <p className="text-gray-400 fade-up appear" style={{ animationDelay: '1.26s' }}>Products</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-white fade-up appear" style={{ animationDelay: '1.38s' }}>4.9★</h3>
                            <p className="text-gray-400 fade-up appear" style={{ animationDelay: '1.5s' }}>Customer Rating</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex flex-1 justify-center">
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 -z-10  bg-red-600/30 blur-3xl"></div>

                        <div className="h-137 w-137 overflow-hidden  rounded-xl px-10 float-slow fade-up" style={{ animationDelay: '0.7s' }}>
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                speed={800}
                                className="h-full w-full"
                            >
                                {heroImages.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={image}
                                            alt={`Football Player ${index + 1}`}
                                            width={650}
                                            height={650}
                                            priority={index === 0}
                                            className="h-full w-full object-cover rounded-xl animate-pulse"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import Link from 'next/link';
import React from 'react';

const CatagorisPage = () => {
    return (
        <>
            <section className="bg-[#030712] py-20 container mx-auto">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-14">
                        <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">
                            Categories
                        </span>

                        <h2 className="text-4xl font-bold text-white mt-3">
                            Shop By Category
                        </h2>

                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                            Find everything you need for your favorite sport. Browse our premium
                            collection by category.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {[
                            {
                                name: "Football",
                                image:
                                    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600",
                            },
                            {
                                name: "Basketball",
                                image:
                                    "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600",
                            },
                            {
                                name: "Running",
                                image:
                                    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600",
                            },
                            {
                                name: "Accessories",
                                image:
                                    "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600",
                            },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500 duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">

                                    <img
                                        src={item.image}
                                        className="w-full h-full object-cover group-hover:scale-110 duration-500"
                                    />

                                    <div className="absolute inset-0 bg-black/40 flex items-end">

                                        <div className="p-6">

                                            <h3 className="text-2xl font-bold text-white">
                                                {item.name}
                                            </h3>

                                            <Link href="/Products" className="mt-3 text-red-500 font-semibold">
                                                Explore →
                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default CatagorisPage;
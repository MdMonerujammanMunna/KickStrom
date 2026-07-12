"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { onValue, ref } from "firebase/database";
import { db } from "@/lib/firebase";

interface Product {
    id: string;
    name: string;
    category: string;
    brand: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    stock: number;
    description: string;
    descriptionShort: string;
}

export default function AllProducts() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [priceRange, setPriceRange] = useState("All");
    const [sortBy, setSortBy] = useState("featured");
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        const productsRef = ref(db, "products");

        const unsubscribe = onValue(
            productsRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    const data = Object.entries(snapshot.val()).map(([id, value]) => ({
                        id,
                        ...(value as Omit<Product, "id">),
                    }));

                    setProducts(data);
                } else {
                    setProducts([]);
                }

                setLoading(false);
            },
            (error) => {
                console.error(error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    const filteredProducts = useMemo(() => {
        const filtered = products.filter((product) => {
            const matchSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchCategory =
                category === "All" || product.category === category;

            let matchPrice = true;

            if (priceRange === "0-50") {
                matchPrice = product.price <= 50;
            } else if (priceRange === "50-100") {
                matchPrice = product.price > 50 && product.price <= 100;
            } else if (priceRange === "100+") {
                matchPrice = product.price > 100;
            }

            return matchSearch && matchCategory && matchPrice;
        });

        const sorted = [...filtered];

        switch (sortBy) {
            case "price-low":
                sorted.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                sorted.sort((a, b) => b.price - a.price);
                break;
            case "name-az":
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-za":
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }

        return sorted;
    }, [products, search, category, priceRange, sortBy]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const validCurrentPage = Math.min(currentPage, totalPages || 1);

    const paginatedProducts = useMemo(() => {
        const startIndex = (validCurrentPage - 1) * productsPerPage;
        return filteredProducts.slice(startIndex, startIndex + productsPerPage);
    }, [filteredProducts, validCurrentPage]);

    const startItem = filteredProducts.length === 0 ? 0 : (validCurrentPage - 1) * productsPerPage + 1;
    const endItem = Math.min(validCurrentPage * productsPerPage, filteredProducts.length);

    return (
        <section className="bg-slate-950  py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-8">
                    All Products
                </h1>

                {/* Search & Filters */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-10">
                    <div className="relative">
                        <Search
                            className="absolute left-3 top-3 text-gray-400"
                            size={18}
                        />

                        <input
                            type="text"
                            placeholder="Search product..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white outline-none focus:border-red-500"
                        />
                    </div>

                    <select
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
                    >
                        <option>All</option>
                        <option>Football</option>
                        <option>Running</option>
                        <option>Basketball</option>
                        <option>Cricket</option>
                    </select>

                    <select
                        value={priceRange}
                        onChange={(e) => {
                            setPriceRange(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
                    >
                        <option value="All">All Prices</option>
                        <option value="0-50">Under $50</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="100+">Above $100</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name-az">Name: A-Z</option>
                        <option value="name-za">Name: Z-A</option>
                    </select>
                </div>

                {loading ? (
                    <div className="text-center py-20">
                        <h2 className="text-white text-2xl font-semibold">
                            Loading Products...
                        </h2>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
                            <p>
                                Showing {startItem}-{endItem} of {filteredProducts.length} products
                            </p>
                            <p>
                                Page {currentPage} of {totalPages || 1}
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {paginatedProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500 hover:-translate-y-1 duration-300 group"
                                >
                                    <div className="relative h-60 overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-110 duration-500"
                                        />

                                        {product.discount > 0 && (
                                            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                                {product.discount}% OFF
                                            </span>
                                        )}

                                        <span
                                            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${product.stock > 0
                                                ? "bg-green-600 text-white"
                                                : "bg-gray-700 text-gray-200"
                                                }`}
                                        >
                                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                                        </span>
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <span className="text-slate-400 text-sm">
                                            {product.brand}
                                        </span>

                                        <h2 className="text-xl font-bold text-white line-clamp-1">
                                            {product.name}
                                        </h2>

                                        <p className="text-slate-400 text-sm line-clamp-2">
                                            {product.descriptionShort}
                                        </p>

                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl font-bold text-red-500">
                                                ${product.price}
                                            </span>

                                            {product.oldPrice > 0 && (
                                                <span className="text-slate-500 line-through">
                                                    ${product.oldPrice}
                                                </span>
                                            )}
                                        </div>

                                        <Link
                                            href={`/products/${product.id}`}
                                            className="block w-full text-center bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-semibold duration-300"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProducts.length > productsPerPage && (
                            <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={validCurrentPage === 1}
                                    className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-500"
                                >
                                    Previous
                                </button>

                                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-2 rounded-lg border ${validCurrentPage === page
                                            ? "border-red-500 bg-red-600 text-white"
                                            : "border-slate-700 bg-slate-900 text-slate-300 hover:border-red-500"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={validCurrentPage === totalPages}
                                    className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-500"
                                >
                                    Next
                                </button>
                            </div>
                        )}

                        {filteredProducts.length === 0 && (
                            <div className="text-center mt-20">
                                <h2 className="text-3xl font-bold text-white">
                                    No Products Found
                                </h2>

                                <p className="text-gray-400 mt-2">
                                    Try changing your search or filters.
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
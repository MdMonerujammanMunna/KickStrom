"use client";

import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { push, ref } from "firebase/database";
import { ChangeEvent, FormEvent, useState } from "react";


export default function AddNewData() {
    const user = useAuth();
    const [product, setProduct] = useState({
        name: "",
        category: "",
        brand: "",
        image: "",
        price: "",
        oldPrice: "",
        discount: "",
        stock: "",
        description: "",
        descriptionShort: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const productsRef = ref(db, "products");
            const newProductRef = await push(productsRef, {
                ...product,
                createdBy: user.user?.uid,
                price: Number(product.price),
                oldPrice: Number(product.oldPrice),
                discount: Number(product.discount),
                stock: Number(product.stock),
                createdAt: new Date().toISOString(),
            });

            // console.log("Record key:", newProductRef.key);
            // alert("Product Added Successfully!");

            // Form reset
            setProduct({
                name: "",
                category: "",
                brand: "",
                image: "",
                price: "",
                oldPrice: "",
                discount: "",
                stock: "",
                description: "",
                descriptionShort: "",
            });

        } catch (error) {
            console.error(error);
            alert("Failed to add product!");
        }
    };

    return (
        <section className="min-h-screen bg-[#030712] flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-5xl rounded-3xl border border-gray-800 bg-linear-to-br from-[#111827] to-[#0f172a] p-8 md:p-10 shadow-2xl">

                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-bold text-white">
                        Add New Product
                    </h2>
                    <p className="mt-2 text-gray-400">
                        Fill in the product information below.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Basic Info */}
                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Product Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Nike Mercurial Vapor"
                                value={product.name}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Brand
                            </label>

                            <input
                                type="text"
                                name="brand"
                                placeholder="Nike"
                                value={product.brand}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                                required
                            />
                        </div>

                    </div>

                    {/* Category + Image */}
                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Category
                            </label>

                            <input
                                type="text"
                                name="category"
                                placeholder="Football Boots"
                                value={product.category}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Image URL
                            </label>

                            <input
                                type="url"
                                name="image"
                                placeholder="https://..."
                                value={product.image}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                                required
                            />
                        </div>

                    </div>

                    {/* Price */}
                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Price
                            </label>

                            <input
                                type="number"
                                name="price"
                                placeholder="$99"
                                value={product.price}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Old Price
                            </label>

                            <input
                                type="number"
                                name="oldPrice"
                                placeholder="$129"
                                value={product.oldPrice}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            />
                        </div>

                    </div>

                    {/* Extra Info */}
                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Discount %
                            </label>

                            <input
                                type="number"
                                name="discount"
                                placeholder="20"
                                value={product.discount}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Stock
                            </label>

                            <input
                                type="number"
                                name="stock"
                                placeholder="50"
                                value={product.stock}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            />
                        </div>

                    </div>
                    {/* Short Description */}
                    <div>

                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Short Description
                        </label>

                        <textarea
                            rows={2}
                            name="descriptionShort"
                            placeholder="Write short product description..."
                            value={product.descriptionShort}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                        />

                    </div>
                    {/* Description */}
                    <div>

                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Full Description
                        </label>

                        <textarea
                            rows={5}
                            name="description"
                            placeholder="Write product description..."
                            value={product.description}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-700 bg-[#1f2937]/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-linear-to-r from-red-600 to-red-500 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20 active:scale-100"
                    >
                        Add Product
                    </button>

                </form>

            </div>
        </section>
    );
}
"use client";

import { db } from "@/lib/firebase";
import { push, ref } from "firebase/database";
import { ChangeEvent, FormEvent, useState } from "react";


export default function AddNewData() {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        brand: "",
        image: "",
        price: "",
        oldPrice: "",
        discount: "",
        rating: "",
        stock: "",
        description: "",
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

        // console.log(product);
        try {
            const productsRef = ref(db, "products");
            const newProductRef = await push(productsRef, {
                ...product,
                price: Number(product.price),
                oldPrice: Number(product.oldPrice),
                discount: Number(product.discount),
                rating: Number(product.rating),
                stock: Number(product.stock),
                createdAt: new Date().toISOString(),
            });

            console.log("Record key:", newProductRef.key);
            alert("Product Added Successfully!");

            // Form reset
            setProduct({
                name: "",
                category: "",
                brand: "",
                image: "",
                price: "",
                oldPrice: "",
                discount: "",
                rating: "",
                stock: "",
                description: "",
            });

        } catch (error) {
            console.error(error);
            alert("Failed to add product!");
        }
    };

    return (
        <section className="min-h-screen bg-[#030712] py-16">
            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-800 bg-[#111827] p-8 shadow-xl">
                <h2 className="mb-8 text-center text-3xl font-bold text-white">
                    Add New Product
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={product.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={product.category}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                        required
                    />

                    <input
                        type="text"
                        name="brand"
                        placeholder="Brand"
                        value={product.brand}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                        required
                    />

                    <input
                        type="url"
                        name="image"
                        placeholder="Image URL"
                        value={product.image}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                        required
                    />

                    <div className="grid gap-5 md:grid-cols-2">
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={product.price}
                            onChange={handleChange}
                            className="rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                            required
                        />

                        <input
                            type="number"
                            name="oldPrice"
                            placeholder="Old Price"
                            value={product.oldPrice}
                            onChange={handleChange}
                            className="rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                        />
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <input
                            type="number"
                            name="discount"
                            placeholder="Discount %"
                            value={product.discount}
                            onChange={handleChange}
                            className="rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                        />

                        <input
                            type="number"
                            step="0.1"
                            max="5"
                            name="rating"
                            placeholder="Rating"
                            value={product.rating}
                            onChange={handleChange}
                            className="rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                        />

                        <input
                            type="number"
                            name="stock"
                            placeholder="Stock"
                            value={product.stock}
                            onChange={handleChange}
                            className="rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                        />
                    </div>

                    <textarea
                        rows={5}
                        name="description"
                        placeholder="Product Description"
                        value={product.description}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-700 bg-[#1F2937] p-3 text-white outline-none focus:border-red-500"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-red-600 py-3 text-lg font-semibold text-white transition hover:bg-red-700"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </section>
    );
}
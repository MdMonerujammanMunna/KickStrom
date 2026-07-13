"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { onValue, ref } from "firebase/database";
import { db } from "@/lib/firebase";
import { useParams } from "next/navigation";

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



export default function ProductDetailPage() {
    const params = useParams();
    // console.log(params);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productRef = ref(db, `products/${params.id}`);

        const unsubscribe = onValue(
            productRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val() as Omit<Product, "id">;
                    setProduct({ id: params.id, ...data });
                } else {
                    setProduct(null);
                }
                setLoading(false);
            },
            (error) => {
                console.error(error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [params.id]);

    return (
        <div className="grid gap-10 lg:grid-cols-2 container mx-auto px-20 py-10">

            {/* Left Image */}
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                <div className="relative h-160 w-full">
                    <Image
                        src={product?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cARQ2SzjavH401RcXB_USSiYcq0DH66sUdKj2uPu1Q&s=10"}
                        alt={product?.name || "Product"}
                        fill
                        className="object-fill"
                    />
                </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">

                {/* Category */}
                <span className="inline-block rounded-full bg-red-600/20 px-4 py-1 text-sm font-semibold text-red-400">
                    {product?.category}
                </span>

                {/* Name */}
                <h1 className="text-5xl font-bold text-white">
                    {product?.name}
                </h1>

                {/* Brand */}
                <p className="text-lg text-slate-400">
                    Brand :
                    <span className="ml-2 text-white">
                        {product?.brand}
                    </span>
                </p>

                {/* Price */}
                <div className="flex items-center gap-5">

                    <h2 className="text-5xl font-bold text-red-500">
                        ${product?.price}
                    </h2>

                    {Number(product?.oldPrice) > 0 && (
                        <span className="text-2xl text-slate-500 line-through">
                            ${product?.oldPrice}
                        </span>
                    )}

                    {Number(product?.discount) > 0 && (
                        <span className="rounded-full bg-green-600/20 px-3 py-1 text-sm font-semibold text-green-400">
                            {product?.discount}% OFF
                        </span>
                    )}

                </div>

                {/* Short Description */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <h3 className="mb-2 text-lg font-semibold text-white">
                        Short Description
                    </h3>

                    <p className="leading-7 text-slate-400">
                        {product?.descriptionShort}
                    </p>
                </div>

                {/* Description */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <h3 className="mb-2 text-lg font-semibold text-white">
                        Description
                    </h3>

                    <p className="leading-8 text-slate-400">
                        {product?.description}
                    </p>
                </div>

                {/* Information */}
                <div className="grid gap-4 sm:grid-cols-2">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-500">
                            Stock
                        </p>

                        <p className="mt-2 text-2xl font-bold text-emerald-400">
                            {product?.stock}
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-500">
                            Created At
                        </p>

                        <p className="mt-2 text-white">
                            {new Date(product?.createdAt).toLocaleDateString()}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

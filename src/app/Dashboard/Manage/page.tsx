"use client";
interface Product {
    stock: number;
    createdBy: string;
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    price: number;
    image: string;
}
import { useEffect, useState } from "react";
import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { get, ref } from "firebase/database";
import { db } from "@/lib/firebase";
import NoProductsFound from "@/components/Emtey/Emtey";
import { AlertDialogDestructive } from "@/components/DeleteBar/Delete";

export default function ManageProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const user = useAuth();
    const UserID = user?.user?.uid
    useEffect(() => {
        const getProducts = async () => {
            try {
                const snapshot = await get(ref(db, "products"));

                if (!snapshot.exists()) {
                    setProducts([]);
                    return;
                }

                const allProducts = Object.entries(snapshot.val()).map(([id, value]) => ({
                    id,
                    ...(value as object),
                }));

                const myProducts = allProducts.filter(
                    (item) => item.createdBy === UserID
                );

                setProducts(myProducts);
            } catch (error) {
                console.error(error);
            }
        };

        if (UserID) {
            getProducts();
        }
    }, [UserID]);


    return (
        <>
            {
                products.length <= 0 ?
                    <>
                        <NoProductsFound />
                    </>
                    :
                    <>
                        <section className=" bg-[#030712] px-4 py-10">
                            <div className="mx-auto max-w-7xl">

                                {/* Header */}
                                <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-gray-800 bg-[#111827] p-6 md:flex-row md:items-center md:justify-between">

                                    <div>
                                        <h1 className="text-3xl font-bold text-white">
                                            Manage Products
                                        </h1>

                                        <p className="mt-2 text-gray-400">
                                            Manage all your sports products from one place.
                                        </p>
                                    </div>

                                    <Link href="/Dashboard/AddNew" className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
                                        <Plus size={20} />
                                        Add Product
                                    </Link>
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-[#111827]">

                                    <table className="w-full">

                                        <thead className="bg-[#1F2937]">

                                            <tr className="text-left text-sm uppercase tracking-wide text-gray-400">

                                                <th className="px-6 py-4">Image</th>
                                                <th className="px-6 py-4">Product</th>
                                                <th className="px-6 py-4">Category</th>
                                                <th className="px-6 py-4">Brand</th>
                                                <th className="px-6 py-4">Price</th>
                                                <th className="px-6 py-4">Stock</th>
                                                <th className="px-6 py-4 text-center">Action</th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {products.map((item) => (

                                                <tr
                                                    key={item.id}
                                                    className="border-t border-gray-800 transition hover:bg-[#1b2434]"
                                                >

                                                    {/* Image */}
                                                    <td className="px-6 py-4">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={60}
                                                            height={60}
                                                            className="rounded-xl object-cover"
                                                        />
                                                    </td>

                                                    {/* Product */}
                                                    <td className="px-6 py-4">

                                                        <h2 className="font-semibold text-white">
                                                            {item.name}
                                                        </h2>

                                                        <p className="mt-1 max-w-xs text-sm text-gray-400">
                                                            {item.description}
                                                        </p>

                                                    </td>

                                                    {/* Category */}
                                                    <td className="px-6 py-4 text-gray-300">
                                                        {item.category}
                                                    </td>

                                                    {/* Brand */}
                                                    <td className="px-6 py-4 text-gray-300">
                                                        {item.brand}
                                                    </td>

                                                    {/* Price */}
                                                    <td className="px-6 py-4 font-semibold text-green-400">
                                                        ${item.price}
                                                    </td>

                                                    {/* Stock */}
                                                    <td className="px-6 py-4">

                                                        <span
                                                            className={`rounded-full px-3 py-1 text-sm font-medium ${item.stock > 10
                                                                ? "bg-green-500/20 text-green-400"
                                                                : "bg-yellow-500/20 text-yellow-400"
                                                                }`}
                                                        >
                                                            {item.stock}
                                                        </span>

                                                    </td>


                                                    {/* Action */}
                                                    <td className="px-6 py-4">

                                                        <div className="flex justify-center gap-3">

                                                            <button className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700">
                                                                <Pencil size={18} />
                                                            </button>
                                                            <AlertDialogDestructive productId={item.id} />
                                                        </div>

                                                    </td>

                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </section>
                    </>
            }
        </>

    );
}
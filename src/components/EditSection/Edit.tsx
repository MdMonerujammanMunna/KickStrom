"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/firebase";
import { ref, update } from "firebase/database";
import { Pencil } from "lucide-react";

interface Product {
    id: string;
    name: string;
    brand: string;
    category: string;
    description: string;
    descriptionShort: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    stock: number;
}

interface Props {
    product: Product;
}


export default function UpdateProductDialog({ product }: Props) {
    const producto = product;

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        try {
            await update(ref(db, `products/${producto.id}`), {
                ...data,
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert("Update failed");
        }
    };
    return (
        <Dialog>
            <DialogTrigger
                render={
                    <button className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700">
                        <Pencil size={18} />
                    </button>
                }
            />

            <DialogContent className="max-w-7xl rounded-xl border border-slate-800 bg-slate-950 p-0 overflow-hidden">
                <form onSubmit={handleUpdate} className="py-5">

                    {/* Header */}
                    <DialogHeader className="border-b border-slate-800 px-6 py-5">
                        <DialogTitle className="text-xl font-bold">
                            Update Product
                        </DialogTitle>

                        <DialogDescription>
                            Update your product information.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Scrollable Body */}
                    <div className="max-h-[60vh] overflow-y-auto px-6 py-6">

                        <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <Field>
                                <Label>Name</Label>
                                <Input
                                    name="name"
                                    defaultValue={product.name}
                                />
                            </Field>

                            <Field>
                                <Label>Brand</Label>
                                <Input
                                    name="brand"
                                    defaultValue={product.brand}
                                />
                            </Field>

                            <Field>
                                <Label>Category</Label>
                                <Input
                                    name="category"
                                    defaultValue={product.category}
                                />
                            </Field>

                            <Field>
                                <Label>Image URL</Label>
                                <Input
                                    name="image"
                                    defaultValue={product.image}
                                />
                            </Field>

                            <Field>
                                <Label>Price</Label>
                                <Input
                                    type="number"
                                    name="price"
                                    defaultValue={product.price}
                                />
                            </Field>

                            <Field>
                                <Label>Old Price</Label>
                                <Input
                                    type="number"
                                    name="oldPrice"
                                    defaultValue={product.oldPrice}
                                />
                            </Field>

                            <Field>
                                <Label>Discount (%)</Label>
                                <Input
                                    type="number"
                                    name="discount"
                                    defaultValue={product.discount}
                                />
                            </Field>

                            <Field>
                                <Label>Stock</Label>
                                <Input
                                    type="number"
                                    name="stock"
                                    defaultValue={product.stock}
                                />
                            </Field>

                            <Field className="md:col-span-2">
                                <Label>Short Description</Label>
                                <Textarea
                                    rows={3}
                                    name="descriptionShort"
                                    defaultValue={product.descriptionShort}
                                />
                            </Field>

                            <Field className="md:col-span-2">
                                <Label>Description</Label>
                                <Textarea
                                    rows={5}
                                    name="description"
                                    defaultValue={product.description}
                                />
                            </Field>

                        </FieldGroup>
                    </div>

                    {/* Footer */}
                    <DialogFooter className="border-t border-slate-800 px-6 py-4">
                        <DialogClose
                            render={
                                <button className="px-3 py-1 rounded-full cursor-pointer border-2 border-gray-600">
                                    Cancel
                                </button>
                            }
                        />

                        <button type="submit" className="px-3 py-1 rounded-full bg-green-600/50 cursor-pointer text-white transition hover:bg-green-700">
                            Update Product
                        </button>
                    </DialogFooter>

                </form>
            </DialogContent>
        </Dialog>
    );
}
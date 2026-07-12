import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NoProductsFound() {
    return (
        <div className="flex  flex-col items-center justify-center rounded-2xl border border-gray-800 bg-[#0b1220] px-6 py-16 text-center">
            <div className="mb-6 rounded-full bg-red-500/10 p-5">
                <PackageSearch className="h-14 w-14 text-red-500" />
            </div>

            <h2 className="text-3xl font-bold text-white">
                No Products Found
            </h2>

            <p className="mt-3 max-w-md text-gray-400">
                You haven't added any products yet. Start by creating your first product
                and it will appear here.
            </p>

            <div className="mt-8 flex gap-4">
                <Link href="/Dashboard/AddNew">
                    <Button className="bg-red-600 hover:bg-red-700 cursor-pointer">
                        Add Product
                    </Button>
                </Link>

                <Link href="/">
                    <Button variant="outline" className="cursor-pointer">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
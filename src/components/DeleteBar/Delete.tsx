import { Trash2 } from "lucide-react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ref, remove } from "firebase/database";
import { db } from "@/lib/firebase";

export function AlertDialogDestructive({ productId }: { productId: string }) {
    const DeleteProduct = async (id: string) => {
        try {
            await remove(ref(db, `products/${id}`));
            window.location.reload();
        } catch (error) {
            console.error("Delete failed:", error);
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger
                render={<button className="rounded-lg cursor-pointer bg-red-600 p-2 text-white transition hover:bg-red-700">
                    <Trash2 size={18} />
                </button>}
            />
            <AlertDialogContent size="sm" className="bg-black pt-0">
                <AlertDialogHeader>
                    <AlertDialogMedia>
                    </AlertDialogMedia>
                    <AlertDialogTitle className="pt-0">Delete Product?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to delete this product?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={"cursor-pointer"}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => { DeleteProduct(productId) }} className={"bg-red-500 cursor-pointer"} >Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

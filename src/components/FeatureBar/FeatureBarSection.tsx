import {
    Truck,
    ShieldCheck,
    RotateCcw,
    Trophy,
} from "lucide-react";

const features = [
    {
        icon: Truck,
        title: "FREE SHIPPING",
        desc: "Free delivery on orders over $99",
    },
    {
        icon: ShieldCheck,
        title: "SECURE PAYMENT",
        desc: "100% SSL Protected Checkout",
    },
    {
        icon: RotateCcw,
        title: "EASY RETURNS",
        desc: "7-Day Hassle-Free Returns",
    },
    {
        icon: Trophy,
        title: "PREMIUM QUALITY",
        desc: "Trusted Sports Equipment",
    },
];

export default function FeatureBar() {
    return (
        <section className="bg-[#0B1220] border-y border-white/10">
            <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
                {features.map(({ icon: Icon, title, desc }) => (
                    <div
                        key={title}
                        className="group flex items-center gap-4 px-6 py-6 transition-all duration-300 hover:bg-white/5"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-500 transition group-hover:scale-110">
                            <Icon size={28} />
                        </div>

                        <div>
                            <h3 className="text-sm font-bold tracking-wide text-white">
                                {title}
                            </h3>

                            <p className="mt-1 text-sm text-gray-400">
                                {desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
import { Flame, Gift, Truck, Timer, ShoppingBag, Trophy } from "lucide-react";

const deals = [
    {
        id: 1,
        title: "Flash Sale",
        subtitle: "Nike Mercurial Boots",
        discount: "40% OFF",
        icon: Flame,
        color: "bg-red-600",
        button: "Shop Now",
    },
    {
        id: 2,
        title: "Weekend Offer",
        subtitle: "Football Jersey Collection",
        discount: "BUY 1 GET 1",
        icon: Gift,
        color: "bg-orange-500",
        button: "Grab Deal",
    },
    {
        id: 3,
        title: "Free Shipping",
        subtitle: "Orders Over $100",
        discount: "FREE",
        icon: Truck,
        color: "bg-emerald-600",
        button: "Explore",
    },
    {
        id: 4,
        title: "Limited Time",
        subtitle: "Sports Accessories",
        discount: "20% OFF",
        icon: Timer,
        color: "bg-purple-600",
        button: "View Offer",
    },
    {
        id: 5,
        title: "Bundle Offer",
        subtitle: "Football + Gloves",
        discount: "SAVE 30%",
        icon: ShoppingBag,
        color: "bg-blue-600",
        button: "Shop Bundle",
    },
    {
        id: 6,
        title: "Premium Deal",
        subtitle: "Adidas Predator",
        discount: "35% OFF",
        icon: Trophy,
        color: "bg-yellow-500",
        button: "Buy Now",
    },
];

export default function DealsZone() {
    return (
        <section className="bg-[#030712] py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500">
                        Limited Offers
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-white">
                        Deals <span className="text-red-500">Zone</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Grab the hottest sports deals before they are gone.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {deals.map((deal) => {
                        const Icon = deal.icon;

                        return (
                            <div
                                key={deal.id}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220] p-7 transition duration-300 hover:-translate-y-2 hover:border-red-500/50"
                            >
                                {/* Background Glow */}
                                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-600/10 blur-3xl transition group-hover:bg-red-600/20" />

                                {/* Badge */}
                                <div
                                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white ${deal.color}`}
                                >
                                    <Icon size={18} />
                                    {deal.discount}
                                </div>

                                {/* Content */}
                                <h3 className="mt-8 text-2xl font-bold text-white">
                                    {deal.title}
                                </h3>

                                <p className="mt-3 text-gray-400">
                                    {deal.subtitle}
                                </p>

                                {/* Button */}
                                <button className="mt-8 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
                                    {deal.button}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
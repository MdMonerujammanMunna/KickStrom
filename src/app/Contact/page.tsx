import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white">

            {/* Hero */}
            <section className="border-b border-white/10 bg-linear-to-b from-red-500/10 to-transparent py-20">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="text-5xl font-bold">
                        Contact <span className="text-red-500">Us</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                        Have questions about our sports products, orders, or
                        services? We would love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">

                {/* Left */}
                <div>

                    <h2 className="mb-8 text-3xl font-bold">
                        Get In Touch
                    </h2>

                    <div className="space-y-6">

                        <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                            <div className="rounded-full bg-red-500/10 p-4">
                                <Mail className="text-red-500" />
                            </div>

                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-gray-400">
                                    support@sportshop.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                            <div className="rounded-full bg-red-500/10 p-4">
                                <Phone className="text-red-500" />
                            </div>

                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-gray-400">
                                    +880 1234 567890
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                            <div className="rounded-full bg-red-500/10 p-4">
                                <MapPin className="text-red-500" />
                            </div>

                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-gray-400">
                                    Rangpur, Bangladesh
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#0b1220] p-5">
                            <div className="rounded-full bg-red-500/10 p-4">
                                <Clock className="text-red-500" />
                            </div>

                            <div>
                                <h3 className="font-semibold">Working Hours</h3>
                                <p className="text-gray-400">
                                    Mon - Sat : 9AM - 8PM
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Right */}
                <div className="rounded-3xl border border-white/10 bg-[#0b1220] p-8">

                    <h2 className="mb-8 text-3xl font-bold">
                        Send Message
                    </h2>

                    <form className="space-y-6">

                        <div>
                            <label className="mb-2 block text-sm">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full rounded-xl border border-white/10 bg-[#030712] px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="w-full rounded-xl border border-white/10 bg-[#030712] px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm">
                                Subject
                            </label>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-xl border border-white/10 bg-[#030712] px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm">
                                Message
                            </label>

                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                className="w-full rounded-xl border border-white/10 bg-[#030712] px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <button
                            className="w-full rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-700"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </section>
        </main>
    );
}
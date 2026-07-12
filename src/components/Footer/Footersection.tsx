import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";

const socials = [
    {
        icon: "Linkedin",
        icons: "/icons8-linkedin-50.png",
        herf: "https://www.linkedin.com/in/mdmonerujammanmunna"

    },
    {
        icon: "Facebook",
        icons: "/icons8-facebook-50.png",
        herf: "https://www.facebook.com/Md.MonerujammanMunna0"
    },

    {
        icon: "GitHub",
        icons: "/icons8-github-64.png",
        herf: "https://github.com/MdMonerujammanMunna"
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#030712] text-white container mx-auto">
            <div className=" px-10 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-black text-red-500">
                            Kickstrom
                        </h2>

                        <p className="mt-5 max-w-sm text-gray-400 leading-7">
                            Discover premium sports apparel, footwear and
                            accessories built for athletes who never stop
                            pushing their limits.
                        </p>

                        <div className="mt-8 flex gap-4">
                            {socials.map(({ icon, icons, herf }) => (
                                <Link
                                    key={icon}
                                    href={herf}
                                    className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-red-500 hover:bg-red-500"
                                >
                                    <Image
                                        src={icons}
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="rounded-full"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold">
                            Company
                        </h3>

                        <div className="space-y-3 text-gray-400 flex flex-col ">
                            <Link className="hover:text-red-500" href="#">Home</Link>
                            <Link className="hover:text-red-500" href="#">Products</Link>
                            <Link className="hover:text-red-500" href="#">Categories</Link>
                            <Link className="hover:text-red-500" href="#">Contact</Link>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold">
                            Newsletter
                        </h3>

                        <p className="mb-5 text-gray-400">
                            Get updates on new arrivals and exclusive
                            offers.
                        </p>

                        <div className="flex overflow-hidden rounded-xl border border-white/10">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
                            />

                            <button className="bg-red-600 px-5 hover:bg-red-700">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} Kickstrom. All Rights Reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="#">Terms</Link>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Cookies</Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}
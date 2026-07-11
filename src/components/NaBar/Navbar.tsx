"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    // Log out Route
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/Products" },
        { name: "Categories", href: "/Categories" },
        { name: "Contact", href: "/contact" },
    ];
    // Log in Route :- 
    // const navLinks2 = [
    //     { name: "Home", href: "/" },
    //     { name: "Products", href: "/Products" },
    //     { name: "Categories", href: "/Categories" },
    //     { name: "Orders", href: "/Orders" },
    //     { name: "Dashboard", href: "/Dashboard" },
    // ]

    // Search
    // Cart
    // Profile (Dropdown)
    return (
        <div className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo1.png" alt="logo" width={40} height={40} />
                    <span className="text-2xl font-black text-white">
                        <span className="text-(--Primary-Color)">Kick</span>Strom
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-10 md:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 transition hover:text-(--Primary-Color)"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden items-center gap-3 md:flex">
                    <Link
                        href="/login"
                        className="rounded-lg border-2 border-white/15 px-5 py-2 text-sm text-white transition hover:border-(--Primary-Color)"
                    >
                        Log In
                    </Link>

                    <Link
                        href="/signup"
                        className="rounded-lg bg-(--Primary-Color) px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white md:hidden"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t border-white/10 bg-[#030712] md:hidden">
                    <nav className="flex flex-col p-6">

                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="py-3 text-gray-300 hover:text-(--Primary-Color)"
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="mt-5 flex flex-col gap-3">
                            <Link
                                href="/login"
                                className="rounded-lg border-2 border-white/15 py-2 text-center text-white hover:border-(--Primary-Color) "
                            >
                                Log In
                            </Link>

                            <Link
                                href="/signup"
                                className="rounded-lg bg-(--Primary-Color) py-2 text-center font-semibold text-white"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
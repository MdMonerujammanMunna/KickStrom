"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverHeader, PopoverTrigger } from "../ui/popover";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
    const { user, logout } = useAuth();
    const UserName = user?.displayName
    const [open, setOpen] = useState(false);
    // Log out Route
    const navLinks = user
        ? [
            { name: "Home", href: "/" },
            { name: "Products", href: "/Products" },
            { name: "Dashboard", href: "/Dashboard" },
            { name: "Categories", href: "/Categories" },
            { name: "Deals Zone ", href: "/Deals Zone " },
        ]
        : [
            { name: "Home", href: "/" },
            { name: "Products", href: "/Products" },
            { name: "Contact", href: "/Contact" },
        ];

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
                {
                    user ?
                        <>
                            <div className="hidden md:flex">
                                <Popover>
                                    <PopoverTrigger className="border-none" render={
                                        <button>
                                            <Avatar size="lg">
                                                <AvatarImage
                                                    src="https://github.com/shadcn.png"
                                                    alt="@shadcn"
                                                    className="grayscale"
                                                />
                                            </Avatar>
                                        </button>

                                    } />
                                    <PopoverContent align="start">
                                        <PopoverHeader>
                                            <Avatar size="lg" className={"flex items-center gap-3"}>
                                                <AvatarImage
                                                    src="https://github.com/shadcn.png"
                                                    alt="@shadcn"
                                                    className="grayscale border-none"
                                                />
                                                <div className="">
                                                    <h1 className="text-[17px] text-nowrap">{UserName}</h1>
                                                    <p className="text-xs">User</p>
                                                </div>
                                            </Avatar>
                                            <button
                                                onClick={logout}
                                                className="hidden md:flex cursor-pointer rounded-full items-center gap-3 justify-center bg-(--Primary-Color) p-2 mt-2 text-white transition hover:bg-red-700"
                                            >
                                                Log Out
                                                <FaSignOutAlt size={15} />
                                            </button>
                                        </PopoverHeader>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </>
                        :
                        <div className="hidden items-center gap-3 md:flex">
                            <Link
                                href="/LogIn"
                                className="rounded-lg border-2 border-white/15 px-5 py-2 text-sm text-white transition hover:border-(--Primary-Color)"
                            >
                                Log In
                            </Link>

                            <Link
                                href="/SignUp"
                                className="rounded-lg bg-(--Primary-Color) px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                            >
                                Sign Up
                            </Link>
                        </div>
                }


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
                        {
                            user ?
                                <button
                                    onClick={logout}
                                    className="cursor-pointer rounded-lg bg-(--Primary-Color) px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                                >
                                    Log Out
                                </button>
                                :
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
                        }

                    </nav>
                </div>
            )}
        </div>
    );
}
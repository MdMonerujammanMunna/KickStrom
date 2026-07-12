"use client";

import { useState } from "react";
import { Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    // 

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (err) {
            const error = err as FirebaseError;
            alert(error.message);
        }
    };

    // 

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = async () => {
        await signInWithPopup(auth, provider);
        router.push("/");
    };









    const conditions = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password),
    };

    const passed = Object.values(conditions).filter(Boolean).length;

    const strength =
        passed <= 0 ? {
            text: "Inter password",
            color: "bg-red-500",
            width: "w-0/3",
            textColor: "text-red-500",
        }
            :
            passed <= 1
                ? {
                    text: "Weak",
                    color: "bg-red-500",
                    width: "w-1/3",
                    textColor: "text-red-500",
                }
                : passed <= 2
                    ? {
                        text: "Medium",
                        color: "bg-yellow-500",
                        width: "w-2/3",
                        textColor: "text-yellow-500",
                    }
                    : {
                        text: "Strong",
                        color: "bg-green-500",
                        width: "w-full",
                        textColor: "text-green-500",
                    };

    const Condition = ({
        valid,
        text,
    }: {
        valid: boolean;
        text: string;
    }) => (
        <div
            className={`flex items-center gap-2 text-sm ${valid ? "text-green-500" : "text-gray-400"
                }`}
        >
            {valid ? (
                <CheckCircle2 size={18} />
            ) : (
                <XCircle size={18} />
            )}
            <span>{text}</span>
        </div>
    );

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#030712] py-20 px-4">
            <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-[#0b1220] p-8 shadow-xl">
                <h1 className="mb-2 text-center text-3xl font-bold text-white">
                    Welcome Back
                </h1>

                <p className="mb-8 text-center text-gray-400">
                    Sign in to your account
                </p>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Email
                        </label>

                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-red-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 pr-12 text-white outline-none transition focus:border-red-500"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {/* Strength Bar */}
                        <div className="mt-4">
                            {
                                passed === 0 ? ""
                                    :
                                    <div className="h-2 w-full rounded-full bg-gray-700">
                                        <div
                                            className={`h-2 rounded-full ${strength.color} ${strength.width} transition-all duration-300`}
                                        />
                                    </div>
                            }
                            {
                                passed === 0 ? ""
                                    :
                                    <p className={`mt-2 font-semibold ${strength.textColor}`}>
                                        Password Strength: {strength.text}
                                    </p>
                            }
                        </div>


                        <div className="mt-5 space-y-2 rounded-xl bg-[#111827] p-4">
                            <Condition
                                valid={conditions.length}
                                text="Minimum 8 characters"
                            />

                            <Condition
                                valid={conditions.uppercase}
                                text="One uppercase letter"
                            />

                            <Condition
                                valid={conditions.lowercase}
                                text="One lowercase letter"
                            />

                            <Condition
                                valid={conditions.number}
                                text="One number"
                            />

                            <Condition
                                valid={conditions.special}
                                text="One special character"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                        Sign In
                    </button>
                    <div className="relative py-2">
                        <div className="absolute left-0 top-1/2 w-full border-t border-gray-700"></div>

                        <span className="relative mx-auto block w-fit bg-[#0b1220] px-3 text-sm text-gray-500">
                            OR
                        </span>
                    </div>


                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="cursor-pointer flex w-full items-center justify-center gap-3 rounded-xl border border-gray-700 py-3 font-medium text-white hover:bg-gray-800"
                    >
                        <FcGoogle size={22} />
                        Continue with Google
                    </button>

                    <p className="text-center text-sm text-gray-400">
                        Don't have an account?
                        <Link href="/SignUp" className="ml-2 cursor-pointer font-semibold text-red-500 hover:text-red-400">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>

        </div>
    );
}
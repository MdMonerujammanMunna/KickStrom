"use client";

import { useState } from "react";
import { Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

type ConditionProps = {
    valid: boolean;
    text: string;
};

function Condition({ valid, text }: ConditionProps) {
    return (
        <div
            className={`flex items-center gap-2 text-sm ${valid ? "text-green-400" : "text-gray-400"
                }`}
        >
            {valid ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
            {text}
        </div>
    );
}

export default function SignUpPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    // 
    const handleRegister = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            await updateProfile(userCredential.user, {
                displayName: name,
            });

            router.push("/LogIn");
        }
        catch (error: any) {
            console.log(error.message);
        }
    };




    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = async () => {
        await signInWithPopup(auth, provider);
        router.push("/");
    };

    // 

    const conditions = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password),
    };

    const passwordsMatch =
        confirmPassword.length > 0 &&
        password === confirmPassword;

    const background =
        "https://images.unsplash.com/photo-1704633785114-52104ce3d626?w=600&auto=format&fit=crop&q=60";

    return (
        <section className="flex min-h-screen items-center justify-center bg-[#030712] px-4 py-10">
            <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-gray-800 bg-[#0b1220] shadow-2xl lg:grid-cols-2">

                {/* Left Side */}
                <div
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="relative hidden lg:flex flex-col justify-center p-12 text-white"
                >
                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10">
                        <h1 className="text-5xl font-black">
                            Join The
                            <br />
                            <span className="text-yellow-300">
                                Champions.
                            </span>
                        </h1>

                        <p className="mt-6 text-lg">
                            Create your account and discover
                            premium sports gear.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-yellow-300" />
                                Premium Sports Products
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-yellow-300" />
                                Fast Worldwide Delivery
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-yellow-300" />
                                Secure Payments
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="p-8 md:p-12">
                    <div className="mx-auto max-w-md">

                        <h2 className="text-4xl font-bold text-white">
                            Create Account
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Sign up to start shopping.
                        </p>

                        <form onSubmit={handleRegister} className="mt-8 space-y-5">

                            <input
                                type="text"
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                placeholder="Full Name"
                                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-white"
                            />

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Password"
                                    className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 pr-12 text-white"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>



                            <div className="relative">
                                <input
                                    type={
                                        showConfirm ? "text" : "password"
                                    }
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Confirm Password"
                                    className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 pr-12 text-white"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirm(!showConfirm)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showConfirm ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>

                            {confirmPassword && (
                                <p
                                    className={`text-sm ${passwordsMatch
                                        ? "text-green-400"
                                        : "text-red-400"
                                        }`}
                                >
                                    {passwordsMatch
                                        ? "Passwords match"
                                        : "Passwords do not match"}
                                </p>
                            )}
                            <div className="flex flex-wrap  gap-2">
                                <Condition
                                    valid={conditions.length}
                                    text="Minimum 8 Characters"
                                />
                                <Condition
                                    valid={conditions.number}
                                    text="Number"
                                />
                                <Condition
                                    valid={conditions.uppercase}
                                    text="Uppercase Letter"
                                />
                                <Condition
                                    valid={conditions.lowercase}
                                    text="Lowercase Letter"
                                />

                                <Condition
                                    valid={conditions.special}
                                    text="Special Character"
                                />
                            </div>

                            <button type="submit" className="cursor-pointer w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700">
                                Create Account
                            </button>

                            <div className="relative py-2">
                                <div className="absolute left-0 top-1/2 w-full border-t border-gray-700" />
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
                                Already have an account?{" "}
                                <Link
                                    href="/LogIn"
                                    className="font-semibold text-red-500"
                                >
                                    Sign In
                                </Link>
                            </p>

                        </form>

                    </div>
                </div>
            </div>
        </section >
    );
}
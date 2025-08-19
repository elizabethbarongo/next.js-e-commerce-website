"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home");
  };
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 flex justify-center items-center py-10 px-4">
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/image/phone1.png"
              alt="Shopping illustration"
              width={450}
              height={450}
              className="object-contain max-w-full h-auto"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center lg:text-left">
              Log in to Exclusive
            </h2>
            <p className="text-gray-600 mb-6 text-center lg:text-left">
              Enter your details below
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-medium rounded-md py-3 px-6 transition"
                >
                  Log In
                </button>
                <Link
                  href="/forgot-password"
                  className="text-red-500 hover:underline text-sm"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
            <p className="mt-6 text-gray-600 text-center">
              Dont have an account?{" "}
              <Link
                href="/signup"
                className="text-black font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>

        </div>
      </main>
      <Footer/>
    </div>
  );
}
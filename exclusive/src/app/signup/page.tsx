"use client";
import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function SignUpPage() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex justify-center items-center py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-4">
          <div className="flex-1 flex justify-center">
            <Image
              src="/image/phone1.png"
              alt="Shopping illustration"
              width={400}
              height={1800}
              className="w-200 h-120 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">Create an account</h2>
            <p className="text-gray-600 mb-6">Enter your details below</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-md py-2 transition"
              >
                Create Account
              </button>
              <button
                type="button"
                className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-100 transition"
              >
                <Image
                  src="/icons/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Sign up with Google
              </button>
            </form>
            <p className="mt-6 text-gray-600 text-center">
              Already have account?{" "}
              <Link href="/login" className="text-black font-medium hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}










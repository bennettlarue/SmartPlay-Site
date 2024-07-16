"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import Link from "next/link";

export default function ThankYou() {
    return (
        <main>
            <Nav />
            <div className="flex justify-center items-center lg:px-0 px-6 min-h-[80vh]">
                <div className="space-y-5">
                    <p className="text-3xl font-semibold text-orange-500">
                        Thank you for contacting Smartplay.
                    </p>
                    <p className="text-3xl">
                        We will get back to you with details shortly.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/">
                            <button className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

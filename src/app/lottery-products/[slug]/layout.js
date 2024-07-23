"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";

export default function NewsLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

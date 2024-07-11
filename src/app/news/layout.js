"use client";

import { Nav } from "../components/Nav";

export default function NewsLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                <main>{children}</main>
            </body>
        </html>
    );
}

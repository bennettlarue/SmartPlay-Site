// app/news/[slug]/page.js

import Image from "next/image";
import { motion } from "framer-motion";
import { RichText } from "@/app/components/news/RichText";
import Link from "next/link";

const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
};

// Example usage
const formattedDate = formatDate("2024-11-12T12:00:00.000Z");
console.log(formattedDate); // Output: "November 12"

export async function generateStaticParams() {
    const response = await fetch(
        "https://smartplay-content.payloadcms.app/api/posts"
    );
    const data = await response.json();

    return data.docs.map((post) => ({
        slug: post.slug,
    }));
}

async function fetchPostData(slug) {
    const response = await fetch(
        `https://smartplay-content.payloadcms.app/api/posts?where[slug][equals]=${slug}`
    );
    const data = await response.json();
    return data.docs[0];
}

export default async function Post({ params }) {
    const post = await fetchPostData(params.slug);

    if (!post) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    return (
        <main>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                rel="stylesheet"
            />
            <div className="max-w-[900px] lg:px-0 px-0 mx-auto mt-2">
                <div className="p-6">
                    <div className="border-b border-b-gray-400 pb-2 space-y-2">
                        <h2 className="text-gray-500 font-semibold">
                            <Link href="/news" className="hover:underline">
                                News
                            </Link>{" "}
                            /
                        </h2>
                        <h1 className="text-4xl font-semibold text-blue-950 max-w-[700px]">
                            {post.title}
                        </h1>

                        <h2 className="text-gray-400 font-semibold">
                            {formatDate(post.publishedAt)}
                        </h2>
                    </div>
                    <div className="mt-4">
                        <RichText content={post.content} />
                    </div>
                </div>
            </div>
        </main>
    );
}

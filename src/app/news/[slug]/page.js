import Image from "next/image";
import { motion } from "framer-motion";
import { RichText } from "@/app/components/news/RichText";
import Link from "next/link";
import { SectionHeader } from "@/app/components/SectionHeader";

const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
};

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
            <div className="max-w-[900px] lg:px-0 px-0 mx-auto lg:mt-8 mt-2">
                <div className="p-6">
                    <div className="border-b border-b-gray-400 pb-2 space-y-2">
                        <h2 className="text-gray-500 font-semibold">
                            <Link href="/news" className="hover:underline">
                                News
                            </Link>{" "}
                            /
                        </h2>

                        <SectionHeader content={post.title} />

                        <h2 className="text-gray-400 font-semibold">
                            {formatDate(post.publishedAt)}
                        </h2>
                    </div>
                    <div className="mt-4">
                        {post.content ? (
                            <RichText content={post.content} />
                        ) : (
                            <p>No content available.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

// Add revalidate property
export const revalidate = 60; // Revalidate the page every 60 seconds

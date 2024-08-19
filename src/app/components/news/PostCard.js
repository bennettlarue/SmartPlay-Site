import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const PostCard = ({ post, index, hoveredIndex, setHoveredIndex }) => {
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <motion.div
            key={post.slug}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`transition-colors cursor-pointer max-w-[500px] rounded-b shadow border ${
                hoveredIndex === index ? "bg-gray-200" : "bg-gray-100"
            }`}
            onMouseEnter={() => {
                setHoveredIndex(index);
            }}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                rel="stylesheet"
            />
            <Link href={`/news/${post.slug}`} className="w-full">
                <div className="relative h-64 w-full">
                    {post.featuredImage && post.featuredImage.url ? (
                        <Image
                            className="rounded-t"
                            src={post.featuredImage.url}
                            alt={post.title}
                            layout="fill"
                            style={{
                                objectFit: "cover",
                            }} // Replace objectFit prop with style
                        />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gray-300 rounded-t">
                            <span>No Image Available</span>
                        </div>
                    )}
                </div>
                <div className="p-6 space-y-3">
                    <p className="text-gray-700">
                        {formatDate(post.publishedAt)}
                    </p>
                    <h1 className="text-2xl font-semibold text-blue-950">
                        {post.title}
                    </h1>

                    <p className="text-gray-700">{post.excerpt}</p>

                    <button className="text-blue-900 font-semibold flex items-center">
                        <span>Read more</span>
                        <motion.span
                            animate={
                                hoveredIndex === index ? { x: 5 } : { x: 1 }
                            }
                            className="material-symbols-outlined"
                        >
                            chevron_right
                        </motion.span>
                    </button>
                </div>
            </Link>
        </motion.div>
    );
};

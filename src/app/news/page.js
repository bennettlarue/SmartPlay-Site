"use client";

import { Title } from "../components/products/Title";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function News() {
    const [posts, setPosts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const [totalPages, setTotalPages] = useState(1); // Track total pages
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(
                    selectedCategory
                        ? `https://smartplay-content.payloadcms.app/api/posts?where[categories][contains]=${selectedCategory}&page=${currentPage}&sort=-publishedAt`
                        : `https://smartplay-content.payloadcms.app/api/posts?page=${currentPage}&sort=-publishedAt`
                );
                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok " + response.statusText
                    );
                }
                const data = await response.json();
                setPosts(data.docs);
                setTotalPages(data.totalPages); // Update total pages from API response
                console.log(data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        }

        async function fetchCategories() {
            try {
                const response = await fetch(
                    `https://smartplay-content.payloadcms.app/api/categories?limit=100`
                );
                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok " + response.statusText
                    );
                }
                const data = await response.json();
                setCategories(data.docs.reverse());
                console.log(data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        }
        fetchPosts();
        fetchCategories();
    }, [currentPage, selectedCategory]); // Fetch new data whenever currentPage changes

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const renderPaginationButtons = () => {
        if (totalPages <= 1) {
            return null; // Don't render pagination if there's only one page
        }

        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-1 mx-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ${
                        currentPage === i ? "font-semibold" : ""
                    }`}
                >
                    {i}
                </button>
            );
        }

        return <div className="flex justify-center mt-8">{pages}</div>;
    };

    return (
        <main>
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/globe.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover -translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="News" />

            <div className="bg-white pt-1 pb-12">
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                    rel="stylesheet"
                />
                <div className="space-y-10 max-w-[1000px] lg:px-0 px-8 mx-auto mt-12">
                    <div className="flex flex-wrap justify-center">
                        <div
                            key={"All"}
                            className="font-semibold mr-3 mb-3 text-sm lg:text-md"
                        >
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={
                                    selectedCategory
                                        ? `text-blue-900 rounded shadow p-1 px-2 bg-gray-200 transition-all cursor-pointer`
                                        : `text-white rounded shadow p-1 px-2 bg-blue-900 transition-colors cursor-pointer`
                                }
                            >
                                All Posts
                            </button>
                        </div>
                        {categories &&
                            categories.map((category) => (
                                <div
                                    key={category.title}
                                    className="font-semibold lg:text-md mr-4 mb-3 text-sm lg:text-md"
                                >
                                    <button
                                        onClick={() =>
                                            setSelectedCategory(category.id)
                                        }
                                        className={
                                            selectedCategory == category.id
                                                ? `text-white rounded shadow p-1 px-2 bg-blue-900 transition-colors cursor-pointer`
                                                : `text-blue-900 rounded shadow p-1 px-2 bg-gray-200 transition-all cursor-pointer hover:bg-gray-300`
                                        }
                                    >
                                        {category.title}
                                    </button>
                                </div>
                            ))}
                    </div>
                    <div className="justify-center grid grid-cols-2 gap-10">
                        <AnimatePresence>
                            {posts ? (
                                posts.map((post, index) => (
                                    <motion.div
                                        key={post.slug}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`transition-colors cursor-pointer max-w-[500px] rounded-b shadow border ${
                                            hoveredIndex === index
                                                ? "bg-gray-200"
                                                : "bg-gray-100"
                                        }`}
                                        onMouseEnter={() => {
                                            setHoveredIndex(index);
                                        }}
                                        onMouseLeave={() =>
                                            setHoveredIndex(null)
                                        }
                                    >
                                        <Link
                                            href={`/news/${post.slug}`}
                                            className="w-full"
                                        >
                                            <div className="relative h-64 w-full">
                                                {post.featuredImage &&
                                                post.featuredImage.url ? (
                                                    <Image
                                                        className="rounded-t"
                                                        src={
                                                            post.featuredImage
                                                                .url
                                                        }
                                                        alt={post.title}
                                                        layout="fill"
                                                        style={{
                                                            objectFit: "cover",
                                                        }} // Replace objectFit prop with style
                                                    />
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center bg-gray-300 rounded-t">
                                                        <span>
                                                            No Image Available
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-6 space-y-3">
                                                <p className="text-gray-700">
                                                    {formatDate(
                                                        post.publishedAt
                                                    )}
                                                </p>
                                                <h1 className="text-2xl font-semibold text-blue-950">
                                                    {post.title}
                                                </h1>

                                                <p className="text-gray-700">
                                                    {post.excerpt}
                                                </p>

                                                <button className="text-blue-900 font-semibold flex items-center">
                                                    <span>Read more</span>
                                                    <motion.span
                                                        animate={
                                                            hoveredIndex ===
                                                            index
                                                                ? { x: 5 }
                                                                : { x: 1 }
                                                        }
                                                        className="material-symbols-outlined"
                                                    >
                                                        chevron_right
                                                    </motion.span>
                                                </button>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))
                            ) : (
                                <>
                                    <div className="card">
                                        <div className="shimmerBG media"></div>
                                        <div className="p-32">
                                            <div className="shimmerBG title-line"></div>
                                            <div className="shimmerBG title-line end"></div>

                                            <div className="shimmerBG content-line m-t-24"></div>
                                            <div className="shimmerBG content-line"></div>
                                            <div className="shimmerBG content-line"></div>
                                            <div className="shimmerBG content-line"></div>
                                            <div className="shimmerBG content-line end"></div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="shimmerBG media"></div>
                                        <div className="p-32">
                                            <div className="shimmerBG title-line"></div>
                                            <div className="shimmerBG title-line end"></div>

                                            <div className="shimmerBG content-line m-t-24"></div>
                                            <div className="shimmerBG content-line"></div>
                                            <div className="shimmerBG content-line"></div>
                                            <div className="shimmerBG content-line"></div>
                                            <div className="shimmerBG content-line end"></div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                    {renderPaginationButtons()}
                </div>
            </div>
        </main>
    );
}

"use client";

import { Title } from "../components/products/Title";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { PostCard } from "../components/news/PostCard";
import { PostSkeleton } from "../components/news/PostSkeleton";

export default function News() {
    const [posts, setPosts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const [totalPages, setTotalPages] = useState(1); // Track total pages
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
                    <div className="justify-center grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <AnimatePresence>
                            {posts ? (
                                posts.map((post, index) => (
                                    <PostCard
                                        post={post}
                                        index={index}
                                        setHoveredIndex={setHoveredIndex}
                                        hoveredIndex={hoveredIndex}
                                    />
                                ))
                            ) : (
                                <>
                                    <PostSkeleton />
                                    <PostSkeleton />
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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function News() {
    const [posts, setPosts] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        async function getArticle() {
            try {
                const response = await fetch(
                    "https://smartplay-content.payloadcms.app/api/posts"
                );
                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok " + response.statusText
                    );
                }
                const data = await response.json();
                setPosts(data.docs);
                console.log(data);
            } catch (error) {
                console.error("Error fetching article:", error);
            }
        }
        getArticle();
    }, []);

    return (
        <main>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                rel="stylesheet"
            />
            <div className="space-y-10 max-w-[1000px] lg:px-0 px-8 mx-auto mt-12">
                <div className="flex justify-center">
                    <div className="space-y-10">
                        {posts
                            ? posts.map((post, index) => (
                                  <div
                                      key={index}
                                      className={`transition-colors cursor-pointer max-w-[500px] rounded-b shadow ${
                                          hoveredIndex === index
                                              ? "bg-gray-200"
                                              : "bg-gray-100"
                                      }`}
                                      onMouseEnter={() => {
                                          setHoveredIndex(index);
                                          console.log("hovered");
                                      }}
                                      onMouseLeave={() => setHoveredIndex(null)}
                                  >
                                      <Link
                                          href={`/news/${post.slug}`}
                                          className="w-full"
                                      >
                                          <Image
                                              className="rounded-t"
                                              src={post.featuredImage.url}
                                              alt={post.title}
                                              width={500}
                                              height={500}
                                          />
                                          <div className="p-6 space-y-3">
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
                                                          hoveredIndex === index
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
                                  </div>
                              ))
                            : "Loading..."}
                    </div>
                </div>
            </div>
        </main>
    );
}

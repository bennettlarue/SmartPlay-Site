import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
        />
    </svg>
);

export const ArrowButton = ({
    text,
    href = "/",
    bg_color = "bg-blue-950",
    bg_hover = "bg-blue-900",
    animate = true,
}) => {
    return (
        <motion.div
            initial={animate ? { opacity: 0, y: 5 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.2 }}
            className="w-fit"
        >
            <Link href={href}>
                <div
                    className={`space-x-3 text-white font-medium text-lg p-2 rounded flex items-center justify-between cursor-pointer shadow-lg ${bg_color} hover:${bg_hover}`}
                >
                    <p>{text}</p>
                    <div>
                        <ArrowIcon />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

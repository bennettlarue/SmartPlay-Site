import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Menu = ({ open, items, links }) => {
    const staggerList = {
        hidden: { opacity: 0, scale: 0.7 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.25,
            },
        },
    };

    return (
        <motion.ul className="border bg-white w-[270px] p-4 rounded space-y-4 shadow">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="w-full cursor-pointer leading-tight border-b border-b-gray-200 py-1 hover:text-blue-900"
                >
                    <Link href={links[index]}>{item}</Link>
                </li>
            ))}
        </motion.ul>
    );
};

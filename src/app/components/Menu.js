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
        <motion.ul className="border bg-white w-[270px] p-4 rounded space-y-4 shadow font-semibold">
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                        open ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{ delay: index * 0.05 }}
                    className="w-full cursor-pointer leading-tight border-b border-b-gray-200 py-1 hover:text-blue-900"
                >
                    <Link href={links[index]}>{item}</Link>
                </motion.li>
            ))}
        </motion.ul>
    );
};

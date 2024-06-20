import React from "react";
import { motion } from "framer-motion";

export const Menu = ({ open, items }) => {
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
        <motion.ul
            className="border bg-white w-[200px] p-4 rounded space-y-4 shadow"
            initial="hidden"
            animate={open ? "show" : "hidden"}
            variants={{
                hidden: { scale: 0, opacity: 0 },
                show: {
                    scale: "100%",
                    opacity: 1,
                    transition: { type: "spring", bounce: 0, duration: 0.4 },
                },
            }}
        >
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                        open ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{ delay: index * 0.05 }}
                    className="w-full cursor-pointer leading-tight border-b border-b-gray-200 py-1"
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    );
};

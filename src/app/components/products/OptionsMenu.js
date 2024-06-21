import React from "react";
import { motion } from "framer-motion";

export const OptionsMenu = ({ open, items, selected, onSelect }) => {
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
            className="absolute border bg-white w-[250px] p-4 rounded space-y-3 shadow z-50"
            initial="hidden"
            animate={open ? "show" : "hidden"}
            variants={{
                hidden: { scale: 0, opacity: 0 },
                show: {
                    scale: "100%",
                    opacity: 1,
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.4,
                    },
                },
            }}
            exit="hidden"
        >
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    className="cursor-pointer flex items-center space-x-5 hover:bg-gray-200 border border-gray-200 rounded p-2 transition-colors"
                    onClick={() => onSelect(item)} // Call the onSelect function with the clicked item
                >
                    <span className=" flex justify-center items-center rounded-full">
                        <div className="w-5 h-5 rounded-full mr-2 transition-all bg-gray-300">
                            {selected.includes(item) && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 -2 18 18"
                                    className="w-5 h-5 p-0.5 rounded-full text-white bg-blue-700"
                                >
                                    <path d="M16 2.258L6 13 2.258 9.258l1.414-1.414L6 10.172l8.328-8.328L16 2.258z" />
                                </svg>
                            )}
                        </div>
                    </span>
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    );
};

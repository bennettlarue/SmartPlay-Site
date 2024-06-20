import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "./Menu";

const solutions = [
    "Trading Lottery",
    "iGaming",
    "Bingo Systems",
    "Raffles",
    "Casino Gaming",
    "Corporate",
    "Funding",
];
const products = [
    "Lottery Drawing Machines",
    "Lottery Drawing Balls",
    "Equipment Calibration",
    "Custom Games",
    "Prize Wheels",
];

export const Nav = () => {
    const [open, setOpen] = useState(0);
    const navRef = useRef(null);

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setOpen(0);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef} className="bg-white sticky top-0 z-50 shadow text-lg">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <div
                        className="flex-shrink-0 h-full bg-blue-950 hover:bg-blue-900 cursor-pointer transition-all py-4 pr-28 px-20"
                        href="/"
                        style={{
                            clipPath: "polygon( 0 0, 100% 0, 80% 100%, 0 100%)",
                        }}
                    >
                        <img
                            className="h-9"
                            src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/logo.png?time=1717187795"
                            alt="SmartPlay Logo"
                        />
                    </div>
                </Link>
                <div className="flex space-x-4 mr-8">
                    <Link className="relative" href="/about">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="font-semibold p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                        >
                            <span>About</span>
                        </motion.button>
                    </Link>
                    <div className="relative">
                        <motion.button
                            onClick={() =>
                                open === 1 ? setOpen(0) : setOpen(1)
                            }
                            whileTap={{ scale: 0.95 }}
                            className={`font-semibold p-2 flex items-center space-x-1 transition-all rounded ${
                                open === 1 ? "bg-gray-200" : "hover:bg-gray-200"
                            }`}
                        >
                            <span>Solutions</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 17a1 1 0 01-.832-.445l-5-7a1 1 0 011.664-1.11L10 14.318l4.168-5.874a1 1 0 111.664 1.11l-5 7A1 1 0 0110 17z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </motion.button>
                        <div className="absolute top-full mt-2">
                            <Menu open={open === 1} items={solutions} />
                        </div>
                    </div>

                    <div className="relative">
                        <motion.button
                            onClick={() =>
                                open === 2 ? setOpen(0) : setOpen(2)
                            }
                            whileTap={{ scale: 0.95 }}
                            className={`font-semibold p-2 flex items-center space-x-1 transition-all rounded ${
                                open === 2 ? "bg-gray-200" : "hover:bg-gray-200"
                            }`}
                        >
                            <span>Products</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 17a1 1 0 01-.832-.445l-5-7a1 1 0 011.664-1.11L10 14.318l4.168-5.874a1 1 0 111.664 1.11l-5 7A1 1 0 0110 17z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </motion.button>
                        <div className="absolute top-full mt-2">
                            <Menu open={open === 2} items={products} />
                        </div>
                    </div>
                    <div className="relative">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="font-semibold p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                        >
                            <span>News</span>
                        </motion.button>
                    </div>
                    <div className="relative">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="font-semibold p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                        >
                            <span>Clients</span>
                        </motion.button>
                    </div>
                    <div className="relative">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="font-semibold p-2 flex items-center space-x-1 transition-all rounded bg-orange-600 hover:bg-orange-500 text-white"
                        >
                            <span>Contact</span>
                        </motion.button>
                    </div>
                </div>
                <div className="md:hidden">
                    <button className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

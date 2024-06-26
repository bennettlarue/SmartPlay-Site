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
const solutionsLinks = [
    "/solutions/traditional-lottery",
    "/solutions/online-lottery",
    "/solutions/bingo-systems",
    "/solutions/raffles",
    "#",
    "#",
    "#",
];

const products = [
    "Lottery Drawing Machines",
    "Lottery Drawing Balls",
    "Equipment Calibration",
    "Custom Games",
    "Prize Wheels",
];
const productsLinks = [
    "/product-services/lottery-drawing-machines",
    "/product-services/lottery-drawing-balls",
    "/product-services/equipment-calibration",
    "/product-services/custom-design-fabrication",
    "/product-services/prize-wheels",
];

export const Nav = () => {
    const [open, setOpen] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
                        className="flex-shrink-0 h-full bg-blue-950 hover:bg-blue-900 cursor-pointer transition-all py-4 lg:px-16 px-5 lg:pr-20 pr-16"
                        style={{
                            clipPath: "polygon( 0 0, 100% 0, 80% 100%, 0 100%)",
                        }}
                    >
                        <img
                            className="lg:h-9 h-7"
                            src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/logo.png?time=1717187795"
                            alt="SmartPlay Logo"
                        />
                    </div>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link className="relative" href="/why-smartplay">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="font-semibold p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                        >
                            <span>Why SmartPlay</span>
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
                            <Menu
                                open={open === 1}
                                items={solutions}
                                links={solutionsLinks}
                            />
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
                            <Menu
                                open={open === 2}
                                items={products}
                                links={productsLinks}
                            />
                        </div>
                    </div>
                    <Link className="relative" href="/news">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="font-semibold p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                        >
                            <span>News</span>
                        </motion.button>
                    </Link>
                    <Link className="relative" href="/clients">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="font-semibold p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                        >
                            <span>Clients</span>
                        </motion.button>
                    </Link>
                    <Link className="relative" href="/contact">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="font-semibold p-2 flex items-center space-x-1 transition-all rounded bg-orange-600 hover:bg-orange-500 text-white"
                        >
                            <span>Contact</span>
                        </motion.button>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-blue-950 pr-3"
                    >
                        <svg
                            className="w-8 h-8"
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
            {sidebarOpen && (
                <div className="md:hidden bg-white fixed top-0 left-0 w-3/4 h-full z-50 shadow-lg p-4 border-r">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="absolute top-4 right-4 text-gray-800"
                    >
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
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <nav className="space-y-4">
                        <Link href="/why-smartplay">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="font-semibold w-full text-left p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                            >
                                <span>Why SmartPlay</span>
                            </motion.button>
                        </Link>
                        <div className="relative">
                            <motion.button
                                onClick={() =>
                                    open === 1 ? setOpen(0) : setOpen(1)
                                }
                                whileTap={{ scale: 0.95 }}
                                className={`font-semibold w-full text-left p-2 flex items-center space-x-1 transition-all rounded ${
                                    open === 1
                                        ? "bg-gray-200"
                                        : "hover:bg-gray-200"
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
                            {open === 1 && (
                                <div className="mt-2 pl-4">
                                    {solutions.map((solution, index) => (
                                        <Link
                                            key={index}
                                            href={solutionsLinks[index]}
                                            className="block p-2 text-gray-700 hover:bg-gray-100 rounded"
                                        >
                                            {solution}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <motion.button
                                onClick={() =>
                                    open === 2 ? setOpen(0) : setOpen(2)
                                }
                                whileTap={{ scale: 0.95 }}
                                className={`font-semibold w-full text-left p-2 flex items-center space-x-1 transition-all rounded ${
                                    open === 2
                                        ? "bg-gray-200"
                                        : "hover:bg-gray-200"
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
                            {open === 2 && (
                                <div className="mt-2 pl-4">
                                    {products.map((product, index) => (
                                        <Link
                                            key={index}
                                            href={productsLinks[index]}
                                            className="block p-2 text-gray-700 hover:bg-gray-100 rounded"
                                        >
                                            {product}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link href="/news">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="font-semibold w-full text-left p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                            >
                                <span>News</span>
                            </motion.button>
                        </Link>
                        <Link href="/clients">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="font-semibold w-full text-left p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                            >
                                <span>Clients</span>
                            </motion.button>
                        </Link>
                        <Link href="/contact">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="font-semibold w-full text-left p-2 flex items-center space-x-1 transition-all rounded bg-orange-600 hover:bg-orange-500 text-white"
                            >
                                <span>Contact</span>
                            </motion.button>
                        </Link>
                    </nav>
                </div>
            )}
        </nav>
    );
};

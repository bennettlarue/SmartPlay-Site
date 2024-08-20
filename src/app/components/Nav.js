import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "./Menu";

const navItems = {
    solutions: {
        title: "Solutions",
        items: [
            "Traditional Lottery",
            "Bingo Systems",
            "Raffles",
            "Casino Gaming",
            "Promotions",
        ],
        links: [
            "/solutions/traditional-lottery",
            "/solutions/bingo-systems",
            "/solutions/raffles",
            "/solutions/casino",
            "/solutions/promotions",
        ],
    },
    products: {
        title: "Products",
        items: [
            "Lottery Drawing Machines",
            "Lottery Drawing Balls",
            "Equipment Calibration",
            "Custom Games",
            "Prize Wheels",
            "Lottery Studio Solutions",
            "Lottery Machine Rental",
        ],
        links: [
            "/product-services/lottery-drawing-machines",
            "/product-services/lottery-drawing-balls",
            "/product-services/equipment-calibration",
            "/product-services/custom-design-fabrication",
            "/product-services/prize-wheels",
            "/product-services/lottery-draw-studio-solutions",
            "/product-services/lottery-machine-rental",
        ],
    },
    digital: {
        title: "Digital",
        items: [
            "Origin Digital Draws",
            "Digital Content Solutions",
            "Lottery Draw Software",
            "iGaming",
        ],
        links: [
            "/product-services/origin-digital-draw",
            "/product-services/digital-content-solutions",
            "/product-services/solution-lottery-draw-management",
            "/solutions/online-lottery",
        ],
    },
};

export const Nav = () => {
    const [open, setOpen] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpen(0);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const renderNavItem = (item, index) => (
        <div key={item.title} className="relative">
            <motion.button
                onClick={() => setOpen(open === index + 1 ? 0 : index + 1)}
                whileTap={{ scale: 0.95 }}
                className={`p-2 flex items-center space-x-1 transition-all rounded ${
                    open === index + 1 ? "bg-gray-200" : "hover:bg-gray-200"
                }`}
            >
                <span>{item.title}</span>
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
            <AnimatePresence>
                {open === index + 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-full mt-2"
                    >
                        <Menu
                            open={open === index + 1}
                            items={item.items}
                            links={item.links}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    const renderMobileNavItem = (item, index) => (
        <div key={item.title} className="relative">
            <motion.button
                onClick={() => setOpen(open === index + 1 ? 0 : index + 1)}
                whileTap={{ scale: 0.95 }}
                className={`font-semibold w-full text-left p-2 flex items-center space-x-1 border-b-2 border-b-gray-200 transition-colors ${
                    open === index + 1 ? "border-b-blue-900" : ""
                }`}
            >
                <span>{item.title}</span>
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
            {open === index + 1 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="mt-2 pl-4 space-y-2"
                >
                    {item.items.map((subItem, subIndex) => (
                        <Link
                            key={subIndex}
                            href={item.links[subIndex]}
                            className="block p-2 text-gray-700 border-b"
                        >
                            {subItem}
                        </Link>
                    ))}
                </motion.div>
            )}
        </div>
    );

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
                <div className="hidden lg:flex space-x-3 mr-5 specialFont font-medium">
                    <Link className="relative" href="/why-smartplay">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                        >
                            <span>Why SmartPlay</span>
                        </motion.button>
                    </Link>
                    {Object.values(navItems).map(renderNavItem)}
                    <Link className="relative" href="/news">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                        >
                            <span>News</span>
                        </motion.button>
                    </Link>
                    <Link className="relative" href="/support">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200"
                        >
                            <span>Support</span>
                        </motion.button>
                    </Link>
                    <Link className="relative" href="/contact">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="p-2 flex items-center space-x-1 transition-all rounded bg-orange-600 hover:bg-orange-500 text-white"
                        >
                            <span>Contact</span>
                        </motion.button>
                    </Link>
                </div>
                <div className="lg:hidden">
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
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-white fixed top-0 left-0 w-3/4 h-full z-50 shadow-lg p-4 border-r overflow-y-scroll pt-12"
                    >
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
                        <nav className="space-y-3">
                            <div>
                                <Link href="/why-smartplay">
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        className="font-semibold w-full text-left p-2 flex items-center space-x-1 transition-all rounded hover:bg-gray-200 border-b-2 border-b-gray-200"
                                    >
                                        <span>Why SmartPlay</span>
                                    </motion.button>
                                </Link>
                            </div>
                            {Object.values(navItems).map(renderMobileNavItem)}
                            {["News", "Support", "Contact"].map(
                                (item, index) => (
                                    <div key={item}>
                                        <Link href={`/${item.toLowerCase()}`}>
                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                className={`font-semibold w-full text-left p-2 flex items-center space-x-1 ${
                                                    item === "Contact"
                                                        ? "transition-all border-b-4 border-b-orange-400"
                                                        : "border-b-2 border-b-gray-200"
                                                }`}
                                            >
                                                <span>{item}</span>
                                            </motion.button>
                                        </Link>
                                    </div>
                                )
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

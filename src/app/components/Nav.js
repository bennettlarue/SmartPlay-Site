import React from "react";

export const Nav = () => {
    return (
        <nav className="bg-white">
            <div className="flex justify-between items-center">
                <div
                    className="flex-shrink-0 h-full bg-blue-900 py-4 pr-28 px-20"
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
                <ul className="hidden md:flex space-x-6 text-black px-5">
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Solutions
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Clients
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
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

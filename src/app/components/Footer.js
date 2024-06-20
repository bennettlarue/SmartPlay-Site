import React from "react";
import Memberships from "./Memberships";

export const Footer = () => {
    return (
        <div className="bg-gray-200 grid grid-cols-5 px-8 py-5">
            <div className="p-5 flex items-center justify-center">
                <div>
                    <img
                        src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/logo2-1.png?time=1717187795"
                        alt="Logo"
                        className="mb-2"
                    />
                    <p className="py-2 text-gray-500">
                        Smartplay designs and manufactures traditional lottery
                        drawing equipment, digital random number generator
                        systems, raffle machines, bingo blowers, lottery balls
                        and gaming-related services.
                    </p>
                </div>
            </div>
            <div className="p-5">
                <h1 className="text-blue-950 font-bold text-lg mb-2">
                    Information
                </h1>
                <ul className="py-2 text-gray-500 space-y-2">
                    <li>(609) 880-1860 1550</li>
                    <li>info@smartplay.com</li>
                    <li>1550 Bridgeboro Road</li>
                    <li>Edgewater Park, NJ 08010</li>
                    <li className="pt-4">
                        <img
                            className=" w-36"
                            src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/iso-2015-logo2-blue-with-smartplay-500px-300x150-1.jpg?time=1717187795"
                        />
                    </li>
                </ul>
            </div>
            <div className="p-5">
                <h1 className="text-blue-950 font-bold text-lg">Quick Links</h1>
                <ul className="py-2 text-blue-700 space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="p-5">
                <h1 className="text-blue-950 font-bold text-lg">
                    Top Products
                </h1>
                <ul className="py-2 text-blue-700 space-y-2">
                    <li>Traditional Lottery Machines</li>
                    <li>Bingo & Keno</li>
                    <li>Lottery Balls</li>
                    <li>Prize Wheels</li>
                    <li>More Products</li>
                </ul>
            </div>
            <div className="p-5">
                <h1 className="text-blue-950 font-bold text-lg mb-3">
                    Memberships
                </h1>
                <Memberships />
            </div>
        </div>
    );
};

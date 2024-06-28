"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Carousel } from "@material-tailwind/react";
import { Title } from "@/app/components/products/Title";
import { motion } from "framer-motion";
import VimeoEmbed from "@/app/components/VimeoEmbed";

const images = [
    "/images/casino-promotions-106.jpg",
    "/images/rocknwheel1.jpg",
    "https://smartplay.com/wp-content/uploads/2020/02/michigan-lottery.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-vault-ireland.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-drawing-drum.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-tic-tac-toe1.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-prize-vault2.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-ny-lottery-display.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-ireland.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-game-cube.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-deleware-lottery.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-coffre-fort.jpg",
];

const checks = [
    "Connect multiple machines to one Solution System™ appliance",
    "Capture the details of every draw event including ball values. Makes draw reports easy",
    "Automate the drawing process without losing the iconic live ball drawing event",
    "Generate draw reports and export drawing data to a USB drive",
    "Carries FCC and CE approval and conforms to R&TTE Directive 99/5/EC",
];

const standardFeatures = [
    "A self-contained secure appliance, running on our own secure Linux OS",
    "Dual Login functionality which increases the audit-ability and traceability of drawings",
    "Connects to any SmartController enabled draw machine",
    "Real-time view of machine stats including the current thumbwheel settings",
    "Interactive, Semi-Automatic, Automatic and Continuous game play modes",
    "Creates drawing reports in PDF and CSV formats",
    "Generates exportable log files creating an audit trail on all drawings conducted on the system",
];

const customFeatures = [
    "Custom-designed reports that match your forms",
    "Custom 3-D animations based on drawing results",
    "Store draw data directly into a Postgres SQL server",
    "Export custom animations to optional Origin Portal for upload to Youtube, Facebook, FTP, or our Video Servers which will automatically play the animation at a remote location",
    "Configurable password strength, expiration, and previous password memory",
    "Configurable password protection for every part of the solution software at all times",
];

export default function App() {
    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg"
                    alt="Custom Promotions and Events"
                    className="w-full h-full object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Solution System - Lottery Draw Software" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1000px] pt-20 pb-12 text-lg px-4 md:px-8 lg:px-0">
                    <div className="space-y-10 max-[700px]:">
                        <h2 className="text-3xl font-semibold text-blue-950 text-center">
                            Real-time winning number identification and remote
                            draw machine control
                        </h2>

                        <p className="text-lg text-center px-2 md:px-10">
                            Get the best of both worlds. Smartplay’s Solution
                            System™ fuses the excitement of the traditional draw
                            with automation and efficiency of a digital draw.
                            Solution System is a secure software appliance that
                            integrates with any Smartplay lottery machine.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1100px] gap-x-6 items-center px-4 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    <ul className="space-y-6 bg-gray-200 p-4 text-blue-950 font-semibold col-span-1 max-w-[700px] mx-auto">
                        {checks.map((check, index) => (
                            <li key={index} className="flex space-x-2 text-lg">
                                <p className="text-xl">•</p>
                                <p>{check}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="mb-8 md:mb-0 flex justify-center">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2017/06/solution-system.jpg"
                            alt="Customer Service"
                            className="h-[450px]  rounded shadow"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1200px] gap-x-6 items-center px-4 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    <div className="mb-8 md:mb-0 flex justify-center">
                        <VimeoEmbed videoId="103863141" />
                    </div>
                    <ul className="space-y-6 p-4 text-blue-950 font-semibold col-span-1 max-w-[700px] mx-auto">
                        <li>
                            <h2 className="text-2xl">Standard Features</h2>
                        </li>
                        {standardFeatures.map((check, index) => (
                            <li key={index} className="flex space-x-2 text-lg">
                                <p className="text-xl">•</p>
                                <p>{check}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="mx-auto max-w-[1200px] items-center px-4 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    <h2 className="text-3xl font-semibold text-blue-950 p-4">
                        {" "}
                        Add Custom Features at Any Time
                    </h2>
                    <ul className="p-4 text-blue-950 font-semibold col-span-1 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        {customFeatures.map((check, index) => (
                            <li key={index} className="flex space-x-2 text-lg">
                                <p className="text-xl">•</p>
                                <p>{check}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
}

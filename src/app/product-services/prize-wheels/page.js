"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import VimeoEmbed from "@/app/components/VimeoEmbed";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import { Title } from "@/app/components/products/Title";

const checks = [
    "Customize design and functions to meet your objectives",
    "Incorporate the latest lighting, IoT, RFID and remote operation technologies",
    "Design, fabrication, and programming all under one roof",
    "Custom wheels have been certified in multiple lottery jurisdictions",
];

export default function App() {
    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2022/07/header-wheels.jpg"
                    alt="Customer Service"
                    className="w-full object-cover -translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>{" "}
                {/* Overlay */}
            </div>

            <Title text="Prize Wheels" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1100px] pt-20 text-lg">
                    <div className="space-y-10">
                        <h2 className="text-3xl font-semibold text-blue-950 text-center">
                            Custom Prize Wheel Design and Fabrication for
                            Lottery, Gaming, and Promotions
                        </h2>
                        <p className="text-lg text-center px-10">
                            Smartplay has designed and manufactured custom prize
                            wheels for dozens of clients worldwide. We
                            understand the lottery, gaming and television
                            industries and can work with your team to design a
                            prize wheel that meets your visual objectives and
                            budget. Standard wheel designs are available can be
                            customized in a number of ways. Or we can create
                            something truly unique.
                        </p>
                    </div>
                </div>
                <div className=" bg-gray-200 py-6 mt-12">
                    <div className="grid grid-cols-2 col-span-2 items-center gap-x-5 mx-auto max-w-[1100px]">
                        <ul className="space-y-6 bg-gray-200 p-4 text-blue-950 font-semibold">
                            {checks.map((check, index) => (
                                <li
                                    key={index}
                                    className="flex space-x-2 text-lg"
                                >
                                    <p className="text-xl">✓</p>
                                    <p>{check}</p>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <YouTubeEmbed videoId="hFWPxyy3L_k" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="grid grid-cols-2 col-span-2 items-center gap-x-16 mx-auto max-w-[1100px]">
                    <YouTubeEmbed videoId="ws9RFXmeCb4" />
                    <VimeoEmbed videoId="227908438" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

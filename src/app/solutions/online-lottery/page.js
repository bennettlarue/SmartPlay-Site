"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";

const checks = [
    "High-quality, machines designed for continuous play",
    "Extended maintenance plans for years of hassle-free operation",
    "SQL ConnectServer automation software to remotely manage the entire draw process",
    "DrawStudio enclosures to create a secure, self-contained drawing environment",
];

export default function App() {
    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/globe.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover -translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Online Lottery" />
            <div className="bg-white">
                <div className="mx-auto lg:max-w-[1000px] max-w-[700px] py-12 text-lg px-6 lg:px-0">
                    <div className="space-y-10">
                        <h2 className="lg:text-3xl text-xl font-semibold text-blue-950 text-center">
                            Successful and hassle-free online lotteries require
                            the highest-quality equipment and the latest
                            technology.
                        </h2>
                        <p className="text-lg">
                            Online lotteries that operate continuously require
                            high-quality equipment that can operate flawlessly
                            under frequent use. You also need the proper support
                            to provide the routine maintenance required for
                            years of hassle-free operation. Smartplay has worked
                            with online lotteries and betting sites since 2011.
                            We can help you match the right lottery system for
                            your game type and theme for maximum visual impact
                            and reliability.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1000px] gap-x-6 lg:space-y-0 space-y-6 items-center">
                    <ul className="space-y-6 bg-gray-200 p-4 text-blue-950 font-semibold col-span-1 max-w-[700px] mx-auto">
                        {checks.map((check, index) => (
                            <li key={index} className="flex space-x-2 text-lg">
                                <p className="text-xl">✓</p>
                                <p>{check}</p>
                            </li>
                        ))}
                    </ul>

                    <img
                        src="https://smartplay.com/wp-content/uploads/2017/06/betgames1.jpg"
                        alt="Online Lottery"
                        className="col-span-1 rounded shadow mx-auto object-cover lg:w-[500px] w-[300px]"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}

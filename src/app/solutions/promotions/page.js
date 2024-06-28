"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Carousel } from "@material-tailwind/react";
import { Title } from "@/app/components/products/Title";
import { motion } from "framer-motion";

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
    "Custom game design and engineering",
    "Fabrication with wood, metal, and plastic",
    "Delivery logistics worldwide",
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

            <Title text="Promotions" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1000px] py-12 text-lg px-6 md:px-8 lg:px-0">
                    <div className="space-y-6">
                        <h2 className="lg:text-3xl text-xl font-semibold text-blue-950 text-center">
                            Got a big idea for your next promotion, trade show
                            or special event? We can help you bring it to life.
                        </h2>

                        <p className="text-lg">
                            We have designed game and promotion concepts for
                            clients worldwide. Our capabilities include custom
                            design, electronics, sensors and integration of
                            electronics with wood, metal and other materials.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1000px] gap-x-6 items-center px-6 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    <ul className="space-y-6 bg-gray-200 text-blue-950 font-semibold col-span-1 max-w-[700px] mx-auto">
                        {checks.map((check, index) => (
                            <li key={index} className="flex space-x-2 text-xl">
                                <p className="text-xl">•</p>
                                <p>{check}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="mb-8 md:mb-0">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2017/06/nj-million-dollar-replay-drawing-drum.jpg"
                            alt="Customer Service"
                            className="w-full h-[300px] object-cover rounded shadow"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white pb-20">
                <div className="mx-auto lg:max-w-[1000px] max-w-[700px] py-5 text-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0 pt-12">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + (index % 3) * 0.1,
                            }}
                        >
                            <img
                                src={image}
                                alt="Customer Service"
                                className="w-full h-[300px] object-cover rounded shadow"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-200 py-12">
                <div className="mx-auto max-w-[1100px] items-center space-y-5 px-4 md:px-8 lg:px-0">
                    <h2 className="text-3xl font-semibold text-blue-950 text-center">
                        Get The Ball Rolling. Contact Us To Discuss Your Next
                        Promotion
                    </h2>
                    <div className="flex justify-center">
                        <ArrowButton text="Contact Us" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

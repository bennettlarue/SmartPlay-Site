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
    "Custom development of lottery-style games and promotions",
    "Lottery machine rental for a day, week, month or longer. We ship worldwide",
    "Promotional concept development and creative theme design",
];

export default function App() {
    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Casino Gaming" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1000px] pt-20 pb-12 text-lg px-4 md:px-8 lg:px-0">
                    <div className="space-y-10 max-[700px]:">
                        <h2 className="text-3xl font-semibold text-blue-950 text-center">
                            Generate Excitement and Coin-In by Bringing
                            Lottery-Style Promotions to your Casino
                        </h2>

                        <p className="text-lg text-center px-2 md:px-10">
                            Smartplay has also designed dozens of custom games
                            for casinos and lotteries for both promotional and
                            wagering use. Many creative promotions can be run
                            using a single lottery machine. By changing the ball
                            values and colors, you can create a number of
                            different promotions using a single lottery machine.
                            Use a lottery machine as a fresh alternative to
                            traditional game boards. Ball values can be captured
                            automatically via electronic sensor and sent
                            directly to your player tracking system or content
                            delivery network. Smartplay has a number of lottery
                            machines available for rental or sale. We can also
                            customize a machine to meet your specific
                            objectives.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1000px] gap-x-6 items-center px-4 md:px-8 lg:px-0">
                    <ul className="space-y-6 bg-gray-200 p-4 text-blue-950 font-semibold col-span-1 max-w-[700px] mx-auto">
                        <li className="text-3xl font-bold">
                            Casino Services Include:
                        </li>
                        {checks.map((check, index) => (
                            <li key={index} className="flex space-x-2 text-lg">
                                <p className="text-xl">•</p>
                                <p>{check}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="mb-8 md:mb-0">
                        <Carousel
                            className="rounded shadow max-h-[400px]"
                            loop={true}
                            autoplay={true}
                        >
                            <img
                                src="https://smartplay.com/wp-content/uploads/2018/07/casino-promotions-105.jpg"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2018/07/casino-promotions-101.jpg"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2018/07/casino-promotions-104.jpg"
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2018/07/casino-promotions-102.jpg"
                                alt="image 4"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>
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
                        Get The Ball Rolling. Contact Us To Discuss Your Casino
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

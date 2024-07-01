"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";
import { motion } from "framer-motion";
import VimeoEmbed from "@/app/components/VimeoEmbed";
import { ArrowButton } from "@/app/components/ArrowButton";

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
    "Casino Promotions and Events",
    "Charity Auctions and Fundraisers",
    "Tradeshow Promotions",
    "Automotive Marketing",
    "Retail and Mall Promotions",
    "Online Promotions",
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

            <Title text="Lottery Machine Rental" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1100px] py-12 text-lg px-6 md:px-8 lg:px-0">
                    <div className="space-y-10 max-w-[700px]:">
                        <h2 className="lg:text-3xl text-xl font-semibold text-blue-950 text-center">
                            Add the Thrill of the Draw To Your Next Event!
                        </h2>

                        <div className="grid lg:grid-cols-2 grid-cols-1 space-y-5 items-center">
                            <div className=" md:px-10 space-y-3">
                                <h2 className="text-lg font-semibold text-blue-950">
                                    Generate more traffic and engage visitors
                                    with the excitement of a live draw.
                                </h2>
                                <p className="text-lg ">
                                    The lottery is a multi-trillion dollar
                                    global pastime for a reason.{" "}
                                    <strong>
                                        Everyone loves the chance to win big!
                                    </strong>{" "}
                                    Generate excitement at your next event by
                                    renting a lottery or bingo machine. Lottery
                                    machine rental is available for weekly or
                                    monthly rental and can be shipped worldwide.
                                </p>
                            </div>

                            <ul className="min-w-[450px] space-y-4">
                                <li className="p-4 bg-gray-200 rounded flex">
                                    <p className="font-bold mr-2">✓</p>
                                    <p>
                                        Ships ready for use. Just roll out of
                                        the crate and plug into any standard
                                        outlet
                                    </p>
                                </li>
                                <li className="p-4 bg-gray-200 rounded flex">
                                    <p className="font-bold mr-2">✓</p>
                                    <p>Wrap the base with custom graphics</p>
                                </li>
                                <li className="p-4 bg-gray-200 rounded flex">
                                    <p className="font-bold mr-2">✓</p>
                                    <p>
                                        Numbered lottery balls are provided, or
                                        order with custom fonts and even your
                                        logo
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1000px] gap-x-6 px-4 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    {checks.map((check, index) => (
                        <div
                            key={index}
                            className="flex space-x-2 text-xl lg:p-2 font-medium text-blue-950"
                        >
                            <p className="text-xl">•</p>
                            <p>{check}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-blue-950 py-12">
                <div className="lg:flex mx-auto max-w-[1100px] gap-x-6 items-center px-4 md:px-8 lg:px-0 w-fit">
                    <div className="text-xl font-semibold text-white max-w-[700px] lg:mb-0 mb-7">
                        Get big ideas for your next event. Contact us at
                        609-880-1860 or submit a request for current
                        availability.
                    </div>
                    <ArrowButton text="Request Info" />
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

            <Footer />
        </div>
    );
}

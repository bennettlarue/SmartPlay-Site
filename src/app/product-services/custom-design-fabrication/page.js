"use client";

import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Title } from "@/app/components/products/Title";
import { motion } from "framer-motion";
import { ArrowButton } from "@/app/components/ArrowButton";

const images = [
    "https://smartplay.com/wp-content/uploads/2017/07/ballmachine-382x239.png",
    "https://smartplay.com/wp-content/uploads/2020/02/rocknwheel1.jpg?v=1616768386",
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

export default function App() {
    return (
        <div>
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2022/07/lottery-balls.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>
            <Title text="Custom Design Fabrication" />
            <div className="bg-white">
                <div className="mx-auto lg:max-w-[1000px] max-w-[700px] py-12 text-lg px-6 lg:px-0">
                    <h2 className="lg:text-3xl text-xl font-semibold text-blue-950 text-center">
                        A unique combination of programmers, engineers,
                        carpenters, and craftsmen to deliver just about anything
                        you can dream up.
                    </h2>

                    <div className=" pt-10 text-xl space-y-6">
                        <p>
                            Have a big idea for your next game, event or
                            promotion? Want to design a game device for your
                            streaming show? Maybe you’re working through some
                            concepts and need feedback to discuss practical
                            aspects like transport, lighting or maintenance.
                            Contact Us to set up a call to discuss your project.
                        </p>
                        <p>
                            Regardless, we can talk through considerations with
                            you. With technology, engineering, and fabrication
                            teams all under one roof, we can bring your concept
                            to life.
                        </p>
                        <div className="mx-auto w-fit">
                            <ArrowButton text="Contact Us" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white pb-20">
                <div className="mx-auto lg:max-w-[1000px] max-w-[700px] py-5 text-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
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

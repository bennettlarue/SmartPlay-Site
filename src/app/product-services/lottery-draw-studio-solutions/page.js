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
    "Develop strategy and plan with Executive Team",
    "Evaluate the proposed studio space and create an overall plan for studio design and implementation",
    "Evaluate and recommend equipment including internal and external network, studio design, broadcast and post-production equipment",
    "Determine number of crew needed, including necessary qualifications",
    "Provide mobile/backup broadcast solution as well as internet connectivity use and best practices",
    "Create, brand and launch a professional social based live stream channel",
    "Train and rehearse with crew and talent. Provide training materials with step by step instruction for crew",
    "Create back up and technical difficulties solution",
    "Interface with broadcast channel and streaming provider",
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

            <Title text="Lottery Draw Studio Solutions" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1100px] py-12 text-lg px-4 md:px-8 lg:px-0">
                    <div className="space-y-10 max-[700px]:">
                        <h2 className="lg:text-3xl text-xl font-semibold text-blue-950 text-center">
                            Let us set up the studio while you continue to focus
                            on your business
                        </h2>

                        <div className="lg:flex items-center space-y-5">
                            <VimeoEmbed videoId="748452692" />
                            <div className="px-2 md:px-10 space-y-3">
                                <h2 className="text-xl font-semibold text-blue-950">
                                    Smartplay Draw Studio Solutions can manage
                                    the entire process from design to launch.
                                </h2>
                                <p className="text-lg ">
                                    Creating a functioning lottery Draw Studio
                                    can be a challenge. From developing a
                                    creative strategy, to equipment, to training
                                    and implementation there are many details to
                                    consider. Smartplay can assist your team in
                                    any aspect of Draw Studio design and
                                    implementation including the following:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1100px] gap-x-6 px-4 md:px-8 lg:px-0 lg:gap-5 lg:space-y-0 space-y-2">
                    {checks.map((check, index) => (
                        <div
                            key={index}
                            className="flex space-x-2 lg:text-lg p-2 font-medium text-blue-950"
                        >
                            <p className="text-xl">•</p>
                            <p>{check}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-[1000px] gap-x-6 items-center px-4 md:px-8 lg:px-0">
                    <div className="space-y-3 p-4 col-span-2">
                        <h2 className="text-xl font-semibold text-blue-950">
                            Meet Michael DeCheser
                        </h2>
                        <p className="text-lg">
                            Michael DeCheser is an award-winning media
                            professional with over 25 years of experience and
                            deep knowledge in broadcasting and entertainment.
                            His expertise includes production, live streaming,
                            digital strategy, marketing, social media, and
                            multimedia development. He has produced live
                            streaming experiential events at the MTV Video Music
                            Awards, the American Music Awards, The Academy of
                            Country Music Awards, the Grammy Awards as well as
                            the NCAA Final Four.
                        </p>
                    </div>

                    <div className="flex justify-center lg:col-span-1 col-span-2">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2020/04/michael-decheser1-254x300.jpg"
                            alt="Lottery Draw Studio Solutions"
                            className="w-full max-w-[200px] h-auto rounded shadow"
                        />
                    </div>

                    <div className="space-y-3 p-4 col-span-3 text-lg">
                        <p className="">
                            Michael has also served as the Broadcast and Media
                            Director for The New Jersey Lottery where he
                            developed and launched industry-pioneering
                            innovations related to live streaming, social media,
                            and daily broadcasting. His solutions and new media
                            advancements are responsible for the New Jersey
                            Lottery to own many industry firsts and play host to
                            the live broadcast of the multi state game “Cash 4
                            Life”. The New Jersey Lottery’s approach to
                            broadcasting their draw with multi-platform media
                            integration is considered the pinnacle for other
                            lotteries around the world. He was also appointed by
                            the Governor of New Jersey to the board of the NJ
                            Public Broadcasting Authority.
                        </p>
                        <p>
                            Michael’s expertise and experience in large audience
                            live streaming, studio production requirements and
                            lottery innovation put him at the very top of a
                            short list of qualified people to deliver any type
                            of draw studio solution.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 pb-20">
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

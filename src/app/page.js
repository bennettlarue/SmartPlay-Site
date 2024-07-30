"use client";

import { motion } from "framer-motion";
import { Nav } from "./components/Nav";
import { Splash } from "./components/home/Splash";
import Numbers from "./components/home/Numbers";
import { MachineSlides } from "./components/home/MachineSlides";
import OriginSys from "./components/home/OriginSys";
import Clients from "./components/home/Clients";
import { WhySmartPlay } from "./components/home/WhySmartPlay";
import { Footer } from "./components/Footer";
import { PopupText } from "./components/PopupText";
import { FadeInText } from "./components/FadeInText";
import { ArrowButton } from "./components/ArrowButton";
import { SectionHeader } from "./components/SectionHeader";
import { SectionContent } from "./components/SectionContent";
import Counter from "./components/home/Counter";
import { LineBreak } from "./components/LineBreak";

export default function Home() {
    return (
        <main>
            <Nav />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="relative">
                    <img
                        className="absolute w-full h-full object-cover"
                        src="https://media.istockphoto.com/id/1314972402/vector/multicolored-lottery-balls-vector-background.jpg?s=2048x2048&w=is&k=20&c=f6TPkeUWd7E7zid09NkUZLfwidvj9wumvM-D0-jdCKI="
                        alt="Splash"
                    />
                    <div className="relative bg-gray-900 bg-opacity-50">
                        <div
                            className="bg-gray-200"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
                                backgroundSize: "20px 20px",
                                clipPath:
                                    "polygon(55% 0, 65% 100%, 0 100%, 0 0)",
                            }}
                        >
                            <div className="contentSection">
                                <div className="text-blue-950 max-w-full md:max-w-[800px] space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/ball.png?time=1717187795"
                                            alt="Ball"
                                            className="h-6"
                                        />
                                        <SectionHeader content="Global Leader In" />
                                    </div>
                                    <div>
                                        <PopupText text={"Lottery"} delay={0} />
                                        <PopupText
                                            text={"Machine"}
                                            delay={0.2}
                                        />
                                        <PopupText
                                            text={"Manufacturing"}
                                            delay={0.4}
                                        />
                                    </div>
                                    <SectionHeader content="And Digital Drawing Systems" />
                                    <ArrowButton text="View Products" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader content="Highest Quality Lottery, Bingo & Raffle Number Drawing Systems" />
                    <SectionContent content="Smartplay International preserves drawing integrity for lottery and gaming organizations in 126 countries. We design and manufacture the most advanced traditional and digital lottery drawing systems available, with more than 5,000 systems deployed worldwide since 1993." />
                </div>
            </div>
            <div className="secondarySection">
                <ul className="contentSection">
                    <li className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-3 md:space-y-0">
                        <div className="text-3xl md:text-6xl text-orange-500 rounded-full font-bold w-[150px]">
                            <Counter number={5} />
                            K+
                        </div>
                        <SectionHeader>Drawing Systems Produced</SectionHeader>
                    </li>
                    <LineBreak />
                    <li className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-3 md:space-y-0">
                        <div className="text-3xl md:text-6xl text-orange-500 rounded-full font-bold w-[150px]">
                            <Counter number={600} />+
                        </div>
                        <SectionHeader>Clients</SectionHeader>
                    </li>
                    <LineBreak />

                    <li className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-3 md:space-y-0">
                        <div className="text-3xl md:text-6xl text-orange-500 rounded-full font-bold w-[150px]">
                            <Counter number={127} />+
                        </div>
                        <SectionHeader>Countries</SectionHeader>
                    </li>
                </ul>
            </div>
        </main>
    );
}

"use client";

import { motion } from "framer-motion";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { PopupText } from "./components/PopupText";
import { FadeInText } from "./components/FadeInText";
import { ArrowButton } from "./components/ArrowButton";
import { SectionHeader } from "./components/SectionHeader";
import { SectionContent } from "./components/SectionContent";
import Counter from "./components/home/Counter";
import { LineBreak } from "./components/LineBreak";
import { SmallerHeader } from "./components/SmallerHeader";
import MachineCarousel from "./components/home/MachineCarosel";

export default function Home() {
    const clientLogos = [
        "https://images.ctfassets.net/j16ev64qyf6l/528kLUDrUcGK0SvvdYcCok/c69716735876492850cf97776a4abb77/TNL_Master_Logo_2019_RGB_Horizontal_Heritage_Blue_Text.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Powerball_logo.svg/2560px-Powerball_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/MassLottoLogo.svg/2560px-MassLottoLogo.svg.png",
        "https://milotteryconnect.com/wp-content/uploads/2012/10/milottery-horz-logo2.png",
        "/images/logos/lotoQuebec.png",
        "/images/logos/sportowy.png",
        "/images/logos/caLottery.png",
    ];

    const machineData = [
        {
            title: "Roulette",
            desc: "Roulette is the most popular lottery system in the world.",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/casino-pick-roulette1-1.jpg",
        },
        {
            title: "Keno",
            desc: "Keno is the most popular lottery system in the world.",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/500-800-max.jpg",
        },
        {
            title: "Bingo",
            desc: "Bingo is the most popular lottery system in the world.",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/Galaxy-bingo-machine-747x1536.jpg",
        },
        {
            title: "Lotto",
            desc: "Lotto is the most popular lottery system in the world.",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/jupiter-keno-front-lighting-Copy-Copy.jpg",
        },
        {
            title: "Gems",
            desc: "Gems is the most popular lottery system in the world.",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/10/gem.jpg",
        },
        {
            title: "Multi Digit",
            desc: "Multi Digit is the most popular lottery system in the world.",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/10/multi-digit-gem-lottery-georgia.jpg",
        },
    ];

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
                    <div className="flex justify-center text-center">
                        <SectionHeader content="The Global Leader In Lottery Machine Manufacturing & Digital Lottery Drawing Systems" />
                    </div>
                    <SectionContent content="Smartplay International preserves drawing integrity for lottery and gaming organizations in 127 countries. In-house design and manufacture of the most advanced traditional and digital lottery drawing systems available, with more than 3,000 lottery systems deployed worldwide since 1993. We serve traditional lotteries, igaming, and casinos as well as organizations running lottery-style promotions and fundraising events." />
                    <LineBreak />
                    <ul className="grid grid-cols-3 gap-12">
                        <li className="space-y-3">
                            <div className="text-3xl md:text-5xl text-orange-500 font-bold">
                                <Counter number={5} />
                                K+
                            </div>
                            <div className="max-w-[300px]">
                                <SmallerHeader>
                                    Drawing Systems
                                    <br />
                                    Produced
                                </SmallerHeader>
                            </div>
                        </li>
                        <li className="space-y-3">
                            <div className="text-3xl md:text-5xl text-orange-500 font-bold">
                                <Counter number={600} />+
                            </div>
                            <SmallerHeader content="Clients" />
                        </li>
                        <li className="space-y-3">
                            <div className="text-3xl md:text-5xl text-orange-500 font-bold w-[105px]">
                                <Counter number={127} />
                            </div>
                            <SmallerHeader content="Countries" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <div className="flex justify-center text-center">
                        <SectionHeader content="Here Are Some Clients That Rely On Smartplay" />
                    </div>
                    <LineBreak />
                    <div className="grid grid-cols-3 lg:gap-12 gap-4">
                        {clientLogos.map((logo) => (
                            <img
                                key={logo}
                                src={logo}
                                alt="Client Logo"
                                className="w-[300px] h-24 object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="primarySection">
                <div className="contentSection">
                    <div className="flex justify-center text-center">
                        <SectionHeader content="Highest Quality Lottery, Bingo & Raffle Number Drawing Systems" />
                    </div>
                    <LineBreak />
                    <MachineCarousel data={machineData} />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection"></div>
            </div>
            <Footer />
        </main>
    );
}

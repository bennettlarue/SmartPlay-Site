"use client";

import { motion, AnimatePresence } from "framer-motion";
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
import LogoGrid from "./components/home/LogoGrid";
import { ImageCard } from "./components/ImageCard";
import { PostCard } from "./components/news/PostCard";
import { PostSkeleton } from "./components/news/PostSkeleton";
import { useEffect, useState } from "react";
import Splash from "./components/home/Splash";

export default function Home() {
    const clientLogos = [
        "https://images.ctfassets.net/j16ev64qyf6l/528kLUDrUcGK0SvvdYcCok/c69716735876492850cf97776a4abb77/TNL_Master_Logo_2019_RGB_Horizontal_Heritage_Blue_Text.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Powerball_logo.svg/2560px-Powerball_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/MassLottoLogo.svg/2560px-MassLottoLogo.svg.png",
        "https://milotteryconnect.com/wp-content/uploads/2012/10/milottery-horz-logo2.png",
        "/images/logos/lotoQuebec.png",
        "/images/logos/sportowy.png",
        "/images/logos/caLottery.png",
        "/images/logos/supremeVentures.png",
    ];

    const machineData = [
        {
            title: "Prize Wheels",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/casino-pick-roulette1-1.jpg",
            link: "/product-services/lottery-drawing-machines?type=Prize+Wheels#machines",
        },
        {
            title: "Single Digit",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/casino-pick-roulette1-1.jpg",
            link: "/product-services/lottery-drawing-machines?type=Single+Digit#machines",
        },
        {
            title: "Lotto",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/jupiter-keno-front-lighting-Copy-Copy.jpg",
            link: "/product-services/lottery-drawing-machines?type=Lotto#machines",
        },
        {
            title: "Keno",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/500-800-max.jpg",
            link: "/product-services/lottery-drawing-machines?type=Keno#machines",
        },
        {
            title: "Bingo",
            imageLink:
                "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/Galaxy-bingo-machine-747x1536.jpg",
            link: "/product-services/lottery-drawing-machines?type=Bingo#machines",
        },
    ];

    const [posts, setPosts] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(
                    "https://smartplay-content.payloadcms.app/api/posts?page=1&sort=-publishedAt&limit=4"
                );
                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok " + response.statusText
                    );
                }
                const data = await response.json();
                setPosts(data.docs);
                console.log(data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <main>
            <Nav />
            <Splash />
            <div className="firstSection">
                <div className="contentSection">
                    <div className="flex justify-center text-center">
                        <SectionHeader content="The Global Leader In Lottery Machine Manufacturing & Digital Lottery Drawing Systems" />
                    </div>
                    <SectionContent content="Smartplay International preserves drawing integrity for lottery and gaming organizations in 127 countries. In-house design and manufacture of the most advanced traditional and digital lottery drawing systems available, with more than 3,000 lottery systems deployed worldwide since 1993. We serve traditional lotteries, igaming, and casinos as well as organizations running lottery-style promotions and fundraising events." />
                    <LineBreak />
                    <ul className="grid grid-cols-3 gap-12 text-center">
                        <li className="space-y-3 w-fit mx-auto">
                            <div className="text-3xl md:text-5xl text-orange-500 font-bold">
                                <Counter number={5} />
                                K+
                            </div>

                            <SmallerHeader>
                                Drawing Systems
                                <br />
                                Produced
                            </SmallerHeader>
                        </li>
                        <li className="space-y-3 w-fit mx-auto">
                            <div className="text-3xl md:text-5xl text-orange-500 font-bold">
                                <Counter number={600} />+
                            </div>
                            <SmallerHeader content="Clients" />
                        </li>
                        <li className="space-y-3 w-fit mx-auto">
                            <div className="text-3xl md:text-5xl text-orange-500 font-bold">
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
                    <LogoGrid clientLogos={clientLogos} />
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
                <div className="contentSection">
                    <ImageCard img="https://smartplay.com/wp-content/uploads/2021/01/origin-arizona.jpg">
                        <SectionHeader content="Origin Digital Drawing Systems (RNG)" />
                        <SectionContent content="The Origin® Digital Lottery Draw System is an alternative to mechanical lottery ball systems. Many lotteries choose to run entirely with a digital system or compliment their traditional ball draw with a higher frequency game that’s run through the Origin RNG-based system." />
                        <ArrowButton
                            text="Learn More"
                            href="/product-services/origin-digital-draw"
                        />
                    </ImageCard>
                </div>
            </div>
            <div className="primarySection">
                <div className="contentSection">
                    <ImageCard
                        img="https://smartplay.com/wp-content/uploads/2020/02/rocknwheel1.jpg?v=1616768386"
                        flipped={true}
                    >
                        <SectionHeader content="Custom Game Design" />
                        <SectionContent content="With all aspects of design and fabrication under one roof, we can work with you to develop new concepts quickly and cost effectively." />
                        <ArrowButton
                            text="Learn More"
                            href="/product-services/custom-design-fabrication"
                        />
                    </ImageCard>
                </div>
            </div>
            <div className="secondarySection bottomSection">
                <div className="contentSection">
                    <div className="flex justify-center text-center">
                        <SectionHeader content="Latest News" />
                    </div>
                    <LineBreak />
                    <div className="justify-center grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <AnimatePresence>
                            {posts ? (
                                posts.map((post, index) => (
                                    <PostCard
                                        post={post}
                                        index={index}
                                        setHoveredIndex={setHoveredIndex}
                                        hoveredIndex={hoveredIndex}
                                    />
                                ))
                            ) : (
                                <>
                                    <PostSkeleton />
                                    <PostSkeleton />
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

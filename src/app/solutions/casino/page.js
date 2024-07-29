"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Carousel } from "@material-tailwind/react";
import { Title } from "@/app/components/products/Title";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionContent } from "@/app/components/SectionContent";
import { BulletList } from "@/app/components/BulletList";
import FetchImageGallery from "@/app/components/FetchImageGallery";

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

export default function Casino() {
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
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader
                        content="Generate Excitement and Coin-In by Bringing
                            Lottery-Style Promotions to your Casino"
                    />
                    <SectionContent
                        content="Smartplay has also designed dozens of custom games
                            for casinos and lotteries for both promotional and
                            wagering use. Many creative promotions can be run
                            using a single lottery machine. By changing the ball
                            values and colors, you can create a number of
                            different promotions using a single lottery machine."
                    />
                    <SectionContent
                        content="Use a lottery machine as a fresh alternative to
                            traditional game boards. Ball values can be captured
                            automatically via electronic sensor and sent
                            directly to your player tracking system or content
                            delivery network. Smartplay has a number of lottery
                            machines available for rental or sale. We can also
                            customize a machine to meet your specific
                            objectives."
                    />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <SectionHeader content="Casino Services Include:" />
                            <BulletList bullets={checks} />
                        </div>
                        <div className="lg:mt-0 mt-6 mb-8 md:mb-0">
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
            </div>

            <div className="primarySection bottomSection">
                <div className="contentSection">
                    <FetchImageGallery
                        url={
                            "https://smartplay-content.payloadcms.app/api/image-galleries/66a1ab5b2c073597d83a906c?locale=undefined&draft=false&depth=1"
                        }
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}

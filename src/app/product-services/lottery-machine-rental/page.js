"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";
import { motion } from "framer-motion";
import { ArrowButton } from "@/app/components/ArrowButton";
import { PageBackground } from "@/app/components/PageBackground";
import { SectionContent } from "@/app/components/SectionContent";
import { SectionHeader } from "@/app/components/SectionHeader";
import { ImageCard } from "@/app/components/ImageCard";
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
    "Casino Promotions and Events",
    "Charity Auctions and Fundraisers",
    "Tradeshow Promotions",
    "Automotive Marketing",
    "Retail and Mall Promotions",
    "Online Promotions",
];

const listItems = [
    "Ships ready for use. Just roll out of the crate and plug into any standard outlet",
    "Wrap the base with custom graphics",
    "Numbered lottery balls are provided, or order with custom fonts and even your logo",
];

export default function App() {
    return (
        <div className="App">
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg" />

            <Title text="Lottery Machine Rental" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader content="Add the Thrill of the Draw To Your Next Event!" />
                    <SectionContent content="The lottery is a multi-trillion dollar global pastime for a reason. Everyone loves the chance to win big! Generate excitement at your next event by renting a lottery or bingo machine. Lottery machine rental is available for weekly or monthly rental and can be shipped worldwide." />
                    <BulletList bullets={listItems} />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <SectionHeader
                        content="Generate more traffic and engage visitors
                                    with the excitement of a live draw."
                    />
                    <BulletList bullets={checks} cols={2} />
                </div>
            </div>
            <div className="primarySection">
                <div className="contentSection">
                    <SectionHeader
                        content="Get big ideas for your next event? Contact us at
                                    609-880-1860 or submit a request for current
                                    availability."
                    />
                    <ArrowButton text="Request Info" />
                </div>
            </div>

            <div className="secondarySection bottomSection">
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

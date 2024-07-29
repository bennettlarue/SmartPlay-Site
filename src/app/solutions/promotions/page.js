"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";
import { motion } from "framer-motion";
import { PageBackground } from "@/app/components/PageBackground";
import { SectionContent } from "@/app/components/SectionContent";
import { SectionHeader } from "@/app/components/SectionHeader";
import { ImageCard } from "@/app/components/ImageCard";
import { BulletList } from "@/app/components/BulletList";
import FetchImageGallery from "@/app/components/FetchImageGallery";

const checks = [
    "Custom game design and engineering",
    "Fabrication with wood, metal, and plastic",
    "Delivery logistics worldwide",
];

export default function Promotions() {
    return (
        <div className="App">
            <Nav />
            <PageBackground image="/images/backgrounds/lottery-tickets.jpg" />

            <Title text="Promotions" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader
                        content="Got a big idea for your next promotion, trade show or
                        special event? We can help you bring it to life."
                    />

                    <SectionContent
                        content="We have designed game and promotion concepts for clients
                        worldwide. Our capabilities include custom design,
                        electronics, sensors and integration of electronics with
                        wood, metal and other materials."
                    />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <ImageCard img="/images/solutions/nj-replay.jpg">
                        <BulletList bullets={checks} />
                    </ImageCard>
                </div>
            </div>

            <div className="primarySection">
                <div className="contentSection">
                    <FetchImageGallery
                        url={
                            "https://smartplay-content.payloadcms.app/api/image-galleries/66a1ab5b2c073597d83a906c?locale=undefined&draft=false&depth=1"
                        }
                    />
                </div>
            </div>

            <div className="secondarySection bottomSection">
                <div className="contentSection">
                    <SectionHeader
                        content="Get The Ball Rolling. Contact Us To Discuss Your Next
                        Promotion"
                    />
                    <ArrowButton
                        text="Contact Us"
                        href="/contact"
                        bg_color="bg-orange-500"
                        bg_hover="bg-orange-600"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}

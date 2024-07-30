"use client";

import { BulletList } from "@/app/components/BulletList";
import { Footer } from "@/app/components/Footer";
import { ImageCard } from "@/app/components/ImageCard";
import { Nav } from "@/app/components/Nav";
import { PageBackground } from "@/app/components/PageBackground";
import { Title } from "@/app/components/products/Title";
import { SectionContent } from "@/app/components/SectionContent";
import { SectionHeader } from "@/app/components/SectionHeader";

const checks = [
    "High-quality, machines designed for continuous play",
    "Extended maintenance plans for years of hassle-free operation",
    "SQL ConnectServer automation software to remotely manage the entire draw process",
    "DrawStudio enclosures to create a secure, self-contained drawing environment",
];

export default function OnlineLottery() {
    return (
        <div>
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/globe.jpg" />

            <Title text="Online Lottery" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader
                        content="Successful and hassle-free online lotteries require
                            the highest-quality equipment and the latest
                            technology."
                    />
                    <SectionContent
                        content="Online lotteries that operate continuously require
                            high-quality equipment that can operate flawlessly
                            under frequent use. You also need the proper support
                            to provide the routine maintenance required for
                            years of hassle-free operation."
                    />
                    <SectionContent
                        content="Smartplay has worked
                            with online lotteries and betting sites since 2011.
                            We can help you match the right lottery system for
                            your game type and theme for maximum visual impact
                            and reliability."
                    />
                </div>
            </div>
            <div className="secondarySection bottomSection">
                <div className="contentSection">
                    <ImageCard img="https://smartplay.com/wp-content/uploads/2017/06/betgames1.jpg">
                        <BulletList bullets={checks} />
                    </ImageCard>
                </div>
            </div>

            <Footer />
        </div>
    );
}

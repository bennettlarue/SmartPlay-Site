"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { PageBackground } from "@/app/components/PageBackground";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionContent } from "@/app/components/SectionContent";
import { Title } from "@/app/components/products/Title";
import { VideoCard } from "@/app/components/VideoCard";
import { BulletList } from "@/app/components/BulletList";
import { VideoEmbed } from "@/app/components/VideoEmbed";

const checks = [
    "Customize design and functions to meet your objectives",
    "Incorporate the latest lighting, IoT, RFID and remote operation technologies",
    "Design, fabrication, and programming all under one roof",
    "Custom wheels have been certified in multiple lottery jurisdictions",
];

export default function PrizeWheels() {
    return (
        <div>
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2022/07/header-wheels.jpg" />

            <Title text="Prize Wheels" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader content="Prize Wheel Design and Fabrication" />
                    <SectionContent content="Smartplay has designed and manufactured custom prize wheels for dozens of clients worldwide. We understand the lottery, gaming and television industries and can work with your team to design a prize wheel that meets your visual objectives and budget. Standard wheel designs are available can be customized in a number of ways. Or we can create something truly unique." />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <VideoEmbed url="https://youtu.be/hFWPxyy3L_k" />
                    <BulletList bullets={checks} />
                </div>
            </div>
            <div className="primarySection bottomSection">
                <div className="contentSection">
                    <VideoCard video={"https://youtu.be/ws9RFXmeCb4"}>
                        <VideoEmbed url="https://vimeo.com/227908438" />
                    </VideoCard>
                </div>
            </div>
            <Footer />
        </div>
    );
}

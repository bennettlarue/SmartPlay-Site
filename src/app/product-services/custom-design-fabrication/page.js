"use client";

import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Title } from "@/app/components/products/Title";
import { ArrowButton } from "@/app/components/ArrowButton";
import { PageBackground } from "@/app/components/PageBackground";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionContent } from "@/app/components/SectionContent";
import FetchImageGallery from "@/app/components/FetchImageGallery";

export default function CustomDesignFabrication() {
    return (
        <div>
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2022/07/lottery-balls.jpg" />

            <Title text="Custom Design Fabrication" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader content="A unique combination of programmers, engineers, carpenters, and craftsmen to deliver just about anything you can dream up." />
                    <SectionContent
                        content="Have a big idea for your next game, event or
                            promotion? Want to design a game device for your
                            streaming show? Maybe you’re working through some
                            concepts and need feedback to discuss practical
                            aspects like transport, lighting or maintenance.
                            Contact Us to set up a call to discuss your project."
                    />
                    <SectionContent
                        content="Regardless, we can talk through considerations with
                            you. With technology, engineering, and fabrication
                            teams all under one roof, we can bring your concept
                            to life."
                    />
                    <ArrowButton text="Contact Us" href="/contact" />
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

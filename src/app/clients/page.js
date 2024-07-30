"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";
import { motion } from "framer-motion";
import { PageBackground } from "../components/PageBackground";
import { SectionHeader } from "../components/SectionHeader";
import { SectionContent } from "../components/SectionContent";
import { LineBreak } from "../components/LineBreak";
import FetchImageGallery from "../components/FetchImageGallery";

const testimonials = [
    {
        header: "Loto-Quebec",
        body: "We started working with Smartplay almost 20 years ago and we have found we can always count on their high-quality service and reliable products. When I describe what I want, they come through and their designs are perfect! I’ve tried others. For me, Smartplay is just better!",
    },
    {
        header: "California Lottery",
        body: "The California Lottery has worked with Smartplay for 17 years and we currently conduct about 180 drawings a month using their equipment. I’m very comfortable with the quality and reliability of their products. They have performed flawlessly. Smartplay is large enough to meet any of our needs, yet small enough to customize any equipment and provide personalized customer service, and that service is amazing.\n\nTheir capable staff meets all our needs, on time. In my experience, Smartplay international is the world leader in drawing equipment.",
    },
    {
        header: "Totalizer Sportowy, Warsaw, Poland",
        body: "Totalizer Sportowy has been working in cooperation with Smartplay International for many years. They have provided us with reliable, high-quality drawing equipment that meets all our needs. We know that we can always count on their professional service and great teamwork every time.",
    },
    {
        header: "Supreme Ventures, Jamaica",
        body: "Here in Jamaica, we are currently using about 25 draw machines from Smartplay. We do five draws every day so we need machines that will work the first time, every time. I couldn’t ask for more reliable equipment. We seldom have a problem. When you have something that works and looks great, why change it?",
    },
];

const mapSrc =
    "https://www.google.com/maps/d/embed?mid=1ltIrr109929Vyd7sjYpzbzJu4IM&ehbc=2E312F";

export default function Clients() {
    return (
        <div>
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/globe.jpg" />

            <Title text="Our Clients" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader
                        content="Smartplay serves over 450+ lottery, gaming and
                        promotional organizations in 126 countries. Please
                        contact us for a list of references."
                    />

                    <iframe
                        className="w-full h-[400px] border-2 rounded-lg shadow"
                        src={mapSrc}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    {
                        <div className="space-y-10">
                            {testimonials.map((t, i) => (
                                <div key={i} className="">
                                    <div className="space-y-4">
                                        <SectionHeader content={t.header} />
                                        <SectionContent content={t.body} />
                                    </div>
                                    <LineBreak />
                                </div>
                            ))}
                        </div>
                    }
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

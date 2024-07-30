"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { BigLineBreak } from "@/app/components/BigLineBreak";
import { BulletList } from "@/app/components/BulletList";
import { Footer } from "@/app/components/Footer";
import { LineBreak } from "@/app/components/LineBreak";
import { Nav } from "@/app/components/Nav";
import { PageBackground } from "@/app/components/PageBackground";
import { Title } from "@/app/components/products/Title";
import { SectionContent } from "@/app/components/SectionContent";
import { SectionHeader } from "@/app/components/SectionHeader";
import { VideoCard } from "@/app/components/VideoCard";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";

const checks = [
    "Show intros and title animation",
    "Draw sequences",
    "Screen overlay animations",
    "Explainer videos",
    "Training videos",
    "Website animation",
    "Typography animation",
    "Green screen background replacement",
    "Motion graphics",
];

export default function DigitalContent() {
    return (
        <div>
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg" />

            <Title text="Digital Content Solutions" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader content="Make your digital content a reality." />
                    <SectionContent content="Take your digital draw to the next level with life-like computer-generated content." />
                    <LineBreak />
                    <SectionContent
                        content="Your objective is to bring in more players,
                                correct? Why not deliver content that attracts
                                and engages more players? Computer-generated
                                content can differentiate your draw and provide
                                new ways to stand out from competitors."
                    />
                    <SectionContent
                        content="Of course, with computer animation, the sky’s
                                the limit on what can be done. Your lottery draw
                                sequence could be completely realistic,
                                simulating real machines. Or, you could add a
                                touch of flare, combining a realistic look with
                                unique design, textures and highlights that
                                deliver something entirely original. Or simply
                                add an intro to your existing traditional draw."
                    />
                    <LineBreak />
                    <VideoCard
                        video={"https://youtu.be/5cJjkCRER-E"}
                        desc="This short demo of our fictional “GoLotto” is created from a single CGI sequence, cut into thousands of images that are then loaded into the Smartplay Origin Digital Draw System. The Origin then randomly selects the numbers — providing an entirely realistic and seamless digital draw experience."
                    />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <SectionHeader content="Call on the Smartplay creative team to deliver:" />
                    <BulletList bullets={checks} cols={2} />
                    <BigLineBreak />
                    <SectionHeader
                        content="We can work with your requirements to deliver content in
                        a format that works with any system."
                    />
                    <SectionContent
                        content="Contact Smartplay
                        to discuss your digital animation project."
                    />
                    <ArrowButton text="Contact Us" href="/contact" />
                </div>
            </div>

            <div className="primarySection">
                <div className="contentSection">
                    <YouTubeEmbed videoId="5cJjkCRER-E" />
                    <BigLineBreak />
                    <YouTubeEmbed videoId="5cJjkCRER-E" />
                </div>
            </div>

            <Footer />
        </div>
    );
}

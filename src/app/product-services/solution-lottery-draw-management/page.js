"use client";

import { BigLineBreak } from "@/app/components/BigLineBreak";
import { BulletList } from "@/app/components/BulletList";
import { Footer } from "@/app/components/Footer";
import { ImageCard } from "@/app/components/ImageCard";
import { LineBreak } from "@/app/components/LineBreak";
import { Nav } from "@/app/components/Nav";
import { PageBackground } from "@/app/components/PageBackground";
import { Title } from "@/app/components/products/Title";
import { SectionContent } from "@/app/components/SectionContent";
import { SectionHeader } from "@/app/components/SectionHeader";
import { VideoEmbed } from "@/app/components/VideoEmbed";
import VimeoEmbed from "@/app/components/VimeoEmbed";

const checks = [
    "Connect multiple machines to one Solution System™ appliance",
    "Capture the details of every draw event including ball values. Makes draw reports easy",
    "Automate the drawing process without losing the iconic live ball drawing event",
    "Generate draw reports and export drawing data to a USB drive",
    "Carries FCC and CE approval and conforms to R&TTE Directive 99/5/EC",
];

const standardFeatures = [
    "A self-contained secure appliance, running on our own secure Linux OS",
    "Dual Login functionality which increases the audit-ability and traceability of drawings",
    "Connects to any SmartController enabled draw machine",
    "Real-time view of machine stats including the current thumbwheel settings",
    "Interactive, Semi-Automatic, Automatic and Continuous game play modes",
    "Creates drawing reports in PDF and CSV formats",
    "Generates exportable log files creating an audit trail on all drawings conducted on the system",
];

const customFeatures = [
    "Custom-designed reports that match your forms",
    "Custom 3-D animations based on drawing results",
    "Store draw data directly into a Postgres SQL server",
    "Export custom animations to optional Origin Portal for upload to Youtube, Facebook, FTP, or our Video Servers which will automatically play the animation at a remote location",
    "Configurable password strength, expiration, and previous password memory",
    "Configurable password protection for every part of the solution software at all times",
];

export default function SolutionSystem() {
    return (
        <div>
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg" />

            <Title text="Lottery Draw Software" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader
                        content="Real-time winning number identification and remote
                            draw machine control"
                    />
                    <ImageCard
                        img="https://smartplay.com/wp-content/uploads/2017/06/solution-system.jpg"
                        px={100}
                    >
                        <SectionContent
                            content="Get the best of both worlds. Smartplay’s Solution
                            System™ fuses the excitement of the traditional draw
                            with automation and efficiency of a digital draw.
                            Solution System is a secure software appliance that
                            integrates with any Smartplay lottery machine."
                        />
                    </ImageCard>
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <SectionHeader content="Our Solution System™ features:" />
                    <BulletList bullets={checks} />
                </div>
            </div>

            <div className="primarySection bottomSection">
                <div className="contentSection">
                    <SectionHeader content="Standard Features" />
                    <BulletList bullets={standardFeatures} />
                    <BigLineBreak />
                    <VideoEmbed url="https://vimeo.com/226805338" />
                    <BigLineBreak />
                    <SectionHeader content="Add Custom Features at Any Time" />
                    <BulletList bullets={customFeatures} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

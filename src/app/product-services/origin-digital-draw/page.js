"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";
import { Accordions } from "@/app/components/products/origin-digital-draw/Accordions";
import { PageBackground } from "@/app/components/PageBackground";
import { ImageCard } from "@/app/components/ImageCard";
import { SectionContent } from "@/app/components/SectionContent";
import { SectionHeader } from "@/app/components/SectionHeader";
import { VideoCard } from "@/app/components/VideoCard";
import { LineBreak } from "@/app/components/LineBreak";
import { BigLineBreak } from "@/app/components/BigLineBreak";
import { InfoCard } from "@/app/components/about/InfoCard";

const infoArray = [
    {
        title: "Cryptographically Strong Random Numbers",
        description:
            "Utilizes multiple hardware random number generators along with advanced cryptographic algorithms to generate certifiably non-deterministic results.",
    },
    {
        title: "Physical Security",
        description:
            "A self-contained, stand-alone system with no outside inputs. Physical security is safeguarded by the SmartIntrusion system and tamper-evident via a US Department of Homeland Security-TPAT high-security seal.",
    },
    {
        title: "Dual Server Design",
        description:
            "The Origin’s unique Dual Server design isolates the RNG server from outside inputs, for an added level of protection. The user interface and animation processing take place on the workstation server only.",
    },
    {
        title: "Quadruple Check Draw Verification",
        description:
            "First, the number draw process is visible through the workstation monitor. The user can then verify the draw numbers on the RNS screen. A third check is by printing the draw report, and the fourth check with SmartAudit.",
    },
    {
        title: "World-Class Support",
        description:
            "Trained Origin technicians available via our 24/7 support line.",
    },
    {
        title: "Easy Draw Distribution",
        description:
            "Through Origin Portal, easily distribute draw results to retail systems and signage, social media, broadcast, print media and other third parties.",
    },
    {
        title: "Rigorously Audited & Tested",
        description:
            "Origin has passed rigorous testing by the major auditing firms as well as numerous state agencies. Origin has been certified 23 times by Gaming Laboratories Incorporated, Four times by Secure Software Incorporated, twice by BMM, once by Eclipse and four times by KPMG of Vancouver, Canada. The Origin has been proven to perform “unbiased lottery drawings.”",
    },
];

export default function Origin() {
    return (
        <div>
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg" />

            <Title text="Origin Digital Draw System" />
            <div className="firstSection">
                <div className="contentSection">
                    <img
                        src="https://smartplay.com/wp-content/uploads/2021/01/Origin-workstation.png"
                        alt="Origin Digital Draw System"
                        className="w-full h-full object-cover max-w-[400px]"
                    />

                    <LineBreak />

                    <SectionContent
                        content="The Origin® Digital Lottery Draw System is an
                        alternative to mechanical lottery ball systems. Many
                        lotteries choose to run entirely with a digital system
                        or complement their traditional ball draw with a higher
                        frequency game that’s run through the Origin RNG-based
                        system. Origin® Workstation has become the standard for
                        digital draws in North America. Origin is in use daily
                        by 24 US state lotteries, US Virgin Islands as well as
                        Pronosticos in Mexico."
                    />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <ImageCard img="https://smartplay.com/wp-content/uploads/2021/01/origin-arizona.jpg">
                        <SectionHeader content="Mimics a traditional draw process" />
                        <SectionContent
                            content="Using the Origin® System, lottery draw staff find it
                            easy to make the jump from a traditional to digital
                            draw because we intentionally made the process is
                            very similar. The staff goes through much the same
                            steps to generate the numbers."
                        />
                    </ImageCard>
                    <LineBreak />

                    <SectionContent
                        content="Creating a familiar
                            process around the digital drawing increases
                            security and builds consumer trust. It is easy to
                            operate and requires no I.T. assistance."
                    />
                </div>
            </div>
            <div className="primarySection">
                <div className="contentSection">
                    <ImageCard
                        img="https://smartplay.com/wp-content/uploads/2022/04/1-Gaming-Labs-Certified-Color.png"
                        py={45}
                    >
                        <SectionHeader content="The Origin® Digital Lottery Draw System has been GLI Certified." />
                        <ArrowButton text="View Here" />
                    </ImageCard>
                    <LineBreak />

                    <SectionHeader
                        content="Take your draws to the next level with
                            hyper-realistic digital animation for your digital
                            draws! Your draws can be set up to run automatically
                            with the Smartplay Origin Connect Server."
                    />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <VideoCard video="https://vimeo.com/293568477">
                        <SectionHeader content="Hyper-Realistic Digital Draw Animations" />
                        <SectionContent
                            content="Computer-generated content can differentiate your
                            draw and provide new ways to stand out from
                            competitors."
                        />
                    </VideoCard>
                    <SectionContent
                        content="Take your draws to the next level with
                            hyper-realistic digital animation for your digital
                            draws! Your draws can be set up to run automatically
                            with the Smartplay Origin Connect Server."
                    />
                    <BigLineBreak />
                    <VideoCard video="https://vimeo.com/293568477">
                        <SectionHeader content="Origin System New Features!" />
                        <SectionContent
                            content="The latest Origin System allows for video
                                segments to added dynamically behind the draw
                                animation."
                        />
                    </VideoCard>
                    <SectionContent
                        content="Additionally, pre and post roll
                                segments can be added to the draw animation and
                                changed regularly to feature promotions or
                                advertisements."
                    />
                    <BigLineBreak />
                    <VideoCard video="https://vimeo.com/293568477">
                        <SectionHeader content="Draw Animation Examples" />
                        <SectionContent
                            content="These are actual draw examples generated from
                                the Origin System. A library of standard
                                graphics comes with the system, or we can custom
                                animate the introduction and draw sequences."
                        />
                    </VideoCard>
                </div>
            </div>

            <div className="primarySection bottomSection">
                <div className="contentSection">
                    <Accordions />
                    <div className="">
                        {infoArray.map((info, i) => (
                            <InfoCard
                                key={i}
                                index={i}
                                bg_color="bg-gray-100"
                                header={info.title}
                                text={info.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

"use client";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";
import { PageBackground } from "@/app/components/PageBackground";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionContent } from "@/app/components/SectionContent";
import { VideoCard } from "@/app/components/VideoCard";
import { BulletList } from "@/app/components/BulletList";
import { ImageCard } from "@/app/components/ImageCard";
import FetchImageGallery from "@/app/components/FetchImageGallery";

const checks = [
    "Develop strategy and plan with Executive Team",
    "Evaluate the proposed studio space and create an overall plan for studio design and implementation",
    "Evaluate and recommend equipment including internal and external network, studio design, broadcast and post-production equipment",
    "Determine number of crew needed, including necessary qualifications",
    "Provide mobile/backup broadcast solution as well as internet connectivity use and best practices",
    "Create, brand and launch a professional social based live stream channel",
    "Train and rehearse with crew and talent. Provide training materials with step by step instruction for crew",
    "Create back up and technical difficulties solution",
    "Interface with broadcast channel and streaming provider",
];

export default function StudioSolutions() {
    return (
        <div>
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg" />

            <Title text="Lottery Draw Studio Solutions" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader content="Let us set up the studio while you continue to focus on your business." />
                    <SectionContent content="Smartplay Draw Studio Solutions can manage the entire process from design to launch." />

                    <VideoCard video="https://vimeo.com/748452692">
                        <SectionContent
                            content="Creating a functioning lottery Draw Studio
                                    can be a challenge. From developing a
                                    creative strategy, to equipment, to training
                                    and implementation there are many details to
                                    consider."
                        />
                    </VideoCard>
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <SectionHeader
                        content="Smartplay can assist your team in
                                    any aspect of Draw Studio design and
                                    implementation including the following:"
                    />
                    <BulletList bullets={checks} />
                </div>
            </div>
            <div className="primarySection">
                <div className="contentSection">
                    <SectionHeader content="Meet Michael DeCheser" />
                    <ImageCard
                        img="https://smartplay.com/wp-content/uploads/2020/04/michael-decheser1-254x300.jpg"
                        px={90}
                    >
                        <SectionContent
                            content="Michael DeCheser is an award-winning media
                            professional with over 25 years of experience and
                            deep knowledge in broadcasting and entertainment.
                            His expertise includes production, live streaming,
                            digital strategy, marketing, social media, and
                            multimedia development."
                        />
                    </ImageCard>

                    <SectionContent content=" He has produced live streaming experiential events at the MTV Video Music Awards, the American Music Awards, The Academy of Country Music Awards, the Grammy Awards as well as the NCAA Final Four" />
                    <SectionContent
                        content="Michael has also served as the Broadcast and Media
                            Director for The New Jersey Lottery where he
                            developed and launched industry-pioneering
                            innovations related to live streaming, social media,
                            and daily broadcasting. His solutions and new media
                            advancements are responsible for the New Jersey
                            Lottery to own many industry firsts and play host to
                            the live broadcast of the multi state game “Cash 4
                            Life”."
                    />
                    <SectionContent content="The New Jersey Lottery’s approach to broadcasting their draw with multi-platform media integration is considered the pinnacle for other lotteries around the world. He was also appointed by the Governor of New Jersey to the board of the NJ Public Broadcasting Authority." />
                    <SectionContent content="Michael’s expertise and experience in large audience live streaming, studio production requirements and lottery innovation put him at the very top of a short list of qualified people to deliver any type of draw studio solution." />
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

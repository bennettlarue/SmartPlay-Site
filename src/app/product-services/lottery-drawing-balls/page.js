"use client";

import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Title } from "@/app/components/products/Title";
import { PageBackground } from "@/app/components/PageBackground";
import { ImageCard } from "@/app/components/ImageCard";
import { SectionContent } from "@/app/components/SectionContent";
import { CarouselCard } from "@/app/components/CarouselCard";
import { SectionHeader } from "@/app/components/SectionHeader";
import { BulletList } from "@/app/components/BulletList";

const smartballImages = [
    {
        src: "https://smartplay.com/wp-content/uploads/2020/11/foam-lottery-balls-case.jpg",
        alt: "Blue Foam Lotto Ball",
    },
    {
        src: "https://smartplay.com/wp-content/uploads/2020/11/foam-smartballs-lotto-balls.jpg",
        alt: "Foam Smartballs",
    },
    {
        src: "https://smartplay.com/wp-content/uploads/2020/11/Foam-multicolor-1.jpg",
        alt: "Foam Multicolor",
    },
    {
        src: "https://smartplay.com/wp-content/uploads/2020/11/foam-smartballs-lotto-balls-2.jpg",
        alt: "Foam Smartballs",
    },
];

const tableTennisImages = [
    {
        src: "https://smartplay.com/wp-content/uploads/2020/11/white-lottery-balls1.jpg",
        alt: "White Lottery Ball",
    },
    {
        src: "https://smartplay.com/wp-content/uploads/2017/07/tennis-ball-lottery-balls.jpg",
        alt: "Tennis Lottery Ball",
    },
    {
        src: "https://smartplay.com/wp-content/uploads/2020/11/color-digital-balls-plondo.jpg",
        alt: "Digital Lottery Ball",
    },
    {
        src: "https://smartplay.com/wp-content/uploads/2020/11/custom-print-lotto-balls-cards.jpg",
        alt: "Custom Lottery Ball",
    },
    {
        src: "https://smartplay.com/wp-content/uploads/2020/11/custom-print-lotto-balls-flags.jpg",
        alt: "Custom Lottery Ball",
    },
    {
        src: "https://smartplay.com/wp-content/uploads/2020/11/table-tennis-lottery-balls.jpg",
        alt: "Table Tennis Lottery Balls",
    },
];

const smartballChecks = [
    "Solid construction that provides the highest level of security. The solid nature of the Smartball eliminates any possibility of weight tampering",
    "Up to 12 numbered stickers equally spaced on the surface of the ball ensuring good visibility of the numbers when viewed from any angle",
    "Durable and wear-resistant. Numbers are printed inside the sticker",
    "RFID enabled for SmartController integration",
    "Available yellow, green, red, white, light blue and dark blue. Balls can be manufactured with custom colors",
];

const tableTennisChecks = [
    "Available in 38mm and 40mm sizes",
    "Many different style fonts for the numbers as well as custom images",
    "Balls are screened through close examination to ensure surface consistency",
    "Balls can be digitally printed with your artwork",
];

export default function App() {
    return (
        <div>
            <Nav />
            <PageBackground image="/images/backgrounds/ball.jpg" />

            <Title text="Lottery Drawing Balls" />
            <div className="firstSection">
                <div className="contentSection">
                    <ImageCard
                        img="/images/products/blue-foam-lotto-ball.jpg"
                        title="Custom table-tennis-style and RFID-enabled Smartball lottery balls."
                        desc="Our production consists of a 24-step process including stringent quality control inspections. At the time of manufacture, the balls are placed in matched sets with extremely close tolerances of weight and size. "
                    />
                    <SectionContent content="The ball sets are packed in foam-lined, lockable plastic cases. Smartplay offers many different style fonts for the numbers as well as custom images." />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <CarouselCard imgs={smartballImages}>
                        <SectionHeader content="Foam Lottery Balls & Smartballs" />
                        <SectionContent
                            content=" Smartplay’s foam lottery balls and Smartballs are
                            made of a closed cell polymer. These lottery balls
                            are solid, tamper proof and offer the same security
                            as solid rubber lottery balls. They are lightweight
                            and extremely quiet in operation."
                        />
                    </CarouselCard>
                    <SectionContent
                        content="These balls can be used with our without ball
                            recognition technology. If ball value recognition is
                            required, a RFID tag is placed inside the ball so
                            the ball number can be identified electronically by
                            the Smartplay SmartController, an optional feature
                            for any mechanical ball draw machine. At the time of
                            manufacture, the balls are placed in matched sets
                            with extremely close tolerances of weight and size."
                    />
                    <BulletList
                        bullets={smartballChecks}
                        boldFirstSentence={true}
                    />
                </div>
            </div>
            <div className="primarySection">
                <div className="contentSection">
                    <CarouselCard imgs={tableTennisImages}>
                        <SectionHeader content="Table-Tennis Style Lottery Balls" />
                        <SectionContent
                            content="Smartplay Drawing Balls are the highest quality
                            table tennis balls available. The production
                            consists of a 24-step process including stringent
                            quality control inspections. At the time of
                            manufacture, the balls are placed in matched sets
                            with extremely close tolerances of weight and size."
                        />
                    </CarouselCard>
                    <BulletList
                        bullets={tableTennisChecks}
                        boldFirstSentence={true}
                    />
                </div>
            </div>
            <div className="secondarySection bottomSection">
                <div className="contentSection">
                    <ImageCard
                        img="https://smartplay.com/wp-content/uploads/2020/11/lottery-beads-smartplay.jpg"
                        title="Acrylic Lottery Beads"
                        desc="In many countries lottery bead machines are still in use. Beads are typically engraved with numbers then inked to create more contrast so they number can be easily identified. Smartplay provides custom lottery beads in various colors and sizes."
                    ></ImageCard>
                </div>
            </div>
            <Footer />
        </div>
    );
}

"use client";

import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Title } from "@/app/components/products/Title";
import { ArrowButton } from "@/app/components/ArrowButton";
import { ImageCard } from "@/app/components/ImageCard";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionContent } from "@/app/components/SectionContent";
import { BulletList } from "@/app/components/BulletList";
import { PageBackground } from "@/app/components/PageBackground";

const lotteryScaleAttribs = [
    ["Size (W x D x H)", "7.5 x 10.875 x 5.875"],
    ["Weighing Mode", "grams"],
    ["Interface", "Bidirectional RS-232"],
    ["Display", "0.57in LED"],
    ["Capacity", "200g"],
    ["Readability", ".001g"],
    ["Linearity", " ± .002g"],
    ["Repeatability", "± .001g"],
    ["Pan Size", "4in dia."],
];

export default function App() {
    return (
        <div>
            <Nav />
            <PageBackground image="https://hxl.550.myftpupload.com/wp-content/uploads/2021/09/b.jpg" />
            <Title text="Equipment Calibration" />
            <div className="firstSection">
                <div className="contentSection">
                    <ImageCard
                        px={110}
                        img="https://smartplay.com/wp-content/uploads/2017/07/lottery-ball-scale-238x300.png"
                        className="bg-gray-950"
                    >
                        <SectionHeader content="Lottery Ball Scale" />
                        <SectionContent content="All precision balances employ sensing technology – variable capacitance. This technology requires few parts allowing the laboratory balances to maintain a low profile and remain structurally streamlined both inside and out." />
                    </ImageCard>
                    <BulletList
                        bullets={lotteryScaleAttribs.map((attr) => {
                            return attr[0] + " : " + attr[1];
                        })}
                        cols={2}
                        boldFirstSentence={true}
                    />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <ImageCard img="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/07/DBVS-lottery-ball-weight-validation2.jpg">
                        <SectionHeader content="Drawing Ball Validation System" />
                        <SectionContent content="The Drawing Ball Validation System (DBVS) is designed to allow Lottery Staff and Auditors to easily verify a set of balls against a recorded weight set as valid. The system is designed to work with RFID enabled SmartBalls or traditional Non-RFID drawing balls." />
                    </ImageCard>
                    <SectionContent content="When used with RFID-enabled SmartBalls, the DBVS automatically identifies the ball number and stored security code. The computer controlled scale accurately records the weights of the balls and reduces the opportunity of human error." />
                </div>
            </div>
            <div className="primarySection">
                <div className="contentSection">
                    <ImageCard
                        img="https://smartplay.com/wp-content/uploads/2017/07/digital-lottery-ball-micrometer1-136x300.jpg"
                        px={170}
                    >
                        <SectionHeader content="Lottery Ball Micrometer" />
                        <SectionContent content="The digital micrometer will measure to .01mm. Used for accurate calibration of Drawing Balls." />
                    </ImageCard>
                </div>
            </div>
            <div className="secondarySection bottomSection">
                <div className="contentSection">
                    <ImageCard img="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/07/Pass-thru-small.jpg">
                        <SectionHeader content="Ball Pass-through Gauge" />
                        <SectionContent
                            content="The Pass-through Gauge is a device that allows the
                            user to confirm the acceptable size of a drawing
                            ball."
                        />
                    </ImageCard>
                    <SectionContent
                        content="The two openings in the gauge are sized to the
                            minimum and maximum acceptable tolerances. The ball
                            must pass through the larger opening and not pass
                            through the smaller opening to be acceptable."
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}

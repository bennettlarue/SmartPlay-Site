"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import MachineLink from "@/app/components/home/MachineLink";
import { Title } from "@/app/components/products/Title";
import { PageBackground } from "@/app/components/PageBackground";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionContent } from "@/app/components/SectionContent";
import { BulletList } from "@/app/components/BulletList";
import { ImageCard } from "@/app/components/ImageCard";

const checks = [
    "Standard bingo/keno models are Galaxy, SuperBingo and Phoenix II Bingo",
    "Other models such as Criterion, Saturn have been modified for Bingo use",
    "Automatic operation with our SmartController and ConnectServer Software",
    "Add optional cameras and monitors",
    "Add the Solution Controller and manage the continuous operation of your Bingo or Keno game remotely from a web browser.",
];

const data = [
    {
        title: "Galaxy Bingo",
        desc: "A Feature-Rich, Yet Economical Bingo Machine",
        imageLink:
            "https://smartplay.com/wp-content/uploads/2017/08/Galaxy-bingo-machine-435x895.jpg",
    },
    {
        title: "Phoenix Bingo Machine",
        desc: "The Phoenix keno/bingo draw machine is suitable for all lotto / keno / bingo game matrices.",
        imageLink:
            "https://smartplay.com/wp-content/uploads/2017/07/phoenix-lottery-machine-guatemala.jpg",
    },
    {
        title: "Criterion II Lottery Draw Machine",
        desc: "A Unique Visual with Dual Mixing Arms Moving in Opposite Directions",
        imageLink:
            "https://smartplay.com/wp-content/uploads/2017/07/criterion-lottery-ireland.jpg",
    },
];

export default function App() {
    return (
        <div className="App">
            <Nav />
            <PageBackground image="/images/backgrounds/globe.jpg" />

            <Title text="Bingo Systems" />
            <div className="bg-white">
                <div className="contentSection">
                    <SectionHeader
                        content="Highest quality parts and construction to meet the
                        demands of continuous operation."
                    />
                    <SectionContent
                        content="Bingo and keno games are popular throughout the world.
                        Both game styles require all balls to be displayed one
                        after the other. Smartplay has several machines designed
                        specifically for bingo and keno. Some of our traditional
                        lotto-style machines have been adapted to bingo and keno
                        as well. Machines can accommodate standard 75 and
                        90-ball bingo and we can create custom machines to meet
                        your requirements."
                    />
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="contentSection">
                    <BulletList bullets={checks} />
                </div>
            </div>
            <div className="bg-white">
                <div className="contentSection">
                    <SectionHeader content="Standard Bingo and Keno Models Used Around the World" />
                    <div className="space-y-10">
                        {data.map(({ title, desc, imageLink }, index) => (
                            <div className="shadow rounded p-4 bg-gray-200">
                                <ImageCard
                                    title={title}
                                    desc={desc}
                                    img={imageLink}
                                    href={"/"}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

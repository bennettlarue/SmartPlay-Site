"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { ImageCard } from "@/app/components/ImageCard";
import { Nav } from "@/app/components/Nav";
import { PageBackground } from "@/app/components/PageBackground";
import { Title } from "@/app/components/products/Title";
import { SectionContent } from "@/app/components/SectionContent";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionImage } from "@/app/components/SectionImage";

const slides = [
    {
        img: "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/06/criterion-lottery-machine-ca-lotery.jpg",
        title: "Design and Fabrication of Traditional Mechanical Lottery Drawing Machines",
        desc: "With over 2000 lottery machines in operation worldwide, Smartplay is a leader in designing and manufacturing traditional lottery equipment.",
        href: "/why-smartplay",
    },
    {
        img: "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/07/solution-system.jpg",
        title: "Automate Your Traditional Lottery Draws",
        desc: "The Smartplay Solution System gives you the power and flexibility to automate your lottery draws and generate automated reports.",
        href: "/product-services/solution-lottery-draw-management",
    },
    {
        img: "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/07/digital-screengrab3.gif?time=1717187795",
        title: "Digital Draw Systems for Your Primary or Mid-Day Lottery Games",
        desc: "The Origin is a combined hardware/software solution to maximize security will providing the speed and flexibility to use your digital draws as a powerful marketing tool.",
        href: "/product-services/origin-digital-draw",
    },
];

export default function TraditionalLottery() {
    return (
        <div>
            <Nav />
            <PageBackground image="/images/backgrounds/globe.jpg" />

            <Title text="Traditional Lottery" />
            <div className="bg-white">
                <div className="contentSection">
                    <SectionHeader
                        content="Since 1993, Smartplay has delivered traditional and
                        digital draw systems to over 400 lotteries in 114
                        countries."
                    />
                    <SectionContent
                        content="Many of our lottery customers use both mechanical and
                        digital systems for their games. Our focus continues to
                        be delivering the highest quality and innovation to the
                        traditional lottery sector."
                    />
                </div>
            </div>
            {slides.map(({ img, title, desc, href }, index) => (
                <div
                    className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
                    key={index}
                >
                    <div className="contentSection">
                        <ImageCard
                            img={img}
                            title={title}
                            desc={desc}
                            href={href}
                        />
                    </div>
                </div>
            ))}

            <Footer />
        </div>
    );
}

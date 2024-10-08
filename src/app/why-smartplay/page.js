"use client";

import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { CustomerService } from "../components/about/CustomerService";
import { InfoCard } from "../components/about/InfoCard";
import { Iso } from "../components/about/Iso";
import { Title } from "../components/products/Title";
import { SectionHeader } from "../components/SectionHeader";
import { SectionContent } from "../components/SectionContent";
import { PageBackground } from "../components/PageBackground";
import { SectionImage } from "../components/SectionImage";
import { ArrowButton } from "../components/ArrowButton";
import { ImageCard } from "../components/ImageCard";
import { LineBreak } from "../components/LineBreak";
import { SmallerHeader } from "../components/SmallerHeader";

export default function About() {
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

    return (
        <main>
            <PageBackground image="/images/backgrounds/why-smartplay.jpg" />
            <Nav />
            <Title text="Why Smartplay" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader
                        content="
                        With customer trust and your revenue on the line,
                        Smartplay’s high-quality drawing equipment and worldwide
                        support mean less risk and greater return on your
                        investment."
                    />

                    <SectionContent
                        content={
                            "Smartplay International, Inc. designs, manufactures, and services mechanical lottery drawing machines and computerized digital lottery (RNG) drawing systems. Founded in 1993, Smartplay has served over 450 customers in 126 countries across lottery, gaming, trade show and media industries."
                        }
                    />
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <SectionHeader content="Millions in winnings and the trust of your customers are on the line. As your partner, we take this responsibility seriously." />
                    <SectionContent
                        content="Here are a few reasons why customers worldwide —
                        including over 100 customers in Southeast Asia — work
                        with Smartplay:"
                    />
                    <div className="">
                        <InfoCard
                            index={0}
                            header="Product Reliability"
                            text="Many of our lottery systems have been in use continuously for 25 years. This is only possible by using the highest quality materials and incorporating manufacturing innovations that simplify operation and lower risk. Our drawing systems have been tested and certified by leading certification companies including GLI, KPMG, Eclipse, Delahanty Consulting, and BMM."
                        />
                        <InfoCard
                            index={1}
                            header="Industry Involvement"
                            text="Smartplay is a member of the World Lottery Association (WLA), Asia-Pacific Lottery Association (APLA) and the North American Association of State and Provincial Lotteries (NASPL). Smartplay has also received ISO 9001:2015 certification."
                        />
                        <InfoCard
                            index={2}
                            header="Written Warranty"
                            text="New machines are warranted for one-year from the date of delivery or 10,000 draw cycles, whichever comes first. We also offer extended warranties and service agreements."
                        />
                        <InfoCard
                            index={3}
                            header="Worldwide Customer Support"
                            text="Service technicians are located in both the United States and Asia and we employee no outside contractors. Our team travels thousands of miles each month providing routine maintenance to customers worldwide."
                        />
                    </div>
                </div>
            </div>
            <div className="primarySection">
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
                    <LineBreak />
                    {
                        <div className="space-y-10">
                            {testimonials.map((t, i) => (
                                <div key={i} className="">
                                    <div className="space-y-4">
                                        <SmallerHeader content={t.header} />
                                        <SectionContent content={t.body} />
                                    </div>
                                    <LineBreak />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <div className="secondarySection">
                <div className="contentSection">
                    <SectionHeader content="Smartplay Quality Policy (ISO 9001:2015)" />
                    <ImageCard img="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/06/iso-2015-logo-REVERESED-500PX.png">
                        <SectionContent
                            content="Smartplay International is committed to achieving
                        customer satisfaction by providing quality, durable,
                        consistent lottery drawing equipment and services which
                        consistently meet or exceed customer expectations. "
                        />
                        <ArrowButton text="View ISO" />
                    </ImageCard>
                </div>
            </div>
            <div className="primarySection bottomSection">
                <div className="contentSection">
                    <SectionHeader content="Stop by for a Tour!" />
                    <ImageCard img="/images/why-smartplay/smartplay-map.png">
                        <SectionContent
                            content="Smartplay is conveniently based in Burlington County
                            New Jersey, just outside Philadelphia, PA. This
                            strategic location offers access to several of our
                            country’s busiest airports. All equipment and
                            development takes place in this 25,000-square foot
                            manufacturing facility which houses technology
                            development, machine fabrication, and ball printing
                            divisions."
                        />
                    </ImageCard>

                    <div>
                        <SectionImage
                            src="/images/why-smartplay/smartplay-building.gif"
                            alt="Smartplay Map"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

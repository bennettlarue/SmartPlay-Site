"use client";

import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { CustomerService } from "../components/about/CustomerService";
import { InfoCard } from "../components/about/InfoCard";
import { Iso } from "../components/about/Iso";
import { Title } from "../components/products/Title";
import { SectionHeader } from "../components/SectionHeader";
import { SectionContent } from "../components/SectionContent";

export default function About() {
    return (
        <main className="relative">
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/09/4032-3024-max-1-scaled.jpg"
                    alt="Customer Service"
                    className="w-full h-screen object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>
            <Nav />
            <Title text="Why Smartplay" />
            <div className="bg-white">
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
            <CustomerService />
            <div className="bg-white">
                <div className="contentSection">
                    <SectionHeader content="Millions in winnings and the trust of your customers are on the line. As your partner, we take this responsibility seriously." />
                    <SectionContent
                        content="Here are a few reasons why customers worldwide —
                        including over 100 customers in Southeast Asia — work
                        with Smartplay:"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
                        <InfoCard
                            direction="r"
                            header="Product Reliability"
                            text="Many of our lottery systems have been in use continuously for 25 years. This is only possible by using the highest quality materials and incorporating manufacturing innovations that simplify operation and lower risk. Our drawing systems have been tested and certified by leading certification companies including GLI, KPMG, Eclipse, Delahanty Consulting, and BMM."
                        />
                        <InfoCard
                            direction="l"
                            header="Industry Involvement"
                            text="Smartplay is a member of the World Lottery Association (WLA), Asia-Pacific Lottery Association (APLA) and the North American Association of State and Provincial Lotteries (NASPL). Smartplay has also received ISO 9001:2015 certification."
                        />
                        <InfoCard
                            direction="r"
                            header="Written Warranty"
                            text="New machines are warranted for one-year from the date of delivery or 10,000 draw cycles, whichever comes first. We also offer extended warranties and service agreements."
                        />
                        <InfoCard
                            direction="l"
                            header="Worldwide Customer Support"
                            text="Service technicians are located in both the United States and Asia and we employee no outside contractors. Our team travels thousands of miles each month providing routine maintenance to customers worldwide."
                        />
                    </div>
                </div>
                <div>
                    <Iso />
                </div>
                <div className="contentSection">
                    <SectionHeader content="Stop by for a Tour!" />
                    <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-x-5 mt-5">
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

                        <div className="lg:mt-0 mt-5 row-span-2 col-span-1">
                            <img
                                className="rounded shadow"
                                src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/06/smartplay-map.png"
                            />
                        </div>
                    </div>
                    <img
                        className="rounded shadow lg:mt-0 pt-7 max-w-[700px] mx-auto"
                        src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/06/smartplay-building-1000px.gif?time=1717187795"
                    />
                </div>
            </div>
            <Footer />
        </main>
    );
}

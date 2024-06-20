"use client";

import { FadeInText } from "../components/FadeInText";
import { Nav } from "../components/Nav";
import { CustomerService } from "../components/about/CustomerService";
import { InfoCard } from "../components/about/InfoCard";
import { Iso } from "../components/about/Iso";
import { Title } from "../components/about/Title";
import { Carousel } from "@material-tailwind/react";

export default function About() {
    return (
        <main className="relative mb-96">
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/09/4032-3024-max-1-scaled.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>{" "}
                {/* Overlay */}
            </div>
            <Nav />
            <Title />
            <div className="bg-white">
                <div className="w-[1100px] mx-auto text-center space-y-8 py-24">
                    <p className="text-3xl font-semibold text-blue-950">
                        With customer trust and your revenue on the line,
                        Smartplay’s high-quality drawing equipment and worldwide
                        support mean less risk and greater return on your
                        investment.
                    </p>
                    <p className="text-xl">
                        Smartplay International, Inc. designs, manufactures, and
                        services{" "}
                        <span className="font-bold">
                            mechanical lottery drawing machines and computerized
                            digital lottery (RNG) drawing systems.
                        </span>
                        Founded in 1993, Smartplay has served over 450 customers
                        in 126 countries across lottery, gaming, trade show and
                        media industries.
                    </p>
                </div>
            </div>
            <CustomerService />
            <div className="bg-white">
                <div className="w-[1100px] mx-auto text-center space-y-8 py-24">
                    <div className="text-3xl font-semibold text-blue-950">
                        <div className="flex justify-center">
                            <FadeInText
                                text="Millions in winnings and the trust of your customers are on the line."
                                delay={0.2}
                            />
                        </div>
                        <div className="flex justify-center">
                            <FadeInText
                                text="As your partner, we take this responsibility seriously."
                                delay={0.4}
                            />
                        </div>
                    </div>
                    <p className="text-xl font-semibold">
                        Here are a few reasons why customers worldwide —<br />
                        including over 100 customers in Southeast Asia — work
                        with Smartplay:
                    </p>
                    <div className=" grid grid-cols-2 gap-8 gap-y-12">
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
                <div className="bg-gray-200">
                    <Carousel className="h-[500px] w-[800px] m-auto rounded shadow">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2018/11/emerald-lotto-china.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://smartplay.com/wp-content/uploads/2017/12/zach-lottery-racetrack.jpg"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://smartplay.com/wp-content/uploads/2017/12/russell-lottery-machine-testing.jpg"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </div>
            </div>
        </main>
    );
}

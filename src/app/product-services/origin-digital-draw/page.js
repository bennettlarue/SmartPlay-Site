"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Carousel } from "@material-tailwind/react";
import { Title } from "@/app/components/products/Title";
import { motion } from "framer-motion";
import VimeoEmbed from "@/app/components/VimeoEmbed";
import { Accordions } from "@/app/components/products/origin-digital-draw/Accordions";

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

export default function App() {
    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg"
                    alt="Custom Promotions and Events"
                    className="w-full h-full object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Origin Digital Draw System" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1000px] pt-20 pb-12 text-lg px-6 md:px-8 lg:px-0">
                    <div className="space-y-10 max-[700px]:">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2021/01/Origin-workstation.png"
                            alt="Origin Digital Draw System"
                            className="w-full h-full object-cover max-w-[400px] mx-auto"
                        />

                        <p className="text-lg md:px-10">
                            The Origin® Digital Lottery Draw System is an
                            alternative to mechanical lottery ball systems. Many
                            lotteries choose to run entirely with a digital
                            system or complement their traditional ball draw
                            with a higher frequency game that’s run through the
                            Origin RNG-based system. Origin® Workstation has
                            become the standard for digital draws in North
                            America. Origin is in use daily by 24 US state
                            lotteries, US Virgin Islands as well as Pronosticos
                            in Mexico.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1000px] gap-x-6 items-center px-6 md:px-8 lg:px-0 lg:space-y-0 space-y-6">
                    <div className="space-y-6 bg-gray-200 text-blue-950 text-lg col-span-1 max-w-[700px] mx-auto">
                        <h2 className="font-semibold text-xl">
                            Mimics a traditional draw process
                        </h2>
                        <p>
                            Using the Origin® System, lottery draw staff find it
                            easy to make the jump from a traditional to digital
                            draw because we intentionally made the process is
                            very similar. The staff goes through much the same
                            steps to generate the numbers. Creating a familiar
                            process around the digital drawing increases
                            security and builds consumer trust. It is easy to
                            operate and requires no I.T. assistance.
                        </p>
                    </div>

                    <div className="mb-8 md:mb-0">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2021/01/origin-arizona.jpg"
                            alt="Customer Service"
                            className="w-full h-[300px] object-cover rounded shadow"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1000px] gap-x-6 items-center px-4 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    <div className="mb-8 md:mb-0">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2022/04/1-Gaming-Labs-Certified-Color.png"
                            alt="Customer Service"
                            className="rounded shadow w-96 p-3 border"
                        />
                    </div>
                    <div className="space-y-6 p-4 text-blue-950 text-lg col-span-1 max-w-[700px] mx-auto">
                        <h2 className="font-semibold text-xl">
                            The Origin® Digital Lottery Draw System has been GLI
                            Certified.
                        </h2>
                        <ArrowButton text="View Here" />
                    </div>
                </div>
            </div>
            <div className="bg-blue-950 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1200px] gap-x-6 items-center px-4 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    <div className="mb-8 md:mb-0">
                        <VimeoEmbed videoId="293568477" />
                    </div>
                    <div className="space-y-6  p-4 text-white text-lg col-span-1 max-w-[700px] mx-auto">
                        <h2 className="font-semibold text-xl">
                            Hyper-Realistic Digital Draw Animations
                        </h2>
                        <p>
                            Computer-generated content can differentiate your
                            draw and provide new ways to stand out from
                            competitors. Take your draws to the next level with
                            hyper-realistic digital animation for your digital
                            draws! Your draws can be set up to run automatically
                            with the Smartplay Origin Connect Server.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1200px] gap-x-6 px-4 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    <div className="mb-8 md:mb-0">
                        <VimeoEmbed videoId="293568477" />
                        <div className="pt-5 space-y-3">
                            <h2 className="font-semibold text-xl">
                                Origin System New Features!
                            </h2>
                            <p>
                                The latest Origin System allows for video
                                segments to added dynamically behind the draw
                                animation. Additionally, pre and post roll
                                segments can be added to the draw animation and
                                changed regularly to feature promotions or
                                advertisements.
                            </p>
                        </div>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <VimeoEmbed videoId="293568477" />
                        <div className="pt-5 space-y-3">
                            <h2 className="font-semibold text-xl">
                                Draw Animation Examples
                            </h2>
                            <p>
                                These are actual draw examples generated from
                                the Origin System. A library of standard
                                graphics comes with the system, or we can custom
                                animate the introduction and draw sequences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white pb-12">
                <div className=" mx-auto max-w-[1200px] gap-x-6 px-4 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    <Accordions />
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1100px] gap-6 px-4 md:px-8 lg:px-0 lg:space-y-0 space-y-7">
                    {infoArray.map((info, i) => (
                        <div
                            key={i}
                            className="space-y-6 p-4 text-blue-950 text-lg col-span-1 mx-auto border border-gray-300 rounded shadow"
                        >
                            <h2 className="font-semibold text-xl">
                                {info.title}
                            </h2>
                            <p>{info.description}</p>
                        </div>
                    ))}
                    <div className="flex justify-center">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2016/04/origin-large.png"
                            alt="Customer Service"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

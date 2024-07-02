import React from "react";
import Check from "./Check";
import { Line } from "../Line";
import { PopupText } from "../PopupText";
import { FadeInText } from "../FadeInText";
import { ArrowButton } from "../ArrowButton";

const checks = [
    "Product Reliability",
    "Written Product Warranty",
    "Industry Involvement",
    "Worldwide Customer Support",
    "Tested and Certified",
    "Incorporating Manufacturing Innovations",
];

export const WhySmartPlay = () => {
    return (
        <div className="max-w-full md:w-[1000px] mt-20 mx-auto px-4 pb-10">
            <h2 className="text-3xl md:text-6xl font-bold text-blue-950 text-center md:text-left">
                <PopupText text={"Why SmartPlay?"} delay={0} />
            </h2>
            <div className="pt-10">
                <div className="text-lg md:text-xl py-2">
                    <FadeInText
                        text="Smartplay International, Inc. designs, manufactures, and services mechanical lottery drawing machines and computerized digital lottery (RNG) drawing systems. Founded in 1993, Smartplay has served over 400 customers in 114 countries across lottery, gaming, trade show and media industries."
                        delay={0.2}
                    />
                </div>
                <div className="text-lg md:text-xl py-2">
                    <FadeInText
                        text="We offer 20+ models of ball drawing machines for lottery, bingo, keno and other numbers-based games and promotions. In 2003, Smartplay introduced the Origin Digital Drawing System which is now widely used in the lottery industry for conducting lottery and raffle drawings. We have also developed technologies for automating the lottery drawing process as well as distributing results via traditional broadcast, online and social media."
                        delay={0.2}
                    />
                </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 py-7 gap-4">
                {checks.map((check, index) => (
                    <li
                        key={index}
                        className="flex items-baseline space-x-2 py-2"
                    >
                        <Check index={index} />
                        <p className="text-lg md:text-xl font-bold">{check}</p>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:space-x-16 mt-3 space-y-4 sm:space-y-0 items-center justify-center">
                <ArrowButton
                    text="Learn More"
                    color="blue-800"
                    hoverColor="blue-950"
                />
                <ArrowButton
                    text="Contact Us"
                    color="orange-500"
                    hoverColor="orange-600"
                />
            </div>
        </div>
    );
};

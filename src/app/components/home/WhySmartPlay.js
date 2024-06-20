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
        <div className="w-[1000px] mt-20 mx-auto">
            <h2 className="text-6xl font-bold text-blue-950">
                <PopupText text={"Why SmartPlay?"} delay={0} />
            </h2>
            <div className="pt-10">
                <div className="text-xl py-2">
                    <FadeInText
                        text="Smartplay International, Inc. designs, manufactures, and services mechanical lottery drawing machines and computerized digital lottery (RNG) drawing systems. Founded in 1993, Smartplay has served over 400 customers in 114 countries across lottery, gaming, trade show and media industries."
                        delay={0.2}
                    />
                </div>
                <div className="text-xl py-2">
                    <FadeInText
                        text="We offer 20+ models of ball drawing machines for lottery, bingo, keno and other numbers-based games and promotions. In 2003, Smartplay introduced the Origin Digital Drawing System which is now widely used in the lottery industry for conducting lottery and raffle drawings. We have also developed technologies for automating the lottery drawing process as well as distributing results via traditional broadcast, online and social media."
                        delay={0.2}
                    />
                </div>
            </div>
            <ul className="grid grid-cols-2 grid-rows-3 py-7 my-auto h-fit">
                {checks.map((check, index) => (
                    <li
                        key={index}
                        className="flex items-baseline space-x-2 py-2"
                    >
                        <Check index={index} />
                        <p className="text-xl font-bold">{check}</p>
                    </li>
                ))}
            </ul>
            <div className="flex space-x-16 mt-3">
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

import React from "react";
import ClientCarousel from "./ClientCarousel";
import { FadeInText } from "../FadeInText";
import { Line } from "../Line";

const Clients = () => {
    return (
        <div className="mt-24">
            <div className="max-w-full md:w-[1000px] text-center mx-auto mt-24 px-4">
                <h2 className="p-3 text-3xl font-bold flex justify-center ">
                    <FadeInText text="Our Clients" delay={0.2} />
                </h2>
                <div className="flex items-center justify-center my-2 mb-4">
                    <Line delay={0.2} />
                </div>
                <div className="text-lg md:text-xl p-2 pt-4">
                    <FadeInText
                        text={
                            "Smartplay International preserves drawing integrity for lottery and gaming organizations in 126 countries. We design and manufacture the most advanced traditional and digital lottery drawing systems available, with more than 5,000 systems deployed worldwide since 1993."
                        }
                        delay={0.35}
                    />
                </div>
            </div>

            <div className="pt-5 mt-12 h-[200px] bg-gray-200">
                <ClientCarousel />
            </div>
        </div>
    );
};

export default Clients;

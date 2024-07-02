import React from "react";
import Counter from "./Counter";

const Numbers = () => {
    return (
        <div
            className="bg-white p-6 md:p-24 shadow-md"
            style={{
                background:
                    "repeating-linear-gradient(-45deg, #F5F5F5, #F5F5F5 3px, #ffffff 3px, #ffffff 9px)",
            }}
        >
            <ul className="font-bold text-xl md:text-2xl flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-20">
                <li className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-3 md:space-y-0">
                    <div className="text-4xl md:text-6xl text-gray-400">
                        <Counter number={5} />
                        K+
                    </div>
                    <p className="max-w-full md:max-w-[210px] text-center md:text-left">
                        Drawing Systems Produced
                    </p>
                </li>
                <li className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-3 md:space-y-0">
                    <h1 className="text-4xl md:text-6xl text-gray-400">
                        <Counter number={600} />+
                    </h1>
                    <p className="max-w-full md:max-w-[210px] text-center md:text-left">
                        Clients
                    </p>
                </li>
                <li className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 space-y-3 md:space-y-0">
                    <h1 className="text-4xl md:text-6xl text-gray-400">
                        <Counter number={127} />
                    </h1>
                    <p className="max-w-full md:max-w-[210px] text-center md:text-left">
                        Countries
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Numbers;

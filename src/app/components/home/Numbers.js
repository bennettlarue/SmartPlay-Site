import React from "react";
import Counter from "./Counter";

const Numbers = () => {
    return (
        <div
            className="bg-white p-24 shadow-md"
            style={{
                background:
                    "repeating-linear-gradient(-45deg, #F5F5F5, #F5F5F5 3px, #ffffff 3px, #ffffff 9px)",
            }}
        >
            <ul className="font-bold text-2xl flex justify-center space-x-20">
                <li className="flex items-center space-x-3">
                    <div className="text-6xl text-gray-400">
                        <Counter number={5} />
                        K+
                    </div>
                    <p className="max-w-[210px]">Drawing Systems Produced</p>
                </li>
                <li className="flex items-center space-x-3">
                    <h1 className="text-6xl text-gray-400">
                        <Counter number={600} />+
                    </h1>
                    <p className="max-w-[210px]">Clients</p>
                </li>
                <li className="flex items-center space-x-3">
                    <h1 className="text-6xl text-gray-400">
                        <Counter number={127} />
                    </h1>
                    <p className="max-w-[210px]">Countries</p>
                </li>
            </ul>
        </div>
    );
};

export default Numbers;

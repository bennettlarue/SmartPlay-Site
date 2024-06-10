import React from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import SplashText from "./SplashText";

const text = "Lottery Machine Manufacturing".split(" ");

export const Splash = () => {
    const [ref, inView] = useInView();

    return (
        <div className="relative">
            <img
                className=" w-screen h-[640px] object-cover"
                src="https://www.hiowaa.org/wp-content/uploads/2015/08/Lottery-Balls-014.jpg"
                alt="Splash"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-60 p-11">
                <div className="grid grid-cols-2">
                    <div className="text-white font-bold max-w-[800px] space-y-3">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/ball.png?time=1717187795"
                                alt="Ball"
                                className="h-7"
                            />
                            <h1 className="text-3xl">GLOBAL LEADER IN</h1>
                        </div>
                        <SplashText
                            breakWords={true}
                            text={"Lottery Machine Manufacturing"}
                        />

                        <button className="mt-7 bg-blue-950 shadow-md rounded-md text-white font-semibold px-7 py-4 text-lg ">
                            <a href="#">View Products</a>
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/play-white.png"
                            alt="Play"
                            className="h-44"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

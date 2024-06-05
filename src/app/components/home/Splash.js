import React from "react";

export const Splash = () => {
    return (
        <div className="relative">
            <img
                className=" w-screen h-[700px] object-cover"
                src="https://www.hiowaa.org/wp-content/uploads/2015/08/Lottery-Balls-014.jpg"
                alt="Splash"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-60">
                <div className="grid grid-cols-2">
                    <div className="text-white font-bold max-w-[800px] space-y-3">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/ball.png?time=1717187795"
                                alt="Logo"
                                className="h-7"
                            />
                            <h1 className="text-2xl">GLOBAL LEADER IN</h1>
                        </div>
                        <h1 className="text-8xl">
                            Lottery Machine Manufacturing
                        </h1>
                        <h2 className="text-4xl">& DIGITAL DRAWING SYSTEMS</h2>
                        <button className="bg-blue-900 text-wite px-7 py-4 font-normal text-sm ">
                            <a href="#">VIEW PRODUCTS</a>
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

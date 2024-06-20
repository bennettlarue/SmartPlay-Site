import React from "react";
import Image from "next/image";
import { PopupText } from "../PopupText";
import { FadeInText } from "../FadeInText";
import { ArrowButton } from "../ArrowButton";

const OriginSys = () => {
    return (
        <div className="relative mt-28 border-b-[10px] border-b-orange-600">
            <img
                className="w-screen h-[400px] object-cover"
                src="https://media.istockphoto.com/id/1286265909/photo/lottery-balls.jpg?s=2048x2048&w=is&k=20&c=OXtsWY6QGQni3wj25NX-jmJthIMTNDyPu-H7itDBMFY="
                alt="Background Image"
            />
            <div className="absolute inset-0 flex flex-col justify-center bg-gray-900 bg-opacity-60 px-32">
                <div className=" grid grid-cols-2 ">
                    <div className="space-y-4">
                        <h2 className="text-white text-6xl font-bold">
                            <PopupText text="Origin System" delay={0} />
                        </h2>
                        <div className="text-white text-3xl">
                            <FadeInText
                                text={
                                    "The most widely used digital draw system by US Lotteries"
                                }
                                delay={0.6}
                            />
                        </div>
                        <div className="space-x-7">
                            <ArrowButton text="Learn More" />
                        </div>
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

export default OriginSys;

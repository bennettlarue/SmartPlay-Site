import React from "react";
import Image from "next/image";
import { PopupText } from "../PopupText";
import { FadeInText } from "../FadeInText";
import { ArrowButton } from "../ArrowButton";

const OriginSys = () => {
    return (
        <div className="relative mt-28 border-b-[10px] border-b-orange-600">
            <img
                className="w-screen h-[300px] md:h-[400px] object-cover"
                src="https://media.istockphoto.com/id/1286265909/photo/lottery-balls.jpg?s=2048x2048&w=is&k=20&c=OXtsWY6QGQni3wj25NX-jmJthIMTNDyPu-H7itDBMFY="
                alt="Background Image"
            />
            <div className="absolute inset-0 flex flex-col justify-center bg-gray-900 bg-opacity-60 px-6 md:px-32">
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-white text-4xl md:text-6xl font-bold lg:block flex justify-center">
                        <PopupText text="Origin System" delay={0} />
                    </h2>
                    <div className="text-white text-xl md:text-3xl">
                        <FadeInText
                            text={
                                "The most widely used digital draw system by US Lotteries"
                            }
                            delay={0.6}
                        />
                    </div>
                    <div className="space-x-0 md:space-x-7 flex justify-center md:justify-start">
                        <ArrowButton text="Learn More" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OriginSys;

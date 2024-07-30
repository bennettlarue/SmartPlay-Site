import React from "react";
import { PopupText } from "../PopupText";
import { ArrowButton } from "../ArrowButton";
import { FadeInText } from "../FadeInText";

export const Splash = () => {
    return (
        <div className="relative">
            <img
                className="w-full max-h-[640px] min-h-[450px] object-cover"
                src="https://media.istockphoto.com/id/1314972402/vector/multicolored-lottery-balls-vector-background.jpg?s=2048x2048&w=is&k=20&c=f6TPkeUWd7E7zid09NkUZLfwidvj9wumvM-D0-jdCKI="
                alt="Splash"
            />
            <div className="absolute inset-0 flex flex-col justify-center  bg-gray-900 bg-opacity-60 p-4 md:p-11">
                <div className="gap-4">
                    <div className="text-white font-bold max-w-full md:max-w-[800px] space-y-3">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/ball.png?time=1717187795"
                                alt="Ball"
                                className="h-7"
                            />
                            <h1 className="text-xl md:text-3xl">
                                GLOBAL LEADER IN
                            </h1>
                        </div>
                        <div className="text-4xl md:text-8xl">
                            <PopupText text={"Lottery"} delay={0.4} />
                            <PopupText text={"Machine"} delay={0.6} />
                            <PopupText text={"Manufacturing"} delay={0.8} />
                        </div>
                        <div className="text-2xl md:text-4xl">
                            <FadeInText
                                text={"And Digital Drawing Systems"}
                                delay={1.1}
                            />
                        </div>

                        <ArrowButton text="View Products" />
                    </div>
                </div>
            </div>
        </div>
    );
};

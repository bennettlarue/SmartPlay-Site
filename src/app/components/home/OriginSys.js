import React from "react";
import Image from "next/image";

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
                            Origin System
                        </h2>
                        <p className="text-white text-3xl">
                            The most widely used digital draw system by US
                            Lotteries
                        </p>
                        <div className="space-x-7">
                            <button className="bg-blue-950 rounded-md shadow-md text-white px-7 py-4 font-bold text-xl ">
                                <a href="#">Learn More</a>
                            </button>
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

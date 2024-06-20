import React from "react";
import Image from "next/image";
import { ArrowButton } from "../ArrowButton";

export const CustomerService = () => {
    return (
        <div className="relative h-[450px] overflow-hidden flex items-center justify-center">
            <Image
                src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/09/smartplay-service-team2.jpg"
                alt="Customer Service"
                width={1600}
                height={900}
                layout="responsive"
                objectFit="cover"
                className="translate-y-[15%]"
            />
            <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>{" "}
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-5">
                    <h1 className="text-white text-6xl font-bold">
                        Customer Service
                    </h1>
                    <p className="text-white text-4xl font-semibold">
                        Our customer service team travels worldwide to support
                        clients.
                    </p>
                    <div className="flex items-center justify-center">
                        <ArrowButton text="Our Products" />
                    </div>
                </div>
            </div>
        </div>
    );
};

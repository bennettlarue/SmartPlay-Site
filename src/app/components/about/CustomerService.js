import React from "react";
import Image from "next/image";
import { ArrowButton } from "../ArrowButton";

export const CustomerService = () => {
    return (
        <div className="relative h-[450px] overflow-hidden flex items-center justify-center">
            <img
                src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/09/smartplay-service-team2.jpg"
                alt="Customer Service"
                className="w-full h-full object-cover lg:translate-y-[15%]"
            />
            <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>{" "}
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center lg:px-0 px-2">
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

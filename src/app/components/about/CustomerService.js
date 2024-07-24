import React from "react";
import { ArrowButton } from "../ArrowButton";

export const CustomerService = () => {
    return (
        <div className="relative max-h-[450px] min-h-[350px] overflow-hidden flex items-center justify-center">
            <img
                src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/09/smartplay-service-team2.jpg"
                alt="Customer Service"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>{" "}
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center lg:px-0 px-2">
                <div className="contentSection w-full space-y-2">
                    <h1 className="text-white lg:text-4xl text-3xl font-bold">
                        Customer Service
                    </h1>
                    <p className="text-white lg:text-2xl text-2xl">
                        Our customer service team travels worldwide to support
                        clients.
                    </p>
                    <div>
                        <ArrowButton text="Our Products" />
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from "react";
import { ArrowButton } from "../ArrowButton";

export const Iso = () => {
    return (
        <div className="bg-gray-200 p-16">
            <div className="flex justify-between w-[1200px] mx-auto items-center">
                <div className="w-[700px] space-y-5">
                    <h2 className="text-3xl text-blue-950 font-bold">
                        Smartplay Quality Policy <br /> (ISO 9001:2015)
                    </h2>
                    <p className="text-lg">
                        Smartplay International is committed to achieving
                        customer satisfaction by providing quality, durable,
                        consistent lottery drawing equipment and services which
                        consistently meet or exceed customer expectations. This
                        level of quality is achieved by continuously improving
                        the effectiveness of the Quality Management System.
                        Quality Objectives: Reduce Warranty Claims and Strive
                        for On-Time Delivery.
                    </p>
                    <ArrowButton text="View ISO" />
                </div>
                <div>
                    <img
                        src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/06/iso-2015-logo-REVERESED-500PX.png"
                        alt="iso"
                    />
                </div>
            </div>
        </div>
    );
};

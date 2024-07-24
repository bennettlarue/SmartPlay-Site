import React from "react";
import { ArrowButton } from "../ArrowButton";
import { SectionHeader } from "../content/sectionHeader";
import { SectionContent } from "../content/SectionContent";

export const Iso = () => {
    return (
        <div className="bg-gray-200">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-3 justify-between items-center contentSection">
                <div className="col-span-2 space-y-6">
                    <SectionHeader content="Smartplay Quality Policy (ISO 9001:2015)" />
                    <SectionContent
                        content="Smartplay International is committed to achieving
                        customer satisfaction by providing quality, durable,
                        consistent lottery drawing equipment and services which
                        consistently meet or exceed customer expectations. This
                        level of quality is achieved by continuously improving
                        the effectiveness of the Quality Management System.
                        Quality Objectives: Reduce Warranty Claims and Strive
                        for On-Time Delivery."
                    />
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

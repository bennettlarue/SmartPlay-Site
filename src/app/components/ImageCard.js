import React from "react";
import { SectionImage } from "./SectionImage";
import { SectionHeader } from "./SectionHeader";
import { SectionContent } from "./SectionContent";
import { ArrowButton } from "./ArrowButton";

export const ImageCard = ({ img, title, desc, href }) => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
            <div className="w-full h-64 overflow-hidden">
                <SectionImage src={img} alt={title} />
            </div>
            <div className="space-y-4">
                <SectionHeader content={title} />
                <SectionContent content={desc} />
                <ArrowButton text="Learn More" href={href} />
            </div>
        </div>
    );
};

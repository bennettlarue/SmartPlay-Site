import React from "react";

import { useState } from "react";

const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
        />
    </svg>
);

export const ArrowButton = ({
    text,
    color = "blue-900",
    hoverColor = "blue-950",
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="w-[210px]">
            <div
                className={`${
                    hovered ? `w-[210px]` : `w-[200px]`
                }  text-white bg-blue-950 hover:bg-blue-900 font-semibold text-xl p-3 rounded transition-all flex items-center justify-between cursor-pointer shadow-lg`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <p>{text}</p>
                <div>
                    <ArrowIcon />
                </div>
            </div>
        </div>
    );
};

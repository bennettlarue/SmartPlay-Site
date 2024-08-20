import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const MachineLink = ({ index, imageLink, title, link }) => {
    const [isHovered, setHovered] = useState(false);
    const [viewed, setViewed] = useState(false);
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            setViewed(true);
        }
    }, [inView]);

    return (
        <Link href={link}>
            <div
                key={index}
                className="relative shadow h-[300px] w-[300px] cursor-pointer rounded-lg"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    className="h-[300px] w-[300px] max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="gallery-photo"
                />
                <div className="h-[300px] w-[300px] absolute inset-0 flex items-center justify-center bg-black hover:bg-blue-950 hover:bg-opacity-55 bg-opacity-40 rounded-lg transition-all">
                    <div className="text-center">
                        <div className="text-center">
                            {" "}
                            <h1 className="specialFont text-white text-2xl font-bold">
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MachineLink;

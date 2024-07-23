"use client";

import { useState } from "react";
import Image from "next/image";

const ZoomImage = ({ src, alt }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleClick = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <>
            <div
                className="relative cursor-pointer group"
                onClick={handleClick}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={500}
                    height={300}
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                        src="/magnifying-glass.png"
                        alt="Magnify"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            {isFullscreen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={handleClick}
                >
                    <Image
                        src={src}
                        alt={alt}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            )}
        </>
    );
};

export default ZoomImage;

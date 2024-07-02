import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MachineLink = ({ index, imageLink, title, desc }) => {
    const [isHovered, setHovered] = useState(false);
    const [viewed, setViewed] = useState(false);
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            setViewed(true);
        }
    }, [inView]);

    const titleVariants = {
        visible: { y: 0 },
        hidden: { y: 40 },
    };

    const descVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const mainVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
    };

    return (
        <motion.div
            key={index}
            ref={ref}
            variants={mainVariants}
            initial="hidden"
            animate={viewed ? "visible" : "hidden"}
            transition={{
                duration: 1.3,
                delay: 0.15 + (index % 3) / 10,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="relative shadow-xl h-[320px] w-[320px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                className="h-[320px] w-[320px] max-w-full rounded-lg object-cover object-center"
                src={imageLink}
                alt="gallery-photo"
            />
            <div className="h-[320px] w-[320px] absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-65 rounded-lg transition-colors">
                <div className="text-center">
                    <motion.div
                        className="text-center"
                        initial={isHovered ? "visible" : "hidden"}
                        animate={isHovered ? "visible" : "hidden"}
                        variants={titleVariants}
                    >
                        {" "}
                        <h1 className="text-white text-2xl font-bold">
                            {title}
                        </h1>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={isHovered ? "visible" : "hidden"}
                        animate={isHovered ? "visible" : "hidden"}
                        variants={descVariants}
                    >
                        {" "}
                        <p className="text-white text-lg p-2">{desc}</p>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={isHovered ? "visible" : "hidden"}
                        animate={isHovered ? "visible" : "hidden"}
                        variants={descVariants}
                    >
                        {" "}
                        <button className="bg-blue-950 rounded-md shadow-md text-white p-3 font-normal text-sm">
                            <a href="#">View Products</a>
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default MachineLink;

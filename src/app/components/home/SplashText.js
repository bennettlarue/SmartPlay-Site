import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedCharecters";

const SplashText = (props) => {
    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
        {
            text: props.text,
        },
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025,
            },
        },
    };

    return (
        <motion.div
            className="App"
            transition={{ staggerChildren: 0.02 }}
            initial="hidden"
            // animate="visible"
            animate={"visible"}
        >
            <div className="container">
                {placeholderText.map((item, index) => {
                    return (
                        <div className=" text-8xl">
                            <AnimatedCharacters
                                text={"Lottery Machine Manufacturing"}
                                key={index}
                                breakWords={true}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="container">
                {placeholderText.map((item, index) => {
                    return (
                        <div className="text-4xl">
                            <AnimatedCharacters
                                text={"& Digital Drawing Systems"}
                                key={index}
                                breakWords={false}
                            />
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default SplashText;

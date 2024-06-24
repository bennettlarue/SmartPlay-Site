import React from "react";

import { motion } from "framer-motion";
import { FadeInText } from "../../FadeInText";
import { PopupText } from "../../PopupText";

export const Title = () => {
    return (
        <div className="text-center text-blue-950 my-32">
            <div className="flex items-center justify-center">
                <motion.img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/06/ball.png"
                    alt="Ball"
                    className="h-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                />
            </div>

            <h1 className="text-7xl font-bold flex justify-center">
                <PopupText text="Lottery Drawing Balls" delay={0.4} />
            </h1>
        </div>
    );
};

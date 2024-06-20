import React from "react";

import { motion } from "framer-motion";
import { FadeInText } from "../FadeInText";
import { PopupText } from "../PopupText";

export const Title = () => {
    return (
        <div className="text-center text-blue-950 my-32">
            <div className="flex items-center justify-center">
                <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </motion.svg>
            </div>

            <h2 className="text-3xl font-bold flex justify-center">
                <FadeInText text="Tested & Certified" delay={0.2} />
            </h2>
            <h1 className="text-7xl font-bold flex justify-center">
                <PopupText text="Why SmartPlay" delay={0.4} />
            </h1>
        </div>
    );
};

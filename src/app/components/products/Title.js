import React from "react";

import { motion } from "framer-motion";
import { PopupText } from "../PopupText";

export const Title = ({ text = "Title" }) => {
    return (
        <div className="text-center text-blue-950 my-32">
            <h1 className="text-7xl font-bold flex justify-center">
                <PopupText text={text} delay={0.4} />
            </h1>
        </div>
    );
};

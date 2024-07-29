import React from "react";

import { motion } from "framer-motion";

export const Title = ({ text = "Title" }) => {
    return (
        <div className="text-center text-blue-950 lg:my-24 my-20">
            <motion.h1
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:text-6xl text-4xl font-bold flex justify-center"
            >
                {text}
            </motion.h1>
        </div>
    );
};

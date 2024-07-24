import React from "react";
import { motion } from "framer-motion";

export const PageBackground = ({ image }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-0 left-0 w-full h-full -z-10"
        >
            <img
                src={image}
                alt="Customer Service"
                className="w-full h-full object-cover -translate-y-10"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
        </motion.div>
    );
};

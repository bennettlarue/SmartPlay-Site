import { motion } from "framer-motion";
import React from "react";

export const SectionHeader = ({ content, animate = true }) => {
    return (
        <motion.h3
            initial={animate ? { opacity: 0, y: 5 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="lg:text-2xl text-xl font-semibold text-blue-950"
        >
            {content}
        </motion.h3>
    );
};

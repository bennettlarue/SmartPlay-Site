import React from "react";
import { motion } from "framer-motion";

export const SectionContent = ({ content }) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            className="lg:text-xl text-lg"
        >
            {content}
        </motion.p>
    );
};

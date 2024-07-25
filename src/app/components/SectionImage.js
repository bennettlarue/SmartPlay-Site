import React from "react";
import { motion } from "framer-motion";

export const SectionImage = ({ src, alt, animate = true }) => {
    return (
        <motion.img
            initial={animate ? { opacity: 0 } : {}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded shadow"
        />
    );
};

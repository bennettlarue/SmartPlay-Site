import React from "react";
import { motion } from "framer-motion";

export const BulletList = ({ bullets }) => {
    return (
        <ul className="space-y-6">
            {bullets.map((bullet, index) => (
                <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className="flex space-x-2 text-xl"
                >
                    <p className="text-xl font-bold text-blue-900">•</p>
                    <p>{bullet}</p>
                </motion.li>
            ))}
        </ul>
    );
};

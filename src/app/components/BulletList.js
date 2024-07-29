import React from "react";
import { motion } from "framer-motion";

export const BulletList = ({
    bullets,
    boldFirstSentence = false,
    check = false,
    cols = 1,
}) => {
    const getBoldText = (text) => {
        if (!boldFirstSentence) return text;

        const colonIndex = text.indexOf(":");
        const periodIndex = text.indexOf(".");

        if (
            colonIndex !== -1 &&
            (colonIndex < periodIndex || periodIndex === -1)
        ) {
            // Colon exists and comes before the first period (or there's no period)
            const boldPart = text.slice(0, colonIndex + 1); // Include the colon
            const restPart = text.slice(colonIndex + 1);
            return (
                <>
                    <span className="font-semibold text-blue-950">
                        {boldPart}
                    </span>
                    {restPart}
                </>
            );
        } else if (periodIndex !== -1) {
            // Period exists and comes before colon (or there's no colon)
            const sentences = text.split(". ");
            return (
                <>
                    <span className="font-semibold text-blue-950">
                        {sentences[0]}.{" "}
                    </span>
                    {sentences.slice(1).join(". ")}
                </>
            );
        } else {
            // No colon and no period, bold the entire text
            return <span className="font-semibold text-blue-950">{text}</span>;
        }
    };

    return (
        <ul className={cols === 1 ? "space-y-6" : "grid grid-cols-2 gap-6"}>
            {bullets.map((bullet, index) => (
                <motion.li
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className="flex space-x-2 lg:text-xl text-lg"
                >
                    <p className="text-xl font-bold text-blue-900">
                        {check ? "✓" : "•"}
                    </p>
                    <p>{getBoldText(bullet)}</p>
                </motion.li>
            ))}
        </ul>
    );
};

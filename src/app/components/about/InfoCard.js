import React from "react";
import { color, motion, useInView } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { SectionContent } from "../SectionContent";

export const InfoCard = ({ header, text, index, bg_color = "bg-white" }) => {
    const ref = React.useRef(null);
    const defaultStyle =
        " p-6 py-14 text-left border-b border-x border-gray-500";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={
                index === 0
                    ? defaultStyle + " border-t " + bg_color
                    : defaultStyle + " " + bg_color
            }
        >
            <div className="space-y-4 ">
                <SectionHeader content={header} />
                <SectionContent content={text} />
            </div>
        </motion.div>
    );
};

import React from "react";
import { SectionImage } from "./SectionImage";
import { SectionHeader } from "./SectionHeader";
import { SectionContent } from "./SectionContent";
import { ArrowButton } from "./ArrowButton";
import { motion } from "framer-motion";
import { VideoEmbed } from "./VideoEmbed";

export const VideoCard = ({
    video,
    title,
    desc,
    href,
    animate = true,
    children,
}) => {
    return (
        <motion.div
            initial={animate ? { opacity: 0, y: 10 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut" }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 grid-cols-1 items-center gap-10"
        >
            <VideoEmbed url={video} />

            <div className="space-y-4">
                {title ? (
                    <SectionHeader content={title} animate={false} />
                ) : null}
                {desc ? (
                    <SectionContent content={desc} animate={false} />
                ) : null}
                {href ? (
                    <ArrowButton
                        text="Learn More"
                        href={href}
                        animate={false}
                    />
                ) : null}
                {children}
            </div>
        </motion.div>
    );
};

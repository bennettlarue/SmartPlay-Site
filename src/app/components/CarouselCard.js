import React from "react";
import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { SectionImage } from "./SectionImage";

export const CarouselCard = ({ imgs, animate = true, children }) => {
    return (
        <motion.div
            initial={animate ? { opacity: 0, y: 10 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut" }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 grid-cols-1 items-center gap-10"
        >
            <div className="w-full h-64 overflow-hidden">
                <Carousel
                    className="rounded shadow"
                    loop={true}
                    autoplay={true}
                >
                    {imgs.map((img) => (
                        <SectionImage
                            key={img.src}
                            src={img.src}
                            alt={img.alt}
                            animate={false}
                        />
                    ))}
                </Carousel>
            </div>
            <div className="space-y-4">{children}</div>
        </motion.div>
    );
};

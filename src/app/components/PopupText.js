import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const PopupText = ({ text, delay }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Stop observing after the animation is triggered
                }
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="flex overflow-hidden pb-0.5">
            {Array.from(text).map((char, index) => (
                <motion.div
                    key={index}
                    initial={{ y: "110%" }}
                    animate={{ y: inView ? "0%" : "110%" }}
                    transition={{
                        duration: 0.45,
                        delay: inView ? 0.015 * index + delay : 0,
                        ease: [0.455, 0.03, 0.515, 0.955],
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.div>
            ))}
        </div>
    );
};

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const FadeInText = ({ text, delay }) => {
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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{
                    duration: 0.5,
                    delay: inView ? delay : 0,
                }}
                className="inline-block"
            >
                {text}
            </motion.div>
        </div>
    );
};

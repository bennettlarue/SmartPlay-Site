import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Line = ({ delay }) => {
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
        <motion.div
            ref={ref}
            className="h-[5px] bg-blue-950"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: inView ? "200px" : 0, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: inView ? delay : 0 }}
        ></motion.div>
    );
};

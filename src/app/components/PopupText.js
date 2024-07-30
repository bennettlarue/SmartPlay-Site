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
        <React.Fragment>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            ></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            ></link>
            <div
                ref={ref}
                style={{ fontFamily: "Poppins" }}
                className="flex overflow-hidden pb-[0.5rem] text-6xl font-semibold"
            >
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
        </React.Fragment>
    );
};

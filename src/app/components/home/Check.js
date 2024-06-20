import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 0.15 + i * 0.2;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 0.4, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

const size = 30;
const strokeW = 5;

export default function Check({ index = 0 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

    return (
        <div
            ref={ref}
            style={{
                strokeWidth: strokeW,
            }}
        >
            <motion.svg
                className="border-b-2 border-black"
                width={size.toString()}
                height={size.toString()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.line
                    x1={strokeW.toString()}
                    y1={(size * 0.6).toString()}
                    x2={(size / 3).toString()}
                    y2={size.toString()}
                    stroke="#00cc88"
                    variants={draw}
                    custom={index * 2 + 1}
                />

                <motion.line
                    x1={(size / 3).toString()}
                    y1={size.toString()}
                    x2={(size - strokeW).toString()}
                    y2={strokeW.toString()}
                    stroke="#00cc88"
                    variants={draw}
                    custom={index * 2 + 2}
                />
            </motion.svg>
        </div>
    );
}

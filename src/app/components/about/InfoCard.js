import React from "react";
import { motion, useInView } from "framer-motion";

export const InfoCard = ({ direction, header, text }) => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: "100%" } : {}}
            transition={
                direction === "l"
                    ? { duration: 0.7, delay: 0.5 }
                    : { duration: 0.7, delay: 0.2 }
            }
            className={` bg-gray-200 p-6 rounded shadow text-left h-[300px] m${direction}-auto`}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={
                    direction === "l"
                        ? { duration: 0.5, delay: 1.2 }
                        : { duration: 0.5, delay: 0.9 }
                }
            >
                <h2 className="text-2xl text-blue-950 font-semibold">
                    {header}
                </h2>
                <p className="text-lg py-4 my-auto">{text}</p>
            </motion.div>
        </motion.div>
    );
};

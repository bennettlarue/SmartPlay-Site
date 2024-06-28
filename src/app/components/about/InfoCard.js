import React from "react";
import { motion, useInView } from "framer-motion";

export const InfoCard = ({ direction, header, text }) => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={` bg-gray-200 p-6 rounded shadow text-left`}
        >
            <div>
                <h2 className="text-2xl text-blue-950 font-semibold">
                    {header}
                </h2>
                <p className="text-lg py-4 my-auto">{text}</p>
            </div>
        </motion.div>
    );
};

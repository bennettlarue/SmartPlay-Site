import React from "react";

import { motion } from "framer-motion";

export const Title = ({ text = "Title" }) => {
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
                className="text-center text-blue-950 lg:my-24 my-20"
                style={{ fontFamily: "Poppins" }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:text-6xl text-4xl flex justify-center font-semibold mx-8"
                >
                    {text}
                </motion.h1>
            </div>
        </React.Fragment>
    );
};

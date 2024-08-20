"use client";

import { motion } from "framer-motion";
import React from "react";

export const SmallerHeader = ({ content, animate = true, children }) => {
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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
                rel="stylesheet"
            />
            <motion.h3
                style={{ fontFamily: "Poppins" }}
                initial={animate ? { opacity: 0, y: 5 } : {}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="lg:text-2xl text-lg font-semibold text-blue-950"
            >
                {content}
                {children}
            </motion.h3>
        </React.Fragment>
    );
};

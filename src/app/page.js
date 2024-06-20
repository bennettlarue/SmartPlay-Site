"use client";

import { motion } from "framer-motion";
import { Nav } from "./components/Nav";
import { Splash } from "./components/home/Splash";
import Numbers from "./components/home/Numbers";
import { MachineSlides } from "./components/home/MachineSlides";
import OriginSys from "./components/home/OriginSys";
import Clients from "./components/home/Clients";
import { WhySmartPlay } from "./components/home/WhySmartPlay";
import { Footer } from "./components/Footer";

export default function Home() {
    return (
        <main>
            <Nav />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Splash />
                <Numbers />
                <MachineSlides />
                <OriginSys />
                <Clients />
                <WhySmartPlay />
                <Footer />
            </motion.div>
        </main>
    );
}

"use client";

import Image from "next/image";
import { Nav } from "./components/Nav";
import { Splash } from "./components/home/Splash";
import Numbers from "./components/home/Numbers";
import { MachineSlides } from "./components/home/MachineSlides";
import OriginSys from "./components/home/OriginSys";
import Clients from "./components/home/Clients";

export default function Home() {
    return (
        <main>
            <Nav />
            <Splash />
            <Numbers />
            <MachineSlides />
            <OriginSys />
            <Clients />
        </main>
    );
}

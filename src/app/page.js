import Image from "next/image";
import { Nav } from "./components/Nav";
import { Splash } from "./components/home/Splash";

export default function Home() {
    return (
        <main>
            <Nav />
            <Splash />
            <div className="h-20 bg-slate-400"> content</div>
        </main>
    );
}

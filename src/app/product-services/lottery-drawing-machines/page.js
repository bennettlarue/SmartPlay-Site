"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OptionsMenu } from "@/app/components/products/OptionsMenu";
import { Nav } from "@/app/components/Nav";
import { FilterMenu } from "@/app/components/products/FilterMenu";

export default function App() {
    const gameTypes = ["Bingo", "Keno", "Lotto", "Single Digit"];
    const features = [
        "Gravity Mix",
        "Air Mix",
        "Continuous Operation",
        "High Frequency",
    ];

    const [selected, setSelected] = useState([]);

    // Callback to handle item selection
    const handleSelectType = (item) => {
        if (!selected.includes(item)) setSelected((prev) => [...prev, item]);
        else setSelected((prev) => prev.filter((i) => i !== item));
    };

    const handleSelectFeature = (item) => {
        if (!selected.includes(item)) setSelected((prev) => [...prev, item]);
        else setSelected((prev) => prev.filter((i) => i !== item));
    };

    return (
        <div className="App">
            <Nav />
            <FilterMenu
                gameTypes={gameTypes}
                features={features}
                selected={selected}
                setSelected={setSelected}
                handleSelectType={handleSelectType}
                handleSelectFeature={handleSelectFeature}
            />
        </div>
    );
}

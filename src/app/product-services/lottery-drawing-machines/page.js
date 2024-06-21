"use client";
import { useState } from "react";
import { Nav } from "@/app/components/Nav";
import { FilterMenu } from "@/app/components/products/FilterMenu";
import { ProductCard } from "@/app/components/products/ProductCard";
import lotteryMachines from "../../../../data/lottery-machines.json";
import { AnimatePresence, motion } from "framer-motion";

const getSelectedItems = (selected) => {
    if (selected.length === 0) return lotteryMachines;
    const filteredItems = [];

    for (let i = 0; i < lotteryMachines.length; i++) {
        let included = true;
        for (let j = 0; j < selected.length; j++) {
            if (
                !(
                    lotteryMachines[i].features.includes(selected[j]) ||
                    lotteryMachines[i].gameType.includes(selected[j])
                )
            ) {
                included = false;
                break;
            }
        }

        if (included) filteredItems.push(lotteryMachines[i]);
    }

    return filteredItems;
};

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

            <div className="mx-auto max-w-[1300px] mt-24 p-8 relative">
                <FilterMenu
                    gameTypes={gameTypes}
                    features={features}
                    selected={selected}
                    setSelected={setSelected}
                    handleSelectType={handleSelectType}
                    handleSelectFeature={handleSelectFeature}
                />
                <div className="grid grid-cols-3 gap-14">
                    <AnimatePresence>
                        {getSelectedItems(selected).map(
                            (lotteryMachine, index) => (
                                <motion.div
                                    key={lotteryMachine.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10"
                                >
                                    <ProductCard
                                        key={index}
                                        name={lotteryMachine.name}
                                        imageLink={lotteryMachine.imageLink}
                                        gameType={lotteryMachine.gameType}
                                        features={lotteryMachine.features}
                                    />
                                </motion.div>
                            )
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

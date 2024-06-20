"use client";
import { useState } from "react";
import { Nav } from "@/app/components/Nav";
import { FilterMenu } from "@/app/components/products/FilterMenu";
import { ProductCard } from "@/app/components/products/ProductCard";
import lotteryMachines from "../../../../data/lottery-machines.json";

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
            <FilterMenu
                gameTypes={gameTypes}
                features={features}
                selected={selected}
                setSelected={setSelected}
                handleSelectType={handleSelectType}
                handleSelectFeature={handleSelectFeature}
            />
            <div className="grid grid-cols-3 gap-4">
                {getSelectedItems(selected).map((lotteryMachine, index) => (
                    <ProductCard
                        key={index}
                        name={lotteryMachine.name}
                        imageLink={lotteryMachine.imageLink}
                        gameType={lotteryMachine.gameType}
                        features={lotteryMachine.features}
                    />
                ))}
            </div>
        </div>
    );
}

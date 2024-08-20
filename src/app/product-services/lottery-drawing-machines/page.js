"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Nav } from "@/app/components/Nav";
import { FilterMenu } from "@/app/components/products/FilterMenu";
import { ProductCard } from "@/app/components/products/ProductCard";
import { AnimatePresence, motion } from "framer-motion";
import { Accordions } from "@/app/components/products/lottery-machines/Accordions";
import { Footer } from "@/app/components/Footer";
import { Title } from "@/app/components/products/Title";
import axios from "axios";
import Link from "next/link";
import { PageBackground } from "@/app/components/PageBackground";
import { SectionHeader } from "@/app/components/SectionHeader";
import { SectionContent } from "@/app/components/SectionContent";

const getSelectedItems = (selected, lotteryMachines) => {
    if (selected.length === 0) return lotteryMachines;
    const filteredItems = [];

    for (let i = 0; i < lotteryMachines.length; i++) {
        let included = true;
        for (let j = 0; j < selected.length; j++) {
            if (
                !lotteryMachines[i].machineCategories
                    .map((item) => item.title)
                    .includes(selected[j])
            ) {
                included = false;
                break;
            }
        }

        if (included) filteredItems.push(lotteryMachines[i]);
    }

    return filteredItems;
};

export default function LotteryDrawingMachines() {
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gameTypes, setGameTypes] = useState([]);
    const [features, setFeatures] = useState([]);
    const [selected, setSelected] = useState([]);
    const searchParams = useSearchParams(); // Get the query parameters

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [machinesResponse, categoriesResponse] =
                    await Promise.all([
                        axios.get(
                            "https://smartplay-content.payloadcms.app/api/machines"
                        ),
                        axios.get(
                            "https://smartplay-content.payloadcms.app/api/machineCategories"
                        ),
                    ]);

                setMachines(machinesResponse.data.docs);
                const newGameTypes = categoriesResponse.data.docs
                    .filter((item) => {
                        return item.categoryType === "gameType";
                    })
                    .map((item) => item.title);
                setGameTypes(newGameTypes);

                const newFeatures = categoriesResponse.data.docs
                    .filter((item) => {
                        return item.categoryType === "machineFeature";
                    })
                    .map((item) => item.title);
                setFeatures(newFeatures);

                // Check for query parameters and set initial filters
                const selectedTypes = searchParams.getAll("type");
                const selectedFeatures = searchParams.getAll("feature");

                setSelected([...selectedTypes, ...selectedFeatures]);

                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [searchParams]); // Re-run the effect if searchParams change

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
            <PageBackground image="/images/backgrounds/globe.jpg" />

            <Title text="Lottery Drawing Machines" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader
                        content="Consistent, trouble-free lottery equipment delivers
                        greater ROI."
                    />
                    <SectionContent
                        content="Lotteries require consistent and flawless draw
                            results. As many lotteries and other draw games move
                            online and operate continuously at high-frequency,
                            drawing reliability is essential."
                    />
                    <SectionContent
                        content="Many of our client machines have been in use
                            regularly for 20 or more years. This is only
                            possible by using the highest quality materials and
                            incorporating manufacturing innovations that
                            simplify operation and lower risk, which generate a
                            higher return on your investment."
                    />
                </div>

                <div className="secondarySection">
                    <div className="contentSection">
                        <SectionHeader
                            content="Why do clients in 127 countries choose Smartplay
                            equipment?"
                        />
                        <Accordions />
                    </div>
                </div>

                <div className="primarySection bottomSection" id="machines">
                    <div className="contentSection">
                        <SectionHeader
                            content="We offer lottery machines to meet any requirement.
                        Traditional gravity mix, air mix or digital draw systems"
                        />
                        <div>
                            <FilterMenu
                                gameTypes={gameTypes}
                                features={features}
                                selected={selected}
                                setSelected={setSelected}
                                handleSelectType={handleSelectType}
                                handleSelectFeature={handleSelectFeature}
                            />
                            {getSelectedItems(selected, machines).length > 0 ? (
                                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                                    <AnimatePresence>
                                        {getSelectedItems(
                                            selected,
                                            machines
                                        ).map((lotteryMachine, index) => (
                                            <motion.div
                                                key={index}
                                                layout
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="relative z-10"
                                            >
                                                <Link
                                                    href={`/lottery-products/${lotteryMachine.slug}`}
                                                >
                                                    <ProductCard
                                                        key={lotteryMachine.id}
                                                        name={
                                                            lotteryMachine.name
                                                        }
                                                        imageLink={
                                                            lotteryMachine
                                                                .featuredImage
                                                                .url
                                                        }
                                                        categories={
                                                            lotteryMachine.machineCategories
                                                        }
                                                    />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-xl text-gray-600 specialFont">
                                        No machines found.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

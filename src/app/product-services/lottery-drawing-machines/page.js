"use client";
import { useEffect, useState } from "react";
import { Nav } from "@/app/components/Nav";
import { FilterMenu } from "@/app/components/products/FilterMenu";
import { ProductCard } from "@/app/components/products/ProductCard";
//import lotteryMachines from "../../../../data/lottery-machines.json";
import { AnimatePresence, motion } from "framer-motion";
import { Accordions } from "@/app/components/products/lottery-machines/Accordions";
import { Footer } from "@/app/components/Footer";
import { Title } from "@/app/components/products/Title";
import axios from "axios";

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
    // const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gameTypes, setGameTypes] = useState([]);
    // const gameTypes = ["Bingo", "Keno", "Lotto", "Single Digit"];
    const [features, setFeatures] = useState([]);
    // const features = ["Gravity Mix", "Air Mix", "Continuous Operation", "High Frequency",];

    const [selected, setSelected] = useState([]);

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
                console.log(machinesResponse.data.docs);
                //setCategories(categoriesResponse.data.docs);
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

                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Callback to handle item selection
    const handleSelectType = (item) => {
        if (!selected.includes(item)) setSelected((prev) => [...prev, item]);
        else setSelected((prev) => prev.filter((i) => i !== item));
        console.log(selected);
    };

    const handleSelectFeature = (item) => {
        if (!selected.includes(item)) setSelected((prev) => [...prev, item]);
        else setSelected((prev) => prev.filter((i) => i !== item));
        console.log(selected);
    };

    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/06/composite-image-of-balls-of-the-lottery.jpg"
                    alt="Customer Service"
                    className="w-full h-screen object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>{" "}
                {/* Overlay */}
            </div>

            <Title text="Lottery Drawing Machines" />
            <div className=" bg-white">
                <div className="mx-auto max-w-[1000px] py-12 text-lg px-6 space-y-6">
                    <h2 className="lg:text-3xl text-xl font-bold text-blue-950 text-center">
                        Consistent, trouble-free lottery equipment delivers
                        greater ROI.
                    </h2>
                    <div className="space-y-2">
                        <p>
                            Lotteries require consistent and flawless draw
                            results. As many lotteries and other draw games move
                            online and operate continuously at high-frequency,
                            drawing reliability is essential.
                        </p>
                        <p>
                            Many of our client machines have been in use
                            regularly for 20 or more years. This is only
                            possible by using the highest quality materials and
                            incorporating manufacturing innovations that
                            simplify operation and lower risk, which generate a
                            higher return on your investment.
                        </p>
                    </div>
                </div>

                <div className="p-9 bg-gray-200 shadow rounded">
                    <div className="max-w-[1000px] mx-auto">
                        <h2 className="lg:text-3xl text-xl font-bold text-blue-950 mb-8 text-center ">
                            Why do clients in 127 countries choose Smartplay
                            equipment?
                        </h2>
                        <Accordions />
                    </div>
                </div>

                <div className="bg-white py-12 lg:px-0 px-6">
                    <p className="mx-auto max-w-[1000px] lg:text-3xl text-xl text-blue-950 text-center font-semibold">
                        We offer lottery machines to meet any requirement.
                        Traditional gravity mix, air mix or digital draw systems
                    </p>
                </div>

                <div className="mx-auto max-w-[1300px] lg:p-8 px-6 relative pb-5">
                    <FilterMenu
                        gameTypes={gameTypes}
                        features={features}
                        selected={selected}
                        setSelected={setSelected}
                        handleSelectType={handleSelectType}
                        handleSelectFeature={handleSelectFeature}
                    />
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-14">
                        <AnimatePresence>
                            {machines
                                ? getSelectedItems(selected, machines).map(
                                      (lotteryMachine, index) => (
                                          <motion.div
                                              key={index}
                                              layout
                                              initial={{
                                                  opacity: 0,
                                                  scale: 0.8,
                                              }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              exit={{ opacity: 0, scale: 0.8 }}
                                              transition={{ duration: 0.3 }}
                                              className="relative z-10"
                                          >
                                              <ProductCard
                                                  key={lotteryMachine.id}
                                                  name={lotteryMachine.name}
                                                  imageLink={
                                                      lotteryMachine
                                                          .featuredImage.url
                                                  }
                                                  categories={
                                                      lotteryMachine.machineCategories
                                                  }
                                              />
                                          </motion.div>
                                      )
                                  )
                                : "loading"}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

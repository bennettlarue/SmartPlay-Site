import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OptionsMenu } from "./OptionsMenu";

export const FilterMenu = ({
    gameTypes,
    features,
    handleSelectType,
    handleSelectFeature,
    selected,
    setSelected,
}) => {
    const [open, setOpen] = useState(0);

    return (
        <motion.div className="z-50">
            <div className="flex space-x-2 items-center">
                <h2 className="font-bold text-xl mr-3">Filter By:</h2>
                <motion.div
                    className={`relative transition-all border rounded ${
                        open === 1 ? "bg-gray-200" : ""
                    }`}
                >
                    <motion.button
                        onClick={() => (open === 1 ? setOpen(0) : setOpen(1))}
                        className="font-bold p-2 flex items-center space-x-1"
                    >
                        <span>Game Type</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 17a1 1 0 01-.832-.445l-5-7a1 1 0 011.664-1.11L10 14.318l4.168-5.874a1 1 0 111.664 1.11l-5 7A1 1 0 0110 17z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </motion.button>
                    <div className="absolute top-full mt-2">
                        {
                            <AnimatePresence>
                                {open === 1 && (
                                    <OptionsMenu
                                        open={open === 1}
                                        items={gameTypes}
                                        selected={selected}
                                        onSelect={handleSelectType} // Pass the callback
                                    />
                                )}
                            </AnimatePresence>
                        }
                    </div>
                </motion.div>

                <motion.div
                    className={`relative transition-all border rounded ${
                        open === 2 ? "bg-gray-200" : ""
                    }`}
                >
                    <motion.button
                        onClick={() => (open === 2 ? setOpen(0) : setOpen(2))}
                        className="font-bold p-2 flex items-center space-x-1"
                    >
                        <span>Machine Features</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 17a1 1 0 01-.832-.445l-5-7a1 1 0 011.664-1.11L10 14.318l4.168-5.874a1 1 0 111.664 1.11l-5 7A1 1 0 0110 17z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </motion.button>
                    <div className="absolute top-full mt-2">
                        <AnimatePresence>
                            {open === 2 && (
                                <OptionsMenu
                                    open={open === 2}
                                    items={features}
                                    selected={selected}
                                    onSelect={handleSelectFeature} // Pass the callback
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            <div className="flex space-x-4 items-center">
                <h2 className="py-7">
                    {selected.length === 0 ? (
                        <div className="text-4xl font-bold">All Products</div>
                    ) : (
                        <div className="text-xl font-semibold text-gray-600">
                            Selected Filters:
                        </div>
                    )}
                </h2>
                {selected.map((item) => {
                    return (
                        <div
                            className=" h-fit p-2 rounded-xl bg-gray-200 hover:bg-gray-300 hover:text-red-500 w-fit flex items-center cursor-pointer transition-all"
                            onClick={() =>
                                setSelected((prev) =>
                                    prev.filter((i) => i !== item)
                                )
                            }
                        >
                            <p>{item}</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 ml-2"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 10.586l4.95-4.95a1 1 0 111.414 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

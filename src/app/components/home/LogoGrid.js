import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LogoGrid = ({ clientLogos }) => {
    const [state, setState] = useState({
        displayedLogos: [],
        remainingLogos: [],
    });

    const initializeLogos = useCallback(() => {
        setState({
            displayedLogos: clientLogos.slice(0, 6),
            remainingLogos: clientLogos.slice(6),
        });
    }, [clientLogos]);

    useEffect(() => {
        initializeLogos();
    }, [initializeLogos]);

    useEffect(() => {
        const swapLogo = () => {
            setState((prevState) => {
                if (prevState.remainingLogos.length === 0) return prevState;

                let validIndex = Math.floor(Math.random() * 6);
                const previousSwaps = prevState.swappedIndices || []; // Initialize an empty array for swapped indices

                // Ensure the chosen index is different from the last two swapped ones
                while (
                    previousSwaps.includes(validIndex) &&
                    previousSwaps.length >= 2
                ) {
                    validIndex = Math.floor(Math.random() * 6);
                }

                const newLogo = prevState.remainingLogos[0];
                const replacedLogo = prevState.displayedLogos[validIndex];

                const newDisplayed = [...prevState.displayedLogos];
                newDisplayed[validIndex] = newLogo;

                const newRemaining = [
                    ...prevState.remainingLogos.slice(1),
                    replacedLogo,
                ];

                console.log("Swapping logo:", replacedLogo, "with", newLogo);

                // Update the swapped indices array
                const updatedSwappedIndices = [
                    ...previousSwaps,
                    validIndex,
                ].slice(-2); // Keep only the last two swapped indices

                return {
                    displayedLogos: newDisplayed,
                    remainingLogos: newRemaining,
                    swappedIndices: updatedSwappedIndices, // Add the new swapped index
                };
            });
        };

        const interval = setInterval(swapLogo, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-12">
            {state.displayedLogos.map((logo, index) => (
                <div key={index} className="flex justify-center border">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={logo}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            src={logo}
                            alt={`Client Logo ${index}`}
                            className="w-[250px] h-24 object-contain"
                        />
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default LogoGrid;

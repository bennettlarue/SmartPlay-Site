import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { PopupText } from "../PopupText";
import { ArrowButton } from "../ArrowButton";

function Splash() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // 1024px is the default 'lg' breakpoint in Tailwind
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="relative">
                {isLargeScreen && (
                    <img
                        className="absolute w-full h-full object-cover"
                        src="https://media.istockphoto.com/id/1314972402/vector/multicolored-lottery-balls-vector-background.jpg?s=2048x2048&w=is&k=20&c=f6TPkeUWd7E7zid09NkUZLfwidvj9wumvM-D0-jdCKI="
                        alt="Splash"
                    />
                )}
                <div
                    className={`relative ${
                        isLargeScreen ? "bg-gray-900 bg-opacity-50" : ""
                    }`}
                >
                    <div
                        className="bg-gray-200"
                        style={
                            isLargeScreen
                                ? {
                                      backgroundImage:
                                          "radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
                                      backgroundSize: "20px 20px",
                                      clipPath:
                                          "polygon(55% 0, 65% 100%, 0 100%, 0 0)",
                                  }
                                : {
                                      backgroundImage:
                                          "radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
                                      backgroundSize: "20px 20px",
                                  }
                        }
                    >
                        <div className="contentSection">
                            <div className="text-blue-950 max-w-full md:max-w-[800px]">
                                <div className="space-y-3 lg:max-w-full md:max-w-[600px] max-w-[400px] mx-auto">
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/ball.png?time=1717187795"
                                            alt="Ball"
                                            className="h-6"
                                        />
                                        <SectionHeader content="Global Leader In" />
                                    </div>
                                    <div className="flex md:flex-col flex-wrap gap-x-3">
                                        <PopupText text={"Lottery"} delay={0} />
                                        <PopupText
                                            text={"Machine"}
                                            delay={0.2}
                                        />
                                        <PopupText
                                            text={"Manufacturing"}
                                            delay={0.4}
                                        />
                                    </div>
                                    <SectionHeader content="And Digital Drawing Systems" />
                                    <ArrowButton text="View Products" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Splash;

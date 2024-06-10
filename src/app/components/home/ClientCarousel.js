import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
    "https://content.lottery.ok.gov/news-and-media/logos-and-brand/logo-vfc-01.png",
    "https://societe.lotoquebec.com/.imaging/mte/corporatif-theme/retinaLrg-1920w/website/corporatif/medias-partenaires/photos-et-logos-officiels/main/0/conteneur-onglets/0/section/0/section/0/listephotos/0/image/logo-lq-couleur-preview-600.png",
    "https://images.ctfassets.net/j16ev64qyf6l/528kLUDrUcGK0SvvdYcCok/c69716735876492850cf97776a4abb77/TNL_Master_Logo_2019_RGB_Horizontal_Heritage_Blue_Text.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Powerball_logo.svg/2560px-Powerball_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/MassLottoLogo.svg/2560px-MassLottoLogo.svg.png",
    "https://milotteryconnect.com/wp-content/uploads/2012/10/milottery-horz-logo2.png",
];

const companies = [
    "Apple",
    "Microsoft",
    "Facebook",
    "Amazon",
    "Twitter",
    "Tesla",
    "Netflix",
];

var namesToAdd = [...images];
var currentNames = [];

export default function ClientCarousel() {
    const [companyNames, setCompanyNames] = useState(currentNames);
    const containerRef = useRef(null);
    const [innerWidth, setInnerWidth] = useState(0);

    const updateWidth = () => {
        if (containerRef.current) {
            setInnerWidth(containerRef.current.clientWidth);
        }
    };

    const resetComponent = () => {
        setInnerWidth(containerRef.current.clientWidth);
        namesToAdd = [...images];
        currentNames = [];
        setCompanyNames([]);
    };

    useEffect(() => {
        // Update the width initially
        updateWidth();

        window.addEventListener("resize", resetComponent);

        const handleVisibilityChange = () => {
            resetComponent();
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", resetComponent);
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []);

    useEffect(() => {
        const intervalDuration = 3450;
        const interval = setInterval(() => {
            const newName = namesToAdd.pop();
            setCompanyNames((prevNames) => [...prevNames, newName]);
        }, intervalDuration);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [innerWidth]);

    const handleAnimationComplete = (company) => {
        namesToAdd.unshift(company);
        setCompanyNames((prevNames) =>
            prevNames.filter((name) => name !== company)
        );
    };

    return (
        <main className="">
            <motion.div
                ref={containerRef}
                className="h-[50px] w-100%"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "linear" }}
            >
                {companyNames.map((company) => (
                    <motion.div
                        className="absolute rounded text-center flex justify-center items-center font-bold italic text-2xl"
                        key={company}
                        animate={{
                            opacity: [0, 1, 1, 1, 1, 1, 0],
                            x: [
                                "0px",
                                `${(innerWidth - 300) * 0.2}px`,
                                `${(innerWidth - 300) * 0.4}px`,
                                `${(innerWidth - 300) * 0.6}px`,
                                `${(innerWidth - 300) * 0.8}px`,
                                `${innerWidth - 300}px`,
                            ],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: innerWidth / 162,
                            ease: "linear",
                        }}
                        onAnimationComplete={() =>
                            handleAnimationComplete(company)
                        }
                    >
                        <img
                            src={company}
                            alt="lottery"
                            className="w-[300px]"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}

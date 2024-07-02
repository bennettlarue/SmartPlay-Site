import { Carousel } from "@material-tailwind/react";
import MachineLink from "./MachineLink";
import { FadeInText } from "../FadeInText";
import { Line } from "../Line";

const data = [
    {
        title: "Roulette",
        desc: "Roulette is the most popular lottery system in the world.",
        imageLink:
            "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/casino-pick-roulette1-1.jpg",
    },
    {
        title: "Keno",
        desc: "Keno is the most popular lottery system in the world.",
        imageLink:
            "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/500-800-max.jpg",
    },
    {
        title: "Bingo",
        desc: "Bingo is the most popular lottery system in the world.",
        imageLink:
            "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/Galaxy-bingo-machine-747x1536.jpg",
    },
    {
        title: "Lotto",
        desc: "Lotto is the most popular lottery system in the world.",
        imageLink:
            "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/09/jupiter-keno-front-lighting-Copy-Copy.jpg",
    },
    {
        title: "Gems",
        desc: "Gems is the most popular lottery system in the world.",
        imageLink:
            "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/10/gem.jpg",
    },
    {
        title: "Multi Digit",
        desc: "Multi Digit is the most popular lottery system in the world.",
        imageLink:
            "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/10/multi-digit-gem-lottery-georgia.jpg",
    },
];

export function MachineSlides() {
    return (
        <div>
            <div className="w-full md:w-[1000px] text-center mx-auto mt-8 md:mt-24 px-6">
                <h2 className="p-3 text-2xl md:text-3xl font-bold flex justify-center">
                    <FadeInText
                        text="Highest Quality Lottery, Bingo & Raffle Number Drawing Systems"
                        delay={0.2}
                    />
                </h2>
                <div className="flex items-center justify-center my-2 mb-4">
                    <Line delay={0.2} />
                </div>
                <div className="text-lg md:text-xl p-2 pt-4">
                    <FadeInText
                        text={
                            "Smartplay International preserves drawing integrity for lottery and gaming organizations in 126 countries. We design and manufacture the most advanced traditional and digital lottery drawing systems available, with more than 5,000 systems deployed worldwide since 1993."
                        }
                        delay={0.35}
                    />
                </div>
            </div>
            <div className="mt-8 md:mt-14 p-4 md:p-6 rounded-md max-w-full md:max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {data.map(({ imageLink, title, desc }, index) => (
                        <MachineLink
                            key={index}
                            index={index}
                            imageLink={imageLink}
                            title={title}
                            desc={desc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MachineSlides;

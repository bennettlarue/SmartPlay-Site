import { Carousel } from "@material-tailwind/react";
import MachineLink from "./MachineLink";

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
            <div className=" w-[1000px] text-center mx-auto mt-24">
                <h2 className="p-3 text-3xl font-bold flex justify-center ">
                    Hightest Quality Lottery, Bingo & Raffle Number Drawing
                    Systems
                </h2>
                <div className=" w-36 mx-auto border-b-4 border-b-blue-950 my-2 mb-4"></div>
                <p className="text-xl p-2">
                    Smartplay International preserves drawing integrity for
                    lottery and gaming organizations in 126 countries. We design
                    and manufacture the most advanced traditional and digital
                    lottery drawing systems available, with more than 5,000
                    systems deployed worldwide since 1993.
                </p>
            </div>
            <div className="mt-14 p-6 rounded-md max-w-[1100px] mx-auto">
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

"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import MachineLink from "@/app/components/home/MachineLink";
import { Title } from "@/app/components/products/Title";

const checks = [
    "Standard bingo/keno models are Galaxy, SuperBingo and Phoenix II Bingo",
    "Other models such as Criterion, Saturn have been modified for Bingo use",
    "Automatic operation with our SmartController and ConnectServer Software",
    "Add optional cameras and monitors",
    "Add the Solution Controller and manage the continuous operation of your Bingo or Keno game remotely from a web browser.",
];

const data = [
    {
        title: "Galaxy Bingo",
        desc: "A Feature-Rich, Yet Economical Bingo Machine",
        imageLink:
            "https://smartplay.com/wp-content/uploads/2017/08/Galaxy-bingo-machine-435x895.jpg",
    },
    {
        title: "Phoenix Bingo Machine",
        desc: "The Phoenix keno/bingo draw machine is suitable for all lotto / keno / bingo game matrices.",
        imageLink:
            "https://smartplay.com/wp-content/uploads/2017/07/phoenix-lottery-machine-guatemala.jpg",
    },
    {
        title: "Criterion II Lottery Draw Machine",
        desc: "A Unique Visual with Dual Mixing Arms Moving in Opposite Directions",
        imageLink:
            "https://smartplay.com/wp-content/uploads/2017/07/criterion-lottery-ireland.jpg",
    },
];

export default function App() {
    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/globe.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover -translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Bingo Systems" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1100px] pt-20 pb-12 text-lg px-4 lg:px-0">
                    <div className="space-y-10">
                        <h2 className="text-3xl font-semibold text-blue-950 text-center">
                            Highest quality parts and construction to meet the
                            demands of continuous operation
                        </h2>
                        <p className="text-lg text-center">
                            Bingo and keno games are popular throughout the
                            world. Both game styles require all balls to be
                            displayed one after the other. Smartplay has several
                            machines designed specifically for bingo and keno.
                            Some of our traditional lotto-style machines have
                            been adapted to bingo and keno as well. Machines can
                            accommodate standard 75 and 90-ball bingo and we can
                            create custom machines to meet your requirements.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1100px] gap-x-6">
                    <ul className="space-y-6 bg-gray-200 p-4 text-blue-950 font-semibold col-span-1">
                        {checks.map((check, index) => (
                            <li key={index} className="flex space-x-2 text-lg">
                                <p className="text-xl">•</p>
                                <p>{check}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="col-span-1 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4 bg-white p-5 rounded shadow">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2017/07/super-bingo-machine.jpg"
                            alt="Online Lottery"
                            className="rounded shadow h-[200px] lg:h-[360px] w-full lg:w-auto"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-950 text-center lg:text-left">
                                SuperBingo
                            </h2>
                            <p className="py-5 text-center lg:text-left">
                                This bingo machine is designed for
                                high-frequency use, drawing balls every few
                                minutes.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <ArrowButton text="Learn More" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12">
                <h2 className="text-2xl font-semibold text-blue-950 text-center mb-12">
                    Standard Bingo and Keno Models Used Around the World
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1100px] gap-x-6 gap-y-8">
                    {data.map((item, index) => (
                        <MachineLink
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            imageLink={item.imageLink}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

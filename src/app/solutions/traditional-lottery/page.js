"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import VimeoEmbed from "@/app/components/VimeoEmbed";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import { Title } from "@/app/components/products/Title";

const slides = [
    {
        img: "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/06/criterion-lottery-machine-ca-lotery.jpg",
        title: "Design and Fabrication of Traditional Mechanical Lottery Drawing Machines",
        desc: "With over 2000 lottery machines in operation worldwide, Smartplay is a leader in designing and manufacturing traditional lottery equipment.",
    },
    {
        img: "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/07/solution-system.jpg",
        title: "Automate Your Traditional Lottery Draws",
        desc: "The Smartplay Solution System gives you the power and flexibility to automate your lottery draws and generate automated reports.",
    },
    {
        img: "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/07/digital-screengrab3.gif?time=1717187795",
        title: "Digital Draw Systems for Your Primary or Mid-Day Lottery Games",
        desc: "The Origin is a combined hardware/software solution to maximize security will providing the speed and flexibility to use your digital draws as a powerful marketing tool.",
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

            <Title text="Traditional Lottery" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1100px] pt-20 pb-12 text-lg grid">
                    <div className="space-y-10">
                        <h2 className="text-3xl font-semibold text-blue-950 text-center">
                            Since 1993, Smartplay has delivered traditional and
                            digital draw systems to over 400 lotteries in 114
                            countries.
                        </h2>
                        <p className="text-lg text-center px-10">
                            Many of our lottery customers use both mechanical
                            and digital systems for their games. Our focus
                            continues to be delivering the highest quality and
                            innovation to the traditional lottery sector.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-3 mx-auto max-w-[1100px] gap-x-6">
                    {slides.map(({ img, title, desc }, index) => (
                        <div key={index} className=" bg-white rounded shadow">
                            <div className="w-full h-64 overflow-hidden">
                                <img
                                    src={img}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-blue-950 my-4">
                                    {title}
                                </h2>
                                <p className="text-lg">{desc}</p>
                                <p className="text-lg mt-2 underline text-blue-950 font-semibold">
                                    Learn More
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

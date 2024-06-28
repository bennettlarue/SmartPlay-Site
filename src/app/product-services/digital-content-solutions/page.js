"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";

const checks = [
    "Show intros and title animation",
    "Draw sequences",
    "Screen overlay animations",
    "Explainer videos",
    "Training videos",
    "Website animation",
    "Typography animation",
    "Green screen background replacement",
    "Motion graphics",
];

export default function App() {
    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg"
                    alt="Custom Promotions and Events"
                    className="w-full h-full object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Digital Content Solutions" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1100px] py-12 text-lg px-6 md:px-8 lg:px-0">
                    <div className="space-y-6">
                        <h2 className="lg:text-3xl text-xl font-semibold text-blue-950 text-center">
                            Make your digital content a reality. Take your
                            digital draw to the next level with life-like
                            computer-generated content.
                        </h2>
                        <div className="space-y-4">
                            <p className="text-lg md:px-10">
                                Your objective is to bring in more players,
                                correct? Why not deliver content that attracts
                                and engages more players? Computer-generated
                                content can differentiate your draw and provide
                                new ways to stand out from competitors.
                            </p>
                            <p className="text-lg md:px-10">
                                Of course, with computer animation, the sky’s
                                the limit on what can be done. Your lottery draw
                                sequence could be completely realistic,
                                simulating real machines. Or, you could add a
                                touch of flare, combining a realistic look with
                                unique design, textures and highlights that
                                deliver something entirely original. Or simply
                                add an intro to your existing traditional draw.
                            </p>
                        </div>
                        <div className="lg:flex lg:gap-x-12 space-y-6 items-center pt-5">
                            <div className="lg:w-[50%]">
                                <YouTubeEmbed videoId="5cJjkCRER-E" />
                            </div>
                            <p className="lg:w-[50%] italic">
                                This short demo of our fictional “GoLotto” is
                                created from a single CGI sequence, cut into
                                thousands of images that are then loaded into
                                the Smartplay Origin Digital Draw System. The
                                Origin then randomly selects the numbers —
                                providing an entirely realistic and seamless
                                digital draw experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="mx-auto max-w-[1000px] items-center px-6 md:px-8 lg:px-0 space-y-10">
                    <h2 className="text-2xl font-semibold text-blue-950">
                        Call on the Smartplay creative team to deliver:
                    </h2>
                    <ul className="bg-gray-200 font-medium grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6">
                        {checks.map((check, index) => (
                            <li key={index} className="flex space-x-2 text-xl">
                                <p className="text-xl">•</p>
                                <p>{check}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-blue-950 py-12">
                <div className="lg:flex lg:space-y-0 space-y-5 mx-auto max-w-[1100px] gap-x-6 items-center px-4 md:px-8 lg:px-0 w-fit">
                    <div className="text-xl font-semibold text-white max-w-[800px]">
                        We can work with your requirements to deliver content in
                        a format that works with any system. Contact Smartplay
                        to discuss your digital animation project.
                    </div>
                    <ArrowButton text="Contact Us" />
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="mx-auto max-w-[1200px] items-center px-4 md:px-8 lg:px-0 gap-x-12 lg:space-y-0 space-y-8 lg:flex">
                    <div className="lg:w-[50%]">
                        <YouTubeEmbed videoId="5cJjkCRER-E" />
                    </div>
                    <div className="lg:w-[50%]">
                        <YouTubeEmbed videoId="5cJjkCRER-E" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

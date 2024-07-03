"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";
import { motion } from "framer-motion";

const testimonials = [
    {
        header: "Loto-Quebec",
        body: "We started working with Smartplay almost 20 years ago and we have found we can always count on their high-quality service and reliable products. When I describe what I want, they come through and their designs are perfect! I’ve tried others. For me, Smartplay is just better!",
    },
    {
        header: "California Lottery",
        body: "The California Lottery has worked with Smartplay for 17 years and we currently conduct about 180 drawings a month using their equipment. I’m very comfortable with the quality and reliability of their products. They have performed flawlessly. Smartplay is large enough to meet any of our needs, yet small enough to customize any equipment and provide personalized customer service, and that service is amazing.\n\nTheir capable staff meets all our needs, on time. In my experience, Smartplay international is the world leader in drawing equipment.",
    },
    {
        header: "Totalizer Sportowy, Warsaw, Poland",
        body: "Totalizer Sportowy has been working in cooperation with Smartplay International for many years. They have provided us with reliable, high-quality drawing equipment that meets all our needs. We know that we can always count on their professional service and great teamwork every time.",
    },
    {
        header: "Supreme Ventures, Jamaica",
        body: "Here in Jamaica, we are currently using about 25 draw machines from Smartplay. We do five draws every day so we need machines that will work the first time, every time. I couldn’t ask for more reliable equipment. We seldom have a problem. When you have something that works and looks great, why change it?",
    },
];

const images = [
    "https://smartplay.com/wp-content/uploads/2017/07/ballmachine-382x239.png",
    "https://smartplay.com/wp-content/uploads/2020/02/rocknwheel1.jpg?v=1616768386",
    "https://smartplay.com/wp-content/uploads/2020/02/michigan-lottery.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-vault-ireland.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-drawing-drum.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-tic-tac-toe1.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-prize-vault2.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-ny-lottery-display.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-ireland.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-game-cube.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-deleware-lottery.jpg",
    "https://smartplay.com/wp-content/uploads/2017/07/custom-games-coffre-fort.jpg",
];

const mapSrc =
    "https://www.google.com/maps/d/embed?mid=1ltIrr109929Vyd7sjYpzbzJu4IM&ehbc=2E312F";

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

            <Title text="Our Clients" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1100px] pt-12 pb-12 text-lg grid px-6 space-y-10">
                    <h2 className="text-2xl font-semibold text-blue-950 text-center">
                        Smartplay serves over 450+ lottery, gaming and
                        promotional organizations in 126 countries. Please
                        contact us for a list of references.
                    </h2>
                    <div className="">
                        <iframe
                            className="w-full h-[400px] border-2 rounded-lg shadow"
                            src={mapSrc}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="mx-auto max-w-[1100px] py-12 text-lg grid px-6 space-y-10">
                    {
                        <div className="gap-10 lg:space-y-0 space-y-10 grid lg:grid-cols-2 grid-cols-1">
                            {testimonials.map((t, i) => (
                                <div key={i} className="">
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-semibold text-blue-950">
                                            {t.header}
                                        </h2>
                                        <p className="">
                                            <span className="text-blue-950 text-2xl font-bold">
                                                "
                                            </span>
                                            {t.body}
                                            <span className="text-blue-950 text-xl font-bold">
                                                "
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>

            <div className="bg-white py-12">
                <div className="mx-auto lg:max-w-[1000px] max-w-[700px] py-5 text-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + (index % 3) * 0.1,
                            }}
                        >
                            <img
                                src={image}
                                alt="Customer Service"
                                className="w-full h-[300px] object-cover rounded shadow"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

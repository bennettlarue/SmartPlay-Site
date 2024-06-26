"use client";

import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Title } from "@/app/components/products/Title";
import { ArrowButton } from "@/app/components/ArrowButton";

const lotteryScaleAttribs = [
    ["Size (W x D x H)", "7.5 x 10.875 x 5.875"],
    ["Weighing Mode", "grams"],
    ["Interface", "Bidirectional RS-232"],
    ["Display", "0.57in LED"],
    ["Capacity", "200g"],
    ["Readability", ".001g"],
    ["Linearity", " ± .002g"],
    ["Repeatability", "± .001g"],
    ["Pan Size", "4in dia."],
];

export default function App() {
    return (
        <div>
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/09/b.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Equipment Calibration" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1100px] py-20 text-lg grid grid-cols-1 md:grid-cols-3 gap-x-5 px-4">
                    <div className="col-span-2">
                        <h2 className="text-3xl font-bold text-blue-950">
                            Lottery Ball Scale
                        </h2>
                        <p className="py-5">
                            All precision balances employ sensing technology –
                            variable capacitance. This technology requires few
                            parts allowing the laboratory balances to maintain a
                            low profile and remain structurally streamlined both
                            inside and out.
                        </p>
                        <div className="flex items-center">
                            <ul className="grid grid-cols-2 shadow border rounded p-5 gap-x-5">
                                {lotteryScaleAttribs.map((attr, index) => (
                                    <li
                                        key={index}
                                        className="flex items-baseline space-x-2 py-2"
                                    >
                                        <p className="font-bold">
                                            {attr[0] + ":"}
                                        </p>
                                        <p className="">{attr[1]}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2017/07/lottery-ball-scale-238x300.png"
                            alt="Ball"
                            className="rounded shadow"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="mx-auto max-w-[1100px] py-20 text-lg grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 px-4">
                    <div>
                        <img
                            src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/07/DBVS-lottery-ball-weight-validation2.jpg"
                            alt="Ball"
                            className="rounded shadow p-2 bg-white"
                        />
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h2 className="text-3xl font-bold text-blue-950">
                            Drawing Ball Validation System
                        </h2>
                        <p className="py-5">
                            The Drawing Ball Validation System (DBVS) is
                            designed to allow Lottery Staff and Auditors to
                            easily verify a set of balls against a recorded
                            weight set as valid. The system is designed to work
                            with RFID enabled SmartBalls or traditional Non-RFID
                            drawing balls. When used with RFID-enabled
                            SmartBalls, the DBVS automatically identifies the
                            ball number and stored security code. The computer
                            controlled scale accurately records the weights of
                            the balls and reduces the opportunity of human
                            error.
                        </p>
                        <div className="flex items-center">
                            <ArrowButton text="Learn More" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-[900px] py-20 text-lg grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 px-4">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-950">
                            Lottery Ball Micrometer
                        </h2>
                        <p className="py-5">
                            The digital micrometer will measure to .01mm. Used
                            for accurate calibration of Drawing Balls.
                        </p>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <img
                            src="https://smartplay.com/wp-content/uploads/2017/07/digital-lottery-ball-micrometer1-136x300.jpg"
                            alt="Ball"
                            className="rounded shadow"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="mx-auto max-w-[1100px] py-20 text-lg grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 px-4">
                    <div>
                        <img
                            src="https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2022/07/Pass-thru-small.jpg"
                            alt="Ball"
                            className="rounded shadow"
                        />
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h2 className="text-3xl font-bold text-blue-950">
                            Lottery Ball Pass-through Gauge
                        </h2>
                        <p className="py-5">
                            The Pass-through Gauge is a device that allows the
                            user to confirm the acceptable size of a drawing
                            ball. The two openings in the gauge are sized to the
                            minimum and maximum acceptable tolerances. The ball
                            must pass through the larger opening and not pass
                            through the smaller opening to be acceptable.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

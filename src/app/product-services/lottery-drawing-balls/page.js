"use client";

import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Carousel } from "@material-tailwind/react";
import { Title } from "@/app/components/products/Title";

export default function App() {
    return (
        <div>
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/09/ball.jpg"
                    alt="Customer Service"
                    className="w-full h-screen object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>{" "}
                {/* Overlay */}
            </div>

            <Title text="Lottery Drawing Balls" />
            <div className=" bg-white">
                <div className="mx-auto max-w-[1200px] py-12 text-lg grid grid-cols-1 md:grid-cols-2 items-center gap-x-5 px-6">
                    <div className="mb-8 md:mb-0 space-y-6">
                        <h2 className="lg:text-3xl text-xl font-bold text-blue-950">
                            Custom table-tennis-style and RFID-enabled Smartball
                            lottery balls.
                        </h2>
                        <p>
                            Our production consists of a 24-step process
                            including stringent quality control inspections. At
                            the time of manufacture, the balls are placed in
                            matched sets with extremely close tolerances of
                            weight and size. The ball sets are packed in
                            foam-lined, lockable plastic cases. Smartplay offers
                            many different style fonts for the numbers as well
                            as custom images.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://smartplay.com/wp-content/uploads/2020/11/blue-foam-lotto-ball.jpg"
                            alt="Ball"
                            className="rounded shadow"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="mx-auto max-w-[1200px] pt-12 text-lg grid grid-cols-1 md:grid-cols-2 gap-x-8 px-6">
                    <div className="mb-8 md:mb-0">
                        <Carousel
                            className="rounded shadow max-h-[400px]"
                            loop={true}
                            autoplay={true}
                        >
                            <img
                                src="https://smartplay.com/wp-content/uploads/2020/11/foam-lottery-balls-case.jpg"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2020/11/foam-smartballs-lotto-balls.jpg"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2020/11/Foam-multicolor-1.jpg"
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2020/11/foam-smartballs-lotto-balls-2.jpg"
                                alt="image 4"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>
                    </div>
                    <div>
                        <h2 className="lg:text-3xl text-xl font-bold text-blue-950">
                            Foam Lottery Balls & Smartballs
                        </h2>
                        <p className="pt-6">
                            Smartplay’s foam lottery balls and Smartballs are
                            made of a closed cell polymer. These lottery balls
                            are solid, tamper proof and offer the same security
                            as solid rubber lottery balls. They are lightweight
                            and extremely quiet in operation. These balls can be
                            used with our without ball recognition technology.
                            If ball value recognition is required, a RFID tag is
                            placed inside the ball so the ball number can be
                            identified electronically by the Smartplay
                            SmartController, an optional feature for any
                            mechanical ball draw machine. At the time of
                            manufacture, the balls are placed in matched sets
                            with extremely close tolerances of weight and size.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-[1200px] py-12 text-lg gap-6 px-4 ">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <li className="flex items-center text-lg border rounded shadow p-4">
                            <p>
                                <span className="font-bold text-blue-950">
                                    ✔ Solid construction that provides the
                                    highest level of security.{" "}
                                </span>
                                The solid nature of the Smartball eliminates any
                                possibility of weight tampering
                            </p>
                        </li>
                        <li className="flex items-center text-lg border rounded shadow p-4">
                            <p>
                                <span className="font-bold text-blue-950">
                                    ✔ Up to 12 numbered stickers{" "}
                                </span>{" "}
                                equally spaced on the surface of the ball
                                ensuring good visibility of the numbers when
                                viewed from any angle
                            </p>
                        </li>
                        <li className="flex items-center text-lg border rounded shadow p-4">
                            <p>
                                <span className="font-bold text-blue-950">
                                    ✔ Durable and wear-resistant.{" "}
                                </span>{" "}
                                Numbers are printed inside the sticker
                            </p>
                        </li>
                        <li className="flex items-center text-lg border rounded shadow p-4">
                            <p>
                                <span className="font-bold text-blue-950">
                                    ✔ RFID enabled
                                </span>{" "}
                                for SmartController integration
                            </p>
                        </li>
                        <li className="flex items-center text-lg border rounded shadow p-4">
                            <p>
                                <span className="font-bold text-blue-950">
                                    ✔ Available yellow, green, red, white, light
                                    blue and dark blue.
                                </span>{" "}
                                Balls can be manufactured with custom colors
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-[1200px] pt-12 text-lg grid grid-cols-1 md:grid-cols-2 gap-x-8 px-4">
                    <div>
                        <h2 className="lg:text-3xl text-xl font-bold text-blue-950">
                            Table-Tennis Style Lottery Balls
                        </h2>
                        <p className="pt-6">
                            Smartplay Drawing Balls are the highest quality
                            table tennis balls available. The production
                            consists of a 24-step process including stringent
                            quality control inspections. At the time of
                            manufacture, the balls are placed in matched sets
                            with extremely close tolerances of weight and size.
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0 lg:mt-0 mt-6">
                        <Carousel
                            className="rounded shadow max-h-[400px]"
                            loop={true}
                            autoplay={true}
                        >
                            <img
                                src="https://smartplay.com/wp-content/uploads/2020/11/white-lottery-balls1.jpg"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2017/07/tennis-ball-lottery-balls.jpg"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2020/11/color-digital-balls-plondo.jpg"
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2020/11/custom-print-lotto-balls-cards.jpg"
                                alt="image 4"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2020/11/custom-print-lotto-balls-flags.jpg"
                                alt="image 5"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://smartplay.com/wp-content/uploads/2020/11/table-tennis-lottery-balls.jpg"
                                alt="image 6"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>
                    </div>
                </div>
                <div className="mx-auto max-w-[1200px] py-12 text-lg px-4">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <li className="flex items-center text-lg border rounded shadow p-4">
                            <p>
                                <span className="font-bold text-blue-950">
                                    ✔ Available in 38mm and 40mm sizes{" "}
                                </span>
                            </p>
                        </li>
                        <li className="flex items-center text-lg border rounded shadow p-4">
                            <p>
                                <span className="font-bold text-blue-950">
                                    ✔ Many different style fonts{" "}
                                </span>{" "}
                                fonts for the numbers as well as custom images
                            </p>
                        </li>
                        <li className="flex items-center text-lg border rounded shadow p-4">
                            <p>
                                <span className="font-bold text-blue-950">
                                    ✔ Balls are screened through close
                                    examination{" "}
                                </span>{" "}
                                to ensure surface consistency
                            </p>
                        </li>
                        <li className="flex items-center text-lg border rounded shadow p-4">
                            <p>
                                <span className="font-bold text-blue-950">
                                    ✔ Balls can be digitally printed with your
                                    artwork
                                </span>{" "}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" bg-gray-200">
                <div className="mx-auto max-w-[1200px] py-12 text-lg grid grid-cols-1 md:grid-cols-2 items-center gap-x-5 px-4">
                    <img
                        src="https://smartplay.com/wp-content/uploads/2020/11/lottery-beads-smartplay.jpg"
                        alt="Ball"
                        className="rounded shadow lg:h-[400px] h-[350px] w-full object-cover"
                    />
                    <div className="mb-8 md:mb-0 lg:mt-0 mt-6">
                        <h2 className="lg:text-3xl text-xl font-bold text-blue-950">
                            Acrylic Lottery Beads
                        </h2>
                        <p className="pt-6">
                            In many countries lottery bead machines are still in
                            use. Beads are typically engraved with numbers then
                            inked to create more contrast so they number can be
                            easily identified. Smartplay provides custom lottery
                            beads in various colors and sizes.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

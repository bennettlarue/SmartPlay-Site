"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import MachineLink from "@/app/components/home/MachineLink";
import { Title } from "@/app/components/products/Title";
import ProjectDetailForm from "../components/contact/ProjectDetailForm";

export default function Contact() {
    const mapSrc =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.431378873136!2d-74.92462132449134!3d40.04347317827329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c14b7f48dc48a3%3A0x38d5c1bcd15ed15d!2s1550%20Bridgeboro%20Rd%2C%20Beverly%2C%20NJ%2008010!5e0!3m2!1sen!2sus!4v1719951099899!5m2!1sen!2sus";
    const contactInfo = [
        {
            img: "/images/icons/call.png",
            header: "Phone",
            body: "1 (609) 880-1860",
        },
        {
            img: "/images/icons/fax-machine.png",
            header: "Fax",
            body: "1 (609) 880-1865",
        },
        {
            img: "/images/icons/email.png",
            header: "Email",
            body: "info@smartplay.com",
        },
        {
            img: "/images/icons/location.png",
            header: "Address",
            body: "1550 Bridgeboro Road\nEdgewater Park, NJ 08010",
        },
    ];

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

            <Title text="Contact Us" />
            <div className="bg-white">
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:space-x-5 gap-y-12 gap-x-10 lg:px-10 pt-16 lg:pb-16 mx-auto max-w-[1300px]">
                    <div className=" text-lg lg:px-0 space-y-10 px-8">
                        <h2 className="lg:text-3xl text-xl font-semibold text-blue-950">
                            Need Support? Visit our{" "}
                            <span className="underline text-blue-900">
                                Support Center
                            </span>
                            .
                        </h2>
                        <div className="space-y-6">
                            {contactInfo.map((info) => (
                                <div
                                    className="space-y-2 border-b pb-4 border-b-gray-300"
                                    key={info.header}
                                >
                                    <div className="flex space-x-4 items-center">
                                        <img
                                            src={info.img}
                                            alt={info.header}
                                            className="w-5 h-5"
                                        />
                                        <h2 className="text-xl font-semibold text-blue-950">
                                            {info.header}
                                        </h2>
                                    </div>
                                    <p className="text-lg">{info.body}</p>
                                </div>
                            ))}
                            <p className="text-md">
                                Smartplay is located 10 minutes outside
                                Philadelphia and about 90 minutes from
                                Manhattan. We are conveniently located between
                                two major airports – Philadelphia International
                                and Newark Liberty International.
                            </p>

                            <div style={{ width: "100%", height: "400px" }}>
                                <iframe
                                    src={mapSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 bg-gray-100 py-10">
                        <div className="px-8">
                            <h2 className="text-xl font-semibold text-center mb-10">
                                If you need pricing and details, please provide
                                your information below.{" "}
                                <span className="text-orange-500">
                                    Thank you for contacting Smartplay.
                                </span>
                            </h2>
                            <ProjectDetailForm />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

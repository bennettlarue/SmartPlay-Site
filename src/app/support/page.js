"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";

const ITEM_STYLE = "font-semibold text-blue-950 w-fit";

export default function Support() {
    return (
        <main>
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/globe.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover -translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Support" />
            <div className="bg-white">
                <div className="mx-auto lg:max-w-[1000px] max-w-[700px] py-12 text-lg px-6 lg:px-0">
                    <h2 className="lg:text-3xl text-xl font-semibold text-blue-950 text-center">
                        Worldwide 24/7 Support, On-Site Installation, Training,
                        And Maintenance
                    </h2>

                    <div className=" pt-10 text-xl space-y-6">
                        <p className="font-semibold">
                            Smartplay is committed to support and service after
                            the sale. With technicians based in both the United
                            States, Europe and SE Asia, we are available 24/7 to
                            keep your lottery operating properly.
                        </p>
                        <p>
                            All machines come with a free warranty for up to one
                            year, depending on the frequency of your draws. For
                            example, machines being used once per week have a
                            longer warranty than those being used continuously,
                            drawing every 10 minutes.
                        </p>
                    </div>
                    <div className="flex justify-center mt-7">
                        <a
                            href="https://smartplaytechservices.com/index.php"
                            target="_blank"
                            className="bg-blue-950 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded shadow"
                        >
                            Submit a Support Ticket
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200">
                <div className="mx-auto lg:max-w-[1000px] max-w-[700px] py-12 text-lg px-6 lg:px-0 space-y-8">
                    <p className="font-semibold text-xl">
                        We offer various support and maintenance packages to fit
                        your objectives and budget, which may include:
                    </p>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <li className={ITEM_STYLE}>24/7 phone support</li>
                        <li className={ITEM_STYLE}>
                            On-site maintenance packages
                        </li>
                        <li className={ITEM_STYLE}>
                            Discounts on emergency visits
                        </li>
                        <li className={ITEM_STYLE}>
                            Free or discounted replacement parts
                        </li>
                        <li className={ITEM_STYLE}>Free spare parts kits</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    );
}

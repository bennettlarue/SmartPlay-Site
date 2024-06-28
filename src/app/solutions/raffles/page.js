"use client";

import { ArrowButton } from "@/app/components/ArrowButton";
import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import { Title } from "@/app/components/products/Title";

const checks = [
    "High-quality, machines designed for continuous play",
    "Extended maintenance plans for years of hassle-free operation",
    "SQL ConnectServer automation software to remotely manage the entire draw process",
    "DrawStudio enclosures to create a secure, self-contained drawing environment",
];

export default function App() {
    return (
        <div className="App">
            <Nav />
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src="https://hxl.550.myftpupload.com/wp-content/uploads/2021/10/cropped-view-of-happy-man-and-woman-holding-hands-while-holding-lottery-tickets.jpg"
                    alt="Customer Service"
                    className="w-full h-full object-cover translate-y-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            </div>

            <Title text="Raffles" />
            <div className="bg-white">
                <div className="mx-auto max-w-[1000px] py-12 text-lg px-4 md:px-8 lg:px-0">
                    <div className="space-y-10 max-[700px]:">
                        <h2 className="lg:text-3xl text-xl font-semibold text-blue-950 text-center">
                            Raffles are very popular worldwide for fundraising
                            as well as offering great prizes. Smartplay offers
                            several options for selecting raffle winners
                        </h2>

                        <p className="text-lg px-2 md:px-10">
                            In some countries, raffles can be established to
                            offer prizes such as cars, motorbikes and even
                            houses. In the United States, raffles are frequently
                            used to as an add on activity to raise funds at
                            charity events. Raffles work well for fundraising
                            because they are easy to implement. Picking winners
                            could be as easy as picking selecting a ticket out
                            of a giant bin!
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1000px] gap-x-6 items-center px-6 md:px-8 lg:px-0">
                    <div className="space-y-6 pb-10">
                        <p>
                            Of course if you want more drama and excitement, you
                            may consider using a lottery-style ball machine or
                            if the total number of entries is quite large, a
                            digital drawing system. A number of Smartplay
                            clients implement raffles using the Origin™ Digital
                            Draw System. With Origin, you upload a spreadsheet
                            of participants and in seconds generate a list of
                            one to hundreds of winners at multiple prize levels.
                        </p>
                        <p>
                            Many UK-based raffles utilize large bins with
                            hundreds or thousands of balls. This approach can be
                            challenging, with presenting all of the balls to the
                            players so they know all balls are present.
                            Displaying then depositing all balls into the bin
                            prior to each draw takes. And over time, with so
                            much handling, balls can change in weight, which can
                            possibly skew the outcome.
                        </p>
                    </div>

                    <YouTubeEmbed videoId="3nsDdwWmLqg" />
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1100px] gap-x-6 items-center px-6 md:px-8 lg:px-0">
                    <img
                        src="https://smartplay.com/wp-content/uploads/2020/11/blizzard-entertainment-lottery-draw.jpg"
                        alt="Online Lottery"
                        className="rounded shadow mb-4 lg:mb-0 lg:px-0"
                    />
                    <div className="space-y-6">
                        <p>
                            A more manageable approach with a traditional ball
                            machine is using a multi-chamber machine whereby
                            10’s, 100’s, 1000’s, 10,000’s is represented each by
                            one chamber. Or one chamber could include the
                            alphabet (A-Z) and the other numbers (0-9). You
                            could also introduce color to add some variety. The
                            video below shows running a raffle with 2,000
                            entries, with only balls “0” and “1” in the first
                            chamber, providing combinations 0000 to 1999 — a
                            total of 2,000 entries
                        </p>
                        <p>
                            If your budget is a bit tighter, you could opt for a
                            single chamber machine and simply take turns drawing
                            the 10’s, 100’s and so on. You could use a marker or
                            magnetic board to post the results, possibly
                            starting from the left, drawing the largest number
                            first.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[1100px] gap-x-6 items-center px-4 md:px-8 lg:px-0">
                    <div className="space-y-6">
                        <h2 className="lg:text-3xl text-xl font-semibold text-blue-950">
                            Custom Designed Raffle Machines
                        </h2>
                        <p>
                            If your budget allows, you might consider a
                            custom-designed raffle machine — one that can
                            display balls, then automatically drop them in the
                            raffle bin. We’ve designed and build hundreds of
                            custom machines. Here’s one example of a custom
                            raffle bin used to select the lucky winners for the
                            New Jersey lottery’s annual event to recognize some
                            of their most active players.
                        </p>
                    </div>
                    <img
                        src="https://smartplay.com/wp-content/uploads/2017/06/nj-million-dollar-replay-drawing-drum.jpg"
                        alt="Online Lottery"
                        className="rounded shadow mb-4 lg:mb-0 lg:mt-0 mt-5"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}

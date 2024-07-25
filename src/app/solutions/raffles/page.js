"use client";

import { Footer } from "@/app/components/Footer";
import { ImageCard } from "@/app/components/ImageCard";
import { Nav } from "@/app/components/Nav";
import { SectionContent } from "@/app/components/SectionContent";
import { SectionHeader } from "@/app/components/SectionHeader";
import { VideoCard } from "@/app/components/VideoCard";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import { Title } from "@/app/components/products/Title";

export default function Raffles() {
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
                <div className="contentSection">
                    <SectionHeader
                        content="Raffles are very popular worldwide for fundraising
                            as well as offering great prizes. Smartplay offers
                            several options for selecting raffle winners."
                    />

                    <SectionContent content="In some countries, raffles can be established to offer prizes such as cars, motorbikes and even houses. In the United States, raffles are frequently used to as an add on activity to raise funds at charity events. Raffles work well for fundraising because they are easy to implement. Picking winners could be as easy as picking selecting a ticket out of a giant bin!" />
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="contentSection">
                    <VideoCard
                        video="https://www.youtube.com/embed/3nsDdwWmLqg"
                        desc="Of course if you want more drama and excitement, you
                            may consider using a lottery-style ball machine or
                            if the total number of entries is quite large, a
                            digital drawing system. A number of Smartplay
                            clients implement raffles using the Origin™ Digital
                            Draw System."
                    />
                    <SectionContent
                        content="With Origin, you upload a spreadsheet
                            of participants and in seconds generate a list of
                            one to hundreds of winners at multiple prize levels."
                    />
                    <SectionContent
                        content="Many UK-based raffles utilize large bins with
                            hundreds or thousands of balls. This approach can be
                            challenging, with presenting all of the balls to the
                            players so they know all balls are present.
                            Displaying then depositing all balls into the bin
                            prior to each draw takes. And over time, with so
                            much handling, balls can change in weight, which can
                            possibly skew the outcome."
                    />
                </div>
            </div>
            <div className="bg-white">
                <div className="contentSection">
                    <ImageCard
                        img="/images/solutions/blizzard.jpg"
                        desc={
                            "A more manageable approach with a traditional ball machine is using a multi-chamber machine whereby 10’s, 100’s, 1000’s, 10,000’s is represented each by one chamber. Or one chamber could include the alphabet (A-Z) and the other numbers (0-9)."
                        }
                    />

                    <SectionContent
                        content="You
                            could also introduce color to add some variety. The
                            video below shows running a raffle with 2,000
                            entries, with only balls “0” and “1” in the first
                            chamber, providing combinations 0000 to 1999 — a
                            total of 2,000 entries."
                    />
                    <SectionContent
                        content="If your budget is a bit tighter, you could opt for a
                            single chamber machine and simply take turns drawing
                            the 10’s, 100’s and so on. You could use a marker or
                            magnetic board to post the results, possibly
                            starting from the left, drawing the largest number
                            first."
                    />
                </div>
            </div>

            <div className="bg-gray-200">
                <div className="contentSection">
                    <ImageCard
                        img="/images/solutions/nj-replay.jpg"
                        title="Custom Designed Raffle Machines"
                        desc=" If your budget allows, you might consider a
                            custom-designed raffle machine — one that can
                            display balls, then automatically drop them in the
                            raffle bin. We’ve designed and build hundreds of
                            custom machines. Here’s one example of a custom
                            raffle bin used to select the lucky winners for the
                            New Jersey lottery’s annual event to recognize some
                            of their most active players."
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}

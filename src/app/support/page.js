"use client";

import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Title } from "@/app/components/products/Title";
import { SectionHeader } from "../components/SectionHeader";
import { SectionContent } from "../components/SectionContent";
import { PageBackground } from "../components/PageBackground";
import { ArrowButton } from "../components/ArrowButton";
import { BulletList } from "../components/BulletList";

const bullets = [
    "24/7 Phone Support",
    "On-Site Maintenance Packages",
    "Discounts on Emergency Visits",
    "Free or Discounted Replacement Parts",
    "Free Spare Parts Kits",
];

const ITEM_STYLE = "font-semibold text-blue-950 w-fit";

export default function Support() {
    return (
        <main>
            <PageBackground image="/images/backgrounds/why-smartplay.jpg" />
            <Nav />
            <Title text="Support" />
            <div className="firstSection">
                <div className="contentSection">
                    <SectionHeader
                        content="Worldwide 24/7 Support, On-Site Installation, Training,
                        And Maintenance"
                    />
                    <SectionContent
                        content={
                            "Smartplay is committed to support and service after the sale. With technicians based in both the United States, Europe and SE Asia, we are available 24/7 to keep your lottery operating properly."
                        }
                    />
                    <SectionContent
                        content={
                            "All machines come with a free warranty for up to one year, depending on the frequency of your draws. For example, machines being used once per week have a longer warranty than those being used continuously, drawing every 10 minutes."
                        }
                    />
                    <ArrowButton
                        text="Submit a Support Ticket"
                        href="https://smartplaytechservices.com/index.php"
                    />
                </div>
            </div>
            <div className="secondarySection bottomSection">
                <div className="contentSection">
                    <SectionHeader
                        content="We offer various support and maintenance packages to fit
                        your objectives and budget, which may include:"
                    />
                    <BulletList bullets={bullets} cols={2} />
                </div>
            </div>

            <Footer />
        </main>
    );
}

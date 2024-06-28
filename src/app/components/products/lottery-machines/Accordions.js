import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

export function Accordions() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                    className="font-semibold text-xl border-b-gray-400 border-b-2"
                    onClick={() => handleOpen(1)}
                >
                    Less Downtime. Less Risk. Higher ROI.
                </AccordionHeader>
                <AccordionBody className="text-lg text-black font-normal border rounded rounded-t-none">
                    <p className="p-2 text-left font-medium">
                        Our clients experience less downtime, longer equipment
                        life and lower repair and maintenance costs. After 1
                        million draw events and 3,000 machines manufactured, we
                        have had only 79 emergency visits outside of regularly
                        scheduled maintenance.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                    className="font-semibold text-xl border-b-gray-400 border-b-2"
                    onClick={() => handleOpen(2)}
                >
                    Worldwide Customer Support
                </AccordionHeader>
                <AccordionBody className="text-lg text-black font-normal">
                    <p className="p-2 text-left font-medium">
                        Our clients experience less downtime, longer equipment
                        life and lower repair and maintenance costs. After 1
                        million draw events and 3,000 machines manufactured, we
                        have had only 79 emergency visits outside of regularly
                        scheduled maintenance.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader
                    className="font-semibold text-xl border-b-gray-400 border-b-2"
                    onClick={() => handleOpen(3)}
                >
                    Extended Warranty Packages
                </AccordionHeader>
                <AccordionBody className="text-lg text-black font-normal">
                    <p className="p-2 text-left font-medium">
                        Our clients experience less downtime, longer equipment
                        life and lower repair and maintenance costs. After 1
                        million draw events and 3,000 machines manufactured, we
                        have had only 79 emergency visits outside of regularly
                        scheduled maintenance.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader
                    className="font-semibold text-xl border-b-gray-400 border-b-2"
                    onClick={() => handleOpen(4)}
                >
                    Endless Customization
                </AccordionHeader>
                <AccordionBody className="text-lg text-black font-normal border">
                    <p className="p-2 text-left font-medium">
                        Our clients experience less downtime, longer equipment
                        life and lower repair and maintenance costs. After 1
                        million draw events and 3,000 machines manufactured, we
                        have had only 79 emergency visits outside of regularly
                        scheduled maintenance.
                    </p>
                </AccordionBody>
            </Accordion>
        </>
    );
}

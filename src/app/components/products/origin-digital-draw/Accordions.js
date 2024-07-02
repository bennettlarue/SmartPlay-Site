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
                    className="font-semibold text-2xl border-b-gray-400 border-b-2"
                    onClick={() => handleOpen(1)}
                >
                    Origin Portal
                </AccordionHeader>
                <AccordionBody className="text-lg text-black font-normal ">
                    <div className="lg:p-5 md:p-3 text-left">
                        <h2 className="text-xl font-semibold">
                            The Origin Portal™ Makes it Easy to Distribute
                            Static or Animated Draw Results to All Media
                            Channels within Seconds of the Official Drawing.
                        </h2>
                        <ul className="py-2 space-y-2 list-disc list-inside px-2">
                            <li>
                                Standard media partners; television, radio, and
                                cable Print Media (PDF or .jpeg)
                            </li>
                            <li>
                                Social Media: YouTube, Vimeo…etc. (H264 direct
                                upload)
                            </li>
                            <li>
                                Lottery’s official website (Link to YouTube,
                                FTP/FTPS or direct video upload) Digital signage
                            </li>
                        </ul>
                        <h3 className="font-semibold">
                            Origin Portal Operation
                        </h3>
                        <div className="py-2 px-2">
                            <p>
                                Once a drawing has been and the Draw Report has
                                been printed, the drawing is exported on to a
                                flash thumb drive by selecting the icon on the
                                User control screen. This action will export all
                                files associated with that draw session
                                including the Media Portal™ file. The thumb
                                drive is then inserted into the Media Portal™
                                appliance. The operator will be prompted to
                                enter a four-digit “PIN”. This PIN, which is
                                unique to every draw session, is found printed
                                on the draw report.
                            </p>
                            <p>
                                The system then loads the draw session video
                                file. The monitor displays the video, title and
                                file description, including the time and date
                                string of creation. The Operator will be
                                prompted to either “Confirm/Upload” or “Cancel”.
                                A progress Screen will then appear showing the
                                upload progress to the various sites. A final
                                screen will appear with links to the various
                                sites to positively confirm upload and content.
                                Exportable log files are generated on the Media
                                Portal to verify activity.
                            </p>
                        </div>

                        <h3 className="font-semibold">Security</h3>
                        <p className="p-2">
                            The Media Portal will require an internet connection
                            for upload purposes. It will not be directly
                            connected to the Origin System®. Accordingly, the
                            number selection process will remain secure from
                            outside attack, manipulation or corruption. Drawing
                            files are encrypted and can only be uploaded by
                            entering the drawing specific “PIN” found on draw
                            reports. Files are verified prior to upload.
                        </p>
                        <div className="p-2 grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <img
                                src="/images/origin-portal-screen2.png"
                                alt="origin-portal"
                            />
                            <img
                                src="/images/OriginPortalStep4.png"
                                alt="origin-portal"
                            />
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                    className="font-semibold text-2xl border-b-gray-400 border-b-2"
                    onClick={() => handleOpen(2)}
                >
                    Digital Mixing Drum
                </AccordionHeader>
                <AccordionBody className="text-lg text-black font-normal">
                    <div className="lg:p-5 md:p-3 text-left">
                        <h3 className="font-semibold">Digital Mixing Drum</h3>
                        <div className="py-2 px-2">
                            <p>
                                The Origin’s Digital Mixing Drum (DMD), one of
                                the newest features to be added to Smartplay’s
                                Origin®, is a highly flexible tool for
                                conducting a wide variety of “Raffle” drawings.
                                No longer are digital raffles or second chance
                                drawings limited to sequential numbers. Phone
                                numbers, .csv data files, data from websites
                                such as SurveyMonkey.com, or any text file can
                                be used to select winning entries. It truly is
                                the digital equivalent of a traditional mixing
                                drum.
                            </p>
                        </div>
                        <h3 className="font-semibold">Capabilities</h3>
                        <div className="py-2 px-2">
                            <p>
                                Smartplay’s DMD will select up to ten thousand
                                (9,999) winning entries from populations as
                                large as ten billion (10,000,000,000), and even
                                larger! Winning selections can be segregated in
                                up to twenty-five prize tiers.
                            </p>
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader
                    className="font-semibold text-2xl border-b-gray-400 border-b-2"
                    onClick={() => handleOpen(3)}
                >
                    Origin SmartAudit
                </AccordionHeader>
                <AccordionBody className="text-lg text-black font-normal">
                    <div className="lg:p-5 md:p-3 text-left">
                        <div className="py-2 px-2">
                            <p>
                                SmartAudit is an added level of security and
                                draw validation. With SmartAudit, you can audit
                                live drawing reports at any time, using an
                                Android-enabled device, which eliminates the
                                need for phone call validation. On live draw
                                reports, the Origin generates a QR code next to
                                each game.
                            </p>
                        </div>
                        <h3 className="font-semibold">Capabilities</h3>
                        <div className="p-2 lg:flex justify-between">
                            <div className="max-w-3xl">
                                <p>
                                    Smartplay’s DMD will select up to ten
                                    thousand (9,999) winning entries from
                                    populations as large as ten billion
                                    (10,000,000,000), and even larger! Winning
                                    selections can be segregated in up to
                                    twenty-five prize tiers.
                                </p>
                                <ul className="py-2 space-y-2 list-disc list-inside px-2">
                                    <li>
                                        Origin identification number for the
                                        system on which the game was played
                                    </li>
                                    <li>ID of both the user and the auditor</li>
                                    <li>Time and date of drawing</li>
                                    <li>Game name & game matrix</li>
                                    <li>Final game results</li>
                                    <li>
                                        The last eight characters of both the
                                        RNS and UI checksums; and validation key
                                    </li>
                                </ul>
                            </div>

                            <div className="max-w-[300px] bg-gray-200 rounded shadow">
                                <img
                                    src="/images/smartaudit-lottery-scanning-300x225.png"
                                    alt="origin-portal"
                                    className="rounded-b-none"
                                />
                                <p className="p-3">
                                    Validation scan of the QR code on the draw
                                    report reveals an INVALID draw result
                                </p>
                            </div>
                        </div>
                        <div className="py-2 px-2 space-y-3">
                            <p>
                                Using a proprietary algorithm, SmartAudit
                                calculates a validation key derived from the
                                scanned information. If that key matches the
                                validation key — also embedded in the QR code —
                                it proves that the preceding information was
                                generated from the Origin and that the drawing
                                is valid. In the event the keys do NOT match,
                                the application immediately warns the auditor
                                but still displays the information decoded from
                                the QR image.
                            </p>
                            <p>
                                Auditors can use the application on a tablet to
                                scan the QR code. The application interprets the
                                data to verify and validate the results of each
                                game. This validation can occur immediately
                                after a drawing or twenty years from now!
                            </p>
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
        </>
    );
}

import React from "react";
import Image from "next/image";
import YouTubeEmbed from "../YouTubeEmbed";

function getYouTubeVideoID(url) {
    try {
        if (typeof url !== "string") {
            throw new Error("Input must be a string");
        }

        const regex =
            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    } catch (error) {
        console.error("Error extracting YouTube video ID:", error.message);
        return null;
    }
}

export const RichText = ({ content }) => {
    const headingClasses = {
        h1: "text-4xl font-bold mb-4",
        h2: "text-3xl font-semibold mb-3",
        h3: "text-2xl font-medium mb-2",
        h4: "text-xl font-medium mb-2",
        h5: "text-lg font-medium mb-2",
        h6: "text-base font-medium mb-2",
    };

    const renderChildren = (children) => {
        return children.map((child, index) => {
            let element = child.text;

            if (child.bold) {
                element = <strong key={index}>{element}</strong>;
            }
            if (child.italic) {
                element = <em key={index}>{element}</em>;
            }
            if (child.bold && child.italic) {
                element = (
                    <strong key={index}>
                        <em>{child.text}</em>
                    </strong>
                );
            }
            if (child.type === "link") {
                element = (
                    <a
                        key={index}
                        href={child.url}
                        target={child.newTab ? "_blank" : "_self"}
                        rel={child.newTab ? "noopener noreferrer" : ""}
                    >
                        {renderChildren(child.children)}
                    </a>
                );
            }
            if (getYouTubeVideoID(child.text)) {
                const videoId = getYouTubeVideoID(child.text);
                element = (
                    <div className="mb-12" key={index}>
                        <YouTubeEmbed videoId={videoId} />
                    </div>
                );
            }
            return element;
        });
    };

    const renderContent = (content) => {
        return content.map((item, index) => {
            switch (item.type) {
                case "h1":
                case "h2":
                case "h3":
                case "h4":
                case "h5":
                case "h6":
                    const Heading = item.type;
                    return (
                        <Heading
                            key={index}
                            className={headingClasses[item.type] + " mt-5"}
                        >
                            {renderChildren(item.children)}
                        </Heading>
                    );
                case "ul":
                    return (
                        <ul key={index} className="list-disc list-inside mb-4">
                            {item.children.map((li, liIndex) => (
                                <li key={liIndex} className="mb-2">
                                    {renderChildren(li.children)}
                                </li>
                            ))}
                        </ul>
                    );
                case "upload":
                    return (
                        <div
                            key={index}
                            className={`my-6 w-fit mx-auto max-w-[${item.value.width}px]`}
                        >
                            <div className="flex justify-center drop-shadow rounded">
                                <Image
                                    className="rounded"
                                    src={item.value.url}
                                    alt={item.value.alt || ""}
                                    width={item.value.width}
                                    height={item.value.height}
                                />
                            </div>
                            {item.value.caption && (
                                <p className="font-medium text-gray-500 mt-2 border-b border-b-gray-400 pb-1">
                                    {item.value.caption[0].children[0].text}
                                </p>
                            )}
                        </div>
                    );
                default:
                    return (
                        <div key={index} className="mb-4">
                            {renderChildren(item.children)}
                        </div>
                    );
            }
        });
    };

    return <div className="text-[18px]">{renderContent(content)}</div>;
};

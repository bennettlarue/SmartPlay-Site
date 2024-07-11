import React from "react";

import Image from "next/image";

export const RichText = ({ content }) => {
    const headingClasses = {
        h1: "text-4xl font-bold mb-4",
        h2: "text-3xl font-semibold mb-3",
        h3: "text-2xl font-medium mb-2",
        h4: "text-xl font-medium mb-2",
        h5: "text-lg font-medium mb-2",
        h6: "text-base font-medium mb-2",
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
                            className={headingClasses[item.type]}
                        >
                            {item.children[0].text}
                        </Heading>
                    );
                case "upload":
                    return (
                        <div key={index} className="my-4">
                            <Image
                                src={item.value.url}
                                alt={item.value.alt || ""}
                                width={item.value.width}
                                height={item.value.height}
                            />
                            {item.value.caption && (
                                <p className="text-sm text-gray-600 mt-1">
                                    {item.value.caption[0].children[0].text}
                                </p>
                            )}
                        </div>
                    );
                default:
                    return (
                        <div key={index} className="mb-4">
                            {item.children.map((child, childIndex) => {
                                if (child.bold) {
                                    return (
                                        <strong key={childIndex}>
                                            {child.text}
                                        </strong>
                                    );
                                }
                                if (child.italic) {
                                    return (
                                        <em key={childIndex}>{child.text}</em>
                                    );
                                }
                                if (child.code) {
                                    // Directly inject code
                                    return (
                                        <div
                                            style={{
                                                position: "relative",
                                                paddingBottom: "56.25%", // 16:9 aspect ratio (adjust as needed)
                                                height: 0,
                                                overflow: "hidden",
                                                maxWidth: "50%",
                                            }}
                                            key={childIndex}
                                            dangerouslySetInnerHTML={{
                                                __html: child.text,
                                            }}
                                        />
                                    );
                                }
                                return child.text;
                            })}
                        </div>
                    );
            }
        });
    };
    return <div>{renderContent(content)}</div>;
};

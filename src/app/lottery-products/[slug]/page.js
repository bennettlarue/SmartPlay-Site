import Image from "next/image";
import { RichText } from "@/app/components/news/RichText";
import Link from "next/link";
import ZoomImage from "@/app/components/ZoomImage";
import Gallery from "@/app/components/Gallery";
import VimeoEmbed from "@/app/components/VimeoEmbed";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import { VideoEmbed } from "@/app/components/VideoEmbed";

export async function generateStaticParams() {
    const response = await fetch(
        "https://smartplay-content.payloadcms.app/api/machines"
    );
    const data = await response.json();
    return data.docs.map((post) => ({
        slug: post.slug,
    }));
}

async function fetchMachineData(slug) {
    const response = await fetch(
        `https://smartplay-content.payloadcms.app/api/machines?where[slug][equals]=${slug}`
    );
    const data = await response.json();
    return data.docs[0];
}

export default async function Machine({ params }) {
    const machine = await fetchMachineData(params.slug);

    if (!machine) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    return (
        <main>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                rel="stylesheet"
            />
            <div className="max-w-[1100px] lg:px-0 px-0 mx-auto lg:mt-8 mt-2">
                <div className="p-6">
                    <div className="border-b border-b-gray-400 pb-2 space-y-2">
                        <h2 className="text-gray-500 font-semibold">
                            <Link
                                href="/product-services/lottery-drawing-machines"
                                className="hover:underline"
                            >
                                Lottery Products
                            </Link>{" "}
                            /
                        </h2>
                        <h1 className="text-4xl font-semibold text-blue-950 max-w-[700px]">
                            {machine.name}
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-10 justify-center">
                        <div className=" lg:block flex lg:justify-normal justify-center">
                            <div className="lg:w-[400px] w-[300px] lg:h-[550px] h-[400px] relative">
                                <Image
                                    className="object-cover rounded shadow"
                                    src={machine.featuredImage.url}
                                    alt={machine.featuredImage.alt}
                                    fill="true"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    objectfit="cover"
                                />
                            </div>
                        </div>
                        <div className="">
                            <RichText content={machine.description} />
                        </div>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold border-b border-b-gray-400 text-gray-600 py-1 mb-5">
                            Videos
                        </h2>
                        <VideoEmbed url={machine.videoLinks[0].videoLink} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold border-b border-b-gray-400 text-gray-600 py-1 mb-5">
                            Images
                        </h2>
                        <Gallery images={machine.images} />
                    </div>

                    <div className="mt-14">
                        <h4 className="text-center font-semibold text-xl">
                            Categories
                        </h4>
                        <div className="flex flex-wrap justify-center mt-3">
                            {machine.machineCategories.map((category) => (
                                <p className="ml-3 p-2 bg-gray-200 rounded">
                                    {category.title}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

// Add revalidate property
export const revalidate = 60; // Revalidate the page every 60 seconds

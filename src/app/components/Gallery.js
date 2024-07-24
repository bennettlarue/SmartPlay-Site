"use client";

import { useState } from "react";
import Image from "next/image";

const ZoomImage = ({ src, alt, onClick }) => (
    <div
        className="relative group cursor-pointer aspect-square"
        onClick={onClick}
    >
        <Image
            src={src}
            alt={alt}
            fill="true"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 rounded shadow"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    </div>
);

const FullscreenImage = ({ images, currentIndex, onClose, onPrev, onNext }) => (
    <div
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        onClick={onClose}
    >
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
            className="absolute top-4 right-4 text-white"
            style={{ zIndex: 501 }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
        <button
            onClick={(e) => {
                e.stopPropagation();
                onPrev();
            }}
            style={{ zIndex: 501 }}
            className="absolute left-4 text-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
        <div
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
        >
            <Image
                src={images[currentIndex].image.url}
                alt={`fullscreen-image-${currentIndex}`}
                fill="true"
                sizes="100vw"
                className="object-contain"
            />
        </div>
        <button
            onClick={(e) => {
                e.stopPropagation();
                onNext();
            }}
            className="absolute right-4 text-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    </div>
);

const Gallery = ({ images }) => {
    const [fullscreenIndex, setFullscreenIndex] = useState(null);

    const openFullscreen = (index) => setFullscreenIndex(index);
    const closeFullscreen = () => setFullscreenIndex(null);
    const showPrevImage = () =>
        setFullscreenIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    const showNextImage = () =>
        setFullscreenIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <ZoomImage
                        key={index}
                        src={image.image.url}
                        alt={`image-${index}`}
                        onClick={() => openFullscreen(index)}
                    />
                ))}
            </div>
            {fullscreenIndex !== null && (
                <FullscreenImage
                    images={images}
                    currentIndex={fullscreenIndex}
                    onClose={closeFullscreen}
                    onPrev={showPrevImage}
                    onNext={showNextImage}
                />
            )}
        </>
    );
};

export default Gallery;

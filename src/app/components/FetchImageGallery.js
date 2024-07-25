import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";

function FetchImageGallery({ url }) {
    const [galleryData, setGalleryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data);
                setGalleryData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) return null;
    if (!galleryData) return null;

    return (
        <div>
            <Gallery images={galleryData.images} />
        </div>
    );
}

export default FetchImageGallery;

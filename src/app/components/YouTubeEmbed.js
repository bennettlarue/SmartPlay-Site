import React from "react";

const YouTubeEmbed = ({ videoId }) => {
    return (
        <div className="video-container rounded overflow-hidden relative plg:pb-[40.25%] lg:mb-0 mb-10 pb-[50.25%] h-0">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;

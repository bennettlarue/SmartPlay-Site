import React from "react";

const VimeoEmbed = ({ videoId }) => {
    return (
        <div className="video-container relative pb-[50.25%] h-0 overflow-hidden max-w-[650px] min-w-[300px] w-full mx-auto">
            <iframe
                src={`https://player.vimeo.com/video/${videoId}`}
                className="absolute top-0 left-0 w-full h-full max-w-[650px] max-h-[360px]"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo video player"
            ></iframe>
        </div>
    );
};

export default VimeoEmbed;

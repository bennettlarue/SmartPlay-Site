import React from "react";

const VimeoEmbed = ({ videoId }) => {
    return (
        <div className="video-container">
            <iframe
                src={`https://player.vimeo.com/video/${videoId}`}
                width="560"
                height="316"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo video player"
            ></iframe>
        </div>
    );
};

export default VimeoEmbed;

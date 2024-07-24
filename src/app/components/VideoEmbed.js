import VimeoEmbed from "./VimeoEmbed";
import YouTubeEmbed from "./YouTubeEmbed";

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

function getVimeoVideoID(url) {
    try {
        if (typeof url !== "string") {
            throw new Error("Input must be a string");
        }

        const regex =
            /(?:https?:\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\/(?:video\/|external\/)?(\d+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    } catch (error) {
        console.error("Error extracting Vimeo video ID:", error.message);
        return null;
    }
}

export const VideoEmbed = ({ url }) => {
    if (url.includes("vimeo")) {
        return <VimeoEmbed videoId={getVimeoVideoID(url)} />;
    } else {
        return <YouTubeEmbed videoId={getYouTubeVideoID(url)} />;
    }
};

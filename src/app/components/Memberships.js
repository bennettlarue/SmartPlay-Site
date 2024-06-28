import { motion } from "framer-motion";

const images = [
    "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/wpla-footer.jpg?time=1717187795",
    "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/naspl-logo-color.jpg?time=1717187795",
    "https://hxl550.n3cdn1.secureserver.net/wp-content/uploads/2021/06/apla-logo.jpg?time=1717187795",
];

const variants = {
    visible: (i) => ({
        opacity: [0, 1, 1, 1, 0],
        transition: {
            delay: i * 2.5,
            duration: 2,
            repeat: Infinity, // Repeat indefinitely
            repeatDelay: images.length * 2.5 - 2, // Adjust repeat delay to sync animations
        },
    }),
    hidden: { opacity: 0 },
};

export default function Memberships() {
    return (
        <div className="w-[200px] h-[120px]">
            {images.map((image, i) => (
                <motion.img
                    key={image}
                    src={image}
                    width={200}
                    custom={i}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="absolute border rounded shadow-md"
                />
            ))}
        </div>
    );
}

import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useAnimation,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Counter({ number }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            const animation = animate(count, number, {
                duration: 1.5,
            });
        }
    }, [inView]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

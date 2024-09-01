import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const BoxReveal = ({
    children,
    width = "fit-content",
    boxColor,
    duration,
}) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            slideControls.start("visible");
            mainControls.start("visible");
        } else {
            slideControls.start("hidden");
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div

            >
                {children}
            </motion.div>

            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: duration || 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    background: boxColor || "#5046e6",
                    height: "100%"
                }}
            />
        </div>
    );
};

export default BoxReveal;

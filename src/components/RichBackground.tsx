import { motion } from "framer-motion";
import { JaggedSlash, InkSplatter, StarBurst } from "./abstract";

type Variant = "hero" | "deep" | "panel" | "inverse";

interface Props {
    variant?: Variant;
    intensity?: number;
}

const RichBackground = ({variant = "hero", intensity = 1}: Props) => {
    const isInverse = variant == "inverse";

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* layer 1, gradient vignette */}
            <div
            className={
                variant === "deep"
                ? "absolute inset-0 bg-vignette-deep"
                : variant === "inverse"
                ? "absolute inset-0"
                : variant === "panel"
                ? "absolute inset-0 bg-vignette-deep"
                : "absolute inset-0 bg-vignette-electric"
            }>
            </div>

            {/* layer2, speed lines sweep */}
            <div
            className={`absolute inset-0 ${
                variant === "hero" ? "bg-speedlines" : "bg-speedlines-soft"
            }`}
            style={{opacity: 0.7 * intensity}}>
            </div>

            {/* layer 3, halftone dots */}
            <div
            className="absolute top-0 right-0 w-2/3 h-2/3"
            style={{
                backgroundImage: `radial-gradient(${
                    isInverse ? "oklch(0.10 0.01 30 / 0.5)" : "oklch(0.58 0.24 27 / 0.45)"
                } 1.2px, transparent 1.6px)`,
                backgroundSize: "12px 12px",
                maskImage: "radial-gradient(ellipse at top right, black 20%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at top right, black 20%, transparent 75%)",
                opacity: 0.9 * intensity,                
            }}></div>
            <div
            className="absolute bottom-0 left-0 w-1/2 h-1/2"
            style={{
                backgroundImage: `radial-gradient(${
                    isInverse ? "oklch(0.10 0.01 30 / 0.4)" : "oklch(0.97 0.01 30 / 0.20)"
                } 1px, transparent 1.4px)`,
                backgroundSize: "16px 16px",
                maskImage: "radial-gradient(ellipse at bottom left, black 15%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(ellipse at bottom left, black 15%, transparent 70%)",
                opacity: 0.8 * intensity,
            }}></div>

            {/* layer 4, glowing color blobs */}
            <motion.div
            animate={{opacity: [0.3, 0.55, 0.3]}}
            transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
            className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-3xl"
            style={{
                background: isInverse
                ? "radial-gradient(circle, oklch(0.10 0.01 30 / 0.5), transparent)"
                : "radial-gradient(circle, oklch(0.58 0.24 27 / 0.40), transparent)",
            }}></motion.div>
            <motion.div
            animate={{opacity: [0.25, 0.5, 0.25]}}
            transition={{duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2}}
            className="absolute -bottom-40 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
                background: isInverse
                ? "radial-gradient(circle, oklch(0.10 0.01 30 / 0.45), transparent)"
                : "radial-gradient(circle, oklch(0.68 0.26 25 / 0.35), transparent)",
            }}></motion.div>

            {/* layer 5, corner shard */}
            <div className="absolute -top-10 -left-10 w-64 h-64" style={{ opacity: 0.18 * intensity }}>
                <JaggedSlash
                className="w-full h-full"
                color={isInverse ? "var(--ink)" : "var(--electric)"}
                rotate={-15}
                />
            </div>
            <div className="absolute -bottom-12 -right-10 w-72 h-72" style={{ opacity: 0.18 * intensity }}>
                <JaggedSlash
                className="w-full h-full"
                color={isInverse ? "var(--ink)" : "var(--electric-glow)"}
                rotate={160}
                />
            </div>

            {/* layer 6,floating stars */}
            <StarBurst
                className="absolute top-[18%] left-[12%] w-6 h-6 opacity-60"
                color={isInverse ? "var(--ink)" : "var(--bone)"}
            />
            <StarBurst
                className="absolute top-[70%] left-[78%] w-4 h-4 opacity-50"
                color={isInverse ? "var(--ink)" : "var(--electric)"}
            />
            <StarBurst
                className="absolute top-[35%] right-[6%] w-5 h-5 opacity-40"
                color={isInverse ? "var(--ink)" : "var(--bone)"}
            />      

            {/* layer 7, ink splatter  */}
            <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px]" style={{ opacity: 0.10 * intensity }}>
                <InkSplatter
                className="w-full h-full"
                color={isInverse ? "oklch(0.10 0.01 30)" : "oklch(0.58 0.24 27)"}
                />
            </div>

            {/* vignette overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: isInverse
                    ? "radial-gradient(ellipse at center, transparent 30%, oklch(0.58 0.24 27 / 0.18) 100%)"
                    : "radial-gradient(ellipse at center, transparent 40%, oklch(0.05 0.005 30 / 0.65) 100%)",
                }}
            />
        </div>
    );
}

export default RichBackground;
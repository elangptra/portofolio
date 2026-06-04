import { motion } from "framer-motion";
import { Ribbon, StarBurst, InkSplatter, JaggedSlash } from "./abstract";
import RichBackground from "./RichBackground";
import {
  SiReact,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
  SiArgo,
  SiContainerd,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  Icon: IconType;
  rot: number;
  variant: "ink" | "electric" | "bone";
  size: "sm" | "md" | "lg";
};

/* Curated abstract collage — varied sizes, rotations, color variants */
const skills: Skill[] = [
  { name: "React",       Icon: SiReact,       rot: -8,  variant: "ink",      size: "lg" },
  { name: "Docker",      Icon: SiDocker,      rot:  6,  variant: "electric", size: "md" },
  { name: "Kubernetes",  Icon: SiKubernetes,  rot: -4,  variant: "bone",     size: "md" },
  { name: "Python",      Icon: SiPython,      rot:  9,  variant: "ink",      size: "lg" },
  { name: "JavaScript",  Icon: SiJavascript,  rot: -6,  variant: "electric", size: "sm" },
  { name: "Laravel",     Icon: SiLaravel,     rot:  4,  variant: "ink",      size: "md" },
  { name: "PHP",         Icon: SiPhp,         rot: -10, variant: "bone",     size: "sm" },
  { name: "Express",     Icon: SiExpress,     rot:  7,  variant: "ink",      size: "sm" },
  { name: "Grafana",     Icon: SiGrafana,     rot: -5,  variant: "electric", size: "md" },
  { name: "Prometheus",  Icon: SiPrometheus,  rot:  8,  variant: "ink",      size: "lg" },
  { name: "ArgoCD",      Icon: SiArgo,        rot: -7,  variant: "bone",     size: "sm" },
  { name: "Containerd",  Icon: SiContainerd,  rot:  5,  variant: "ink",      size: "md" },
  { name: "HTML5",       Icon: SiHtml5,       rot: -9,  variant: "electric", size: "sm" },
  { name: "CSS3",        Icon: SiCss,         rot:  6,  variant: "ink",      size: "sm" },
  { name: "Tailwind",    Icon: SiTailwindcss, rot: -4,  variant: "bone",     size: "md" },
];

const sizeMap = {
  sm: { col: "col-span-2 row-span-2", icon: "w-8 h-8 md:w-10 md:h-10", text: "text-[0.6rem] md:text-[0.7rem]" },
  md: { col: "col-span-3 row-span-2", icon: "w-10 h-10 md:w-14 md:h-14", text: "text-xs md:text-sm" },
  lg: { col: "col-span-3 row-span-3", icon: "w-14 h-14 md:w-20 md:h-20", text: "text-sm md:text-base" },
};

const variantStyles = {
  ink: {
    bg: "bg-ink",
    border: "border-electric",
    icon: "text-bone group-hover:text-electric",
    text: "text-bone",
    overlay: "bg-halftone opacity-25",
    accent: "bg-electric",
  },
  electric: {
    bg: "bg-electric",
    border: "border-ink",
    icon: "text-ink group-hover:text-bone",
    text: "text-ink",
    overlay: "bg-halftone-bone opacity-30",
    accent: "bg-ink",
  },
  bone: {
    bg: "bg-bone",
    border: "border-ink",
    icon: "text-ink group-hover:text-electric",
    text: "text-ink",
    overlay: "bg-halftone opacity-20",
    accent: "bg-electric",
  },
};

const SkillsSection = () => {
    return (
        <section id="skills" className="relative py-32 overflow-hidden bg-ink text-bone">
            <RichBackground variant="deep" intensity={1} />

            {/* Floating decorative noise */}
            <InkSplatter
                className="absolute -top-20 -right-32 w-[500px] h-[500px] opacity-15 pointer-events-none"
                color="var(--electric)"
            />
            <InkSplatter
                className="absolute -bottom-32 -left-20 w-[420px] h-[420px] opacity-10 pointer-events-none"
                color="var(--bone)"
            />
            <JaggedSlash
                className="absolute top-1/3 -right-10 w-40 h-40 opacity-20 pointer-events-none"
                color="var(--electric)"
                rotate={25}
            />

            {/* Diagonal red ribbon stripe behind everything */}
            <div
                className="absolute top-[18%] -left-20 right-0 h-32 bg-electric opacity-90 ribbon-clip pointer-events-none"
                style={{ transform: "rotate(-7deg)" }}
            />
            <div
                className="absolute top-[20%] -left-20 right-0 h-32 bg-halftone-bone opacity-50 pointer-events-none"
                style={{ transform: "rotate(-7deg)", clipPath: "polygon(0 30%, 12% 0, 100% 18%, 100% 70%, 88% 100%, 0 82%)" }}
            />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
                {/* === Header collage === */}
                <div className="relative mb-20">
                <div className="flex items-center gap-4 mb-6">
                    <Ribbon color="electric" skew={-10}>
                    <span className="font-display tracking-widest text-sm text-ink">/// 02 // ARSENAL</span>
                    </Ribbon>
                    <span className="font-mono text-xs text-bone/40 tracking-widest hidden md:inline">
                    [ STATUS: LOADED ]
                    </span>
                </div>

                {/* Title — stacked + offset like P5R menus */}
                <div className="relative">
                    <h2
                    className="font-display italic text-6xl md:text-8xl lg:text-9xl text-bone leading-[0.85] tracking-tight"
                    style={{ transform: "skewX(-8deg)", textShadow: "6px 6px 0 var(--electric)" }}
                    >
                    SKILL
                    </h2>
                    <h2
                    className="font-display italic text-6xl md:text-8xl lg:text-9xl text-electric leading-[0.85] tracking-tight ml-[8%] md:ml-[12%] -mt-2"
                    style={{
                        transform: "skewX(-8deg)",
                        WebkitTextStroke: "2px var(--bone)",
                        color: "transparent",
                    }}
                    >
                    ANALYSIS.
                    </h2>

                    {/* Stamp accent */}
                    <div
                    className="absolute -top-4 right-4 md:right-20 hidden sm:block"
                    style={{ transform: "rotate(12deg)" }}
                    >
                    <div className="border-2 border-electric px-3 py-1 bg-ink/80">
                        <span className="font-mono text-[0.6rem] text-electric tracking-widest">
                        CONFIDENTIAL
                        </span>
                    </div>
                    </div>
                </div>

                <p className="mt-6 font-mono text-xs md:text-sm text-bone/60 max-w-xl">
                    // ARSENAL DECRYPTED — THE TOOLS BEHIND EVERY HEIST.
                </p>
                </div>

                {/* === Abstract collage grid ===
                    Uses dense CSS grid with varied col/row spans + rotations
                    so cards overlap visually like scattered Polaroids. */}
                <div className="relative grid grid-cols-6 md:grid-cols-12 auto-rows-[60px] md:auto-rows-[80px] gap-3 md:gap-4">
                {skills.map((s, i) => {
                    const v = variantStyles[s.variant];
                    const sz = sizeMap[s.size];
                    return (
                    <motion.div
                        key={s.name}
                        initial={{ y: 60, opacity: 0, scale: 0.6, rotate: s.rot * 2 }}
                        whileInView={{ y: 0, opacity: 1, scale: 1, rotate: s.rot }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                        delay: i * 0.05,
                        type: "spring",
                        stiffness: 180,
                        damping: 16,
                        }}
                        whileHover={{ scale: 1.12, rotate: 0, zIndex: 30 }}
                        className={`group relative ${sz.col}`}
                    >
                        {/* Drop shadow card behind */}
                        <div
                        className={`absolute inset-0 ${v.accent} jagged-clip opacity-50`}
                        style={{ transform: "translate(6px, 6px)" }}
                        />

                        {/* Main card */}
                        <div
                        className={`relative ${v.bg} jagged-clip border-2 ${v.border} h-full w-full flex flex-col items-center justify-center gap-2 overflow-hidden`}
                        >
                        {/* Texture overlay */}
                        <div className={`absolute inset-0 ${v.overlay} pointer-events-none`} />

                        {/* Corner accent — diagonal slash */}
                        <div
                            className={`absolute -top-1 -left-1 w-12 h-12 ${v.accent} opacity-90 pointer-events-none`}
                            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                        />
                        {/* Bottom-right tag */}
                        <div
                            className={`absolute bottom-0 right-0 px-1.5 py-0.5 ${v.accent} pointer-events-none`}
                            style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
                        >
                            <span className={`font-mono text-[0.5rem] ${s.variant === "electric" ? "text-bone" : s.variant === "bone" ? "text-bone" : "text-ink"} tracking-widest`}>
                            {String(i + 1).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Hover star */}
                        <StarBurst
                            className="absolute -top-2 -right-2 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
                            color="var(--electric)"
                        />

                        {/* Icon */}
                        <s.Icon
                            className={`relative z-10 ${sz.icon} ${v.icon} transition-colors`}
                        />

                        {/* Label */}
                        <span
                            className={`relative z-10 font-display italic tracking-wider ${sz.text} ${v.text} text-center px-1 leading-none`}
                            style={{ transform: "skewX(-8deg)" }}
                        >
                            {s.name.toUpperCase()}
                        </span>
                        </div>
                    </motion.div>
                    );
                })}
                </div>

                {/* === Footer accent === */}
                <div className="relative mt-16 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-1 bg-electric" />
                    <span className="font-mono text-[0.65rem] md:text-xs text-bone/50 tracking-widest">
                    END_OF_DOSSIER // {skills.length} ENTRIES LOGGED
                    </span>
                </div>
                <div
                    className="font-display italic text-electric text-2xl md:text-3xl"
                    style={{ transform: "skewX(-8deg)", textShadow: "3px 3px 0 var(--bone)" }}
                >
                    ALL OUT ATTACK!
                </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
import { motion } from "framer-motion";
import { Code2, Sparkles, Zap } from "lucide-react";
import { StarBurst, Ribbon } from "./abstract";
import RichBackground from "./RichBackground";
import SectionHeader from "./SectionHeader";

const traits = [
    {
        icon: Code2,
        title: "CLEAN CODE",
        desc: "Maintainable, typed, tested. Code that other humans can love.",
        rot: -3,
    },
    {
        icon: Sparkles,
        title: "BOLD DESIGN",
        desc: "Unforgettable interfaces with conviction — never generic.",
        rot: 2,
    },
    {
        icon: Zap,
        title: "FAST DELIVERY",
        desc: "Ship early, ship often. Iterate until the experience sings.",
        rot: -2,
    },
];

const About = () => {
    return (
        <section id="about" className="relative py-32 overflow-hidden">
            <RichBackground variant="deep" intensity={0.85} />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
                <SectionHeader index="01" kicker="// WHO AM I" title="ABOUT." />

                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
                <div className="space-y-6">
                    {/* Marker-style quote */}
                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-marker text-bone text-2xl leading-snug"
                    >
                    <span className="bg-electric text-ink px-2 py-0.5">ELANG</span> is a digital phantom
                    — crafting code & orchestrating infrastructure. A cybernetic force fueled by
                    <span className="text-electric"> adrenaline</span> and{" "}
                    <span className="text-electric">coffee</span>.
                    </motion.div>

                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-bone/80 text-base leading-relaxed font-sans max-w-xl"
                    >
                    Toolbox spans from modern frontend frameworks, type-safe backends, container orchestration,
                    and CI/CD pipelines — real craft is connecting business goals to elegant technical
                    execution.
                    </motion.p>

                    <div className="flex flex-wrap gap-2 pt-4">
                    {["TypeScript", "React", "Node.js", "Docker", "K8s", "GitOps"].map((t, i) => (
                        <motion.div
                        key={t}
                        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -3 : 3 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        >
                        <Ribbon color={i % 2 === 0 ? "electric" : "bone"} skew={-8}>
                            <span className="font-display tracking-widest text-xs">{t}</span>
                        </Ribbon>
                        </motion.div>
                    ))}
                    </div>
                </div>

                {/* Trait cards — jagged + skewed */}
                <div className="grid gap-6">
                    {traits.map((t, i) => (
                    <motion.div
                        key={t.title}
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, rotate: 0 }}
                        style={{ transform: `rotate(${t.rot}deg)` }}
                        className="relative"
                    >
                        <div className="relative bg-ink jagged-clip overflow-hidden">
                        <div className="absolute inset-0 bg-halftone opacity-20" />
                        <div className="relative flex items-start gap-4 p-6 border-l-4 border-electric">
                            <div className="relative shrink-0">
                            <StarBurst className="absolute inset-0 w-14 h-14" color="var(--electric)" />
                            <div className="relative w-14 h-14 grid place-items-center text-ink">
                                <t.icon className="w-6 h-6" />
                            </div>
                            </div>
                            <div>
                            <h3
                                className="font-display italic text-2xl tracking-wider text-bone mb-1"
                                style={{ transform: "skewX(-8deg)" }}
                            >
                                {t.title}
                            </h3>
                            <p className="text-sm text-bone/70 leading-relaxed">{t.desc}</p>
                            </div>
                        </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export default About
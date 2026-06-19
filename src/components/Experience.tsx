import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Ribbon, StarBurst } from "./abstract";
import RichBackground from "./RichBackground";

const timeline = [
  {
    period: "Dec 2025 — NOW",
    role: "DevOps Engineer",
    company: "Wahana Prestasi Logistik",
    desc: "Designed and maintained a production-ready Kubernetes platform with monitoring, GitOps, load balancing, and high-availability services to support scalable and resilient application deployments.",
    tags: ["Kubernetes", "Docker", "ArgoCD", "Prometheus", "Grafana"],
    rot: -2,
  },
  {
    period: "Jul 2024 — Jan 2025",
    role: "Backend Engineer",
    company: "Profile Image Studio",
    desc: "Built a scalable backend system for the SEALS adaptive learning platform, supporting personalized English learning experiences through efficient API development, database management, and server deployment.",
    tags: ["Javascript", "Express", "Sequelize ORM", "MySQL"],
    rot: 2,
  },
  {
    period: "Feb 2024 — Jun 2024",
    role: "Fullstack Developer",
    company: "Infinite Learning",
    desc: "Worked on UI/UX and full-stack development projects, transforming ideas into interactive prototypes and scalable web applications through teamwork, agile practices, and user-focused design.",
    tags: ["Javascript", "React", "Express", "MySQL"],
    rot: -2,
  },
];

const Experience = () => {
    return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <RichBackground variant="hero" intensity={0.85} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeader index="03" kicker="// THE JOURNEY" title="LOG ENTRIES." />

        <div className="relative">
          {/* Jagged lightning spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-b from-electric via-electric to-transparent"
              style={{ clipPath: "polygon(0 0, 100% 2%, 30% 8%, 100% 14%, 0 20%, 100% 26%, 20% 32%, 100% 38%, 0 44%, 100% 50%, 30% 56%, 100% 62%, 0 68%, 100% 74%, 20% 80%, 100% 86%, 0 92%, 100% 100%)" }}
            />
          </div>

          <div className="space-y-16">
            {timeline.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={t.role}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
                    <div style={{ transform: `rotate(${t.rot}deg)` }}>
                      <div className="relative bg-ink jagged-clip overflow-hidden">
                        <div className="absolute inset-0 bg-halftone opacity-20" />
                        <div className="relative p-6 border-l-4 border-electric">
                          <div className="mb-3 inline-block">
                            <Ribbon color="electric" skew={-8}>
                              <span className="font-display tracking-widest text-xs">{t.period}</span>
                            </Ribbon>
                          </div>
                          <h3
                            className="font-display italic text-3xl text-bone tracking-wider"
                            style={{ transform: "skewX(-8deg)" }}
                          >
                            {t.role}
                          </h3>
                          <p className="font-marker text-electric text-lg mb-3">@ {t.company}</p>
                          <p className="text-sm text-bone/75 leading-relaxed mb-4">{t.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {t.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[10px] px-2.5 py-1 bg-electric/15 text-electric tracking-wider"
                                style={{ clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)" }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block" />

                  {/* Spine node — star burst */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative animate-pulse-glow rounded-full">
                      <StarBurst className="w-12 h-12" color="var(--electric)" />
                      <Briefcase className="absolute inset-0 m-auto w-4 h-4 text-ink" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience
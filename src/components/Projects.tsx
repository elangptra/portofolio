import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { StarBurst, Ribbon } from "./abstract";
import RichBackground from "./RichBackground";
import headlampMaps from "../assets/headlamp-maps.png";
import grafanaK8s from "../assets/grafana-k8s.png";
import gitlabCI from "../assets/gitlab-ci.png";

const projects = [
  {
    name: "On Premise Infrastructure",
    type: "Devops Infra",
    desc: "Architected and deployed scalable on-premise & VM infrastructure using Kubernetes. Configured high-availability clusters and automated environment provisioning via Terraform.",
    stack: ["Kubernetes", "Docker", "Terraform", "Debian", "HPA", "ESO"],
    image: headlampMaps,
    rot: -3,
  },
  {
    name: "Infrastructure Monitoring",
    type: "Devops Infra Dash",
    desc: "Established a centralized infrastructure observability and logging ecosystem. Deployed Prometheus and Grafana for real-time dashboards and proactive server alerting.",
    stack: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Headlamp",
      "Kubernetes Dashboard",
    ],
    image: grafanaK8s,
    rot: 2,
  },
  {
    name: "CI/CD Pipeline & GitOps",
    type: "Devops Pipeline",
    desc: "Designed and implemented robust end-to-end continuous integration and deployment workflows. Integrated Docker, GitLab Runner, and ArgoCD to reduce manual deployment errors.",
    stack: ["Gitlab CI", "Docker", "ArgoCD", "Gitlab Runner"],
    image: gitlabCI,
    rot: 3,
  },
  {
    name: "nanti",
    type: "nanti",
    desc: "nanti",
    stack: ["nanti", "nanti", "nanti"],
    image: gitlabCI,
    rot: -2,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <RichBackground variant="deep" intensity={1} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeader
          index="04"
          kicker="// SHOWCASE"
          title="PROJECTS SHOWCASE."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 2) * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              style={{ transform: `rotate(${p.rot}deg)` }}
              className="group relative"
            >
              {/* Project number burst */}
              <div className="absolute -top-6 -left-6 z-20">
                <div className="relative">
                  <StarBurst className="w-16 h-16" color="var(--electric)" />
                  <span
                    className="absolute inset-0 grid place-items-center font-display italic text-ink text-2xl"
                    style={{ transform: "skewX(-10deg)" }}
                  >
                    0{i + 1}
                  </span>
                </div>
              </div>

              <div className="relative bg-ink jagged-clip overflow-hidden">
                {/* Top visual */}
                <div className="relative h-48 bg-gradient-to-br from-electric/40 via-ink to-ink overflow-hidden">
                  <div className="absolute inset-0 bg-halftone opacity-60" />
                  <div
                    className="absolute inset-4 bg-ink/80 border border-electric/40 backdrop-blur-sm overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)",
                    }}
                  >
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-electric/20">
                      <span className="w-2 h-2 bg-electric/50" />
                      <span className="w-2 h-2 bg-electric/50" />
                      <span className="w-2 h-2 bg-electric/50" />
                      <span className="ml-3 font-mono text-[10px] text-electric/70 tracking-widest">
                        {p.name.toLowerCase().replace(/ /g, "_")}
                      </span>
                    </div>
                    <div className="w-full h-[calc(100%-36px)] overflow-hidden">
                      <motion.img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                      />
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-3 -right-3"
                  >
                    <StarBurst
                      className="w-16 h-16 opacity-60"
                      color="var(--electric)"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 border-t-4 border-electric">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3
                        className="font-display italic text-3xl text-bone tracking-wider mb-1"
                        style={{ transform: "skewX(-8deg)" }}
                      >
                        {p.name}
                      </h3>
                      <p className="font-marker text-electric text-sm tracking-widest">
                        {p.type}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        style={{ transform: "rotate(-5deg)" }}
                        className="w-10 h-10 grid place-items-center bg-electric text-ink jagged-clip hover:bg-bone transition-colors"
                      >
                        <Code2 className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        style={{ transform: "rotate(5deg)" }}
                        className="w-10 h-10 grid place-items-center bg-bone text-ink jagged-clip hover:bg-electric transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-bone/75 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s, si) => (
                      <Ribbon
                        key={s}
                        color={si % 2 === 0 ? "electric" : "bone"}
                        skew={-8}
                      >
                        <span className="font-mono text-[10px] tracking-wider">
                          {s}
                        </span>
                      </Ribbon>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

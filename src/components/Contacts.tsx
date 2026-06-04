import { motion } from "framer-motion";
import { ArrowRight, Code2, Briefcase, Mail, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { StarBurst, Ribbon } from "./abstract";
import RichBackground from "./RichBackground";

function Field({
  label,
  placeholder,
  type = "text",
  textarea = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full bg-bone/5 border-b-2 border-electric/40 text-bone px-4 py-3 font-mono text-sm focus:border-electric focus:outline-none focus:bg-bone/10 transition-colors placeholder:text-bone/30";
  return (
    <div>
      <label className="font-display italic text-xs text-electric tracking-widest mb-2 block" style={{ transform: "skewX(-8deg)" }}>
        {label}
      </label>
      {textarea ? (
        <textarea rows={5} placeholder={placeholder} className={`${cls} resize-none`} />
      ) : (
        <input type={type} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}

const Contacts = () => {
    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            <RichBackground variant="hero" intensity={0.95} />

            <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-12">
                <SectionHeader index="05" kicker="// CALLING CARD" title="SEND INTENT." />

                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
                {/* Form on slanted ink panel */}
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ transform: "rotate(-1deg)" }}
                    className="relative"
                >
                    <div className="relative bg-ink jagged-clip overflow-hidden">
                    <div className="absolute inset-0 bg-halftone opacity-30" />
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="relative p-8 border-l-4 border-electric space-y-5"
                    >
                        <div className="grid md:grid-cols-2 gap-5">
                        <Field label="// NAME" placeholder="Your name" />
                        <Field label="// EMAIL" type="email" placeholder="you@email.com" />
                        </div>
                        <Field label="// SUBJECT" placeholder="What's this about?" />
                        <Field label="// MESSAGE" textarea placeholder="Tell me about your intent..." />

                        <button
                        type="submit"
                        className="group relative font-display italic tracking-widest text-base font-bold"
                        style={{ transform: "skewX(-10deg)" }}
                        >
                        <span
                            className="inline-flex items-center gap-3 bg-electric text-bone px-8 py-4 ribbon-clip"
                            style={{ textShadow: "2px 2px 0 var(--ink)" }}
                        >
                            <span style={{ transform: "skewX(10deg)" }} className="flex items-center gap-3">
                            [ SEND INTENT ]
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </span>
                        </button>
                    </form>
                    </div>
                </motion.div>

                {/* Info column */}
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="space-y-6"
                >
                    <div style={{ transform: "rotate(2deg)" }} className="relative">
                    <div className="relative bg-bone text-ink jagged-clip p-6">
                        <div className="absolute inset-0 bg-halftone opacity-30" />
                        <div className="relative">
                        <Ribbon color="electric" skew={-10}>
                            <span className="font-display tracking-widest text-xs text-bone">// DROP A LINE</span>
                        </Ribbon>
                        <p className="font-display italic text-2xl tracking-wider mt-3" style={{ transform: "skewX(-6deg)" }}>
                            elangptra17@gmail.com
                        </p>
                        </div>
                    </div>
                    </div>

                    <div style={{ transform: "rotate(-2deg)" }}>
                    <div className="relative bg-electric text-ink jagged-clip p-6">
                        <div className="absolute inset-0 bg-halftone-bone opacity-40" />
                        <div className="relative">
                        <Ribbon color="ink" skew={-10}>
                            <span className="font-display tracking-widest text-xs text-bone">// LOCATION</span>
                        </Ribbon>
                        <p className="font-display italic text-2xl tracking-wider mt-3 text-bone" style={{ transform: "skewX(-6deg)" }}>
                            JAKARTA, ID
                        </p>
                        <p className="font-marker text-sm mt-1 text-bone">Open for opportunity, worldwide</p>
                        </div>
                    </div>
                    </div>

                    <div>
                    <Ribbon color="electric" skew={-10}>
                        <span className="font-display tracking-widest text-xs text-bone">// FOLLOW</span>
                    </Ribbon>
                    <div className="flex gap-3 mt-4">
                        {[Code2, Briefcase, Send, Mail].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            style={{ transform: `rotate(${i % 2 === 0 ? -6 : 6}deg)` }}
                            className="relative"
                        >
                            <StarBurst className="w-14 h-14" color="var(--electric)" />
                            <Icon className="absolute inset-0 m-auto w-5 h-5 text-ink" />
                        </a>
                        ))}
                    </div>
                    </div>
                </motion.div>
                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-mono text-xs text-muted-foreground tracking-widest">
                    © {new Date().getFullYear()} ELANG PUTRA ADAM — ALL RIGHTS RESERVED
                </p>
                <p className="font-marker text-electric text-sm">{ "{ crafted with conviction }" }</p>
                </div>
            </div>
        </section>
    )
}

export default Contacts
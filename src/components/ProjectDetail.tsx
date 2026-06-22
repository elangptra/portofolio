import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { StarBurst, InkSplatter, Ribbon } from "./abstract";

export type AOAProject = {
  name: string;
  type: string;
  desc: string;
  stack: string[];
  index: number;
};

const EXIT_MS = 750;

export function ProjectDetail({
  project,
  onClose,
}: {
  project: AOAProject | null;
  onClose: () => void;
}) {
  // Keep a local copy so we can keep rendering content while the exit animation runs.
  const [local, setLocal] = useState<AOAProject | null>(project);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync incoming project → open.
  useEffect(() => {
    if (project && (!local || local.name !== project.name)) {
      if (timer.current) clearTimeout(timer.current);
      setLocal(project);
      setPhase("in");
    }
  }, [project, local]);

  const requestClose = useCallback(() => {
    if (phase === "out") return;
    setPhase("out");
    timer.current = setTimeout(() => {
      setLocal(null);
      onClose();
    }, EXIT_MS);
  }, [phase, onClose]);

  // If parent clears project externally, run the close animation too.
  useEffect(() => {
    if (!project && local && phase === "in") {
      setPhase("out");
      timer.current = setTimeout(() => setLocal(null), EXIT_MS);
    }
  }, [project, local, phase]);

  useEffect(() => {
    if (!local) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && requestClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [local, requestClose]);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const isOut = phase === "out";

  return (
    <AnimatePresence>
      {local && (
        <motion.div
          key="aoa-root"
          className="fixed inset-0 z-[100] overflow-hidden"
        >
          {/* === STAGE 1: diagonal red slashes sweeping in === */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={`slash-${i}`}
              className="absolute left-[-30%] right-[-30%] h-[28vh] bg-electric origin-left"
              style={{
                top: `${i * 22 - 10}%`,
                transform: "rotate(-12deg)",
                clipPath:
                  "polygon(0 30%, 4% 0, 100% 18%, 100% 70%, 96% 100%, 0 82%)",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={
                isOut
                  ? { scaleX: 0, opacity: 0, originX: 1 }
                  : { scaleX: 1, opacity: 1 }
              }
              transition={
                isOut
                  ? {
                      delay: 0.4 + (4 - i) * 0.04,
                      duration: 0.3,
                      ease: [0.7, 0, 0.2, 1],
                    }
                  : { delay: i * 0.05, duration: 0.35, ease: [0.7, 0, 0.2, 1] }
              }
            />
          ))}

          {/* Black background slamming in after slashes */}
          <motion.div
            className="absolute inset-0 bg-ink"
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            }}
            animate={
              isOut
                ? { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }
                : { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
            }
            transition={
              isOut
                ? { delay: 0.3, duration: 0.35, ease: [0.7, 0, 0.2, 1] }
                : { delay: 0.35, duration: 0.4, ease: [0.7, 0, 0.2, 1] }
            }
          />

          {/* Halftone overlay */}
          <motion.div
            className="absolute inset-0 bg-halftone opacity-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOut ? 0 : 0.4 }}
            transition={{ delay: isOut ? 0.25 : 0.6, duration: 0.3 }}
          />

          {/* Spinning starburst */}
          <motion.div
            className="absolute top-1/2 left-1/2 pointer-events-none"
            initial={{ scale: 0, rotate: -180, x: "-50%", y: "-50%" }}
            animate={
              isOut
                ? { scale: 0, rotate: 180, x: "-50%", y: "-50%" }
                : { scale: 3, rotate: 0, x: "-50%", y: "-50%" }
            }
            transition={
              isOut
                ? { delay: 0.15, duration: 0.4, ease: "easeIn" }
                : { delay: 0.5, duration: 0.5, ease: "backOut" }
            }
          >
            <StarBurst className="w-[40vh] h-[40vh]" color="var(--electric)" />
          </motion.div>

          {/* Splatters */}
          <motion.div
            className="absolute -top-20 -left-20 pointer-events-none"
            initial={{ scale: 0, rotate: -30 }}
            animate={
              isOut ? { scale: 0, rotate: -30 } : { scale: 1, rotate: 0 }
            }
            transition={{
              delay: isOut ? 0.1 : 0.7,
              duration: isOut ? 0.35 : 0.4,
            }}
          >
            <InkSplatter
              className="w-[60vh] h-[60vh] opacity-50"
              color="var(--electric)"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-32 -right-20 pointer-events-none"
            initial={{ scale: 0, rotate: 30 }}
            animate={isOut ? { scale: 0, rotate: 30 } : { scale: 1, rotate: 0 }}
            transition={{
              delay: isOut ? 0.15 : 0.75,
              duration: isOut ? 0.35 : 0.4,
            }}
          >
            <InkSplatter
              className="w-[55vh] h-[55vh] opacity-40"
              color="var(--bone)"
            />
          </motion.div>

          {/* === STAGE 2: ATTACK / RETREAT smash text === */}
          <motion.div
            className="absolute inset-0 grid place-items-center pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: isOut ? 1 : 0 }}
            transition={{
              delay: isOut ? 0 : 1.15,
              duration: isOut ? 0.05 : 0.3,
            }}
          >
            <motion.div
              initial={{ scale: 4, opacity: 0, rotate: -15 }}
              animate={
                isOut
                  ? { scale: 4, opacity: 0, rotate: 15 }
                  : { scale: 1, opacity: 1, rotate: -8 }
              }
              transition={
                isOut
                  ? { delay: 0, duration: 0.3, ease: "easeIn" }
                  : { delay: 0.55, type: "spring", stiffness: 220, damping: 14 }
              }
              className="text-center"
            >
              <div
                className="font-display italic text-[18vw] md:text-[14vw] leading-none text-bone"
                style={{
                  WebkitTextStroke: "4px var(--electric)",
                  textShadow:
                    "10px 10px 0 var(--electric), 20px 20px 0 rgba(0,0,0,0.6)",
                }}
              >
                {isOut ? "ESCAPE!" : "ALL OUT!"}
              </div>
              <div
                className="font-marker text-bone text-2xl md:text-4xl mt-2 tracking-widest"
                style={{ transform: "skewX(-8deg)" }}
              >
                {isOut
                  ? `/// MISSION CLEAR — ${local.name}`
                  : `/// TARGET LOCKED: ${local.name}`}
              </div>
            </motion.div>
          </motion.div>

          {/* === STAGE 3: modal content === */}
          <motion.div
            className="absolute inset-0 grid place-items-center p-4 md:p-10"
            initial={{ opacity: 0, y: 40 }}
            animate={isOut ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
            transition={
              isOut
                ? { delay: 0, duration: 0.25, ease: "easeIn" }
                : { delay: 1.3, duration: 0.45, ease: "easeOut" }
            }
          >
            {/* Click backdrop to close */}
            <button
              aria-label="Close"
              onClick={requestClose}
              className="absolute inset-0 cursor-default"
            />

            <motion.div
              initial={{ rotate: -3, scale: 0.9 }}
              animate={
                isOut ? { rotate: 6, scale: 0.6 } : { rotate: -1.5, scale: 1 }
              }
              transition={
                isOut
                  ? { delay: 0, duration: 0.3, ease: "easeIn" }
                  : { delay: 1.3, type: "spring", stiffness: 180, damping: 18 }
              }
              className="relative w-full max-w-3xl"
            >
              {/* Drop shadow card */}
              <div
                className="absolute inset-0 bg-electric jagged-clip"
                style={{ transform: "translate(10px, 10px)" }}
              />

              <div className="relative bg-ink border-2 border-electric jagged-clip overflow-hidden">
                {/* Halftone texture */}
                <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

                {/* Diagonal stripe */}
                <div
                  className="absolute -top-6 left-0 right-0 h-10 bg-electric opacity-90"
                  style={{ transform: "rotate(-3deg)" }}
                />

                {/* Close button */}
                <button
                  onClick={requestClose}
                  aria-label="Close detail"
                  className="absolute top-4 right-4 z-20 w-11 h-11 grid place-items-center bg-electric text-ink hover:bg-bone transition-colors jagged-clip"
                  style={{ transform: "rotate(6deg)" }}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Star burst accent */}
                <div className="absolute -top-3 -left-3 pointer-events-none">
                  <div className="relative">
                    <StarBurst className="w-24 h-24" color="var(--electric)" />
                    <span
                      className="absolute inset-0 grid place-items-center font-display italic text-ink text-3xl"
                      style={{ transform: "skewX(-10deg)" }}
                    >
                      0{local.index + 1}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 p-8 md:p-12 pt-16 md:pt-20">
                  <div className="mb-4">
                    <Ribbon color="electric" skew={-10}>
                      <span className="font-display tracking-widest text-xs text-ink">
                        /// CASE FILE
                      </span>
                    </Ribbon>
                  </div>

                  <h3
                    className="font-display italic text-5xl md:text-7xl text-bone leading-[0.9] tracking-wider"
                    style={{
                      transform: "skewX(-8deg)",
                      textShadow: "6px 6px 0 var(--electric)",
                    }}
                  >
                    {local.name}
                  </h3>
                  <p className="font-marker text-electric text-base md:text-lg tracking-widest mt-3">
                    {local.type}
                  </p>

                  <div className="my-6 h-1 w-24 bg-electric" />

                  <p className="text-bone/80 leading-relaxed text-sm md:text-base mb-8 max-w-2xl">
                    {local.desc}
                  </p>

                  <div className="mb-8">
                    <div className="font-mono text-[0.65rem] text-bone/40 tracking-widest mb-3">
                      // STACK_DEPLOYED
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {local.stack.map((s, si) => (
                        <Ribbon
                          key={s}
                          color={si % 2 === 0 ? "electric" : "bone"}
                          skew={-8}
                        >
                          <span className="font-mono text-[11px] tracking-wider">
                            {s}
                          </span>
                        </Ribbon>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-10 h-[2px] bg-electric" />
                    <span className="font-mono text-[0.6rem] text-bone/40 tracking-widest">
                      END_OF_FILE // PRESS ESC TO EXIT
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

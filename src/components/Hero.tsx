import {motion} from 'framer-motion'
import {ArrowRight, Download, Mail } from 'lucide-react'
import { StarBurst, Ribbon, DiagonalStripes } from './abstract'
import RichBackground from './RichBackground'

// Brand icons removed from lucide-react v1+ (trademark policy)
const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const socials = [
  {
    icon: Github,
    href: "https://github.com/elangptra"
  },
  {
    icon: Linkedin,
    href: "https://id.linkedin.com/in/elang-putra-adam"
  },
  {
    icon: Mail,
    href: "mailto:elangptra17@gmail.com"
  }
]

const Hero = () => {
  return (
    <section id="home" className='relative min-h-screen pt-28 pb-32 overflow-hidden'>
      {/* Rich layered background */}
      <RichBackground variant="hero" intensity={1}/>
      <DiagonalStripes/>

      {/* floating stars */}
      <motion.div
      animate={{rotate: 360, scale: [1, 1.1, 1]}}
      transition={{rotate: {duration: 30, repeat: Infinity, ease: 'linear'}, scale: {duration:4, repeat: Infinity} }}
      className='absolute top-32 right-[12%]'>
        <StarBurst className='w-20 h-20 opacity-90' color="var(--bone)" />
      </motion.div>

      <motion.div
      animate={{ y: [0, -25, 0], rotate: [0, 20, 0]}}
      transition={{duration: 8, repeat: Infinity, ease: 'easeInOut'}}
      className='absolute top-[55%] left-[6%]'>
        <StarBurst className='w-12 h-12' color="var(--electric)"/>
      </motion.div>

      <motion.div
      animate={{rotate: [0, 360]}}
      transition={{duration: 25, repeat: Infinity, ease: 'linear'}}
      className='absolute top-[18%] left-[42%]'>
        <StarBurst className='w-8 h-8' color='var(--bone)'/>
      </motion.div>

      <div className='relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12 grid lg:grid-cols-[1fr_auto] gap-12 items-center'>
        {/* left */}
        <div className='space-y-7'>
          <motion.div
          initial={{x: -60, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.15}}
          >
            <Ribbon color='bone' skew={-12}>
              <span className='font-display tracking-widest text-base'>// THE AWAKENING //</span>
            </Ribbon>
          </motion.div>

          {/* Big name — italic skewed */}
          {/* Big name — abstract staircase, no overlap, responsive */}
          <div className="relative flex flex-col items-start gap-1 md:gap-2 py-2">
            {/* ELANG */}
            <motion.h1
              initial={{ x: -40, opacity: 0, rotate: -10 }}
              animate={{ x: 0, opacity: 1, rotate: -4 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="font-display italic text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.85] text-bone glitch-text origin-left"
              data-text="ELANG"
              style={{ textShadow: "5px 5px 0 var(--electric), -2px -2px 0 var(--ink)" }}
            >
              ELANG
            </motion.h1>
            {/* PUTRA */}
            <motion.h1
              initial={{ x: 40, opacity: 0, rotate: 0 }}
              animate={{ x: 0, opacity: 1, rotate: -8 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="font-display italic text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.85] text-electric origin-left ml-[15%] sm:ml-[20%] md:ml-[24%]"
              style={{ textShadow: "5px 5px 0 var(--bone), -2px -2px 0 var(--ink)" }}
            >
              PUTRA
            </motion.h1>
            {/* Diagonal accent slash under the name */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-2 h-2 bg-electric origin-left slash-clip w-[55%] md:w-[45%]"
              style={{ transform: "rotate(-6deg)" }}
            />
            {/* Floating star accent */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
              className="absolute left-[10%] top-[42%] w-8 h-8 md:w-10 md:h-10 bg-electric pointer-events-none"
              style={{ clipPath: "polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}
            />
          </div>

          {/* Role ribbon */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 }}
          >
            <Ribbon color='electric' skew={-10}>
              <span className='font-display text-bone tracking-widest text-sm md:text-base'>
                // WEB DEVELOPER // DEVOPS ENGINEER //
              </span>
            </Ribbon>
          </motion.div>

          {/* Speech splash bio */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="relative max-w-xl"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            <div className="relative bg-bone text-ink px-10 py-8 splash-clip">
              <p className="font-marker text-base leading-relaxed px-2">
                I craft <span className="text-electric">modern, performant</span> web experiences —
                fueled by clean code, bold design & coffee.
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative font-display italic tracking-widest text-base font-bold"
              style={{ transform: "skewX(-10deg)" }}
            >
              <span
                className="inline-flex items-center gap-3 bg-electric text-bone px-8 py-4 ribbon-clip"
                style={{ textShadow: "2px 2px 0 var(--ink)" }}
              >
                <span style={{ transform: "skewX(10deg)" }} className="flex items-center gap-3">
                  ENTER THE ARSENAL
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </button>
            <button
              className="group font-display italic tracking-widest text-base font-bold"
              style={{ transform: "skewX(-10deg)" }}
            >
              <span className="inline-flex items-center gap-3 bg-bone text-ink px-8 py-4 ribbon-clip-r">
                <span style={{ transform: "skewX(10deg)" }} className="flex items-center gap-3">
                  GRAB CV
                  <Download className="w-5 h-5" />
                </span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* RIGHT — stat splashes */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="hidden lg:flex flex-col gap-6 relative"
        >
          {[
            { num: "1+", label: "YRS\nEXPERIENCE", rot: -3 },
            { num: "10+", label: "PROJECTS\nSHIPPED", rot: 4 },
            { num: "8+", label: "TECH\nMASTERED", rot: -2 },
          ].map((s) => (
            <motion.div
              key={s.num}
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ transform: `rotate(${s.rot}deg)` }}
              transition={{ type: "spring" }}
              className="relative"
            >
              <div className="relative bg-ink jagged-clip border-l-4 border-electric pl-5 pr-8 py-3 min-w-[220px] flex items-center gap-4">
                <div className="font-display italic text-5xl text-electric leading-none" style={{ transform: "skewX(-10deg)" }}>
                  {s.num}
                </div>
                <div className="font-display tracking-wider text-xs text-bone whitespace-pre-line leading-tight">
                  {s.label}
                </div>
                <StarBurst className="absolute -top-3 -right-3 w-6 h-6" color="var(--electric)" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Left social rail */}
      <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20">
        <div className="font-display italic text-xs tracking-[0.4em] text-electric [writing-mode:vertical-rl] rotate-180">
          // FOLLOW ME
        </div>
        {
          socials.map(({icon: Icon, href}, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ transform: `rotate(${i % 2 === 0 ? -5 : 5}deg)` }}
              className="w-10 h-10 grid place-items-center bg-electric text-ink jagged-clip hover:bg-bone transition-colors"
            >
                <Icon className="w-4 h-4" />
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Hero
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { section } from 'motion/react-client'

const TITLE = "ELANG PUTRA ADAM"
const SUBTITLE_1 = "// WEB DEVELOPER //"
const SUBTITLE_2 = "// DEVOPS ENGINEER //"

function GlitchChar({ char, delay }: { char: string; delay: number }) {
  const chars = "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const [display, setDisplay] = useState(char)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (char === ' ') return
    const timeout = setTimeout(() => {
      let count = 0
      const interval = setInterval(() => {
        if (count >= 8) {
          setDisplay(char)
          setDone(true)
          clearInterval(interval)
          return
        }
        setDisplay(chars[Math.floor(Math.random() * chars.length)])
        count++
      }, 50)
    }, delay)
    return () => clearTimeout(timeout)
  }, [char, delay])

  return (
    <span className={done ? 'text-white' : 'text-[#00e5ff]'}>
      {display}
    </span>
  )
}

// Burst lines behind title (P5 style)
function BurstLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * 360
        return (
          <motion.div
            key={i}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 0.6, 0] }}
            transition={{ delay: 0.5 + i * 0.05, duration: 1.5, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 h-[2px] origin-left"
            style={{
              width: `${120 + Math.random() * 200}px`,
              transform: `rotate(${angle}deg)`,
              background: `linear-gradient(90deg, rgba(0,229,255,0.8), transparent)`,
            }}
          />
        )
      })}
    </div>
  )
}

// Shattered glass fragments
function ShatterFragments() {
  const fragments = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 60,
    rotation: Math.random() * 360,
    delay: Math.random() * 0.5,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {fragments.map(f => (
        <motion.div
          key={f.id}
          initial={{ opacity: 0, scale: 0, rotate: f.rotation - 180 }}
          animate={{ opacity: [0, 0.4, 0.2], scale: 1, rotate: f.rotation }}
          transition={{ delay: f.delay, duration: 1.2, ease: 'easeOut' }}
          className="absolute"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            background: 'linear-gradient(135deg, rgba(0,229,255,0.3), rgba(0,100,200,0.1))',
            clipPath: 'polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)',
            border: '1px solid rgba(0,229,255,0.4)',
          }}
        />
      ))}
    </div>
  )
}

const HeroSection = () => {
  return (
    <section id="hero" className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* background radial */}
        <div className='absolute inset-0 bg-radial-[eclipse_at_center] from-[#0d2b52] via-[#050a14] to-[#050a14]' />
        <div className='absolute inset-0'
        style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,100,200,0.15) 0%, transparent 70%)'
        }}
        />

        <BurstLines />
        <ShatterFragments />

        {/* corner decoration */}
        {[
            'top-6 left-6 border-t-2 border-l-2',
            'top-6 right-6 border-t-2 border-r-2',
            'bottom-6 left-6 border-b-2 border-l-2',
            'bottom-6 right-6 border-b-2 border-r-2',
        ].map((cls, i) => (
            <div key={i} className={`absolute w-10 h-10 border-[#00e5ff]/50 ${cls}`} />
        ))}

        {/* Awakening */}
        <div className='relative z-10 text-center px-6'>
            <motion.p 
            initial={{ opacity:0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1, delay: 0.2 }}
            className='font-mono-tech text-[#00e5ff]/70 text-sm mb-4 tracking-[0.3em] uppercase'
            >
                ◆ THE AWAKENING ◆
            </motion.p>

            {/* main title */}
            <motion.h1
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition= {{duration: 0.3, delay: 0.5}}
            className='font-global text-[clamp(4rem,12vw,9rem)] leading-none mb-2 relative'
            style={{
                textShadow: '0 0 80px rgba(0,229,255,0.3), 0 0 160px rgba(0,100,200,0.2)',
                WebkitTextStroke: '1px rgba(0,229,255,0.2)',
            }}
            >
                {TITLE.split('').map((char, i) => (
                    <GlitchChar key={i} char={char} delay={500 + i * 60} />
                ))}
            </motion.h1>

            {/* subtitle banner */}
            <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6, ease: 'easeOut' }}
            className="relative mx-auto my-6 max-w-xl"
            >
            <div
                className="py-3 px-8 relative overflow-hidden"
                style={{
                background: '#e4001d',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                }}
            >
                <span className="font-bebas text-white text-xl tracking-widest">
                {SUBTITLE_1}&nbsp;&nbsp;{SUBTITLE_2}
                </span>
                {/* Shine */}
                <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.5, delay: 2, ease: 'easeInOut' }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
            </div>
            </motion.div>
            {/* Scroll hint */}
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ duration: 2, delay: 2.5, repeat: Infinity }}
            className="mt-16 font-mono-tech text-[#00e5ff]/50 text-xs tracking-widest"
            >
            ▼ SCROLL TO BEGIN ▼
            </motion.div>
        </div>

        {/* Side labels */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 font-mono-tech text-[#00e5ff]/30 text-xs tracking-widest">
            PORTFOLIO // 2025
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 font-mono-tech text-[#00e5ff]/30 text-xs tracking-widest">
            VER 1.0.0 // ACTIVE
        </div>
    </section>
  )
}

export default HeroSection;
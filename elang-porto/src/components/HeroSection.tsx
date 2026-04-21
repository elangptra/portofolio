import React from "react";
import { motion, type Variants } from 'framer-motion';

const HeroSection = () => {
    const textVariants: Variants = {
        hidden: { opacity: 0, x: -200, skewX: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            skewX: -10,
            transition: { delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 120 }
        })
    };

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden border-b-8 border-p5-red">
            {/* Skewed background section  */}
            <div className="absolute inset-0 bg-p5-red transform -skew-y-6 origin-top-right scale-110 opacity-10 z-0"></div>

            {/* Nama */}
            <div className="relative z-10 text-center cursor-default group">
                <motion.h1 
                    className="font-persona-header text-[100px] md:text-[150px] text-p5-red absolute -inset-1 opacity-70 blur-[1px] group-hover:-inset-2"
                    custom={1} initial="hidden" animate="visible" variants={textVariants}
                >
                    Elang Putra Adam
                </motion.h1>
                <motion.h1 
                    className="font-persona-header text-[100px] md:text-[150px] text-p-white relative"
                    custom={0} initial="hidden" animate="visible" variants={textVariants}
                >
                    Elang Putra Adam
                </motion.h1>
            </div>

            {/* Box Subtitle */}
            <motion.div className="relative z-10 bg-p5-red px-6 py-1 mt-4 transform -rotate-3 skew-x-[-15deg]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            >
                <p className="text-p-yellow text-2xl md:text-3xl font-black">
                    // Web Developer // DevOps Engineer //
                </p>
            </motion.div>
            
            {/* Decorative Shard */}
            <motion.div className="absolute bottom-10 right-10 w-40 h-40 bg-p-white [clip-path:polygon(50%_0%,_100%_38%,_82%_100%,_18%_100%,_0%_38%)] z-5 group hover:bg-p3-blue transition-colors duration-300"
            animate={{ rotate: 360 }}
            transition= {{ duration:20, repeat: Infinity, ease: "linear" }}
            />
        </section>
    )
}

export default HeroSection;
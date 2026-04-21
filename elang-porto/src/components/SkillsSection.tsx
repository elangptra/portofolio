import React from "react";
import { motion } from 'framer-motion';
import { FaReact, FaDocker, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';

const skills =[
    {name: 'React', icon: FaReact, category: 'Frontend'},
    {name: 'Node.js', icon: FaNodeJs, category: 'Backend'},
    {name: 'Docker', icon: FaDocker, category: 'DevOps'},
    {name: 'Kubernetes', icon: SiKubernetes, category: 'DevOps'},
    {name: 'Terraform', icon: SiTerraform, category: 'DevOps'},
    {name: 'Python', icon: FaPython, category: 'Backend'}
]

const SkillsSection = () => {
    return (
        <section className="min-h-screen w-full relative bg-p-white text-p-black py-20 px-10 overflow-hidden">
            
            <div className="absolute inset-0 bg-p5-red [clip-path:polygon(0_0,_100%_0,_100%_30%,_0_60%)] z-0"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-10">
                <motion.div className="bg-p-black text-p-white p-8 transform skew-y-[-2deg] border-l-8 border-p3-blue"
                custom={0}
                initial= {{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="font-persona-border text-6xl text-p-white rotate-2">
                        Skill Set
                    </h2>
                    <p className="text-xl mt-6 loading-relaxed">
                        MENGUASAI TEKNOLOGI <span className="text-p5-red">FRONTEND</span> MODERN DAN INFRASTRUKTUR <span className="text-p3-blue">DEVOPS</span> CAANGGIH. MAMPU MEMBANGUN SISTEM SCALABLE DARI NOL HINGGA DEPLOYMENT OTOMATIS.
                    </p>
                </motion.div>

                <div className="flex flex-wrap gap-4 justify-center items-center">
                    {skills.map((skill, index) => (
                      <motion.div
                      key={skill.name}
                      className={`relative group w-24 h-24 flex flex-col items-center justify-center border-4 transition-all duration-200 ${skill.category === 'Frontend' ? 'border-p3-blue bg-p-white' :
                        skill.category === 'Backend' ? 'border-p5-red bg-p-black' : 'border-p-yellow bg-p-black'}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring" }}
                      whileHover={{ scale: 1.1, rotate: -5, y: -10 }}
                      >
                        
                      </motion.div>  
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;
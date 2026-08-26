import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import CanvasParticles from './CanvasParticles';
import profilePic from '../assets/images/Professional_Pic.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full min-h-screen snap-always snap-center flex justify-center items-center px-4 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
            <CanvasParticles />

            <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl w-full">

                {/* Text Content */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-slate-100">
                        Mohammed Huzaifa J
                    </h1>
                    <div className="text-xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 h-10 md:h-12 flex items-center justify-center md:justify-start w-full">
                        <span className="mr-2">I am a</span>
                        <span className="neon-text font-bold">
                            <Typewriter
                                words={['Full Stack Developer', 'AI Enthusiast', 'LeetCode Student Ambassador']}
                                loop={0} // 0 means infinite loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={60}
                                deleteSpeed={40}
                                delaySpeed={1500}
                            />
                        </span>
                    </div>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-12 px-8 py-3 rounded-full border-2 text-base md:text-lg transition-all font-semibold shadow-lg hover:shadow-xl neon-border text-indigo-600 bg-transparent hover:bg-indigo-50 dark:text-cyan-400 dark:hover:bg-cyan-950/30 self-center md:self-start"
                    >
                        View My Journey
                    </motion.a>
                </motion.div>

                {/* Profile Picture */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                    className="order-1 md:order-2 flex-shrink-0"
                >
                    <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full border-4 neon-border bg-white/10 dark:bg-black/10 backdrop-blur-sm overflow-hidden flex items-center justify-center p-[2px]">
                        <img
                            src={profilePic}
                            alt="Mohammed Huzaifa J"
                            fetchPriority="high"
                            loading="eager"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

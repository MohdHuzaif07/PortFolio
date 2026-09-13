import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import CanvasParticles from './CanvasParticles';
import profilePic from '../assets/images/Professional_Pic.jpeg';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative w-full min-h-screen snap-always snap-center flex justify-center items-center px-4 overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            <CanvasParticles />

            {/* Top system status bar */}
            <div
                className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-2.5 z-20"
                style={{
                    borderBottom: '1.5px solid var(--border-subtle)',
                    backgroundColor: 'var(--surface)',
                }}
            >
                <div className="flex items-center gap-2">
                    <span className="status-online" />
                    <span className="sys-label">System Status // Online</span>
                </div>
                <span className="sys-label hidden sm:block">Dev-Terminal v2.0</span>
            </div>

            <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl w-full mt-8">

                {/* Text Content */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
                >
                    {/* Module label */}
                    <div className="module-id mb-4">Developer Profile // 001</div>

                    {/* Name */}
                    <h1
                        className="mb-3 uppercase leading-none tracking-tight"
                        style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 900,
                            fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
                            color: 'var(--text)',
                        }}
                    >
                        Mohammed<br className="hidden sm:block" /> Huzaifa J
                    </h1>

                    {/* Typewriter line */}
                    <div
                        className="flex items-center justify-center md:justify-start gap-2 mb-8"
                        style={{ minHeight: '2rem' }}
                    >
                        <span
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)',
                                color: 'var(--text-muted)',
                                fontWeight: 500,
                            }}
                        >
                            ~/role $&nbsp;
                        </span>
                        <span
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)',
                                color: 'var(--accent)',
                                fontWeight: 600,
                            }}
                        >
                            <Typewriter
                                words={['Full Stack Developer', 'AI Enthusiast', 'LeetCode Student Ambassador']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={60}
                                deleteSpeed={40}
                                delaySpeed={1500}
                            />
                        </span>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                        href="#projects"
                        whileTap={{ scale: 0.97 }}
                        className="brutalist-btn-accent self-center md:self-start"
                    >
                        View My Journey →
                    </motion.a>
                </motion.div>

                {/* Profile Picture */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                    className="order-1 md:order-2 flex-shrink-0"
                >
                    <div
                        className="relative overflow-hidden"
                        style={{
                            width: 'clamp(180px, 28vw, 280px)',
                            height: 'clamp(180px, 28vw, 280px)',
                            border: '4px solid var(--border)',
                            boxShadow: '8px 8px 0px var(--shadow)',
                            borderRadius: '4px',
                        }}
                    >
                        <img
                            src={profilePic}
                            alt="Mohammed Huzaifa J"
                            fetchPriority="high"
                            loading="eager"
                            className="w-full h-full object-cover"
                        />
                        {/* Corner accent */}
                        <div
                            className="absolute bottom-0 left-0 right-0 py-1 px-2 flex items-center justify-between"
                            style={{ backgroundColor: 'var(--accent)', borderTop: '2px solid var(--border)' }}
                        >
                            <span
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.6rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: '#111111',
                                }}
                            >
                                MHJ // ENG-001
                            </span>
                            <span className="status-online" style={{ backgroundColor: '#111111', animationDuration: '2s' }} />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

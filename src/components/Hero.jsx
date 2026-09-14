import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import profilePic from '../assets/images/Professional_Pic.jpeg';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative w-full pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden"
            style={{ backgroundColor: 'var(--void)' }}
        >
            {/* Ambient background glow */}
            <div
                className="absolute top-20 -left-44 w-[650px] h-[500px] pointer-events-none opacity-50"
                style={{
                    background: 'radial-gradient(ellipse, rgba(140, 36, 56, 0.12), transparent 68%)',
                }}
            />

            <div className="editorial-wrap relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left Column: Typography & Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 flex flex-col items-start"
                >
                    {/* Eyebrow */}
                    <div className="eyebrow mb-6">
                        <span className="eyebrow-dot" />
                        <span>DEVELOPER PROFILE // ENG-001</span>
                    </div>

                    {/* Main Name in Silkscreen */}
                    <h1
                        className="text-[32px] sm:text-[46px] md:text-[56px] lg:text-[62px] leading-[1.18] font-silkscreen mb-6 tracking-normal red-glow-shadow"
                        style={{ color: 'var(--ink)' }}
                    >
                        MOHAMMED<br />HUZAIFA J
                    </h1>

                    {/* Role Line with Typewriter */}
                    <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono tracking-wider">
                        <span style={{ color: 'var(--muted)' }}>~/role $</span>
                        <span style={{ color: 'var(--maroon-bright)', fontWeight: 600 }}>
                            <Typewriter
                                words={['Full Stack Developer', 'AI Enthusiast', 'LeetCode Student Ambassador']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={60}
                                deleteSpeed={35}
                                delaySpeed={1600}
                            />
                        </span>
                    </div>

                    {/* Institution */}
                    <div
                        className="text-xs font-mono mb-6"
                        style={{ color: 'var(--muted)', letterSpacing: '0.08em' }}
                    >
                        Easwari Engineering College &bull; Chennai, India
                    </div>

                    {/* Description Paragraph */}
                    <p
                        className="text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal"
                        style={{ color: 'var(--muted)', lineHeight: '1.85' }}
                    >
                        Specializing in modern full-stack development, applied artificial intelligence, and algorithmic problem-solving. Passionate about architecting scalable systems and turning complex technical challenges into clean, high-impact digital experiences.
                    </p>

                    {/* Actions / CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-5">
                        <a
                            href="#projects"
                            className="button-primary"
                        >
                            <span>EXPLORE WORK</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="#contact"
                            className="button-outline"
                        >
                            <span>GET IN TOUCH</span>
                        </a>
                        <button
                            type="button"
                            className="text-action"
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/Mohammed_Huzaifa_Resume.pdf";
                                link.download = "Mohammed_Huzaifa_Resume.pdf";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            title="Download Mohammed Huzaifa's Resume"
                        >
                            <FileDown className="w-3.5 h-3.5 text-[var(--maroon-bright)]" />
                            <span>DOWNLOAD RESUME</span>
                        </button>
                    </div>
                </motion.div>

                {/* Right Column: Editorial Framed Profile Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-5 flex justify-center lg:justify-end"
                >
                    <div
                        className="w-full max-w-[380px] p-4 flex flex-col gap-4 scanline-overlay"
                        style={{
                            backgroundColor: 'var(--panel)',
                            border: '1px solid var(--line)',
                        }}
                    >
                        {/* Panel Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-[#2a2523] text-[10px] font-mono tracking-widest uppercase">
                            <span style={{ color: 'var(--muted)' }}>MHJ // TERMINAL-01</span>
                            <div className="flex items-center gap-2">
                                <span className="status-online" />
                                <span style={{ color: 'var(--maroon-bright)' }}>ONLINE</span>
                            </div>
                        </div>

                        {/* Framed Image */}
                        <div
                            className="relative h-[300px] w-full overflow-hidden"
                            style={{
                                border: '1px solid var(--maroon)',
                                backgroundColor: 'var(--panel-alt)',
                            }}
                        >
                            <img
                                src={profilePic}
                                alt="Mohammed Huzaifa J"
                                fetchPriority="high"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                style={{
                                    filter: 'contrast(1.05) brightness(0.95)',
                                    objectPosition: '50% 25%',
                                }}
                            />
                            {/* Subtle diagonal scanline overlay */}
                            <div className="absolute inset-0 pointer-events-none scanline-overlay opacity-30" />

                            {/* Bottom tag inside photo */}
                            <div
                                className="absolute bottom-0 left-0 right-0 py-1 px-3 flex items-center justify-between backdrop-blur-sm"
                                style={{
                                    backgroundColor: 'rgba(10, 9, 8, 0.85)',
                                    borderTop: '1px solid var(--maroon)',
                                }}
                            >
                                <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--ink)]">
                                    MOHAMMED HUZAIFA J
                                </span>
                                <span className="text-[9px] font-mono tracking-widest text-[var(--maroon-bright)]">
                                    DEV // 2026
                                </span>
                            </div>
                        </div>

                        {/* Telemetry / Equalizer Bar Motif & Readout */}
                        <div className="pt-2 border-t border-[#2a2523] flex items-center justify-between">
                            <div className="bar-motif">
                                <i style={{ height: '6px' }} />
                                <i style={{ height: '14px' }} />
                                <i style={{ height: '10px' }} />
                                <i style={{ height: '18px' }} />
                                <i style={{ height: '12px' }} />
                                <i style={{ height: '16px' }} />
                                <i style={{ height: '8px' }} />
                            </div>

                            <span
                                className="text-[9px] font-mono tracking-widest uppercase"
                                style={{ color: 'var(--muted)' }}
                            >
                                660+ PROBLEMS &bull; 9.25 CGPA
                            </span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

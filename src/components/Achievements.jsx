import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileText, GraduationCap } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Achievements = () => {
    return (
        <section
            id="achievements"
            className="w-full min-h-screen snap-always snap-center flex flex-col justify-center items-center px-4 py-20 transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            {/* Section header */}
            <div className="max-w-5xl w-full mb-12">
                <div className="module-id mb-3">// SYS-ACH-001</div>
                <h2 className="section-heading">Milestones &amp; Achievements</h2>
                <div className="accent-bar mt-3" style={{ maxWidth: '120px' }} />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full"
            >
                {/* 660+ Problems */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="brutalist-card p-6 md:p-8 flex flex-col justify-between"
                >
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="module-id">METRIC-01</span>
                            <div className="icon-box" style={{ color: 'var(--accent)' }}>
                                <Trophy className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="accent-bar mb-6" />

                        <motion.h3
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                            className="leading-none mb-2"
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 900,
                                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                                color: 'var(--text)',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            660+
                        </motion.h3>
                        <p
                            className="uppercase tracking-wider font-semibold text-sm mb-1"
                            style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--accent)' }}
                        >
                            Problems Solved
                        </p>
                    </div>

                    <div className="pt-6 mt-6" style={{ borderTop: '1.5px solid var(--border-subtle)' }}>
                        <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text-muted)' }}>
                            Across LeetCode, CodeChef, GFG &amp; HackerRank
                        </p>
                    </div>
                </motion.div>

                {/* Patent */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="brutalist-card p-6 md:p-8 flex flex-col justify-between"
                >
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="module-id">IP-FILE-01</span>
                            <div className="icon-box" style={{ color: 'var(--accent)' }}>
                                <FileText className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="accent-bar mb-6" />

                        <h3
                            className="leading-none mb-3"
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 800,
                                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                                color: 'var(--text)',
                                textTransform: 'uppercase',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            Patent Filed
                        </h3>
                        <p
                            className="text-sm font-semibold mb-2"
                            style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--accent)' }}
                        >
                            "Purpose-Driven Local LLM Evaluator"
                        </p>
                    </div>

                    <div className="pt-6 mt-6" style={{ borderTop: '1.5px solid var(--border-subtle)' }}>
                        <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text-muted)' }}>
                            Innovation in AI Evaluation
                        </p>
                    </div>
                </motion.div>

                {/* CGPA */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="brutalist-card p-6 md:p-8 flex flex-col justify-between"
                >
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="module-id">ACAD-01</span>
                            <div className="icon-box" style={{ color: 'var(--accent)' }}>
                                <GraduationCap className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="accent-bar mb-6" />

                        <motion.h3
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                            className="leading-none mb-2"
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 900,
                                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                                color: 'var(--text)',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            9.25
                        </motion.h3>
                        <p
                            className="uppercase tracking-wider font-semibold text-sm mb-1"
                            style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--accent)' }}
                        >
                            CGPA
                        </p>
                    </div>

                    <div className="pt-6 mt-6" style={{ borderTop: '1.5px solid var(--border-subtle)' }}>
                        <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: 'var(--text-muted)' }}>
                            Easwari Engineering College
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Achievements;

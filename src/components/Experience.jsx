import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Experience = () => {
    return (
        <section
            id="experience"
            className="w-full min-h-screen snap-always snap-center flex flex-col justify-center items-center px-4 py-20 transition-colors duration-300"
            style={{ backgroundColor: 'var(--surface)' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full"
            >
                {/* Section header */}
                <div className="mb-12">
                    <div className="module-id mb-3">// SYS-EXP-001</div>
                    <h2 className="section-heading">Experience &amp; Impact</h2>
                    <div className="accent-bar mt-3" style={{ maxWidth: '120px' }} />
                </div>

                {/* Timeline */}
                <div
                    className="relative ml-4 md:ml-8 pl-8 md:pl-12 py-4"
                    style={{ borderLeft: '3px solid var(--border-subtle)' }}
                >
                    {/* Timeline node */}
                    <div
                        className="absolute -left-[17px] top-6 icon-box"
                        style={{ width: '2rem', height: '2rem', backgroundColor: 'var(--accent)' }}
                    >
                        <Leaf className="w-4 h-4" style={{ color: '#111111' }} />
                    </div>

                    {/* Experience card */}
                    <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                        className="brutalist-card p-6 md:p-8"
                    >
                        {/* Accent bar top */}
                        <div className="accent-bar mb-5" />

                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-5 gap-3">
                            <div>
                                <div className="module-id mb-2">Role — Intern</div>
                                <h3
                                    className="mb-1"
                                    style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                                        color: 'var(--text)',
                                        letterSpacing: '-0.01em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Green Internship
                                </h3>
                                <h4
                                    style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: '0.85rem',
                                        color: 'var(--accent)',
                                        fontWeight: 600,
                                    }}
                                >
                                    1M1B (1 Million for 1 Billion)
                                </h4>
                            </div>
                            <span
                                className="brutalist-tag-accent flex-shrink-0 self-start"
                            >
                                Sustainability &amp; Problem-Solving
                            </span>
                        </div>

                        <hr className="sys-divider mb-5" />

                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.95rem', fontFamily: "'Inter', sans-serif" }}>
                            Engaged in a purpose-driven internship focused on global sustainability challenges. Developed core problem-solving methodologies to tackle real-world climate and operational issues. The experience honed my ability to fuse technological solutions with sustainable, long-term impact strategies.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;

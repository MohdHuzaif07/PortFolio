import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Leaf } from 'lucide-react';

const Experience = () => {
    return (
        <section
            id="experience"
            className="w-full py-24 md:py-32"
            style={{ backgroundColor: 'var(--void)' }}
        >
            <div className="editorial-wrap">
                {/* Section Header */}
                <div className="section-heading-group">
                    <span className="section-index">02</span>
                    <h2 className="section-title">EXPERIENCE</h2>
                    <div className="section-rule" />
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto pt-6">
                    <div
                        className="relative ml-4 md:ml-6 pl-8 md:pl-12 py-2"
                        style={{ borderLeft: '1px solid var(--maroon)' }}
                    >
                        {/* Entry 1: LeetCode Student Ambassador */}
                        <div
                            className="absolute -left-[15px] top-0 w-[29px] h-[29px] grid place-items-center"
                            style={{
                                backgroundColor: 'var(--void)',
                                border: '1px solid var(--maroon)',
                                color: 'var(--maroon-bright)',
                            }}
                        >
                            <Code2 className="w-3.5 h-3.5" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="pb-16"
                        >
                            {/* Metadata */}
                            <div className="text-[10px] font-mono tracking-[0.14em] uppercase text-[var(--maroon-bright)] mb-3 flex flex-wrap items-center gap-2">
                                <span>COMMUNITY LEADERSHIP</span>
                                <span>/</span>
                                <span>LEETCODE &bull; EASWARI ENGINEERING COLLEGE</span>
                            </div>

                            {/* Role Heading */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--ink)] mb-1">
                                LeetCode Student Ambassador
                            </h3>

                            {/* Organization & Domain */}
                            <div className="text-xs font-mono text-[var(--muted)] mb-4">
                                Easwari Engineering College &bull; Chennai, India
                            </div>

                            {/* Structured Bullet Points */}
                            <ul className="space-y-2.5 text-sm sm:text-[14px] text-[var(--muted)] leading-[1.8] max-w-3xl mb-5 list-disc list-inside marker:text-[var(--maroon-bright)]">
                                <li>
                                    Mentor junior students in <strong className="text-[var(--ink)] font-medium">Data Structures &amp; Algorithms (DSA)</strong> through structured problem-solving sessions and technical guidance.
                                </li>
                                <li>
                                    Help students develop <strong className="text-[var(--ink)] font-medium">algorithmic thinking, problem-solving skills, and coding fundamentals</strong> using LeetCode-based practice.
                                </li>
                                <li>
                                    Guide students in understanding DSA concepts, analyzing solutions, debugging code, and improving <strong className="text-[var(--ink)] font-medium">time and space complexity</strong>.
                                </li>
                                <li>
                                    Encourage consistent competitive programming practice and support students in preparing for <strong className="text-[var(--ink)] font-medium">coding assessments and technical interviews</strong>.
                                </li>
                                <li>
                                    Conduct peer-learning sessions and share practical approaches to solving programming problems.
                                </li>
                            </ul>

                            {/* Highlight Tag */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2a2523] bg-[var(--panel)] text-[11px] font-mono tracking-wider text-[var(--maroon-bright)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--maroon-bright)]" />
                                <span>DSA MENTORSHIP &amp; ALGORITHMIC GUIDANCE</span>
                            </div>
                        </motion.div>

                        {/* Entry 2: Green Intern */}
                        <div
                            className="absolute -left-[15px] top-[48%] md:top-[46%] w-[29px] h-[29px] grid place-items-center"
                            style={{
                                backgroundColor: 'var(--void)',
                                border: '1px solid var(--maroon)',
                                color: 'var(--maroon-bright)',
                            }}
                        >
                            <Leaf className="w-3.5 h-3.5" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="pb-4"
                        >
                            {/* Metadata */}
                            <div className="text-[10px] font-mono tracking-[0.14em] uppercase text-[var(--maroon-bright)] mb-3 flex flex-wrap items-center gap-2">
                                <span>INTERNSHIP</span>
                                <span>/</span>
                                <span>1M1B (1 MILLION FOR 1 BILLION)</span>
                            </div>

                            {/* Role Heading */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--ink)] mb-1">
                                Green Intern
                            </h3>

                            {/* Organization & Domain */}
                            <div className="text-xs font-mono text-[var(--muted)] mb-4">
                                Sustainability &bull; Global Climate Initiatives &bull; Problem Solving
                            </div>

                            {/* Description */}
                            <p
                                className="text-sm sm:text-[14px] leading-[1.85] text-[var(--muted)] mb-5 max-w-3xl"
                            >
                                Engaged in a purpose-driven internship focused on global sustainability challenges. Developed core problem-solving methodologies to tackle real-world climate and operational issues. The experience honed my ability to fuse technological solutions with sustainable, long-term impact strategies.
                            </p>

                            {/* Highlight Tag */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2a2523] bg-[var(--panel)] text-[11px] font-mono tracking-wider text-[var(--maroon-bright)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--maroon-bright)]" />
                                <span>SUSTAINABILITY &amp; PROBLEM-SOLVING</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Trophy, FileCode, Award } from 'lucide-react';

const achievementsList = [
    {
        badge: 'VERIFIED METRIC',
        meta: 'LEETCODE / CODECHEF / GFG / HACKERRANK',
        stat: '660+',
        title: 'Algorithmic Problem Solving',
        description: 'Solved over 660 algorithmic challenges across competitive programming platforms, building deep fluency in advanced data structures, graph algorithms, and space-time optimization.',
    },
    {
        badge: 'INTELLECTUAL PROPERTY',
        meta: 'PATENT FILED / AI INNOVATION',
        stat: 'PATENT',
        title: '"Purpose-Driven Local LLM Evaluator"',
        description: 'Invented and filed intellectual property for an evaluation framework tailored to local Large Language Models, optimizing inference verification, domain suitability, and benchmark accuracy.',
    },
    {
        badge: 'ACADEMIC MERIT',
        meta: 'EASWARI ENGINEERING COLLEGE',
        stat: '9.25',
        title: 'Cumulative GPA Distinction',
        description: 'Consistently maintained high academic standing in undergraduate engineering studies, bridging foundational computer science theory with hands-on systems development.',
    },
];

const Achievements = () => {
    return (
        <section
            id="achievements"
            className="w-full py-24 md:py-32"
            style={{ backgroundColor: 'var(--void)' }}
        >
            <div className="editorial-wrap">
                {/* Section Header */}
                <div className="section-heading-group">
                    <span className="section-index">05</span>
                    <h2 className="section-title">ACHIEVEMENTS</h2>
                    <div className="section-rule" />
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {achievementsList.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.12 }}
                            className="p-6 md:p-8 flex flex-col justify-between border border-[#2a2523] transition-all duration-300 hover:border-[var(--maroon)]"
                            style={{ backgroundColor: 'var(--panel)' }}
                        >
                            <div>
                                {/* Verified Badge */}
                                <div className="flex items-center justify-between mb-5">
                                    <span className="verified-badge">
                                        <Check className="w-3 h-3 text-[var(--maroon-bright)]" />
                                        <span>{item.badge}</span>
                                    </span>
                                </div>

                                {/* Meta */}
                                <div className="text-[10px] font-mono tracking-[0.12em] uppercase text-[var(--maroon-bright)] mb-4">
                                    {item.meta}
                                </div>

                                {/* Large Stat Number / Highlight */}
                                <div
                                    className="font-silkscreen text-3xl sm:text-4xl text-[var(--ink)] mb-3 red-glow-shadow-sm"
                                >
                                    {item.stat}
                                </div>

                                {/* Subtitle */}
                                <h3 className="text-base font-semibold text-[var(--ink)] mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-[13px] text-[var(--muted)] leading-[1.8]">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-[#2a2523] flex items-center justify-between">
                                <span className="text-[9px] font-mono tracking-widest text-[var(--muted)]">
                                    MILESTONE / 0{idx + 1}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--maroon-bright)]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

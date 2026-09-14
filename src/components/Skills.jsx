import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'LANGUAGES',
        skills: ['Java', 'C', 'C++', 'Python', 'JavaScript'],
    },
    {
        title: 'WEB TECHNOLOGIES',
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack', 'Spring Boot', 'REST APIs'],
    },
    {
        title: 'CORE CS & ALGO',
        skills: ['Data Structures & Algorithms', '660+ Solved (LeetCode / CodeChef / GFG / HackerRank)', 'MySQL', 'Database Design', 'System Design Fundamentals'],
        featured: '660+ Solved (LeetCode / CodeChef / GFG / HackerRank)',
    },
    {
        title: 'DEV TOOLS & AI',
        skills: ['Git', 'GitHub', 'VS Code', 'Google AI Studio', 'Prompt Engineering', 'Postman'],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="w-full py-24 md:py-32"
            style={{ backgroundColor: 'var(--void)' }}
        >
            <div className="editorial-wrap">
                {/* Section Header */}
                <div className="section-heading-group">
                    <span className="section-index">03</span>
                    <h2 className="section-title">TECHNICAL STACK</h2>
                    <div className="section-rule" />
                </div>

                {/* Editorial Skills Panel */}
                <div className="max-w-4xl mx-auto pt-4">
                    <div
                        className="p-6 md:p-10 border border-[#2a2523]"
                        style={{ backgroundColor: 'var(--panel)' }}
                    >
                        <div className="flex items-center justify-between pb-6 mb-2 border-b border-[#2a2523]">
                            <div className="text-[10px] font-mono tracking-[0.16em] uppercase text-[var(--maroon-bright)] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[var(--maroon-bright)]" />
                                <span>SYSTEM ARSENAL // CAPABILITIES</span>
                            </div>
                            <span className="text-[10px] font-mono tracking-widest text-[var(--muted)]">
                                4 MODULES
                            </span>
                        </div>

                        {/* Skill Groups */}
                        <div className="flex flex-col">
                            {skillCategories.map((cat, idx) => (
                                <motion.div
                                    key={cat.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-5 border-b border-[#2a2523] items-start"
                                >
                                    {/* Category Label */}
                                    <div className="md:col-span-4 text-xs font-mono font-medium tracking-[0.12em] text-[var(--ink)] flex items-center gap-2">
                                        <span className="text-[10px] text-[var(--maroon-bright)]">0{idx + 1} /</span>
                                        <span>{cat.title}</span>
                                    </div>

                                    {/* Skill Tags */}
                                    <div className="md:col-span-8 flex flex-wrap gap-2.5 sm:gap-3">
                                        {cat.skills.map((skill) => {
                                            const isFeatured = cat.featured === skill;
                                            return (
                                                <span
                                                    key={skill}
                                                    className={`text-xs font-mono transition-all duration-200 cursor-default ${
                                                        isFeatured
                                                            ? 'px-3 py-1 bg-[rgba(140,36,56,0.18)] border border-[var(--maroon-bright)] text-[var(--maroon-bright)] font-medium shadow-[0_0_10px_rgba(180,50,76,0.2)]'
                                                            : 'text-[var(--muted)] hover:text-[var(--ink)] border-b border-[var(--maroon)] pb-0.5 hover:border-[var(--maroon-bright)]'
                                                    }`}
                                                >
                                                    {skill}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

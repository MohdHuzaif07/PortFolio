import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projectList = [
    {
        id: '01',
        title: 'Resume Builder',
        description: 'A modern, client-side web application engineered to solve common document layout, pagination, and PDF distortion issues. Built with modular vanilla JavaScript (ES6+) and a pluggable template architecture with WYSIWYG real-time preview, dynamic off-screen pagination, Cropper.js image subsystem, and pixel-perfect vector A4 PDF export with zero server latency.',
        tech: ['JavaScript (ES6+)', 'WYSIWYG', 'Cropper.js', 'DOM Sandboxing', 'Vector PDF Engine'],
        demoLink: 'https://resume-builder-mu-sand.vercel.app/',
        githubLink: 'https://github.com/MohdHuzaif07',
        featured: true,
    },
    {
        id: '02',
        title: 'AI Health Chatbot',
        description: 'An intelligent conversational agent providing context-aware guidance across Mental, Physical, and Nutritional wellness domains with automated triage and safety guardrails.',
        tech: ['Python', 'GenAI', 'LLMs', 'React', 'FastAPI'],
        githubLink: 'https://github.com/MohdHuzaif07',
        featured: true,
    },
    {
        id: '03',
        title: 'Neon-Drift',
        description: 'A fast-paced, cyber-themed 2D endless runner where players manipulate gravity in real time to dodge procedurally generated obstacles, navigate anti-gravity anomaly zones, and compete with synthesized 8-bit sound effects.',
        tech: ['Phaser 3', 'JavaScript', 'Web Audio API', 'HTML5 Canvas'],
        demoLink: 'https://gravity-game-tau.vercel.app/',
        githubLink: 'https://github.com/MohdHuzaif07',
    },
    {
        id: '04',
        title: 'AI Symptom Educator',
        description: 'An educational healthcare exploration tool leveraging generative AI models to explain clinical symptoms and promote structured preliminary health awareness.',
        tech: ['Google AI Studio', 'Prompt Engineering', 'GenAI', 'React'],
        demoLink: 'https://edu-health-puce.vercel.app/',
        githubLink: 'https://github.com/MohdHuzaif07',
    },
    {
        id: '05',
        title: 'Employee Portal',
        description: 'A robust enterprise workplace portal focusing on secure role-based access control (RBAC), multi-factor identity verification, and administrative workforce management.',
        tech: ['MERN Stack', 'JWT', 'OAuth 2.0', 'Express.js', 'MongoDB'],
        githubLink: 'https://github.com/MohdHuzaif07',
    },
    {
        id: '06',
        title: 'Voice-Assisted E-Commerce',
        description: 'An accessible, next-generation shopping interface integrating hands-free speech recognition for voice catalog searching, navigation, and automated checkout.',
        tech: ['React', 'Web Speech API', 'Node.js', 'Tailwind CSS'],
        githubLink: 'https://github.com/MohdHuzaif07',
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-24 md:py-32"
            style={{ backgroundColor: 'var(--void)' }}
        >
            <div className="editorial-wrap">
                {/* Section Header */}
                <div className="section-heading-group">
                    <span className="section-index">04</span>
                    <h2 className="section-title">PROJECTS</h2>
                    <div className="section-rule" />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                    {projectList.map((project, idx) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="project-card flex flex-col justify-between"
                        >
                            {/* Top Strip */}
                            <div className="project-strip">
                                <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--ink)] bg-[rgba(10,9,8,0.85)] px-2 py-0.5 border border-[#2a2523]">
                                    PROJECT / {project.id}
                                </span>

                                <div className="bar-motif">
                                    <i style={{ height: `${8 + (idx % 3) * 4}px` }} />
                                    <i style={{ height: `${14 - (idx % 2) * 3}px` }} />
                                    <i style={{ height: `${10 + (idx % 4) * 2}px` }} />
                                    <i style={{ height: `${18 - (idx % 3) * 3}px` }} />
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--ink)] mb-3 tracking-normal">
                                        {project.title}
                                    </h3>

                                    <p
                                        className="text-xs sm:text-[13px] text-[var(--muted)] leading-[1.8] mb-6 line-clamp-4"
                                    >
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech Pills */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-0.5 text-[9px] font-mono tracking-wider text-[var(--muted)] border border-[#2a2523] bg-[var(--panel-alt)]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-5 pt-4 border-t border-[#2a2523] text-[10px] font-mono tracking-widest uppercase">
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-[var(--maroon-bright)] hover:underline transition-colors"
                                                aria-label={`Demo for ${project.title}`}
                                            >
                                                <span>&rarr; DEMO</span>
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-[var(--maroon-bright)] hover:underline transition-colors"
                                                aria-label={`GitHub repository for ${project.title}`}
                                            >
                                                <span>&rarr; GITHUB</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

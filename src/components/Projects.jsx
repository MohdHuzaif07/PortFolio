import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

const ProjectCard = ({ title, tech, description, link, featured = false, moduleId }) => (
    <motion.div
        variants={itemVariants}
        className={`relative flex flex-col justify-between p-6 md:p-7 transition-all duration-150
            ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
        style={{
            backgroundColor: featured ? 'var(--accent)' : 'var(--surface)',
            border: '3px solid var(--border)',
            boxShadow: 'var(--shadow-offset)',
            borderRadius: '2px',
        }}
        whileHover={{
            boxShadow: '7px 7px 0px var(--shadow)',
            x: -2,
            y: -2,
        }}
        whileTap={{ scale: 0.98 }}
    >
        {/* Top row: module ID + link */}
        <div className="flex items-center justify-between mb-4">
            <span
                className="module-id"
                style={{ color: featured ? 'rgba(0,0,0,0.6)' : 'var(--text-muted)', borderColor: featured ? 'rgba(0,0,0,0.5)' : 'var(--accent)' }}
            >
                {moduleId}
            </span>

            {featured && (
                <span
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        backgroundColor: '#111111',
                        color: 'var(--accent)',
                        padding: '2px 8px',
                        borderRadius: '1px',
                    }}
                >
                    Featured
                </span>
            )}

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-all duration-150"
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        backgroundColor: featured ? '#111111' : 'var(--surface-secondary)',
                        color: featured ? 'var(--accent)' : 'var(--text)',
                        border: `1.5px solid ${featured ? '#111111' : 'var(--border)'}`,
                        padding: '3px 10px',
                        borderRadius: '1px',
                    }}
                    aria-label={`Visit ${title} live demo`}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = featured ? '#333' : 'var(--accent)'; e.currentTarget.style.color = '#111111'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = featured ? '#111111' : 'var(--surface-secondary)'; e.currentTarget.style.color = featured ? 'var(--accent)' : 'var(--text)'; }}
                >
                    Live Demo <ExternalLink className="w-3 h-3" />
                </a>
            )}
        </div>

        {/* Title */}
        <h3
            className="mb-3 uppercase leading-tight"
            style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                color: featured ? '#111111' : 'var(--text)',
                letterSpacing: '-0.01em',
            }}
        >
            {title}
        </h3>

        {/* Divider */}
        <hr
            className="mb-4"
            style={{
                border: 'none',
                borderTop: `1.5px solid ${featured ? 'rgba(0,0,0,0.2)' : 'var(--border-subtle)'}`,
            }}
        />

        {/* Description */}
        <p
            className="mb-5 leading-relaxed flex-1"
            style={{
                color: featured ? 'rgba(0,0,0,0.75)' : 'var(--text-muted)',
                fontSize: '0.875rem',
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
            {tech.map((t, index) => (
                <span
                    key={index}
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.62rem',
                        fontWeight: 500,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        backgroundColor: featured ? 'rgba(0,0,0,0.12)' : 'var(--surface-secondary)',
                        color: featured ? '#111111' : 'var(--text)',
                        border: `1.5px solid ${featured ? 'rgba(0,0,0,0.25)' : 'var(--border)'}`,
                        padding: '2px 8px',
                        borderRadius: '1px',
                    }}
                >
                    {t}
                </span>
            ))}
        </div>

        {/* Status footer */}
        <div
            className="flex items-center gap-2 mt-4 pt-4"
            style={{ borderTop: `1.5px solid ${featured ? 'rgba(0,0,0,0.2)' : 'var(--border-subtle)'}` }}
        >
            <span className="status-online" style={{ backgroundColor: featured ? '#10A37F' : 'var(--success)' }} />
            <span
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: featured ? 'rgba(0,0,0,0.55)' : 'var(--text-muted)',
                }}
            >
                {link ? 'Deployed' : 'In Development'}
            </span>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full min-h-screen snap-always snap-center flex flex-col justify-center items-center px-4 py-20 transition-colors duration-300"
            style={{ backgroundColor: 'var(--surface)' }}
        >
            {/* Section header */}
            <div className="max-w-7xl w-full mb-12 mx-auto">
                <div className="module-id mb-3">// SYS-PRJ-001</div>
                <h2 className="section-heading">Project Gallery</h2>
                <div className="accent-bar mt-3" style={{ maxWidth: '120px' }} />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl w-full mx-auto"
            >
                <ProjectCard
                    featured={true}
                    moduleId="MOD-PRJ-001"
                    title="Resume Builder"
                    description="A modern, client-side web application engineered to solve common document layout, pagination, and PDF distortion issues. Built with modular vanilla JavaScript (ES6+) and a pluggable template architecture with WYSIWYG real-time preview, dynamic off-screen pagination, Cropper.js image subsystem, and pixel-perfect vector A4 PDF export with zero server latency."
                    tech={['JavaScript (ES6+)', 'WYSIWYG', 'Cropper.js', 'DOM Sandboxing', 'Vector PDF Engine']}
                    link="https://resume-builder-mu-sand.vercel.app/"
                />

                <ProjectCard
                    featured={true}
                    moduleId="MOD-PRJ-002"
                    title="AI Health Chatbot"
                    description="An intelligent conversational agent providing context-aware guidance across Mental, Physical, and Nutritional wellness domains."
                    tech={['Python', 'GenAI', 'LLMs', 'React']}
                />

                <ProjectCard
                    moduleId="MOD-PRJ-003"
                    title="Neon-Drift"
                    description="A fast-paced, cyber-themed 2D endless runner where players manipulate gravity in real time to dodge procedurally generated obstacles, navigate anti-gravity anomaly zones, and compete with synthesized 8-bit sound effects."
                    tech={['Phaser 3', 'JavaScript', 'Web Audio API', 'HTML5 Canvas']}
                    link="https://gravity-game-tau.vercel.app/"
                />

                <ProjectCard
                    moduleId="MOD-PRJ-004"
                    title="AI Symptom Educator"
                    description="An educational tool that leverages AI to explain symptoms and provide preliminary awareness."
                    tech={['Google AI Studio', 'Prompt Engineering', 'GenAI']}
                    link="https://edu-health-puce.vercel.app/"
                />

                <ProjectCard
                    moduleId="MOD-PRJ-005"
                    title="Employee Portal"
                    description="A secure enterprise portal focusing on identity verification and access management."
                    tech={['MERN Stack', 'JWT', 'OAuth']}
                />

                <ProjectCard
                    moduleId="MOD-PRJ-006"
                    title="Voice-Assisted E-commerce"
                    description="An accessible shopping experience integrating voice commands for navigation and purchasing."
                    tech={['React', 'Web Speech API', 'Node.js']}
                />
            </motion.div>
        </section>
    );
};

export default Projects;

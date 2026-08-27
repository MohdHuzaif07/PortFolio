import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ProjectCard = ({ title, tech, description, link, featured = false }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className={`relative group overflow-hidden rounded-3xl p-8 md:p-10 border transition-all duration-300 flex flex-col justify-between
        ${featured
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-transparent md:col-span-2 lg:col-span-2 shadow-xl shadow-indigo-200 dark:shadow-none'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 shadow-sm hover:shadow-md'
            }
      `}
    >
        <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-50 ${featured ? 'bg-white/20' : 'bg-indigo-500/10 dark:bg-cyan-400/10'}`} />

        <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-4 gap-2">
                    {featured ? (
                        <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                            Featured
                        </span>
                    ) : (
                        <span />
                    )}

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
                                featured
                                    ? 'bg-white/20 hover:bg-white text-white hover:text-indigo-600 shadow-sm'
                                    : 'bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-cyan-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 border border-indigo-100 dark:border-slate-600'
                            }`}
                            aria-label={`Visit ${title} live demo`}
                        >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    )}
                </div>

                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${featured ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>
                    {title}
                </h3>
                <p className={`text-base md:text-lg mb-6 leading-relaxed ${featured ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
                    {description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {tech.map((t, index) => (
                    <span
                        key={index}
                        className={`text-xs md:text-sm font-medium px-3 py-1 rounded-full 
                ${featured
                                ? 'bg-white/15 text-white border border-white/20 backdrop-blur-md'
                                : 'bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-slate-700 dark:text-cyan-400 dark:border-cyan-900/50'
                            }`}
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="w-full min-h-screen snap-always snap-center flex flex-col justify-center items-center px-4 py-20 bg-white dark:bg-black transition-colors duration-500">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-800 dark:text-slate-100">
                Project Gallery
            </h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mx-auto"
            >
                <ProjectCard
                    featured={true}
                    title="Resume Builder"
                    description="A modern, client-side web application engineered to solve common document layout, pagination, and PDF distortion issues. Built with modular vanilla JavaScript (ES6+) and a pluggable template architecture with WYSIWYG real-time preview, dynamic off-screen pagination, Cropper.js image subsystem, and pixel-perfect vector A4 PDF export with zero server latency."
                    tech={['JavaScript (ES6+)', 'WYSIWYG', 'Cropper.js', 'DOM Sandboxing', 'Vector PDF Engine']}
                    link="https://resume-builder-mu-sand.vercel.app/"
                />

                <ProjectCard
                    featured={true}
                    title="AI Health Chatbot"
                    description="An intelligent conversational agent providing context-aware guidance across Mental, Physical, and Nutritional wellness domains."
                    tech={['Python', 'GenAI', 'LLMs', 'React']}
                />

                <ProjectCard
                    title="Neon-Drift"
                    description="A fast-paced, cyber-themed 2D endless runner where players manipulate gravity in real time to dodge procedurally generated obstacles, navigate anti-gravity anomaly zones, and compete with synthesized 8-bit sound effects."
                    tech={['Phaser 3', 'JavaScript', 'Web Audio API', 'HTML5 Canvas']}
                    link="https://gravity-game-tau.vercel.app/"
                />

                <ProjectCard
                    title="AI Symptom Educator"
                    description="An educational tool that leverages AI to explain symptoms and provide preliminary awareness."
                    tech={['Google AI Studio', 'Prompt Engineering', 'GenAI']}
                    link="https://edu-health-puce.vercel.app/"
                />

                <ProjectCard
                    title="Employee Portal"
                    description="A secure enterprise portal focusing on identity verification and access management."
                    tech={['MERN Stack', 'JWT', 'OAuth']}
                />

                <ProjectCard
                    title="Voice-Assisted E-commerce"
                    description="An accessible shopping experience integrating voice commands for navigation and purchasing."
                    tech={['React', 'Web Speech API', 'Node.js']}
                />
            </motion.div>
        </section>
    );
};

export default Projects;

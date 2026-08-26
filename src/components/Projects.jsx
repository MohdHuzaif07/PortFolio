import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ProjectCard = ({ title, tech, description, featured = false }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className={`relative group overflow-hidden rounded-3xl p-8 md:p-10 border transition-all duration-300 
        ${featured
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-transparent md:col-span-2 lg:col-span-2 shadow-xl shadow-indigo-200 dark:shadow-none'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 shadow-sm hover:shadow-md'
            }
      `}
    >
        <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-50 ${featured ? 'bg-white/20' : 'bg-indigo-500/10 dark:bg-cyan-400/10'}`} />

        <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
                {featured && (
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-sm">
                        Featured
                    </span>
                )}
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${featured ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>
                    {title}
                </h3>
                <p className={`text-base md:text-lg mb-6 ${featured ? 'text-white/80' : 'text-slate-600 dark:text-slate-400'}`}>
                    {description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tech.map((t, index) => (
                    <span
                        key={index}
                        className={`text-xs md:text-sm font-medium px-3 py-1 rounded-full 
                ${featured
                                ? 'bg-white/10 text-white border border-white/20 backdrop-blur-md'
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
                    title="Community Complaint Management System"
                    description="A robust system addressing local community issues seamlessly. Architecture based on enterprise standards ensuring high availability."
                    tech={['Java', 'Spring Boot', 'MySQL']}
                />

                <ProjectCard
                    featured={true}
                    title="AI Health Chatbot"
                    description="An intelligent conversational agent providing context-aware guidance across Mental, Physical, and Nutritional wellness domains."
                    tech={['Python', 'GenAI', 'LLMs', 'React']}
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

                <ProjectCard
                    title="AI Symptom Educator"
                    description="An educational tool that leverages AI to explain symptoms and provide preliminary awareness."
                    tech={['Google AI Studio', 'Prompt Engineering']}
                />

                {/* Placeholder to make grid symmetric if needed or just span the last one */}
                <div className="hidden lg:block lg:col-span-1 border border-dashed border-slate-300 dark:border-slate-700 rounded-3xl p-8 flex items-center justify-center opacity-50">
                    <p className="text-slate-400 dark:text-slate-500 text-center font-medium">More building<br />in progress...</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;

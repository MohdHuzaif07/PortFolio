import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Wrench } from 'lucide-react';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="skills" className="w-full min-h-screen snap-always snap-center flex flex-col justify-center items-center px-4 py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-800 dark:text-slate-100">
                Technical Skills
            </h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full"
            >
                {/* Languages */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-indigo-500 dark:border-t-cyan-400">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-slate-700 flex items-center justify-center mb-6">
                        <Code2 className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Languages</h3>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-medium">
                        <li>Java</li>
                        <li>C & C++</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                    </ul>
                </motion.div>

                {/* Web Technologies */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-indigo-500 dark:border-t-cyan-400 md:col-span-2 lg:col-span-1">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-slate-700 flex items-center justify-center mb-6">
                        <Globe className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Web</h3>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-medium grid grid-cols-2 gap-x-2 lg:block">
                        <li>React</li>
                        <li>Node.js & Express.js</li>
                        <li>MongoDB (MERN)</li>
                        <li>Spring Boot</li>
                        <li>REST APIs</li>
                    </ul>
                </motion.div>

                {/* Core CS */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-indigo-500 dark:border-t-cyan-400">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-slate-700 flex items-center justify-center mb-6">
                        <Database className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Core CS</h3>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-medium">
                        <li>Data Structures & Algorithms <span className="block text-xs text-indigo-500 dark:text-cyan-500 mt-1">(660+ solved)</span></li>
                        <li>MySQL</li>
                    </ul>
                </motion.div>

                {/* Tools */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-indigo-500 dark:border-t-cyan-400 md:col-span-1 lg:col-span-1">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-slate-700 flex items-center justify-center mb-6">
                        <Wrench className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Tools</h3>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-medium">
                        <li>Git & GitHub</li>
                        <li>VS Code</li>
                        <li>Google AI Studio</li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;

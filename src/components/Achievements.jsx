import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileText, GraduationCap } from 'lucide-react';

const Achievements = () => {
    return (
        <section id="achievements" className="w-full min-h-screen snap-always snap-center flex flex-col justify-center items-center px-4 py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-800 dark:text-slate-100">
                Milestones & Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
                {/* 660+ Problems */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-slate-700 flex items-center justify-center mb-6 neon-glow-light dark:neon-glow-dark">
                        <Trophy className="w-8 h-8 text-indigo-600 dark:text-cyan-400" />
                    </div>
                    <motion.h3
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                        className="text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2"
                    >
                        660+
                    </motion.h3>
                    <p className="text-lg font-medium text-slate-600 dark:text-slate-400">Problems Solved</p>
                    <p className="text-sm text-slate-500 mt-4">Across LeetCode, CodeChef, GFG & HackerRank</p>
                </motion.div>

                {/* Patent */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-slate-700 flex items-center justify-center mb-6 neon-glow-light dark:neon-glow-dark">
                        <FileText className="w-8 h-8 text-indigo-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Patent Filed</h3>
                    <p className="text-lg font-medium text-indigo-600 dark:text-cyan-400 mt-2">
                        "Purpose-Driven Local LLM Evaluator"
                    </p>
                    <p className="text-sm text-slate-500 mt-6">Innovation in AI Evaluation</p>
                </motion.div>

                {/* CGPA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-slate-700 flex items-center justify-center mb-6 neon-glow-light dark:neon-glow-dark">
                        <GraduationCap className="w-8 h-8 text-indigo-600 dark:text-cyan-400" />
                    </div>
                    <motion.h3
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                        className="text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2"
                    >
                        9.25
                    </motion.h3>
                    <p className="text-lg font-medium text-slate-600 dark:text-slate-400">CGPA</p>
                    <p className="text-sm text-slate-500 mt-4">Easwari Engineering College</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;

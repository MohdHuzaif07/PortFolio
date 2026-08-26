import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="w-full min-h-screen snap-always snap-center flex flex-col justify-center items-center px-4 py-20 bg-white dark:bg-black transition-colors duration-500">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-800 dark:text-slate-100">
                    Experience & Impact
                </h2>

                <div className="relative border-l-2 border-indigo-200 dark:border-cyan-900 ml-4 md:ml-8 pl-8 md:pl-12 py-4">
                    <div className="absolute w-8 h-8 rounded-full bg-indigo-100 border-4 border-indigo-500 dark:bg-slate-800 dark:border-cyan-400 -left-[17px] top-6 flex items-center justify-center neon-glow-light dark:neon-glow-dark">
                        <Leaf className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                                    Green Internship
                                </h3>
                                <h4 className="text-lg text-indigo-600 dark:text-cyan-400 font-medium">
                                    1M1B (1 Million for 1 Billion)
                                </h4>
                            </div>
                            <span className="text-sm md:text-base text-indigo-600 dark:text-cyan-400 mt-2 md:mt-0 font-medium bg-indigo-50 dark:bg-cyan-950/50 border border-indigo-100 dark:border-cyan-900 px-4 py-1.5 rounded-full inline-block">
                                Sustainability & Problem-Solving
                            </span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            Engaged in a purpose-driven internship focused on global sustainability challenges. Developed core problem-solving methodologies to tackle real-world climate and operational issues. The experience honed my ability to fuse technological solutions with sustainable, long-term impact strategies.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;

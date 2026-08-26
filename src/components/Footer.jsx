import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full snap-always snap-center flex flex-col items-center justify-center bg-white dark:bg-black py-16 px-4 border-t border-slate-100 dark:border-slate-800/50 transition-colors duration-500 min-h-[300px]">
            <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center gap-10">

                {/* Social Links */}
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/mohammedhuzaifa-j" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors transform hover:scale-110">
                        <Linkedin className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/MohdHuzaif07" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
                        <Github className="w-8 h-8" />
                    </a>
                    <a href="https://leetcode.com/u/MohdHuzaif07/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-500 transition-colors transform hover:scale-110">
                        <Code className="w-8 h-8" />
                    </a>
                </div>

                {/* Language Skills Badge */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                        Languages Known
                    </h4>
                    <div className="flex flex-wrap justify-center md:justify-end gap-2">
                        {['English', 'Hindi', 'Urdu', 'Tamil', 'Japanese (N5)'].map((lang, idx) => (
                            <span key={idx} className="px-4 py-1.5 bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-xs rounded-full font-medium border border-slate-200 dark:border-slate-700/80 shadow-sm">
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            <div className="mt-16 text-sm font-medium text-slate-400 dark:text-slate-600">
                &copy; {new Date().getFullYear()} Mohammed Huzaifa J.
            </div>
        </footer>
    );
};

export default Footer;

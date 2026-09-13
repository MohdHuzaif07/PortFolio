import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
    return (
        <footer
            className="w-full snap-always snap-center flex flex-col items-center justify-center py-16 px-4 transition-colors duration-300 min-h-[300px]"
            style={{
                backgroundColor: 'var(--surface)',
                borderTop: '3px solid var(--border)',
            }}
        >
            <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center gap-10">

                {/* Social Links — industrial button blocks */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/mohammedhuzaifa-j"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 transition-all duration-150 flex items-center justify-center"
                        style={{
                            backgroundColor: 'var(--surface-secondary)',
                            border: '2px solid var(--border)',
                            boxShadow: '3px 3px 0px var(--shadow)',
                            borderRadius: '2px',
                            color: 'var(--text)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '5px 5px 0px var(--shadow)';
                            e.currentTarget.style.transform = 'translate(-2px, -2px)';
                            e.currentTarget.style.color = 'var(--accent)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '3px 3px 0px var(--shadow)';
                            e.currentTarget.style.transform = 'translate(0, 0)';
                            e.currentTarget.style.color = 'var(--text)';
                        }}
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a
                        href="https://github.com/MohdHuzaif07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 transition-all duration-150 flex items-center justify-center"
                        style={{
                            backgroundColor: 'var(--surface-secondary)',
                            border: '2px solid var(--border)',
                            boxShadow: '3px 3px 0px var(--shadow)',
                            borderRadius: '2px',
                            color: 'var(--text)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '5px 5px 0px var(--shadow)';
                            e.currentTarget.style.transform = 'translate(-2px, -2px)';
                            e.currentTarget.style.color = 'var(--accent)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '3px 3px 0px var(--shadow)';
                            e.currentTarget.style.transform = 'translate(0, 0)';
                            e.currentTarget.style.color = 'var(--text)';
                        }}
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a
                        href="https://leetcode.com/u/MohdHuzaif07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 transition-all duration-150 flex items-center justify-center"
                        style={{
                            backgroundColor: 'var(--surface-secondary)',
                            border: '2px solid var(--border)',
                            boxShadow: '3px 3px 0px var(--shadow)',
                            borderRadius: '2px',
                            color: 'var(--text)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '5px 5px 0px var(--shadow)';
                            e.currentTarget.style.transform = 'translate(-2px, -2px)';
                            e.currentTarget.style.color = 'var(--accent)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '3px 3px 0px var(--shadow)';
                            e.currentTarget.style.transform = 'translate(0, 0)';
                            e.currentTarget.style.color = 'var(--text)';
                        }}
                        aria-label="LeetCode Profile"
                    >
                        <Code className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </div>

                {/* Language Skills Badge */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <h4
                        className="text-xs uppercase tracking-widest mb-3"
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            color: 'var(--text-muted)',
                            fontWeight: 600,
                        }}
                    >
                        // Natural Languages
                    </h4>
                    <div className="flex flex-wrap justify-center md:justify-end gap-2">
                        {['English', 'Hindi', 'Urdu', 'Tamil'].map((lang, idx) => (
                            <span key={idx} className="brutalist-tag">
                                {lang}
                            </span>
                        ))}
                        {/* Japanese N5 highlighted with subtle elegance */}
                        <span
                            className="brutalist-tag-accent flex items-center gap-1"
                            title="JLPT N5 Proficiency"
                        >
                            <span style={{ fontSize: '0.65rem' }}>JP //</span> Japanese (N5)
                        </span>
                    </div>
                </div>

            </div>

            <div
                className="mt-14 text-xs tracking-wider"
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: 'var(--text-muted)',
                }}
            >
                SYS-TERMINAL &copy; {new Date().getFullYear()} MOHAMMED HUZAIFA J. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
};

export default Footer;

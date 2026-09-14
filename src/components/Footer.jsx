import React from 'react';
import { Linkedin, Github, Code, Languages, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="w-full pt-24 pb-16" style={{ backgroundColor: 'var(--void)' }}>
            <div className="editorial-wrap">
                {/* Section Header */}
                <div className="section-heading-group">
                    <span className="section-index">06</span>
                    <h2 className="section-title">GET IN TOUCH</h2>
                    <div className="section-rule" />
                </div>

                {/* Intro paragraph */}
                <p
                    className="text-sm sm:text-base leading-relaxed mb-12 max-w-2xl font-normal"
                    style={{ color: 'var(--muted)', lineHeight: '1.85' }}
                >
                    Feel free to connect with me through any of the platforms below. I'm always open to discussing new opportunities, innovative software projects, AI research, and engineering collaborations.
                </p>

                {/* 4-Column Minimal Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#2a2523] mb-20">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/mohammedhuzaifa-j"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card group"
                    >
                        <Linkedin className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--maroon-bright)] transition-colors" />
                        <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--maroon-bright)] transition-colors flex items-center gap-1">
                            LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <small className="text-[11px] font-mono text-[var(--muted)] break-all">
                            /in/mohammedhuzaifa-j
                        </small>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/MohdHuzaif07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card group"
                    >
                        <Github className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--maroon-bright)] transition-colors" />
                        <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--maroon-bright)] transition-colors flex items-center gap-1">
                            GitHub <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <small className="text-[11px] font-mono text-[var(--muted)] break-all">
                            github.com/MohdHuzaif07
                        </small>
                    </a>

                    {/* LeetCode */}
                    <a
                        href="https://leetcode.com/u/MohdHuzaif07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card group"
                    >
                        <Code className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--maroon-bright)] transition-colors" />
                        <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--maroon-bright)] transition-colors flex items-center gap-1">
                            LeetCode <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <small className="text-[11px] font-mono text-[var(--muted)] break-all">
                            660+ Solved &bull; Ambassador
                        </small>
                    </a>

                    {/* Languages & Communication */}
                    <div className="contact-card lg:border-r-0">
                        <Languages className="w-4 h-4 text-[var(--maroon-bright)]" />
                        <span className="text-sm font-semibold text-[var(--ink)]">
                            Languages
                        </span>
                        <small className="text-[11px] font-mono text-[var(--muted)] leading-relaxed">
                            English, Hindi, Tamil, Urdu &bull; Japanese (JLPT N5)
                        </small>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className="pt-8 border-t border-[#2a2523] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-[var(--muted)] uppercase">
                    <div>
                        &copy; {new Date().getFullYear()} MOHAMMED HUZAIFA J. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="status-online" />
                        <span>SYS // V2.0 PRODUCTION READY</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

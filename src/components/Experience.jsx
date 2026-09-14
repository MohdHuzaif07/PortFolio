import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Leaf } from 'lucide-react';

const Experience = () => {
    return (
        <section
            id="experience"
            className="w-full py-24 md:py-32"
            style={{ backgroundColor: 'var(--void)' }}
        >
            <div className="editorial-wrap">
                {/* Section Header */}
                <div className="section-heading-group">
                    <span className="section-index">02</span>
                    <h2 className="section-title">EXPERIENCE</h2>
                    <div className="section-rule" />
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto pt-6">
                    <div
                        className="relative ml-4 md:ml-6 pl-8 md:pl-12 py-2"
                        style={{ borderLeft: '1px solid var(--maroon)' }}
                    >
                        {/* Timeline Node Marker */}
                        <div
                            className="absolute -left-[15px] top-0 w-[29px] h-[29px] grid place-items-center"
                            style={{
                                backgroundColor: 'var(--void)',
                                border: '1px solid var(--maroon)',
                                color: 'var(--maroon-bright)',
                            }}
                        >
                            <Leaf className="w-3.5 h-3.5" />
                        </div>

                        {/* Experience Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="pb-12"
                        >
                            {/* Metadata */}
                            <div className="text-[10px] font-mono tracking-[0.14em] uppercase text-[var(--maroon-bright)] mb-3 flex flex-wrap items-center gap-2">
                                <span>INTERNSHIP</span>
                                <span>/</span>
                                <span>1M1B (1 MILLION FOR 1 BILLION)</span>
                            </div>

                            {/* Role Heading */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--ink)] mb-1">
                                Green Intern
                            </h3>

                            {/* Organization & Domain */}
                            <div className="text-xs font-mono text-[var(--muted)] mb-4">
                                Sustainability &bull; Global Climate Initiatives &bull; Problem Solving
                            </div>

                            {/* Description */}
                            <p
                                className="text-sm sm:text-[15px] leading-[1.85] text-[var(--muted)] mb-5 max-w-3xl"
                                style={{ lineHeight: '1.85' }}
                            >
                                Engaged in a purpose-driven internship focused on global sustainability challenges. Developed core problem-solving methodologies to tackle real-world climate and operational issues. The experience honed my ability to fuse technological solutions with sustainable, long-term impact strategies.
                            </p>

                            {/* Highlight Tag */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2a2523] bg-[var(--panel)] text-[11px] font-mono tracking-wider text-[var(--maroon-bright)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--maroon-bright)]" />
                                <span>SUSTAINABILITY &amp; PROBLEM-SOLVING</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

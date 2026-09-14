import React from 'react';
import { motion } from 'framer-motion';
import { Check, Globe2, Award, Sparkles } from 'lucide-react';

const languagesList = [
    {
        name: 'English',
        level: 'Professional Working Proficiency',
        nativeName: 'English',
        note: 'Primary medium for technical documentation, algorithmic mentoring, and global software engineering.',
    },
    {
        name: 'Japanese',
        level: 'JLPT N5 Certified (N4 Ongoing)',
        nativeName: '日本語',
        featured: true,
        note: 'Officially JLPT N5 certified; actively preparing for N4. Aiming for a software engineering career in the Japanese tech ecosystem.',
    },
    {
        name: 'Tamil',
        level: 'Native / Bilingual',
        nativeName: 'தமிழ்',
        note: 'Fluent conversational and written communication.',
    },
    {
        name: 'Hindi',
        level: 'Native / Bilingual',
        nativeName: 'हिन्दी',
        note: 'Full fluency in verbal and written technical collaboration.',
    },
    {
        name: 'Urdu',
        level: 'Native / Bilingual',
        nativeName: 'اردو',
        note: 'Native proficiency with rich linguistic and cultural fluency.',
    },
];

const Languages = () => {
    return (
        <section
            id="languages"
            className="w-full py-24 md:py-32"
            style={{ backgroundColor: 'var(--void)' }}
        >
            <div className="editorial-wrap">
                {/* Section Header */}
                <div className="section-heading-group">
                    <span className="section-index">06</span>
                    <h2 className="section-title">LANGUAGES</h2>
                    <div className="section-rule" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-stretch">
                    {/* Featured Japanese Spotlight Card (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 p-7 md:p-8 flex flex-col justify-between border border-[#2a2523] scanline-overlay relative"
                        style={{ backgroundColor: 'var(--panel)' }}
                    >
                        <div>
                            {/* Verified Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="verified-badge">
                                    <Check className="w-3 h-3 text-[var(--maroon-bright)]" />
                                    <span>JLPT N5 CERTIFIED</span>
                                </span>
                                <span className="text-[9px] font-mono tracking-widest text-[var(--maroon-bright)] uppercase">
                                    N4 ONGOING
                                </span>
                            </div>

                            {/* Kanji Accent Display */}
                            <div className="mb-4">
                                <span
                                    className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] block mb-1"
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    日本語
                                </span>
                                <span className="text-xs font-mono tracking-widest text-[var(--maroon-bright)] uppercase">
                                    JAPANESE LANGUAGE PROFICIENCY
                                </span>
                            </div>

                            <p className="text-xs sm:text-[13px] text-[var(--muted)] leading-[1.85] mb-6">
                                Successfully passed the Japanese-Language Proficiency Test (N5) and currently preparing for N4. Deeply fascinated by Japanese culture, society, and the cutting-edge technology ecosystem. Aspiring to build a long-term software engineering career in Japan by pairing strong technical abilities with continuous linguistic mastery.
                            </p>
                        </div>

                        <div className="pt-5 border-t border-[#2a2523] flex items-center justify-between">
                            <span className="text-[10px] font-mono tracking-widest text-[var(--ink)] flex items-center gap-1.5">
                                <Globe2 className="w-3.5 h-3.5 text-[var(--maroon-bright)]" />
                                <span>TARGET // JAPAN TECH CAREER</span>
                            </span>
                            <span className="w-2 h-2 rounded-full bg-[var(--maroon-bright)]" />
                        </div>
                    </motion.div>

                    {/* All Languages Matrix (7 cols) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {languagesList.map((lang, idx) => (
                            <motion.div
                                key={lang.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className={`p-5 flex flex-col justify-between border transition-all duration-200 ${
                                    lang.featured
                                        ? 'border-[var(--maroon)] bg-[rgba(140,36,56,0.06)]'
                                        : 'border-[#2a2523] bg-[var(--panel)] hover:border-[var(--line)]'
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-base font-semibold text-[var(--ink)]">
                                            {lang.name}
                                        </h3>
                                        <span className="text-xs font-mono text-[var(--maroon-bright)]">
                                            {lang.nativeName}
                                        </span>
                                    </div>

                                    <div className="text-[11px] font-mono text-[var(--maroon-bright)] mb-2.5 uppercase tracking-wider">
                                        {lang.level}
                                    </div>

                                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                                        {lang.note}
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-[#2a2523] flex items-center justify-between text-[9px] font-mono tracking-widest text-[var(--muted)]">
                                    <span>LANG // 0{idx + 1}</span>
                                    <span className="text-[var(--maroon-bright)]">&bull; ACTIVE</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Languages;

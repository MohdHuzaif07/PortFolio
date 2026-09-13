import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Wrench } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillCategory = ({ icon: Icon, label, children, index }) => (
    <motion.div
        variants={itemVariants}
        className="brutalist-card p-6 flex flex-col gap-4"
    >
        {/* Accent top bar */}
        <div className="accent-bar -mt-6 -mx-6 mb-2" style={{ margin: '-24px -24px 8px -24px', borderRadius: '2px 2px 0 0' }} />

        {/* Header */}
        <div className="flex items-center gap-3">
            <div className="icon-box" style={{ color: 'var(--accent)' }}>
                <Icon className="w-4 h-4" />
            </div>
            <div>
                <div className="sys-label" style={{ fontSize: '0.6rem' }}>Module {String(index).padStart(2, '0')}</div>
                <h3
                    style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                        color: 'var(--text)',
                    }}
                >
                    {label}
                </h3>
            </div>
        </div>

        <hr className="sys-divider" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
            {children}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section
            id="skills"
            className="w-full min-h-screen snap-always snap-center flex flex-col justify-center items-center px-4 py-20 transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            {/* Section header */}
            <div className="max-w-6xl w-full mb-12">
                <div className="module-id mb-3">// SYS-SKL-001</div>
                <h2 className="section-heading">Technical Stack</h2>
                <div className="accent-bar mt-3" style={{ maxWidth: '120px' }} />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl w-full"
            >
                {/* Languages */}
                <SkillCategory icon={Code2} label="Languages" index={1}>
                    {['Java', 'C', 'C++', 'Python', 'JavaScript'].map(s => (
                        <span key={s} className="brutalist-tag">{s}</span>
                    ))}
                </SkillCategory>

                {/* Web Technologies */}
                <SkillCategory icon={Globe} label="Web" index={2}>
                    {['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN', 'Spring Boot', 'REST APIs'].map(s => (
                        <span key={s} className="brutalist-tag">{s}</span>
                    ))}
                </SkillCategory>

                {/* Core CS */}
                <SkillCategory icon={Database} label="Core CS" index={3}>
                    <span className="brutalist-tag">DSA</span>
                    <span
                        className="brutalist-tag-accent"
                        title="660+ problems solved across LeetCode, CodeChef, GFG & HackerRank"
                    >
                        660+ Solved
                    </span>
                    <span className="brutalist-tag">MySQL</span>
                </SkillCategory>

                {/* Tools */}
                <SkillCategory icon={Wrench} label="Tools" index={4}>
                    {['Git', 'GitHub', 'VS Code', 'Google AI Studio'].map(s => (
                        <span key={s} className="brutalist-tag">{s}</span>
                    ))}
                </SkillCategory>
            </motion.div>
        </section>
    );
};

export default Skills;

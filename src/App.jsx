import React, { useState, useEffect } from 'react';
import {
    Hero,
    Experience,
    Skills,
    Projects,
    Achievements,
    Footer,
    CustomCursor
} from './components';
import { Sun, Moon } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
    const [isDark, setIsDark] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <main
            className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth transition-colors duration-300 relative"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text)' }}
        >
            <CustomCursor />

            {/* Scroll progress bar — hard-edged, accent colored */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
                style={{
                    scaleX,
                    backgroundColor: 'var(--accent)',
                    borderBottom: '1px solid var(--border)',
                }}
            />

            {/* Theme toggle — square brutalist button */}
            <button
                onClick={toggleTheme}
                className="fixed top-5 right-5 md:top-7 md:right-7 z-50 p-2.5 md:p-3 transition-all duration-150"
                style={{
                    backgroundColor: 'var(--surface)',
                    border: '2px solid var(--border)',
                    boxShadow: '3px 3px 0px var(--shadow)',
                    color: 'var(--accent)',
                    borderRadius: '2px',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '5px 5px 0px var(--shadow)';
                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '3px 3px 0px var(--shadow)';
                    e.currentTarget.style.transform = 'translate(0, 0)';
                }}
                onMouseDown={e => {
                    e.currentTarget.style.boxShadow = '1px 1px 0px var(--shadow)';
                    e.currentTarget.style.transform = 'translate(2px, 2px)';
                }}
                onMouseUp={e => {
                    e.currentTarget.style.boxShadow = '3px 3px 0px var(--shadow)';
                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                }}
                aria-label="Toggle Theme"
            >
                {isDark
                    ? <Sun className="w-5 h-5 md:w-6 md:h-6" />
                    : <Moon className="w-5 h-5 md:w-6 md:h-6" />
                }
            </button>

            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Achievements />
            <Footer />
        </main>
    );
}

export default App;

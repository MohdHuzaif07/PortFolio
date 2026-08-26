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
        <main className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans transition-colors duration-500 selection:bg-indigo-500/30 dark:selection:bg-cyan-400/30 relative">
            <CustomCursor />
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 md:h-1.5 bg-indigo-600 dark:bg-cyan-400 origin-left z-[100] drop-shadow-md"
                style={{ scaleX }}
            />

            <button
                onClick={toggleTheme}
                className="fixed top-6 right-6 md:top-8 md:right-8 z-50 p-3 lg:p-4 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl text-indigo-600 dark:text-cyan-400 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                aria-label="Toggle Theme"
            >
                {isDark ? <Sun className="w-6 h-6 md:w-8 md:h-8" /> : <Moon className="w-6 h-6 md:w-8 md:h-8" />}
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

import React, { useState, useEffect } from 'react';
import {
    Navbar,
    Hero,
    Experience,
    Skills,
    Projects,
    Achievements,
    Footer,
    CustomCursor
} from './components';

function App() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                setScrollProgress(window.scrollY / totalHeight);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="site-shell min-h-screen w-full relative" style={{ backgroundColor: 'var(--void)', color: 'var(--ink)' }}>
            {/* Ambient Cursor Halo Glow */}
            <CustomCursor />

            {/* Top Fixed Navigation Bar */}
            <Navbar scrollProgress={scrollProgress} />

            {/* Main Content Sections */}
            <main>
                <Hero />
                <Experience />
                <Skills />
                <Projects />
                <Achievements />
            </main>

            {/* Contact & Editorial Footer */}
            <Footer />
        </div>
    );
}

export default App;

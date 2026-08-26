import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // 16 is half the width/height of the cursor
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const mouseLeave = () => setIsVisible(false);
        const mouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseleave', mouseLeave);
        document.body.addEventListener('mouseenter', mouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseleave', mouseLeave);
            document.body.removeEventListener('mouseenter', mouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    if (window.innerWidth < 768) return null; // Avoid rendering on mobile/touch screens

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-indigo-500/50 dark:border-cyan-400/50 pointer-events-none z-[100] mix-blend-difference hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: isVisible ? 1 : 0
            }}
        />
    );
};

export default CustomCursor;

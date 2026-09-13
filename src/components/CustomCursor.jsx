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
            cursorX.set(e.clientX - 14);
            cursorY.set(e.clientY - 14);
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

    if (window.innerWidth < 768) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: isVisible ? 1 : 0,
                width: '28px',
                height: '28px',
                border: '2px solid var(--accent)',
                borderRadius: '2px',
                mixBlendMode: 'difference',
            }}
        />
    );
};

export default CustomCursor;

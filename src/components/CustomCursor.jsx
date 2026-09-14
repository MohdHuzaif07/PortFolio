import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Halo position (440px wide halo centered on cursor)
    const cursorX = useMotionValue(-500);
    const cursorY = useMotionValue(-500);

    const springConfig = { damping: 30, stiffness: 200, mass: 0.8 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 220);
            cursorY.set(e.clientY - 220);
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

    if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

    return (
        <motion.div
            className={`cursor-halo ${isVisible ? 'cursor-halo-active' : ''}`}
            style={{
                x: springX,
                y: springY,
            }}
        />
    );
};

export default CustomCursor;

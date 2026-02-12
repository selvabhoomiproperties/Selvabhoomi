import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isVisible, setIsVisible] = useState(false);

    // Trailing spring for the outer glow
    const springConfig = { damping: 40, stiffness: 400 };
    const trailX = useSpring(cursorX, springConfig);
    const trailY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);

        const attachListeners = () => {
            const hoverables = document.querySelectorAll('a, button, input, textarea, [role="button"]');
            hoverables.forEach((el) => {
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        };

        attachListeners();

        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            observer.disconnect();
        };
    }, [cursorX, cursorY, isVisible]);

    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            {/* Trailing Glow */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full pointer-events-none z-[9998] blur-3xl"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#10b981]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovered ? 4 : 1,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            />
        </>
    );
}

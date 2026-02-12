import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    width?: 'fit-content' | '100%';
}

export default function RevealOnScroll({ children, className, delay = 0.25, width = 'fit-content' }: RevealOnScrollProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <div ref={ref} style={{ width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: delay }}
                className={cn(className)}
            >
                {children}
            </motion.div>
        </div>
    );
}

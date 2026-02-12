import { motion } from 'framer-motion';

export default function CosmicBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#030712]">
            {/* Primary Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#064e3b_0%,_transparent_40%),radial-gradient(circle_at_80%_80%,_#022c22_0%,_transparent_40%)] opacity-40"></div>

            {/* Moving Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-500/20 rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: Math.random() * 0.5,
                    }}
                    animate={{
                        y: [null, "-100%"],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 20,
                    }}
                />
            ))}

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] mix-blend-overlay"></div>
        </div>
    );
}

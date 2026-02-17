import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EditableText } from './ui/EditableContent';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Properties', path: '/properties' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 md:py-4' : 'py-4 md:py-8'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl px-4 sm:px-6 md:px-8 py-3 md:py-4' : 'px-3 sm:px-4 md:px-6 py-2'}`}>
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group relative z-10 transition-transform hover:scale-105 active:scale-95 min-w-0">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                                className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl p-2 shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-white/20"
                            >
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
                            </motion.div>
                            <EditableText
                                id="nav_brand_name"
                                content="SELVABHOOMI"
                                as="span"
                                className={`text-lg sm:text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300 whitespace-nowrap ${scrolled ? 'text-white' : 'text-black'}`}
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-1 lg:gap-2">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`px-4 lg:px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group ${isActive ? (scrolled ? 'text-white' : 'text-black') : (scrolled ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80')}`}
                                    >
                                        <EditableText id={`nav_link_${link.name}`} content={link.name} as="span" className="relative z-10" />
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-glow"
                                                className="absolute inset-0 bg-emerald-500/10 rounded-xl border border-emerald-500/20"
                                            />
                                        )}
                                        <span className={`absolute bottom-1 left-4 right-4 h-px bg-emerald-500 transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${isActive ? 'scale-x-100' : ''}`} />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative z-10 p-2.5 sm:p-3 text-gray-400 hover:text-white bg-white/5 rounded-xl border border-white/10"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute inset-x-6 top-24 md:hidden"
                    >
                        <div className="bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="text-xl font-black text-white hover:text-white/80 py-3 border-b border-white/5 last:border-0 italic uppercase tracking-tighter"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <EditableText id={`nav_link_mobile_${link.name}`} content={link.name} as="span" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

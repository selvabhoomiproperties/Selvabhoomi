import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/'; // Check if on home page

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Listings', path: '/listings' },
        { name: 'About Us', path: '/about' },
        // { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    // Determine if we should show the solid navbar (scrolled OR not on home page)
    const showSolid = isScrolled || !isHome;

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                showSolid ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className={cn("text-2xl font-bold font-heading", showSolid ? "text-primary-dark" : "text-white")}>
                            Selvabhoomi
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "font-medium transition-colors hover:text-accent",
                                    showSolid ? "text-neutral-900" : "text-white/90 hover:text-white",
                                    location.pathname === link.path && "text-accent font-semibold"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="tel:+919876543210" className={cn("flex items-center space-x-2 font-medium", showSolid ? "text-primary" : "text-white")}>
                            <Phone className="h-4 w-4" />
                            <span>+91 98765 43210</span>
                        </a>
                        <Link to="/list-property">
                            <Button variant={showSolid ? "primary" : "secondary"} size="sm">
                                List Your Property
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-current"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className={cn("h-6 w-6", showSolid ? "text-neutral-900" : "text-white")} />
                        ) : (
                            <Menu className={cn("h-6 w-6", showSolid ? "text-neutral-900" : "text-white")} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        "px-4 py-2 rounded-md hover:bg-neutral-100 transition-colors font-medium text-neutral-900",
                                        location.pathname === link.path && "bg-primary/10 text-primary"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-neutral-200">
                                <Link to="/list-property" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full justify-center" variant="primary">
                                        List Your Property
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

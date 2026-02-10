import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Selvabhoomi Properties" className="w-10 h-10 object-contain" />
                    <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Selvabhoomi Properties
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</Link>
                    <Link to="/properties" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Properties</Link>
                    <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About Us</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</Link>

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/properties"
                            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Properties
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
}

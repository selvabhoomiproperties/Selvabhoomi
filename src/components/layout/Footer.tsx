import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-white">Example Properties</h3>
                        <p className="text-neutral-400 mb-6">
                            Your trusted partner in agricultural land investments. We help you find the perfect farmland for your future.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
                            <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
                            <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
                            <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/listings" label="All Listings" />
                            <FooterLink to="/about" label="About Us" />
                            <FooterLink to="/blog" label="Blog" />
                            <FooterLink to="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Properties */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4 text-white">Properties</h4>
                        <ul className="space-y-2">
                            <FooterLink to="/listings?type=organic" label="Organic Farmland" />
                            <FooterLink to="/listings?type=investment" label="Investment Plots" />
                            <FooterLink to="/listings?type=resort" label="Farm Houses" />
                            <FooterLink to="/listings?location=tamil-nadu" label="Lands in Tamil Nadu" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-neutral-400">
                                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                                <span>123 Green Valley Road,<br />Agricultural District,<br />Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center space-x-3 text-neutral-400">
                                <Phone className="h-5 w-5 text-primary" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3 text-neutral-400">
                                <Mail className="h-5 w-5 text-primary" />
                                <span>info@selvabhoomi.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>© {new Date().getFullYear()} Selvabhoomi. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </a>
    );
}

function FooterLink({ to, label }: { to: string; label: string }) {
    return (
        <li>
            <Link to={to} className="text-neutral-400 hover:text-primary transition-colors block py-0.5">
                {label}
            </Link>
        </li>
    );
}

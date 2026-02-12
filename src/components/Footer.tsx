import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Shield, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteSettings } from '../hooks/useSiteSettings';
import RevealOnScroll from './ui/reveal-on-scroll';
import { EditableText } from './ui/EditableContent';

export default function Footer() {
    const { settings } = useSiteSettings();

    return (
        <footer className="relative bg-[#030712] pt-40 pb-20 px-6 md:px-8 lg:px-10 overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 mb-32">
                    <RevealOnScroll className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-10 group">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl p-2.5 border border-emerald-500/30 group-hover:border-emerald-500 transition-all duration-500 shadow-2xl">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
                            </div>
                            <EditableText id="footer_brand_name" content="SELVABHOOMI" as="span" className="text-2xl font-black tracking-tighter text-white uppercase italic px-1" />
                        </Link>
                        <EditableText
                            id="footer_brand_desc"
                            content='"Building a new dimension of land investment. Secure, transparent, and future-forward architecture for your legacy."'
                            as="p"
                            className="text-gray-500 leading-relaxed mb-10 max-w-sm italic font-light text-lg"
                        />
                        <div className="flex gap-5">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-black transition-all duration-500 shadow-xl group/icon"
                                >
                                    <Icon className="w-5 h-5 transition-transform group-hover/icon:scale-110" />
                                </a>
                            ))}
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.1}>
                        <h4 className="text-white font-black mb-10 text-xs uppercase tracking-[0.4em] italic flex items-center gap-3">
                            <span className="w-8 h-px bg-emerald-500/50"></span>
                            <EditableText id="footer_links_title" content="Quick Links" as="span" />
                        </h4>
                        <ul className="space-y-6">
                            {['Properties', 'About Us', 'Contact', 'Asset Terms', 'Privacy Protocol'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Properties' ? '/properties' : item === 'About Us' ? '/about' : item === 'Contact' ? '/contact' : '#'}
                                        className="text-gray-400 hover:text-emerald-400 transition-all flex items-center gap-4 group uppercase text-[10px] font-black tracking-widest"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 group-hover:scale-150 transition-all duration-500"></div>
                                        <EditableText id={`footer_link_${item.replace(/\s+/g, '_').toLowerCase()}`} content={item} as="span" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.2}>
                        <h4 className="text-white font-black mb-10 text-xs uppercase tracking-[0.4em] italic flex items-center gap-3">
                            <span className="w-8 h-px bg-emerald-500/50"></span>
                            <EditableText id="footer_matrix_title" content="Asset Matrix" as="span" />
                        </h4>
                        <ul className="space-y-6">
                            {['Residential Units', 'Macro Estates', 'Managed Protocols', 'Holographic Plans'].map((item) => (
                                <li key={item} className="text-gray-500 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest group cursor-default">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-emerald-500 transition-colors"></div>
                                    <EditableText id={`footer_matrix_${item.replace(/\s+/g, '_').toLowerCase()}`} content={item} as="span" />
                                </li>
                            ))}
                        </ul>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.3}>
                        <h4 className="text-white font-black mb-10 text-xs uppercase tracking-[0.4em] italic flex items-center gap-3">
                            <span className="w-8 h-px bg-emerald-500/50"></span>
                            <EditableText id="footer_contact_title" content="Contact Node" as="span" />
                        </h4>
                        <ul className="space-y-8">
                            <li className="flex items-start gap-5 group">
                                <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
                                    <MapPin className="w-5 h-5 text-emerald-400" />
                                </div>
                                <EditableText id="footer_address" content="123, Green Tech Park, OMR, Chennai, Tamil Nadu - 600096" as="span" className="text-gray-500 text-sm leading-relaxed italic font-light" />
                            </li>
                            <li className="flex items-center gap-5 group">
                                <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
                                    <Phone className="w-5 h-5 text-emerald-400" />
                                </div>
                                <EditableText
                                    id="contact_phone"
                                    content={settings.contact_phone || '+91 91 76002 530'}
                                    as="span"
                                    className="text-white font-black text-sm tracking-widest"
                                />
                            </li>
                            <li className="flex items-center gap-5 group">
                                <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
                                    <Mail className="w-5 h-5 text-emerald-400" />
                                </div>
                                <EditableText
                                    id="contact_email"
                                    content={settings.contact_email || 'admin@selvabhoomiproperties.in'}
                                    as="span"
                                    className="text-white font-black text-sm tracking-wider underline underline-offset-8 truncate"
                                />
                            </li>
                        </ul>
                    </RevealOnScroll>
                </div>

                <RevealOnScroll delay={0.5} className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <EditableText id="footer_copy" content="&copy; 2024 SELVABHOOMI PROPERTIES. ARCHITECTS OF LEGACY." as="p" className="text-gray-600 font-black text-[10px] tracking-[0.4em] uppercase" />
                    <div className="flex gap-12 text-[10px] font-black text-emerald-500/40 tracking-[0.5em] uppercase italic">
                        <span className="flex items-center gap-2"><Shield className="w-3 h-3" /> <EditableText id="footer_cred_1" content="Security First" as="span" /></span>
                        <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> <EditableText id="footer_cred_2" content="Global Standard" as="span" /></span>
                        <span className="flex items-center gap-2"><Zap className="w-3 h-3" /> <EditableText id="footer_cred_3" content="Velocity Horizon" as="span" /></span>
                    </div>
                </RevealOnScroll>
            </div>
        </footer>
    );
}

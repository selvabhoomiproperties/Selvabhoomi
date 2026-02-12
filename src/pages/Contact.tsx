import { MapPin, Phone, Mail, Clock, Zap, ShieldCheck, HelpCircle, Server, Settings } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import RevealOnScroll from '../components/ui/reveal-on-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { EditableText } from '../components/ui/EditableContent';

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('leads')
                .insert([formData]);

            if (error) throw error;

            setSuccess(true);
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting lead:', error);
            alert('Transmission failed. Re-attempt required.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="pt-40 pb-32 relative px-6 md:px-8 lg:px-10 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_80%_20%,_#10b98108_0%,_transparent_50%)]"></div>

            {/* Hero Section */}
            <section className="py-24 mb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10 transition-all">
                    <RevealOnScroll>
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10 mb-12 font-mono text-[9px] tracking-[0.4em] text-emerald-400 uppercase shadow-2xl">
                            CONNECT WITH US // QUICK LINK
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tighter uppercase italic text-white leading-[0.9]">
                            Get in <br />
                            <EditableText
                                id="contact_hero_subtitle"
                                content="Touch"
                                as="span"
                                className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]"
                            />
                        </h1>
                        <EditableText
                            id="contact_hero_description"
                            content='"Ready to find your perfect land or managed farm? Our experts are here to guide you through every step, from selection to seamless ownership."'
                            as="p"
                            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light italic opacity-80 leading-relaxed mb-16"
                        />
                    </RevealOnScroll>
                </div>
            </section>

            {/* Contact Layout */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 md:gap-32">

                        {/* Contact Information - HUD Style */}
                        <RevealOnScroll className="h-full flex flex-col justify-center">
                            <div className="mb-16">
                                <h2 className="text-[10px] font-black text-emerald-500 mb-16 uppercase tracking-[0.6em] flex items-center gap-6 italic">
                                    <span className="w-12 h-px bg-emerald-500/40"></span> Contact Information
                                </h2>
                                <div className="space-y-12">
                                    {[
                                        { icon: MapPin, title: 'OUR OFFICE LOCATION', value: '123, Green Tech Park, OMR, Chennai, TN - 600096' },
                                        { icon: Phone, title: 'GIVE US A CALL', value: '+91 91 76002 530', sub: 'AVAILABLE: MON-SAT, 09:00 AM - 06:00 PM' },
                                        { icon: Mail, title: 'SEND US AN EMAIL', value: 'admin@selvabhoomiproperties.in' },
                                        { icon: Clock, title: 'OFFICE HOURS', value: '09:00 AM - 06:00 PM', sub: 'CLOSED ON SUNDAYS' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col gap-6 p-10 bg-white/[0.03] rounded-[3rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-700 group shadow-2xl">
                                            <div className="flex items-center gap-6">
                                                <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-500 shadow-xl">
                                                    <item.icon className="w-6 h-6 text-emerald-400" />
                                                </div>
                                                <span className="text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.4em] italic">{item.title}</span>
                                            </div>
                                            <div className="pl-2">
                                                <p className="text-white text-2xl font-black tracking-tighter italic uppercase group-hover:text-emerald-400 transition-colors">{item.value}</p>
                                                {item.sub && <p className="text-[10px] text-gray-600 font-black mt-4 tracking-[0.3em] uppercase group-hover:text-gray-400 transition-colors">{item.sub}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* Contact Form - Cinematic Matrix Style */}
                        <RevealOnScroll delay={0.2} className="h-full">
                            <div className="bg-gradient-to-br from-white/[0.04] to-transparent p-16 md:p-24 rounded-[5rem] border border-white/5 relative overflow-hidden h-full shadow-2xl flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_#10b98110_0%,_transparent_50%)]"></div>

                                <div className="relative z-10 mb-16">
                                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter leading-none">Send <br /><span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">Message</span></h2>
                                    <p className="text-gray-500 italic font-light text-lg">"Tell us about your requirements, and our team will get back to you shortly."</p>
                                </div>

                                <AnimatePresence mode="wait">
                                    {success ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            className="bg-emerald-500/[0.03] text-emerald-400 p-20 rounded-[4rem] text-center border border-emerald-500/20 flex flex-col items-center justify-center h-full shadow-2xl"
                                        >
                                            <div className="w-32 h-32 bg-emerald-500/20 rounded-full flex items-center justify-center mb-12 border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.4)] animate-pulse">
                                                <ShieldCheck className="w-16 h-16 text-emerald-400" />
                                            </div>
                                            <p className="font-black text-4xl mb-6 italic uppercase tracking-tighter leading-none text-white">MESSAGE SENT</p>
                                            <p className="text-emerald-400/60 mb-16 font-light italic text-xl">"Thank you for reaching out. An expert advisor will contact you soon."</p>
                                            <button
                                                onClick={() => setSuccess(false)}
                                                className="text-[10px] font-black uppercase tracking-[0.5em] underline underline-offset-[12px] hover:text-white transition-all duration-500 text-emerald-500/40"
                                            >
                                                SEND ANOTHER MESSAGE
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-12 relative z-10"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="grid md:grid-cols-2 gap-10">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4">First Name</label>
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        required
                                                        value={formData.first_name}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-white placeholder:text-gray-800 font-bold italic shadow-xl"
                                                        placeholder="Enter First Name"
                                                    />
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4">Last Name</label>
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        value={formData.last_name}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-white placeholder:text-gray-800 font-bold italic shadow-xl"
                                                        placeholder="Enter Last Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-white placeholder:text-gray-800 font-bold italic shadow-xl"
                                                    placeholder="yourname@example.com"
                                                />
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-white placeholder:text-gray-800 font-bold italic shadow-xl"
                                                    placeholder="Enter Phone Number"
                                                />
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4">Your Message</label>
                                                <textarea
                                                    rows={4}
                                                    name="message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-white placeholder:text-gray-800 font-bold italic resize-none shadow-xl"
                                                    placeholder="How can we help you?"
                                                ></textarea>
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(16,185,129,0.5)" }}
                                                whileTap={{ scale: 0.95 }}
                                                type="submit"
                                                disabled={loading}
                                                className="w-full bg-emerald-500 text-black font-black py-8 rounded-3xl transition-all duration-700 flex items-center justify-center gap-4 disabled:opacity-50 uppercase tracking-[0.6em] text-xs shadow-2xl group/btn"
                                            >
                                                {loading ? 'Sending...' : 'SEND MESSAGE'}
                                                <Zap className="w-5 h-5 group-hover/btn:animate-pulse" />
                                            </motion.button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>
            {/* Network Command Centers Section */}
            <section className="py-20 lg:py-40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                        <RevealOnScroll>
                            <h2 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.6em] flex items-center gap-4 italic px-4 py-2 border border-emerald-500/20 rounded-xl w-fit">
                                <Server className="w-4 h-4" /> Physical Infrastructure
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase italic leading-[1] tracking-tighter">
                                Our <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent italic">Office</span>
                            </h3>
                            <p className="text-lg lg:text-xl text-gray-500 font-light italic leading-relaxed mb-12">
                                "Our office is a space for personalized advisory. Visit us in Chennai for a detailed tour and discussion about our available land assets and managed farm communities."
                            </p>

                            <div className="space-y-10">
                                {[
                                    { city: 'CHENNAI TERMINAL', type: 'COMMAND CORE', status: 'ONLINE' },
                                    { city: 'KANCHIPURAM NODE', type: 'SATELLITE HUB', status: 'ONLINE' }
                                ].map((hub, i) => (
                                    <div key={i} className="flex items-center justify-between p-8 bg-white/5 rounded-3xl border border-white/5 group hover:border-emerald-500/30 transition-all duration-700">
                                        <div>
                                            <div className="text-xl font-black text-white italic tracking-widest uppercase mb-1">{hub.city}</div>
                                            <div className="text-[9px] font-black text-emerald-500/60 uppercase tracking-[0.4em]">{hub.type}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[8px] font-black text-gray-700 tracking-[0.4em] uppercase mb-1">Status</div>
                                            <div className="text-[10px] font-black text-emerald-400 tracking-widest animate-pulse">{hub.status}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-[4rem] group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
                                <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src="file:///Users/ashiq/.gemini/antigravity/brain/9a4b7b56-95e9-4998-9e99-98854a31cadd/contact_command_center_1770913834501.png"
                                        alt="Command Center"
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent"></div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Technical FAQ Section */}
            <section className="py-20 lg:py-40 relative">
                <div className="max-w-4xl mx-auto">
                    <RevealOnScroll className="text-center mb-24">
                        <h2 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.6em] justify-center flex items-center gap-4 italic">
                            <HelpCircle className="w-4 h-4" /> Your Guide
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase italic leading-none tracking-tighter">
                            Common <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent italic">Questions</span>
                        </h3>
                    </RevealOnScroll>

                    <div className="space-y-6">
                        {[
                            { q: 'HOW LONG DOES THE PROCESS TAKE?', a: 'Once you select a property and secure it, the documentation and legal transfer typically take 15-20 days.' },
                            { q: 'ARE THE PROPERTIES LEGALLY SECURE?', a: 'Yes. Every single plot we offer is DTCP/RERA certified with clear titles and a 100% legal guarantee.' },
                            { q: 'CAN I MANAGE MY FARM REMOTELY?', a: 'Absolutely. We provide full-service management for your farm, with regular photo/video updates so you can track your farm\'s growth from anywhere.' }
                        ].map((faq, i) => (
                            <RevealOnScroll key={i} delay={i * 0.1}>
                                <div className="bg-white/5 p-10 lg:p-12 rounded-[3.5rem] border border-white/5 hover:border-emerald-500/20 transition-all duration-700 group">
                                    <div className="flex gap-8">
                                        <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20 h-fit">
                                            <Settings className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-white italic tracking-tighter uppercase mb-6 group-hover:text-emerald-400 transition-colors">{faq.q}</div>
                                            <p className="text-gray-500 text-lg font-light italic leading-relaxed">"{faq.a}"</p>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

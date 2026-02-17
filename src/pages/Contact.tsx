import { MapPin, Phone, Mail, Clock, Zap, ShieldCheck, HelpCircle, Server, Settings } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import RevealOnScroll from '../components/ui/reveal-on-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { EditableText, EditableImage } from '../components/ui/EditableContent';

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
        <div className="pt-40 pb-32 relative px-6 md:px-8 lg:px-10 overflow-hidden estate-page-bg min-h-screen">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_80%_20%,_#10b98108_0%,_transparent_50%)]"></div>

            {/* Hero Section */}
            <section className="py-24 mb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10 transition-all">
                    <RevealOnScroll width="100%">
                        <EditableText id="contact_hero_tag" content="CONNECT WITH US // QUICK LINK" as="div" className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10 mb-12 font-mono text-[9px] tracking-[0.4em] text-emerald-400 uppercase shadow-2xl" />
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tighter uppercase italic text-slate-900 leading-[0.9]">
                            <EditableText id="contact_hero_prefix" content="Get in" as="span" /> <br />
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
                                <h2 className="text-[9px] sm:text-[10px] font-black text-emerald-500 mb-10 sm:mb-16 uppercase tracking-[0.28em] sm:tracking-[0.6em] flex items-center gap-3 sm:gap-6 italic">
                                    <span className="w-12 h-px bg-emerald-500/40"></span>
                                    <EditableText id="contact_info_label" content="Contact Information" as="span" />
                                </h2>
                                <div className="space-y-6 sm:space-y-8 md:space-y-12">
                                    {[
                                        { icon: MapPin, title: 'OUR OFFICE LOCATION', value: '123, Green Tech Park, OMR, Chennai, TN - 600096' },
                                        { icon: Phone, title: 'GIVE US A CALL', value: '+91 91 76002 530', sub: 'AVAILABLE: MON-SAT, 09:00 AM - 06:00 PM' },
                                        { icon: Mail, title: 'SEND US AN EMAIL', value: 'admin@selvabhoomiproperties.in' },
                                        { icon: Clock, title: 'OFFICE HOURS', value: '09:00 AM - 06:00 PM', sub: 'CLOSED ON SUNDAYS' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-5 sm:p-7 md:p-10 bg-white/[0.03] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] border border-emerald-500/30 transition-all duration-700 group shadow-2xl">
                                            <div className="flex items-center gap-4 sm:gap-6">
                                                <div className="bg-emerald-500/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-500 shadow-xl">
                                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                                                </div>
                                                <EditableText id={`contact_info_item_${i}_title`} content={item.title} as="span" className="text-[8px] sm:text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.2em] sm:tracking-[0.4em] italic leading-tight" />
                                            </div>
                                            <div className="pl-1 sm:pl-2 min-w-0">
                                                <EditableText
                                                    id={`contact_info_val_${i}`}
                                                    content={item.value}
                                                    as="p"
                                                    className="text-slate-900 text-lg sm:text-xl md:text-2xl font-black tracking-tight italic break-words leading-snug group-hover:text-emerald-400 transition-colors"
                                                />
                                                {item.sub && (
                                                    <EditableText
                                                        id={`contact_info_sub_${i}`}
                                                        content={item.sub}
                                                        as="p"
                                                        className="text-[8px] sm:text-[10px] text-gray-600 font-black mt-3 sm:mt-4 tracking-[0.16em] sm:tracking-[0.3em] uppercase break-words leading-relaxed group-hover:text-gray-400 transition-colors"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* Contact Form - Cinematic Matrix Style */}
                        <RevealOnScroll delay={0.2} className="h-full">
                            <div className="bg-gradient-to-br from-white/[0.04] to-transparent p-16 md:p-24 rounded-[5rem] border border-emerald-500/30 relative overflow-hidden h-full shadow-2xl flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_#10b98110_0%,_transparent_50%)]"></div>

                                <div className="relative z-10 mb-16">
                                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter leading-none">
                                        <EditableText id="contact_form_prefix" content="Send" as="span" /> <br />
                                        <EditableText id="contact_form_title_accent" content="Message" as="span" className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
                                    </h2>
                                    <EditableText
                                        id="contact_form_desc"
                                        content='"Tell us about your requirements, and our team will get back to you shortly."'
                                        as="p"
                                        className="text-gray-500 italic font-light text-lg"
                                    />
                                </div>

                                <AnimatePresence mode="wait">
                                    {success ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            className="bg-emerald-500/[0.03] text-emerald-400 p-20 rounded-[4rem] text-center border border-emerald-500/20 flex flex-col items-center justify-center h-full shadow-2xl"
                                        >
                                            <p className="w-32 h-32 bg-emerald-500/20 rounded-full flex items-center justify-center mb-12 border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.4)] animate-pulse">
                                                <ShieldCheck className="w-16 h-16 text-emerald-400" />
                                            </p>
                                            <EditableText id="contact_success_title" content="MESSAGE SENT" as="p" className="font-black text-4xl mb-6 italic uppercase tracking-tighter leading-none text-slate-900 outline-none" />
                                            <EditableText id="contact_success_desc" content='"Thank you for reaching out. An expert advisor will contact you soon."' as="p" className="text-emerald-400/60 mb-16 font-light italic text-xl outline-none" />
                                            <button
                                                onClick={() => setSuccess(false)}
                                                className="text-[10px] font-black uppercase tracking-[0.5em] underline underline-offset-[12px] hover:text-slate-900 transition-all duration-500 text-emerald-500/40"
                                            >
                                                <EditableText id="contact_success_reset" content="SEND ANOTHER MESSAGE" as="span" />
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
                                                    <EditableText id="contact_form_label_fname" content="First Name" as="label" className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4" />
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        required
                                                        value={formData.first_name}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-slate-900 placeholder:text-gray-800 font-bold italic shadow-xl"
                                                        placeholder="Enter First Name"
                                                    />
                                                </div>
                                                <div className="space-y-4">
                                                    <EditableText id="contact_form_label_lname" content="Last Name" as="label" className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4" />
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        value={formData.last_name}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-slate-900 placeholder:text-gray-800 font-bold italic shadow-xl"
                                                        placeholder="Enter Last Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <EditableText id="contact_form_label_email" content="Email Address" as="label" className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-slate-900 placeholder:text-gray-800 font-bold italic shadow-xl"
                                                    placeholder="yourname@example.com"
                                                />
                                            </div>

                                            <div className="space-y-4">
                                                <EditableText id="contact_form_label_phone" content="Phone Number" as="label" className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-slate-900 placeholder:text-gray-800 font-bold italic shadow-xl"
                                                    placeholder="Enter Phone Number"
                                                />
                                            </div>

                                            <div className="space-y-4">
                                                <EditableText id="contact_form_label_msg" content="Your Message" as="label" className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] ml-4" />
                                                <textarea
                                                    rows={4}
                                                    name="message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-500 text-slate-900 placeholder:text-gray-800 font-bold italic resize-none shadow-xl"
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
                                                <EditableText id="contact_form_btn" content={loading ? 'Sending...' : 'SEND MESSAGE'} as="span" />
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
                                <Server className="w-4 h-4" />
                                <EditableText id="contact_infra_proto_tag" content="Physical Infrastructure" as="span" />
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 uppercase italic leading-[1] tracking-tighter">
                                <EditableText id="contact_office_prefix" content="Our" as="span" /> <EditableText id="contact_office_title_accent" content="Office" as="span" className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent italic" />
                            </h3>
                            <EditableText
                                id="contact_office_desc"
                                content='"Our office is a space for personalized advisory. Visit us in Chennai for a detailed tour and discussion about our available land assets and managed farm communities."'
                                as="p"
                                className="text-lg lg:text-xl text-gray-500 font-light italic leading-relaxed mb-12"
                            />

                            <div className="space-y-10">
                                {[
                                    { city: 'CHENNAI TERMINAL', type: 'COMMAND CORE', status: 'ONLINE' },
                                    { city: 'KANCHIPURAM NODE', type: 'SATELLITE HUB', status: 'ONLINE' }
                                ].map((hub, i) => (
                                    <div key={i} className="flex items-center justify-between p-8 bg-white/5 rounded-3xl border border-emerald-500/30 group transition-all duration-700 min-h-[140px]">
                                        <div>
                                            <EditableText
                                                id={`contact_hub_${i}_city`}
                                                content={hub.city}
                                                as="div"
                                                className="text-xl font-black text-slate-900 italic tracking-widest uppercase mb-1"
                                            />
                                            <EditableText
                                                id={`contact_hub_${i}_type`}
                                                content={hub.type}
                                                as="div"
                                                className="text-[9px] font-black text-emerald-500/60 uppercase tracking-[0.4em]"
                                            />
                                        </div>
                                        <div className="text-right">
                                            <EditableText id={`contact_hub_${i}_status_label`} content="Status" as="div" className="text-[8px] font-black text-gray-700 tracking-[0.4em] uppercase mb-1" />
                                            <EditableText id={`contact_hub_${i}_status_val`} content={hub.status} as="div" className="text-[10px] font-black text-emerald-400 tracking-widest animate-pulse" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-[4rem] group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
                                <div className="relative rounded-[3.5rem] overflow-hidden border border-emerald-500/30 shadow-2xl">
                                    <EditableImage
                                        id="contact_office_image"
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
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
                            <HelpCircle className="w-4 h-4" />
                            <EditableText id="contact_faq_proto_tag" content="Your Guide" as="span" />
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase italic leading-none tracking-tighter">
                            <EditableText id="contact_faq_prefix" content="Common" as="span" /> <EditableText id="contact_faq_title_accent" content="Questions" as="span" className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent italic" />
                        </h3>
                    </RevealOnScroll>

                    <div className="space-y-6">
                        {[
                            { q: 'HOW LONG DOES THE PROCESS TAKE?', a: 'Once you select a property and secure it, the documentation and legal transfer typically take 15-20 days.' },
                            { q: 'ARE THE PROPERTIES LEGALLY SECURE?', a: 'Yes. Every single plot we offer is DTCP/RERA certified with clear titles and a 100% legal guarantee.' },
                            { q: 'CAN I MANAGE MY FARM REMOTELY?', a: 'Absolutely. We provide full-service management for your farm, with regular photo/video updates so you can track your farm\'s growth from anywhere.' }
                        ].map((faq, i) => (
                            <RevealOnScroll key={i} delay={i * 0.1}>
                                <div className="bg-white/5 p-10 lg:p-12 rounded-[3.5rem] border border-emerald-500/20 transition-all duration-700 group">
                                    <div className="flex gap-8">
                                        <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20 h-fit">
                                            <Settings className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <EditableText
                                                id={`contact_faq_${i}_q`}
                                                content={faq.q}
                                                as="div"
                                                className="text-xl font-black text-slate-900 italic tracking-tighter uppercase mb-6 group-hover:text-emerald-400 transition-colors"
                                            />
                                            <EditableText
                                                id={`contact_faq_${i}_a`}
                                                content={`"${faq.a}"`}
                                                as="p"
                                                className="text-gray-500 text-lg font-light italic leading-relaxed"
                                            />
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


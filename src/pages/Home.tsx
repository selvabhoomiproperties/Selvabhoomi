import { Compass, Zap, Globe, Landmark, TrendingUp, Shield, Award, FileCheck, Users, MessageSquare, Activity, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteSettings } from '../hooks/useSiteSettings';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealOnScroll from '../components/ui/reveal-on-scroll';
import { useEffect, useRef, useState } from 'react';
import { EditableText, EditableImage } from '../components/ui/EditableContent';

export default function Home() {
    const { settings, loading } = useSiteSettings();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const ctaStatsRef = useRef<HTMLDivElement | null>(null);
    const [activeHeroImage, setActiveHeroImage] = useState(0);
    const [ctaStatsCount, setCtaStatsCount] = useState([0, 0, 0]);

    const heroCarouselImages = [
        (settings.hero_image && settings.hero_image.trim() !== '') ? settings.hero_image : "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop"
    ];

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveHeroImage((prev) => (prev + 1) % heroCarouselImages.length);
        }, 3200);

        return () => window.clearInterval(intervalId);
    }, [heroCarouselImages.length]);

    useEffect(() => {
        if (loading) return;

        const targets = [1200, 500, 100];
        const durationMs = 1800;
        const start = performance.now();

        const animate = (now: number) => {
            const progress = Math.min((now - start) / durationMs, 1);
            setCtaStatsCount(targets.map((target) => Math.round(target * progress)));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [loading]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#f8f4ec]">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="relative estate-page-bg">
            {/* Hero Section */}
            <section ref={targetRef} className="relative py-20 lg:py-28 flex items-center px-6 md:px-8 lg:px-10 overflow-hidden min-h-[85vh]">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#10b98108_0%,_transparent_70%)] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                            >
                                <div className="w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
                                <EditableText
                                    id="hero_tag"
                                    content={settings.hero_tag || "PARANDUR AIRPORT CORRIDOR"}
                                    as="span"
                                    className="text-[8px] font-black tracking-[0.4em] text-emerald-400 uppercase"
                                />
                            </motion.div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1] mb-6 tracking-tighter text-slate-900 uppercase italic">
                                <EditableText
                                    id="hero_prefix_tag"
                                    content="Future First"
                                    as="span"
                                    className="block italic font-light text-lg md:text-xl mb-3 text-emerald-700 tracking-[0.2em] uppercase"
                                />
                                <EditableText
                                    id="hero_title"
                                    content={settings.hero_title || 'SECURE THE'}
                                    as="span"
                                />
                                <br />
                                <EditableText
                                    id="hero_subtitle"
                                    content={settings.hero_subtitle || 'ORIGIN'}
                                    as="span"
                                    className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                                />
                            </h1>

                            <EditableText
                                id="hero_description"
                                content={settings.hero_description || 'Own a piece of tomorrow. Legally verified, professionally curated land assets in high-growth infrastructure corridors.'}
                                as="p"
                                className="text-sm md:text-base text-slate-800 mb-8 leading-relaxed max-w-md font-light italic opacity-100"
                            />

                            <div className="flex flex-wrap gap-4 mb-14">
                                <Link to="/properties">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.3)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all shadow-2xl flex items-center gap-2.5"
                                    >
                                        <EditableText id="hero_btn_search" content="Initiate Search" as="span" />
                                        <Compass className="w-4 h-4 animate-spin-slow" />
                                    </motion.button>
                                </Link>
                                <motion.button
                                    whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                                    className="px-8 py-4 rounded-xl font-black text-[9px] uppercase tracking-widest text-slate-900 border border-white/10 backdrop-blur-sm transition-all flex items-center gap-2.5"
                                >
                                    <EditableText id="hero_btn_trans" content="Transmission" as="span" />
                                    <Zap className="w-4 h-4 text-emerald-400" />
                                </motion.button>
                            </div>

                            <div className="flex gap-10 border-l-2 border-emerald-500/20 pl-6">
                                {[
                                    { label: 'AUTHENTICITY', val: '100%', id: 'auth' },
                                    { label: 'APPROVALS', val: 'DTCP', id: 'appr' },
                                    { label: 'HORIZON', val: '7Y+', id: 'horz' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <EditableText
                                            id={`stat_val_${stat.id}`}
                                            content={stat.val}
                                            as="div"
                                            className="text-2xl font-black text-slate-900 mb-0.5 leading-none italic"
                                        />
                                        <EditableText
                                            id={`stat_label_${stat.id}`}
                                            content={stat.label}
                                            as="div"
                                            className="text-[8px] font-black text-slate-500 tracking-[0.2em] uppercase"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ y, opacity, scale }}
                            className="relative block mt-8 lg:mt-0"
                        >
                            <div className="relative group perspective-1000">
                                <motion.div
                                    initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
                                    animate={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.4 }}
                                    className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#dfeee7] aspect-[4/5] max-h-[600px] mx-auto"
                                >
                                    {heroCarouselImages.map((image, index) => (
                                        <motion.img
                                            key={image}
                                            src={image}
                                            alt={`Farming land ${index + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            initial={false}
                                            animate={{ opacity: index === activeHeroImage ? 1 : 0, scale: index === activeHeroImage ? 1 : 1.04 }}
                                            transition={{ duration: 0.9, ease: "easeInOut" }}
                                        />
                                    ))}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#e9e1d5] via-transparent to-transparent"></div>

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                                        {heroCarouselImages.map((_, index) => (
                                            <span
                                                key={`hero-dot-${index}`}
                                                className={`h-2 rounded-full transition-all duration-500 ${index === activeHeroImage ? 'w-7 bg-emerald-500' : 'w-2 bg-white/70'}`}
                                            />
                                        ))}
                                    </div>

                                    <div className="absolute top-6 left-6 p-4 bg-white/80 backdrop-blur-md rounded-xl border border-white/10">
                                        <Globe className="w-4 h-4 text-emerald-400 mb-3 animate-pulse" />
                                        <EditableText id="hero_coord_label" content="Coordinates" as="div" className="text-[8px] font-black text-emerald-500/60 mb-0.5 tracking-[0.2em] uppercase" />
                                        <EditableText id="hero_coord_val" content="12.9716 N, 77.5946 E" as="div" className="text-slate-900 font-mono text-[10px] leading-none tracking-tighter" />
                                    </div>

                                    <div className="absolute bottom-6 right-6 p-4 bg-emerald-500/10 backdrop-blur-xl rounded-xl border border-emerald-500/30 text-right">
                                        <EditableText id="hero_status_label" content="Status" as="div" className="text-[8px] font-black text-emerald-400 mb-0.5 tracking-[0.2em] uppercase" />
                                        <EditableText id="hero_status_val" content="Verified Asset" as="div" className="text-slate-900 font-black text-base leading-none italic uppercase" />
                                    </div>
                                </motion.div>

                                <div className="absolute -inset-6 border border-emerald-500/5 rounded-[3.5rem] animate-spin-slow pointer-events-none"></div>
                                <div className="absolute -inset-12 border border-emerald-500/10 rounded-[4rem] animate-reverse-spin pointer-events-none"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Offerings Section */}
            <section id="offerings" className="py-40 px-6 md:px-8 lg:px-10 relative bg-[#eef8f3]">
                <div className="max-w-7xl mx-auto">
                    <RevealOnScroll width="100%" className="text-center mb-32">
                        <EditableText
                            id="home_offerings_tag"
                            content="Handpicked Assets"
                            as="div"
                            className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] mb-6 text-center"
                        />
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic text-center mx-auto">
                            <EditableText
                                id="home_offerings_title_prime"
                                content="Prime"
                                as="span"
                            />{' '}
                            <EditableText
                                id="home_offerings_title_accent"
                                content="Land Selection"
                                as="span"
                                className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                            />
                        </h2>
                        <EditableText
                            id="home_offerings_desc"
                            content='"Handpicked land assets for every lifestyle. High-growth residential plots and lush managed farmlands designed for your future."'
                            as="p"
                            className="text-slate-600 max-w-2xl mx-auto font-light text-xl italic leading-relaxed text-center"
                        />
                    </RevealOnScroll>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {[
                            {
                                title: 'Elite Residential',
                                desc: 'Premium plots in high-growth corridors with 100% DTCP approval and clear titles.',
                                icon: Landmark,
                                points: ['100% Top Quality', 'Rapid Appreciation', 'Ready for Construction', 'Clear Path for Growth'],
                                theme: 'from-emerald-900/40 to-[#f5efe4]',
                                accent: 'emerald',
                            },
                            {
                                title: 'Managed Farmland',
                                desc: 'Premium organic farmlands meticulously managed for you. Passive income with zero maintenance.',
                                icon: TrendingUp,
                                points: ['Free Lifecycle Maint.', 'Mango & Teak Harvest', 'Guaranteed Returns', 'Perfect Weekend Retreat'],
                                theme: 'from-teal-900/40 to-[#f5efe4]',
                                accent: 'teal',
                                label: 'MOST POPULAR'
                            }
                        ].map((card, i) => (
                            <RevealOnScroll key={i} delay={i * 0.2} width="100%">
                                <div className={`group relative bg-gradient-to-br ${card.theme} rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[4rem] p-6 sm:p-10 md:p-16 border border-white/5 hover:border-emerald-500/30 transition-all duration-700 h-full flex flex-col shadow-2xl overflow-hidden`}>
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(16,185,129,0.1)_0%,_transparent_50%)]"></div>

                                    <div className="relative z-10 flex-grow">
                                        <div className="mb-6 sm:mb-8 flex items-start justify-between gap-3 sm:gap-4">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/85 rounded-2xl sm:rounded-3xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                                                <card.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-emerald-400" />
                                            </div>
                                            {card.label && (
                                                <EditableText
                                                    id={`home_offer_${i}_label`}
                                                    content={card.label}
                                                    as="div"
                                                    className="inline-block bg-emerald-500 text-black text-[9px] sm:text-[10px] font-black px-3 sm:px-4 py-1.5 rounded-lg tracking-[0.16em] sm:tracking-[0.3em] shadow-2xl mt-1"
                                                />
                                            )}
                                        </div>

                                        <EditableText
                                            id={`home_offer_${i}_title`}
                                            content={card.title}
                                            as="h3"
                                            className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 sm:mb-8 uppercase italic tracking-tighter group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-transform duration-500"
                                        />
                                        <EditableText
                                            id={`home_offer_${i}_desc`}
                                            content={`"${card.desc}"`}
                                            as="p"
                                            className="text-slate-600 mb-8 sm:mb-12 leading-relaxed font-light text-lg sm:text-xl italic opacity-80 group-hover:opacity-100 transition-opacity"
                                        />

                                        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 mb-10 sm:mb-14 md:mb-16">
                                            {card.points.map((pt, j) => (
                                                <div key={j} className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5 group-hover:border-emerald-500/10 transition-colors">
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 group-hover:scale-125 transition-all duration-500 shrink-0"></div>
                                                    <EditableText
                                                        id={`home_offer_${i}_pt_${j}`}
                                                        content={pt}
                                                        as="span"
                                                        className="text-[10px] sm:text-[11px] font-black text-slate-600 uppercase tracking-[0.12em] sm:tracking-[0.2em] leading-tight"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="relative z-10 w-full py-4 sm:py-5 md:py-6 rounded-2xl font-black text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] md:tracking-[0.4em] border border-white/20 bg-white/90 text-black transition-all duration-700 shadow-2xl">
                                        <EditableText id={`home_offer_${i}_btn`} content="Access Database" as="span" />
                                    </button>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure Matrix Section */}
            <section className="py-20 lg:py-40 px-6 md:px-8 lg:px-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_50%,_#10b98108_0%,_transparent_70%)] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                        <RevealOnScroll>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-[4rem] group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
                                <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <EditableImage
                                        id="home_infra_image"
                                        src={settings.home_infra_image || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop"}
                                        alt="Infrastructure Matrix"
                                        className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#e9e1d5] to-transparent"></div>

                                    <div className="absolute bottom-10 left-10 right-10 p-6 lg:p-8 bg-white/85 backdrop-blur-2xl rounded-3xl border border-white/10">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                            <EditableText id="home_infra_tag" content="Real-time Matrix Sync" as="span" className="text-[9px] lg:text-[10px] font-black text-emerald-400 tracking-[0.4em] uppercase font-mono" />
                                        </div>
                                        <EditableText id="home_infra_label" content="Parandur Corridor // Phase 01" as="div" className="text-slate-900 font-black text-xl lg:text-2xl italic uppercase tracking-widest leading-tight" />
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <h2 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.6em] flex items-center gap-4 italic px-4 py-2 border border-emerald-500/20 rounded-xl w-fit">
                                <Activity className="w-4 h-4" />
                                <EditableText id="home_infra_insights_tag" content="Market Insights" as="span" />
                            </h2>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-10 uppercase italic leading-[1] tracking-tighter">
                                The <EditableText id="home_infra_title_accent" content="Growth" as="span" className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent" /> Corridor
                            </h3>
                            <EditableText
                                id="home_infra_desc"
                                content='"Secure your future in the heart of the developing Parandur Airport ecosystem. We donâ€™t just sell land; we identify the most profitable assets for your long-term wealth."'
                                as="p"
                                className="text-base lg:text-lg text-slate-600 font-light italic leading-relaxed mb-12"
                            />

                            <div className="space-y-6 lg:space-y-8">
                                {[
                                    { title: '15-MIN TO AIRPORT', desc: 'Strategically located minutes away from the upcoming international terminal.', id: 'airport' },
                                    { title: 'EXPRESSWAY ACCESS', desc: 'Direct connectivity to major 6-lane highways and logistics hubs.', id: 'express' },
                                    { title: 'SMART ESSENTIALS', desc: 'Gated communities with pre-installed utilities and organic farm setups.', id: 'essentials' }
                                ].map((node, i) => (
                                    <div key={i} className="flex gap-6 lg:gap-8 group/node">
                                        <div className="w-px h-12 lg:h-16 bg-gradient-to-b from-emerald-500/40 to-transparent group-hover/node:from-emerald-500 transition-all duration-500"></div>
                                        <div>
                                            <EditableText id={`home_infra_node_${node.id}_title`} content={node.title} as="div" className="text-[10px] lg:text-xs font-black text-slate-900 mb-2 tracking-[0.3em] uppercase" />
                                            <EditableText id={`home_infra_node_${node.id}_desc`} content={`"${node.desc}"`} as="div" className="text-xs lg:text-sm text-slate-600 font-light italic" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section id="why-us" className="py-32 lg:py-40 px-6 md:px-8 lg:px-10 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-0 bg-white/5 rounded-[5rem] overflow-hidden border border-white/5 shadow-2xl">
                        {[
                            { icon: Shield, title: 'LEGAL SECURITY', desc: 'Ironclad ownership with transparent legal clearance for every inch.' },
                            { icon: Award, title: 'ZERO MAINTENANCE', desc: 'Enjoy your farm without the work. We manage everything for you.' },
                            { icon: FileCheck, title: 'LEGACY PLANNING', desc: 'Designed to build and preserve wealth for your future generations.' }
                        ].map((item, i) => (
                            <RevealOnScroll key={i} delay={i * 0.1} className="h-full">
                                <div className="relative bg-[#f3eee4] p-20 group hover:bg-emerald-500/[0.03] transition-colors duration-1000 h-full border-r border-white/5 last:border-0">
                                    <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

                                    <div className="w-24 h-24 bg-emerald-500/5 rounded-[2rem] flex items-center justify-center mb-12 border border-emerald-500/10 group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-all duration-700 shadow-2xl">
                                        <item.icon className="w-12 h-12 text-emerald-400" />
                                    </div>
                                    <EditableText
                                        id={`home_why_${i}_title`}
                                        content={item.title}
                                        as="h3"
                                        className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-[0.2em] italic"
                                    />
                                    <EditableText
                                        id={`home_why_${i}_desc`}
                                        content={`"${item.desc}"`}
                                        as="p"
                                        className="text-slate-600 text-lg leading-relaxed font-light italic"
                                    />
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>

                    <div className="mt-40">
                        <RevealOnScroll>
                            <div className="relative bg-gradient-to-br from-[#cff7ec] to-[#f5efe4] rounded-[2.5rem] md:rounded-[5rem] p-6 sm:p-8 md:p-24 border border-white/5 overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_#10b98110_0%,_transparent_50%)]"></div>

                                <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-32 items-center relative z-10">
                                    <div className="text-left">
                                        <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-8 md:mb-12 uppercase italic leading-[0.95] md:leading-[0.8] tracking-[0.08em] md:tracking-widest">
                                            <EditableText id="home_secure_title_top" content="Secure" as="span" /> <br />
                                            <EditableText id="home_secure_title_bottom" content="Ownership" as="span" className="inline-block text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-2xl border border-emerald-500/20 ml-[15px] md:ml-0" />
                                        </h3>
                                        <div className="space-y-6 md:space-y-10">
                                            {[
                                                { title: 'TITLE VERIFICATION', val: 'DONE', id: 'title' },
                                                { title: 'FREE MAINTENANCE', val: 'YES', id: 'maint' },
                                                { title: 'FENCING & SECURITY', val: 'INCLUDED', id: 'fence' },
                                                { title: 'ORGANIC FARMING', val: 'READY', id: 'farm' }
                                            ].map((risk, i) => (
                                                <div key={i} className="flex items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4 md:pb-6 group/row hover:border-emerald-500/40 transition-all duration-500">
                                                    <EditableText id={`home_secure_item_${risk.id}_title`} content={risk.title} as="span" className="text-[10px] sm:text-xs font-black text-slate-600 tracking-[0.25em] sm:tracking-[0.5em] group-hover/row:text-slate-900 transition-colors" />
                                                    <EditableText id={`home_secure_item_${risk.id}_val`} content={risk.val} as="span" className="text-emerald-400 font-black text-sm italic shadow-emerald-500/50" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="glass-card-cosmic rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-8 md:p-16 relative overflow-hidden group/card shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 md:mb-16">
                                            <div className="p-4 sm:p-5 md:p-6 bg-emerald-500/20 rounded-2xl md:rounded-3xl border border-emerald-500/30">
                                                <Users className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-400" />
                                            </div>
                                            <div>
                                                <EditableText id="home_comm_title" content="Our Community" as="div" className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-[0.12em] md:tracking-widest italic uppercase leading-tight break-words" />
                                                <EditableText id="home_comm_stat" content="1000+ Happy Families" as="div" className="text-[9px] sm:text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.2em] sm:tracking-[0.4em] mt-2" />
                                            </div>
                                        </div>

                                        <div className="space-y-6 md:space-y-10">
                                            {[
                                                { title: 'CORPORATE LEADERS', color: 'from-emerald-500', id: 'corp', desc: 'Validated architecture for generational preservation protocols.' },
                                                { title: 'GLOBAL NRIS', color: 'from-teal-500', id: 'nri', desc: 'Validated architecture for generational preservation protocols.' },
                                                { title: 'LEGACY PLANNERS', color: 'from-cyan-500', id: 'legacy', desc: 'Validated architecture for generational preservation protocols.' }
                                            ].map((item, i) => (
                                                <div key={i} className="relative pl-6 sm:pl-8 md:pl-12 group/item">
                                                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.color} to-transparent rounded-full group-hover/item:h-full transition-all duration-700`}></div>
                                                    <EditableText id={`home_comm_item_${item.id}_title`} content={item.title} as="div" className="font-black text-slate-900 text-base sm:text-lg md:text-xl tracking-[0.12em] md:tracking-widest uppercase italic mb-2 leading-tight break-words" />
                                                    <EditableText id={`home_comm_item_${item.id}_desc`} content={`"${item.desc}"`} as="div" className="text-sm text-slate-600 font-light italic leading-relaxed" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Investor Transmission Logs (Testimonials) */}
            <section className="py-20 lg:py-40 px-6 md:px-8 lg:px-10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <RevealOnScroll width="100%" className="text-center mb-16 lg:mb-24">
                        <h2 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.6em] justify-center flex items-center gap-4 italic">
                            <MessageSquare className="w-4 h-4" /> Transmission Logs
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-8 uppercase italic leading-none tracking-tighter">
                            Validated <EditableText id="home_testimonial_accent" content="Outcomes" as="span" className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent italic" />
                        </h3>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            { name: 'ARJUN K.', role: 'MACRO INVESTOR', log: 'Legality protocol is the most rigorous I have encountered in the Indian matrix. Absolute peace of mind.' },
                            { name: 'SARA J.', role: 'LEGACY PLANNER', log: 'The managed farmland model is revolutionary. My asset is growing autonomously while I focus on other nodes.' },
                            { name: 'VIKRAM R.', role: 'STRATEGIC PORTFOLIO', log: 'Proximity to the Parandur corridor makes this a high-yield priority. The data mapping is unmatched.' }
                        ].map((log, i) => (
                            <RevealOnScroll key={i} delay={i * 0.2}>
                                <div className="bg-white/5 backdrop-blur-xl p-10 lg:p-12 rounded-[2.5rem] lg:rounded-[3.5rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-700 h-full group relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 p-6 lg:p-8 text-emerald-500/10 group-hover:text-emerald-500/30 transition-colors duration-700">
                                        <Terminal className="w-16 lg:w-20 h-16 lg:h-20" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex gap-1 mb-8">
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            ))}
                                        </div>
                                        <EditableText
                                            id={`testimonial_${i}_log`}
                                            content={`"${log.log}"`}
                                            as="p"
                                            className="text-sm lg:text-lg text-slate-600 leading-relaxed font-light italic mb-10 group-hover:text-slate-900 transition-colors"
                                        />
                                        <div className="pt-8 border-t border-white/5">
                                            <EditableText
                                                id={`testimonial_${i}_name`}
                                                content={log.name}
                                                as="div"
                                                className="font-black text-slate-900 tracking-widest uppercase"
                                            />
                                            <EditableText
                                                id={`testimonial_${i}_role`}
                                                content={log.role}
                                                as="div"
                                                className="text-[9px] font-black text-emerald-500/60 uppercase tracking-[0.4em] mt-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 lg:py-56 px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#eaf6f1]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#10b98110_0%,_transparent_60%)]"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
                    <RevealOnScroll>
                        <h2 className="text-6xl md:text-9xl font-black mb-16 text-slate-900 uppercase italic tracking-[0.1em] leading-none">
                            <EditableText id="home_cta_title_top" content="Secure" as="span" /> <br />
                            <EditableText id="home_cta_title_bottom" content="Your Future" as="span" className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-500 bg-clip-text text-transparent italic drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]" />
                        </h2>
                        <EditableText
                            id="home_cta_desc"
                            content='"The growth corridor is accelerating. Secure your dream plot or managed farmland before the Parandur Airport phase completes."'
                            as="p"
                            className="text-xl md:text-2xl text-slate-600 mb-24 leading-relaxed max-w-3xl mx-auto font-light italic opacity-80"
                        />

                        <div className="flex flex-wrap gap-10 justify-center mb-32">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.1, boxShadow: "0 0 60px rgba(16,185,129,0.5)" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-white text-black px-16 py-8 rounded-3xl font-black text-sm uppercase tracking-[0.5em] transition-all shadow-2xl"
                                >
                                    <EditableText id="home_cta_btn" content="Contact Expert" as="span" />
                                </motion.button>
                            </Link>
                        </div>

                        <div ref={ctaStatsRef} className="grid md:grid-cols-3 gap-0 bg-white/5 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                            {[
                                { label: 'HAPPY FAMILIES', id: 'fam', format: (v: number) => `${(v / 1000).toFixed(1)}k+` },
                                { label: 'ACRES DELIVERED', id: 'acr', format: (v: number) => `${v}A+` },
                                { label: 'SUCCESS RATE', id: 'succ', format: (v: number) => `${v}%` }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/85 backdrop-blur-3xl p-16 hover:bg-emerald-500/5 transition-all duration-700 border-r border-white/5 last:border-0">
                                    <div className="text-5xl font-black mb-3 text-slate-900 italic tracking-tighter">{stat.format(ctaStatsCount[i])}</div>
                                    <EditableText id={`home_stat_label_${stat.id}`} content={stat.label} as="div" className="text-[10px] font-black text-slate-500 tracking-[0.5em] uppercase" />
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}



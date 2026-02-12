import { useParams, Link } from 'react-router-dom';
import { MapPin, Ruler, IndianRupee, ArrowLeft, Share2, Heart, ShieldCheck, Zap, Compass, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '../components/ui/reveal-on-scroll';

interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    size: string;
    type: string;
    images: string[];
    description: string;
    highlights: string[];
    features: string[];
    site_plan?: string;
}

export default function PropertyDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;
            try {
                const { data, error } = await supabase
                    .from('properties')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;
                if (data) setProperty(data);
            } catch (error) {
                console.error('Error fetching property:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full"
                />
            </div>
        );
    }

    if (!property) {
        return (
            <div className="pt-40 pb-20 px-6 text-center min-h-screen flex flex-col items-center justify-center bg-[#030712]">
                <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-[0.2em] italic">Node Not Found</h2>
                <Link to="/properties" className="text-emerald-400 font-black hover:text-emerald-300 flex items-center gap-4 uppercase tracking-[0.4em] text-xs">
                    <ArrowLeft className="w-5 h-5" /> RE-ENTER DATABASE
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-40 pb-32 relative px-6 md:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto mb-16 px-4">
                <Link to="/properties" className="inline-flex items-center gap-4 text-gray-500 hover:text-emerald-400 transition-all font-black uppercase tracking-[0.3em] text-[10px] group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-3 transition-transform duration-500" />
                    Back to Inventory
                </Link>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-stretch">
                {/* Left Column: Images */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="aspect-[4/5] md:aspect-[4/3] rounded-[3rem] overflow-hidden bg-gray-900 relative group border border-white/5 shadow-2xl"
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeImage}
                                src={property.images[activeImage]}
                                alt={property.title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full object-cover mix-blend-lighten opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                            />
                        </AnimatePresence>

                        <div className="absolute top-10 right-10 flex flex-col gap-4">
                            <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl text-right">
                                <div className="text-[9px] font-black text-emerald-500/60 uppercase tracking-[0.2em] mb-1">Valuation</div>
                                <div className="text-white font-black text-2xl italic leading-none">{property.price}</div>
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent"></div>
                        <div className="absolute bottom-10 left-10 py-3 px-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
                            <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Master Node: {activeImage + 1}/{property.images.length}</div>
                        </div>
                    </motion.div>

                    {property.images.length > 1 && (
                        <div className="flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-none justify-center lg:justify-start">
                            {property.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`relative flex-shrink-0 w-32 h-32 rounded-[2rem] overflow-hidden border-2 transition-all duration-700 ${activeImage === idx ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] scale-110 z-10' : 'border-white/5 opacity-30 hover:opacity-100'}`}
                                >
                                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Column: Details */}
                <RevealOnScroll className="h-full">
                    <div className="bg-gradient-to-br from-white/[0.04] to-transparent rounded-[4.5rem] p-12 md:p-20 border border-white/5 relative overflow-hidden h-full shadow-2xl flex flex-col">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_#10b98110_0%,_transparent_50%)]"></div>

                        <div className="relative z-10 flex-grow">
                            <div className="inline-flex items-center gap-4 bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-8 py-3 rounded-2xl mb-12 uppercase tracking-[0.4em] border border-emerald-500/20 shadow-2xl">
                                <Globe className="w-4 h-4" />
                                {property.type} CLASSIFICATION
                            </div>

                            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 mb-10 uppercase italic tracking-tighter leading-[0.85]">
                                {property.title}
                            </h1>

                            <div className="flex items-center gap-4 text-gray-500 mb-16 font-light italic text-2xl">
                                <MapPin className="w-8 h-8 text-emerald-500" />
                                <span className="tracking-widest">{property.location}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-10 mb-20">
                                <div className="bg-black/60 p-10 rounded-[2.5rem] border border-white/5 relative group overflow-hidden shadow-2xl">
                                    <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><IndianRupee size={80} /></div>
                                    <div className="text-[10px] text-gray-600 mb-4 font-black uppercase tracking-[0.3em]">Market Valuation</div>
                                    <div className="text-4xl font-black text-white tracking-tighter italic">
                                        {property.price}
                                    </div>
                                </div>
                                <div className="bg-black/60 p-10 rounded-[2.5rem] border border-white/5 relative group overflow-hidden shadow-2xl">
                                    <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Ruler size={80} /></div>
                                    <div className="text-[10px] text-gray-600 mb-4 font-black uppercase tracking-[0.3em]">Asset Domain</div>
                                    <div className="text-4xl font-black text-white tracking-tighter italic">
                                        {property.size}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-16 mb-20">
                                <div>
                                    <h3 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.5em] flex items-center gap-4">
                                        <span className="w-8 h-px bg-emerald-500/30"></span> Operational Brief
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-xl font-light italic pr-8">
                                        "{property.description}"
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.5em] flex items-center gap-4">
                                        <span className="w-8 h-px bg-emerald-500/30"></span> Technical Highlights
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {(property.highlights || property.features)?.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center gap-5 bg-white/[0.03] p-6 rounded-3xl border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-500">
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]"></div>
                                                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(37,211,102,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            href={`https://wa.me/919176002530?text=I am interested in ${property.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 w-full bg-[#25D366] text-black py-8 rounded-3xl font-black text-sm uppercase tracking-[0.5em] flex items-center justify-center gap-4 shadow-2xl"
                        >
                            <Zap className="w-6 h-6 fill-current" />
                            Initiate Acquisition Transmission
                        </motion.a>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Site Plan Section */}
            {property.site_plan && (
                <div className="max-w-7xl mx-auto mt-40">
                    <RevealOnScroll>
                        <div className="bg-gradient-to-br from-white/[0.04] to-transparent rounded-[5rem] p-16 md:p-24 border border-white/5 shadow-2xl overflow-hidden relative group">
                            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/[0.03] blur-[150px] rounded-full"></div>
                            <div className="mb-20">
                                <div className="text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.5em] mb-4">Topographical Architecture</div>
                                <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">Master <span className="text-emerald-500">Blueprint</span></h2>
                            </div>
                            <div className="aspect-[16/9] bg-gray-950 rounded-[4rem] overflow-hidden border border-white/10 group-hover:border-emerald-500/30 transition-all duration-1000 p-8">
                                <div className="w-full h-full rounded-[3rem] overflow-hidden">
                                    <img
                                        src={property.site_plan}
                                        alt="Master Plan"
                                        className="w-full h-full object-cover mix-blend-lighten opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                                    />
                                </div>
                            </div>
                            <div className="mt-16 text-center">
                                <p className="text-gray-500 font-light italic text-lg opacity-60">"Validating structural integrity and spatial optimization across the development matrix."</p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            )}
        </div>
    );
}

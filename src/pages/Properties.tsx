import { MapPin, IndianRupee, Ruler, Loader2, Globe, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import RevealOnScroll from '../components/ui/reveal-on-scroll';
import { motion } from 'framer-motion';

interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    size: string;
    type: string;
    images: string[];
    features: string[];
}

export default function Properties() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const { data, error } = await supabase
                    .from('properties')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                if (data) setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                />
            </div>
        );
    }

    return (
        <div className="pt-40 pb-32 relative px-6 md:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll className="text-center mb-32">
                    <div className="inline-flex items-center gap-3 bg-emerald-500/10 px-6 py-2.5 rounded-full border border-emerald-500/20 mb-8 font-mono text-[10px] tracking-[0.4em] text-emerald-400">
                        <Globe className="w-4 h-4 animate-pulse" />
                        SCANNING AVAILABLE ASSET NODES
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter italic uppercase underline-offset-[20px] decoration-emerald-500/30">
                        Global <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">Inventory</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed italic opacity-80">
                        "Secure entry into high-growth developmental corridors. Every inventory node valuated for maximum legacy preservation protocols."
                    </p>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {properties.map((property, index) => (
                        <RevealOnScroll key={property.id} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group bg-gradient-to-b from-white/[0.03] to-transparent rounded-[3rem] overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-700 flex flex-col h-full hover:shadow-2xl"
                            >
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img
                                        src={property.images[0]}
                                        alt={property.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-70 group-hover:opacity-100 mix-blend-lighten"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-black/80 backdrop-blur-xl px-4 py-1.5 rounded-xl text-[8px] font-black text-white uppercase tracking-[0.2em] border border-white/10 shadow-2xl">
                                            {property.type}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>
                                </div>

                                <div className="p-10 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors uppercase italic tracking-tighter leading-none">
                                        {property.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-gray-500 mb-8 font-light italic text-base">
                                        <MapPin className="w-4 h-4 text-emerald-500" />
                                        <span className="tracking-widest capitalize">{property.location}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {property.features?.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="bg-white/5 text-gray-600 text-[8px] px-3 py-1.5 rounded-lg font-black uppercase tracking-[0.1em] border border-white/5 transition-all">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                                        <div>
                                            <div className="text-[8px] text-emerald-500/40 mb-2 flex items-center gap-1.5 uppercase tracking-widest font-black">
                                                VALUATION
                                            </div>
                                            <div className="font-black text-white text-2xl tracking-tighter italic">{property.price}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[8px] text-gray-700 mb-2 flex items-center justify-end gap-1.5 uppercase tracking-widest font-black">
                                                DOMAIN
                                            </div>
                                            <div className="font-black text-white text-2xl tracking-tighter italic">{property.size}</div>
                                        </div>
                                    </div>

                                    <Link to={`/properties/${property.id}`} className="block w-full mt-10">
                                        <button className="w-full bg-white/5 text-white font-black py-5 rounded-xl border border-white/10 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-500 uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3">
                                            Access Node
                                            <Compass className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
}

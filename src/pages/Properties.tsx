import { MapPin, IndianRupee, Ruler, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

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
                <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Discover Premium <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Land Assets</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our handpicked curation of high-growth residential plots and managed farmlands designed for wealth preservation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {properties.map((property) => (
                        <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={property.images[0]}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wide">
                                    {property.type}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                    {property.title}
                                </h3>

                                <div className="flex items-center gap-2 text-gray-500 mb-4">
                                    <MapPin className="w-4 h-4 text-emerald-500" />
                                    <span className="text-sm font-medium">{property.location}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {property.features?.slice(0, 3).map((tag, index) => (
                                        <span key={index} className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-md font-medium border border-emerald-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                                            <IndianRupee className="w-3 h-3" />
                                            Price
                                        </div>
                                        <div className="font-bold text-gray-900">{property.price}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-500 mb-1 flex items-center justify-end gap-1">
                                            <Ruler className="w-3 h-3" />
                                            Size
                                        </div>
                                        <div className="font-bold text-gray-900">{property.size}</div>
                                    </div>
                                </div>

                                <Link to={`/properties/${property.id}`} className="w-full mt-6 bg-gray-50 text-gray-900 font-semibold py-3 rounded-xl border border-gray-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all flex items-center justify-center gap-2 group/btn">
                                    View Details
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

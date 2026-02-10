import { useParams, Link } from 'react-router-dom';
import { MapPin, Ruler, IndianRupee, CheckCircle2, ArrowLeft, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

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
                <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
            </div>
        );
    }

    if (!property) {
        return (
            <div className="pt-32 pb-20 px-6 text-center min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h2>
                <Link to="/properties" className="text-emerald-600 font-semibold hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Properties
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            {/* Breadcrumb / Back Link */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <Link to="/properties" className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Listings
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
                {/* Left Column: Images */}
                <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
                        <img
                            src={property.images[activeImage]}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {property.images.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {property.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-emerald-600 ring-2 ring-emerald-100' : 'border-transparent hover:border-emerald-300'}`}
                                >
                                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Quick Stats Card for Mobile - Show here only on small screens if needed, otherwise just rely on the right column */}
                </div>

                {/* Right Column: Details */}
                <div>
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full">
                        <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                            {property.type}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            {property.title}
                        </h1>

                        <div className="flex items-center gap-2 text-gray-600 mb-8">
                            <MapPin className="w-5 h-5 text-emerald-600" />
                            <span className="text-lg">{property.location}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                            <div>
                                <div className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                                    <IndianRupee className="w-4 h-4" /> Price
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{property.price}</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                                    <Ruler className="w-4 h-4" /> Plot Size
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{property.size}</div>
                            </div>
                        </div>

                        <div className="space-y-6 mb-10">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">About the Property</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {property.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Highlights</h3>
                                <ul className="space-y-2">
                                    {property.highlights?.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                    {/* Fallback if highlights not in data, show generic features */}
                                    {!property.highlights && property.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href={`https://wa.me/919176002530?text=I am interested in ${property.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat on WhatsApp to Buy
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Site Plan Section */}
            {property.site_plan && (
                <div className="max-w-7xl mx-auto px-6 mt-20">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Master Plan Layout</h2>
                        <div className="aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden">
                            <img
                                src={property.site_plan}
                                alt="Master Plan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

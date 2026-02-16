import { Link } from 'react-router-dom';
import { MapPin, Ruler, Droplets } from 'lucide-react';
import { Button } from './Button';

export interface PropertyProps {
    id: string;
    title: string;
    location: string;
    price: string;
    size: string;
    image: string;
    category: string;
    features?: string[];
}

export function PropertyCard({ property }: { property: PropertyProps }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-100">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {property.category}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-bold text-xl">{property.price}</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-neutral-900 group-hover:text-primary transition-colors">
                    {property.title}
                </h3>

                <div className="flex items-center text-neutral-500 mb-4 text-sm">
                    <MapPin className="h-4 w-4 mr-1 text-accent" />
                    {property.location}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-neutral-100">
                    <div className="flex items-center text-sm text-neutral-600">
                        <Ruler className="h-4 w-4 mr-2 text-primary/70" />
                        {property.size}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                        <Droplets className="h-4 w-4 mr-2 text-primary/70" />
                        Water Source
                    </div>
                </div>

                <Link to={`/properties/${property.id}`} className="block">
                    <Button variant="outline" className="w-full">
                        View Details
                    </Button>
                </Link>
            </div>
        </div>
    );
}

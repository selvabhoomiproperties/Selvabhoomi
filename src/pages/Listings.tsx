import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { PropertyCard, PropertyProps } from '../components/ui/PropertyCard';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Search, Filter, X } from 'lucide-react';
import { cn } from '../lib/utils';

// Mock Data (Expanded)
const MOCK_PROPERTIES: PropertyProps[] = [
    {
        id: '1',
        title: 'Fertile Coconut Grove',
        location: 'Pollachi, Tamil Nadu',
        price: '₹45 Lakhs',
        size: '5 Acres',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop',
        category: 'Farmland',
        features: ['Coconut Trees', 'Well Water']
    },
    {
        id: '2',
        title: 'Organic Mango Farm',
        location: 'Krishnagiri, Tamil Nadu',
        price: '₹1.2 Cr',
        size: '12 Acres',
        image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2878&auto=format&fit=crop',
        category: 'Orchard',
    },
    {
        id: '3',
        title: 'Riverfront Investment Plot',
        location: 'Theni, Tamil Nadu',
        price: '₹25 Lakhs',
        size: '2 Acres',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop',
        category: 'Investment'
    },
    {
        id: '4',
        title: 'Teak Wood Plantation',
        location: 'Thanjavur, Tamil Nadu',
        price: '₹80 Lakhs',
        size: '8 Acres',
        image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=2878&auto=format&fit=crop',
        category: 'Plantation'
    },
    {
        id: '5',
        title: 'Dairy Farm Setup',
        location: 'Erode, Tamil Nadu',
        price: '₹55 Lakhs',
        size: '4 Acres',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2948&auto=format&fit=crop',
        category: 'Farmland'
    },
    {
        id: '6',
        title: 'Hillside Coffee Estate',
        location: 'Yercaud, Tamil Nadu',
        price: '₹2.5 Cr',
        size: '15 Acres',
        image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=3132&auto=format&fit=crop',
        category: 'Estate'
    }
];

export function Listings() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <Layout title="All Listings - Selvabhoomi">
            <div className="bg-neutral-50 py-12">
                <div className="container mx-auto px-4">
                    <SectionHeading title="Browse Properties" subtitle="Find your perfect piece of land from our curated list." />

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filter Sidebar - Desktop */}
                        <div className="hidden lg:block w-80 flex-shrink-0">
                            <FilterSidebar />
                        </div>

                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden mb-6">
                            <Button onClick={() => setIsFilterOpen(true)} className="w-full flex justify-between items-center">
                                <span>Filters</span>
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Property Grid */}
                        <div className="flex-grow">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {MOCK_PROPERTIES.map((property) => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-12 flex justify-center space-x-2">
                                <Button variant="outline" size="sm" disabled>Previous</Button>
                                <Button variant="primary" size="sm">1</Button>
                                <Button variant="outline" size="sm">2</Button>
                                <Button variant="outline" size="sm">3</Button>
                                <Button variant="outline" size="sm">Next</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Sidebar */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-50 lg:hidden flex">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)}></div>
                    <div className="relative w-80 bg-white h-full shadow-xl overflow-y-auto p-6 animate-in slide-in-from-left">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold font-heading">Filters</h3>
                            <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full">
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <FilterSidebar />
                        <div className="mt-6 pt-6 border-t border-neutral-200">
                            <Button className="w-full" onClick={() => setIsFilterOpen(false)}>Apply Filters</Button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}

function FilterSidebar() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 space-y-6 sticky top-24">
            {/* Search */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Search Location</label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="e.g. Coimbatore"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                </div>
            </div>

            {/* Price Range */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Price Range</label>
                <select className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-white">
                    <option>Any Price</option>
                    <option>Up to ₹20 Lakhs</option>
                    <option>₹20 Lakhs - ₹50 Lakhs</option>
                    <option>₹50 Lakhs - ₹1 Cr</option>
                    <option>Above ₹1 Cr</option>
                </select>
            </div>

            {/* Property Type */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Property Type</label>
                <div className="space-y-2">
                    {['Farmland', 'Orchard', 'Estate', 'Investment Plot'].map((type) => (
                        <label key={type} className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                            <span className="text-sm text-neutral-600">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Size */}
            <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Size (Acres)</label>
                <div className="flex items-center space-x-2">
                    <input
                        type="number"
                        placeholder="Min"
                        className="w-full px-3 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <span className="text-neutral-400">-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        className="w-full px-3 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                </div>
            </div>

            <Button variant="outline" className="w-full">Reset Filters</Button>
        </div>
    );
}

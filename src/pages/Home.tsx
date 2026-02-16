import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added imports
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PropertyCard } from '../components/ui/PropertyCard';
import { Search, ArrowRight, ShieldCheck, TrendingUp, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Data
const FEATURED_PROPERTIES = [
    {
        id: '1',
        title: 'Fertile Coconut Grove',
        location: 'Pollachi, Tamil Nadu',
        price: '₹45 Lakhs',
        size: '5 Acres',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop', // Updated Coconut Image
        category: 'Farmland',
        features: ['Coconut Trees', 'Well Water']
    },
    {
        id: '2',
        title: 'Organic Mango Farm',
        location: 'Krishnagiri, Tamil Nadu',
        price: '₹1.2 Cr',
        size: '12 Acres',
        image: 'https://images.unsplash.com/photo-1601276124933-286816d4705d?q=80&w=2670&auto=format&fit=crop', // Updated Mango Image
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
    }
];

export function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('');

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchTerm) params.append('location', searchTerm);
        if (searchType) params.append('type', searchType);
        navigate(`/listings?${params.toString()}`);
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                        alt="Beautiful Farmland"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight"
                    >
                        Invest in nature.<br />Grow your wealth.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-100 mb-10 max-w-2xl mx-auto"
                    >
                        Premium agricultural lands and farmland investments curated for long-term growth and sustainable farming.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white p-4 rounded-xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4"
                    >
                        <div className="flex-grow flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Search by location (e.g. Coimbatore)"
                                className="flex-grow px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <select
                                className="px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary text-neutral-900 bg-white"
                                value={searchType}
                                onChange={(e) => setSearchType(e.target.value)}
                            >
                                <option value="">Property Type</option>
                                <option value="farmland">Farmland</option>
                                <option value="orchard">Orchard</option>
                                <option value="estate">Estate</option>
                            </select>
                        </div>
                        <Button size="lg" className="w-full md:w-auto" onClick={handleSearch}>
                            <Search className="h-5 w-5 mr-2" />
                            Search
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Featured Listings */}
            <section className="py-20 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <SectionHeading
                            title="Featured Properties"
                            subtitle="Handpicked agricultural lands with high appreciation potential."
                            className="mb-0"
                        />
                        <Link to="/listings" className="hidden md:block">
                            <Button variant="ghost">
                                View All Listings <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FEATURED_PROPERTIES.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/listings">
                            <Button variant="outline">
                                View All Listings <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Features */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Why Invest with Selvabhoomi?"
                        subtitle="We ensure transparency, legality, and growth in every acre you buy."
                        center
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <FeatureItem
                            icon={<ShieldCheck className="h-10 w-10 text-primary" />}
                            title="100% Verified Titles"
                            description="Every property goes through rigorous legal scrutiny to ensure clean documents and hassle-free ownership."
                        />
                        <FeatureItem
                            icon={<TrendingUp className="h-10 w-10 text-primary" />}
                            title="High ROI Potential"
                            description="Strategic locations chosen for maximum land appreciation and agricultural yield."
                        />
                        <FeatureItem
                            icon={<Leaf className="h-10 w-10 text-primary" />}
                            title="Managed Farming"
                            description="Don't just buy land, let us manage it for you. We offer end-to-end farm management services."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to find your piece of earth?</h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Join 500+ happy investors who executed their farmland dreams with Selvabhoomi.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link to="/listings">
                            <Button variant="secondary" size="lg">Explore Listings</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-dark">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="text-center p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-100 hover:shadow-xl transition-all duration-300">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold font-heading mb-3 text-neutral-900">{title}</h3>
            <p className="text-neutral-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Toast } from '../components/ui/Toast';
import { MapPin, Droplets, Sun, Wind, ShieldCheck, Phone, Mail } from 'lucide-react';

export function PropertyDetails() {
    const { id } = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleInquiry = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowToast(true);
        }, 1500);
    };

    // Mock Data (would usually come from API based on ID)
    const property = {
        id: id || '1',
        title: 'Fertile Coconut Grove',
        location: 'Pollachi, Tamil Nadu',
        price: '₹45 Lakhs',
        size: '5 Acres',
        description: 'A beautiful 5-acre coconut grove located in the heart of Pollachi. The soil is red loamy and suitable for intercropping. The farm has a dedicated well with a free electricity connection. Fencing is done on all four sides.',
        images: [
            'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1601276124933-286816d4705d?q=80&w=2670&auto=format&fit=crop'
        ],
        features: ['Coconut Trees (500)', 'Free EB Service', 'Borewell', 'Fencing', 'Red Soil'],
        highlights: [
            { label: 'Soil Type', value: 'Red Loam', icon: <Sun className="h-5 w-5" /> },
            { label: 'Water Source', value: 'Borewell + Canal', icon: <Droplets className="h-5 w-5" /> },
            { label: 'Climate', value: 'Tropical', icon: <Wind className="h-5 w-5" /> },
            { label: 'Documentation', value: 'Clear Title', icon: <ShieldCheck className="h-5 w-5" /> },
        ]
    };

    return (
        <Layout title={`${property.title} - Selvabhoomi`}>
            <div className="bg-white pb-20">
                {/* Image Gallery */}
                <div className="h-[50vh] md:h-[60vh] relative flex">
                    <div className="w-full md:w-2/3 h-full">
                        <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden md:flex flex-col w-1/3 h-full border-l-4 border-white">
                        <div className="h-1/2 w-full border-b-4 border-white">
                            <img src={property.images[1]} alt="Gallery 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-1/2 w-full">
                            <img src={property.images[2]} alt="Gallery 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <Button className="absolute bottom-4 right-4 bg-white text-neutral-900 hover:bg-neutral-100" size="sm">
                        View All Photos
                    </Button>
                </div>

                <div className="container mx-auto px-4 -mt-10 relative z-10">
                    <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 flex flex-col lg:flex-row gap-10">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-2">{property.title}</h1>
                                    <div className="flex items-center text-neutral-500 font-medium">
                                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                                        {property.location}
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 text-left md:text-right">
                                    <div className="text-3xl font-bold text-primary-dark">{property.price}</div>
                                    <div className="text-sm text-neutral-500">Fixed feature</div>
                                </div>
                            </div>

                            <div className="border-t border-b border-neutral-100 py-6 my-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                                {property.highlights.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center p-4 bg-neutral-50 rounded-lg">
                                        <div className="text-primary mb-2 bg-white p-3 rounded-full shadow-sm">{item.icon}</div>
                                        <span className="text-sm text-neutral-500 mb-1">{item.label}</span>
                                        <span className="font-semibold text-neutral-900">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-10">
                                <h2 className="text-2xl font-bold font-heading mb-4">About this property</h2>
                                <p className="text-neutral-600 leading-relaxed text-lg">
                                    {property.description}
                                </p>
                            </div>

                            <div className="mb-10">
                                <h2 className="text-2xl font-bold font-heading mb-4">Features & Amenities</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {property.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-neutral-700">
                                            <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar / Form */}
                        <div className="lg:w-1/3">
                            <div className="bg-white border border-neutral-200 rounded-xl p-6 sticky top-24 shadow-lg">
                                <h3 className="text-xl font-bold font-heading mb-6">Interested in this property?</h3>

                                <form className="space-y-4" onSubmit={handleInquiry}>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Your Name</label>
                                        <input required type="text" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                                        <input required type="tel" className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                                        <textarea required rows={4} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="I'm interested in this property..." defaultValue={`I am interested in ${property.title}. Please provide more details.`}></textarea>
                                    </div>
                                    <Button className="w-full" size="lg" isLoading={isSubmitting}>Send Inquiry</Button>
                                </form>

                                <div className="mt-6 pt-6 border-t border-neutral-100">
                                    <div className="flex items-center justify-center space-x-4">
                                        <Button variant="outline" size="sm" className="flex-1">
                                            <Phone className="h-4 w-4 mr-2" /> Call
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex-1">
                                            <Mail className="h-4 w-4 mr-2" /> Email
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toast
                isVisible={showToast}
                onClose={() => setShowToast(false)}
                message="Inquiry sent successfully! The agent will contact you soon."
            />
        </Layout>
    );
}

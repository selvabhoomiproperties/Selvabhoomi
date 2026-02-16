import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Toast } from '../components/ui/Toast';
import { Upload, Check } from 'lucide-react';

export function ListProperty() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setShowToast(true);
            // Optional: Reset form here
        }, 1500);
    };

    return (
        <Layout title="List Your Property - Selvabhoomi">
            <div className="py-20 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Sell Your Farmland With Us"
                        subtitle="Connect with thousands of genuine buyers and investors. Simple transparent process."
                        center
                    />

                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Section 1: Property Basics */}
                            <div>
                                <h3 className="text-xl font-bold font-heading mb-4 text-primary-dark border-b pb-2">Property Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Property Type</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                                            <option>Agricultural Land</option>
                                            <option>Farm House</option>
                                            <option>Estate / Plantation</option>
                                            <option>Investment Plot</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Total Area (Acres)</label>
                                        <input required type="number" step="0.1" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g. 5.5" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Expected Price (Total)</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g. 50 Lakhs" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Price Per Acre</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g. 10 Lakhs" />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Location */}
                            <div>
                                <h3 className="text-xl font-bold font-heading mb-4 text-primary-dark border-b pb-2">Location</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">District</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g. Coimbatore" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Taluk / Village</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g. Pollachi" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Address / Landmark</label>
                                        <textarea className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Near Government School..."></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Features */}
                            <div>
                                <h3 className="text-xl font-bold font-heading mb-4 text-primary-dark border-b pb-2">Features</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Borewell', 'Free EB', 'Fencing', 'Road Access', 'River/Canal', 'Red Soil', 'House', 'Coconut Trees'].map((feature) => (
                                        <label key={feature} className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" className="w-5 h-5 rounded text-primary focus:ring-primary border-gray-300" />
                                            <span className="text-neutral-700">{feature}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Section 4: Contact & Images */}
                            <div>
                                <h3 className="text-xl font-bold font-heading mb-4 text-primary-dark border-b pb-2">Owner Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Your Name</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                                        <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    </div>
                                </div>

                                <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer bg-neutral-50">
                                    <Upload className="mx-auto h-12 w-12 text-neutral-400 mb-3" />
                                    <p className="text-sm text-neutral-600 font-medium">Click to upload property images</p>
                                    <p className="text-xs text-neutral-400 mt-1">PNG, JPG up to 10MB</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
                                    Submit Listing Request
                                </Button>
                                <p className="text-center text-sm text-neutral-500 mt-4">
                                    By submitting, you agree to our Terms and Conditions. Our team will verify the details before listing.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Toast
                isVisible={showToast}
                onClose={() => setShowToast(false)}
                message="Listing request submitted successfully! We will contact you shortly."
            />
        </Layout>
    );
}

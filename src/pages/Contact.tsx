import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Toast } from '../components/ui/Toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowToast(true);
        }, 1500);
    };

    return (
        <Layout title="Contact Us - Selvabhoomi">
            <div className="py-20 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <SectionHeading title="Get in Touch" subtitle="We'd love to hear from you. Visit us or send us a message." center />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                                <h3 className="text-2xl font-bold font-heading mb-6 text-primary-dark">Contact Information</h3>
                                <div className="space-y-6">
                                    <ContactItem
                                        icon={<MapPin className="h-6 w-6 text-primary" />}
                                        title="Our Office"
                                        content="123 Green Valley Road, Agricultural District, Tamil Nadu, India - 641001"
                                    />
                                    <ContactItem
                                        icon={<Phone className="h-6 w-6 text-primary" />}
                                        title="Phone"
                                        content="+91 98765 43210"
                                    />
                                    <ContactItem
                                        icon={<Mail className="h-6 w-6 text-primary" />}
                                        title="Email"
                                        content="info@selvabhoomi.com"
                                    />
                                    <ContactItem
                                        icon={<Clock className="h-6 w-6 text-primary" />}
                                        title="Working Hours"
                                        content="Mon - Sat: 9:00 AM - 6:00 PM"
                                    />
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-neutral-200 h-64 rounded-2xl overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.205739665679!2d76.9536067148006!3d11.02058625759714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c817e8638fcd!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625241234567!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    title="Office Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold font-heading mb-6 text-neutral-900">Send us a Message</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                                        <input required type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                                    <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+91 98765 43210" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                                    <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="How can we help you?"></textarea>
                                </div>

                                <Button className="w-full" size="lg" isLoading={isSubmitting}>Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toast
                isVisible={showToast}
                onClose={() => setShowToast(false)}
                message="Message sent successfully! We will get back to you soon."
            />
        </Layout>
    );
}

function ContactItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                {icon}
            </div>
            <div className="ml-4">
                <h4 className="text-lg font-bold text-neutral-900">{title}</h4>
                <p className="text-neutral-600 mt-1">{content}</p>
            </div>
        </div>
    );
}

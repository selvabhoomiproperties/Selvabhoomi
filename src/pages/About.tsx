import { Layout } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';

export function About() {
    return (
        <Layout title="About Us - Selvabhoomi">
            {/* Hero */}
            <div className="bg-primary-dark text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Cultivating Trust, One Acre at a Time</h1>
                    <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                        Selvabhoomi is India's premier marketplace for agricultural land, dedicated to connecting investors with authentic farmland opportunities while promoting sustainable farming practices.
                    </p>
                </div>
            </div>

            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1625246333195-5848c4282714?q=80&w=2670&auto=format&fit=crop"
                                alt="Our Vision"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <SectionHeading title="Our Mission" className="mb-6" />
                            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                                <p>
                                    Founded in 2024, Selvabhoomi was born from a simple observation: buying farmland in India is complicated, opaque, and risky. We set out to change that.
                                </p>
                                <p>
                                    Our mission is to democratize farmland ownership. We believe that owning a piece of land shouldn't just be for the wealthy or the locally connected. By verifying titles, checking soil quality, and ensuring legal transparency, we make farmland investment accessible and safe for everyone.
                                </p>
                                <p>
                                    We are not just real estate agents; we are partners in your agricultural journey. From purchase to plantation, we offer end-to-end support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

import { ArrowRight, CheckCircle2, MapPin, Shield, TrendingUp, Users, Award, Clock, FileCheck, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
                }}></div>

                <div className="max-w-7xl mx-auto relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 mb-6">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-700">Near Chennai's New Global Airport</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                                    Secure Land Assets
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    Built for Legacy
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                Legally secure land assets that grow in value without demanding your time. Premium plots and professionally managed farmlands in high-growth infrastructure corridors.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <Link to="/properties" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center gap-2 group text-sm md:text-base">
                                    Explore Properties
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button className="bg-white text-gray-800 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 transition-all text-sm md:text-base">
                                    Download Brochure
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                                    <div className="text-sm text-gray-600">Legal Clarity</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">DTCP</div>
                                    <div className="text-sm text-gray-600">Approved</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">7 Years</div>
                                    <div className="text-sm text-gray-600">Management</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl transform rotate-3"></div>
                            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
                                    alt="Premium land property"
                                    className="rounded-2xl w-full h-96 object-cover mb-6"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl">
                                        <Shield className="w-8 h-8 text-emerald-600 mb-2" />
                                        <div className="font-semibold text-gray-900">Bank Loan Ready</div>
                                        <div className="text-sm text-gray-600">Clear documentation</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl">
                                        <TrendingUp className="w-8 h-8 text-emerald-600 mb-2" />
                                        <div className="font-semibold text-gray-900">High Growth</div>
                                        <div className="text-sm text-gray-600">Infrastructure driven</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="offerings" className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Curated Land <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Asset Portfolio</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Choose from residential plots for immediate growth or managed farmlands for legacy building
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Landmark className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Plot Assets</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                DTCP & CMDA-approved plotted developments with clear titles and full legal verification. Bank-loan friendly and ideal for construction or appreciation.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-gray-700">Government approved with clear documentation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-gray-700">Fast resale liquidity & predictable appreciation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-gray-700">Located in fast-appreciating infrastructure zones</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-gray-700">Immediate construction ready</span>
                                </div>
                            </div>

                            <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                                View Plots
                            </button>
                        </div>

                        <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200">
                            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>

                            <div className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                FULLY MANAGED
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Managed Farmland Assets</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Large-format farmland estates with professional management for up to 7 years. Zero owner involvement required—we handle everything.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-gray-700">Complete maintenance, security & plantation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-gray-700">Passive ownership with lifestyle value</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-gray-700">Inflation hedge & legacy asset creation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="text-gray-700">Long-term appreciation driven by scarcity</span>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                                View Farmlands
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="location" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)',
                }}></div>

                <div className="max-w-7xl mx-auto relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30 mb-6">
                                <MapPin className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm font-medium text-emerald-400">Strategic Location Advantage</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Positioned for <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Exponential Growth</span>
                            </h2>

                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Located near Chennai's upcoming New Global Airport in the Parandur zone. Early-entry pricing before infrastructure completion means maximum appreciation potential.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="bg-emerald-500/20 p-2 rounded-lg">
                                        <MapPin className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1">Airport-Led Development</div>
                                        <div className="text-gray-400 text-sm">Infrastructure precedes value explosion—early investors benefit most</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="bg-emerald-500/20 p-2 rounded-lg">
                                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1">High-Growth Corridor</div>
                                        <div className="text-gray-400 text-sm">Proven appreciation trajectory with upcoming connectivity improvements</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="bg-emerald-500/20 p-2 rounded-lg">
                                        <Clock className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1">Perfect Timing</div>
                                        <div className="text-gray-400 text-sm">Enter at ground level before mass awareness and price escalation</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop"
                                    alt="Infrastructure development"
                                    className="rounded-2xl w-full h-80 object-cover mb-6"
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                                        <div className="text-3xl font-bold text-white mb-1">5km</div>
                                        <div className="text-sm text-gray-300">From Airport Site</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                                        <div className="text-3xl font-bold text-white mb-1">30min</div>
                                        <div className="text-sm text-gray-300">To Chennai CBD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="why-us" className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Investors <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Trust Us</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Not a land seller. A curator of secure, future-ready land assets built for wealth preservation and legacy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Absolute Legal Transparency</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Government approvals verified and accessible. Clear ownership documentation. No verbal assurances—only documented proof.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Award className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Management</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Complete operational handling for farmland buyers. From maintenance to security—we manage everything for up to 7 years.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <FileCheck className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Investor-First Approach</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Proven sell-out history. Long-term operational vision. We focus on your wealth preservation, not one-time sales.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-200">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                    Solving Real Investor Problems
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-emerald-600 rounded-full p-1 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Fear of Land Fraud</div>
                                            <div className="text-gray-600 text-sm">100% legal verification with government approvals</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-emerald-600 rounded-full p-1 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Lack of Time to Manage</div>
                                            <div className="text-gray-600 text-sm">Professional management without owner involvement</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-emerald-600 rounded-full p-1 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Wealth Erosion by Inflation</div>
                                            <div className="text-gray-600 text-sm">Tangible assets with proven appreciation trajectory</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-emerald-600 rounded-full p-1 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Legacy Asset Creation</div>
                                            <div className="text-gray-600 text-sm">Multi-generational wealth building opportunities</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <Users className="w-8 h-8 text-emerald-600" />
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">Our Investors</div>
                                        <div className="text-gray-600">Who trust us with their legacy</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="border-l-4 border-emerald-500 pl-4">
                                        <div className="font-semibold text-gray-900">High-Income Professionals</div>
                                        <div className="text-sm text-gray-600">Ages 35-55, seeking wealth preservation</div>
                                    </div>
                                    <div className="border-l-4 border-teal-500 pl-4">
                                        <div className="font-semibold text-gray-900">Non-Resident Indians (NRIs)</div>
                                        <div className="text-sm text-gray-600">Building assets back home</div>
                                    </div>
                                    <div className="border-l-4 border-cyan-500 pl-4">
                                        <div className="font-semibold text-gray-900">Business Owners</div>
                                        <div className="text-sm text-gray-600">Legacy and multi-generational planners</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
                }}></div>

                <div className="max-w-4xl mx-auto text-center relative">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Build Your Legacy?
                    </h2>
                    <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
                        Join forward-thinking investors who are securing their family's future with legally clean, professionally managed land assets.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">

                        <button className="bg-emerald-900/50 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-900/70 transition-all">
                            Talk to Advisor
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold mb-2">1000+</div>
                            <div className="text-emerald-100">Happy Investors</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold mb-2">500+ Acres</div>
                            <div className="text-emerald-100">Under Management</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-3xl font-bold mb-2">100%</div>
                            <div className="text-emerald-100">Sell-Out Rate</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

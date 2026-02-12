import { Shield, Target, Users, History, Globe, Zap, Database, Layers, Cpu } from 'lucide-react';
import RevealOnScroll from '../components/ui/reveal-on-scroll';
import { EditableText } from '../components/ui/EditableContent';

export default function About() {
    return (
        <div className="pt-40 pb-32 relative px-6 md:px-8 lg:px-10 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_20%_20%,_#10b98108_0%,_transparent_50%)]"></div>

            {/* Hero Section */}
            <section className="relative py-24 mb-32">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <RevealOnScroll>
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10 mb-12 font-mono text-[9px] tracking-[0.4em] text-emerald-400 uppercase shadow-2xl">
                            ORIGIN NODE 01 // ARCHITECTURE
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tighter uppercase italic text-white leading-[0.9]">
                            Architects of <br />
                            <EditableText
                                id="about_hero_subtitle"
                                content="Future Homes"
                                as="span"
                                className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-600 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]"
                            />
                        </h1>
                        <EditableText
                            id="about_hero_description"
                            content='"Selvabhoomi Properties is bringing absolute transparency and professional management to land investment. We help you build a secure future with ease."'
                            as="p"
                            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light italic leading-relaxed opacity-80"
                        />
                    </RevealOnScroll>
                </div>
            </section>

            {/* Vision & Mission - Refined Balance */}
            <section className="py-20 mb-40 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        <RevealOnScroll delay={0.2} className="h-full">
                            <div className="bg-gradient-to-br from-white/[0.04] to-transparent rounded-[4.5rem] p-16 md:p-24 border border-white/5 h-full group hover:border-emerald-500/30 transition-all duration-1000 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/[0.02] blur-[100px] rounded-full"></div>
                                <div className="w-24 h-24 bg-black/60 rounded-3xl flex items-center justify-center mb-16 border border-white/10 group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                                    <Target className="w-12 h-12 text-emerald-400" />
                                </div>
                                <h2 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.6em] flex items-center gap-4 italic">
                                    <span className="w-8 h-px bg-emerald-500/40"></span> Vision
                                </h2>
                                <EditableText
                                    id="about_vision"
                                    content='"To be the most trusted name in land investment, helping families build generational wealth through secure, high-value assets."'
                                    as="p"
                                    className="text-gray-400 leading-relaxed text-2xl md:text-3xl font-light italic opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.4} className="h-full">
                            <div className="bg-gradient-to-br from-white/[0.04] to-transparent rounded-[4.5rem] p-16 md:p-24 border border-white/5 h-full group hover:border-emerald-500/30 transition-all duration-1000 shadow-2xl relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/[0.02] blur-[100px] rounded-full"></div>
                                <div className="w-24 h-24 bg-black/60 rounded-3xl flex items-center justify-center mb-16 border border-white/10 group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                                    <Shield className="w-12 h-12 text-emerald-400" />
                                </div>
                                <h2 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.6em] flex items-center gap-4 italic">
                                    <span className="w-8 h-px bg-emerald-500/40"></span> Mission
                                </h2>
                                <EditableText
                                    id="about_mission"
                                    content='"We are committed to 100% legal transparency and end-to-end management, making farmland ownership simple and profitable for everyone."'
                                    as="p"
                                    className="text-gray-400 leading-relaxed text-2xl md:text-3xl font-light italic opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* The Architecture Section */}
            <section className="py-32 lg:py-40 px-6 md:px-8 lg:px-10 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_0%_50%,_#10b98108_0%,_transparent_70%)] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <RevealOnScroll>
                            <h2 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.6em] flex items-center gap-4 italic px-4 py-2 border border-emerald-500/20 rounded-xl w-fit">
                                <Cpu className="w-4 h-4" /> Technical Protocol
                            </h2>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 uppercase italic leading-[1] tracking-tighter">
                                Our <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent italic">Framework</span>
                            </h3>
                            <p className="text-lg lg:text-xl text-gray-500 font-light italic leading-relaxed mb-12">
                                "Our process is built on absolute precision. Every land acquisition undergoes a 12-stage legal verification before it reaches our community of investors."
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {[
                                    { icon: Database, title: 'IRONCLAD RECORDS', desc: 'Secure, digital records of all land titles and government clearances.' },
                                    { icon: Layers, title: 'TRIPLE VERIFIED', desc: 'Three-tier legal verification from local, state, and private legal experts.' }
                                ].map((box, i) => (
                                    <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all duration-700 group">
                                        <box.icon className="w-8 lg:w-10 h-8 lg:h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                                        <div className="text-[10px] lg:text-xs font-black text-white mb-4 tracking-[0.3em] uppercase">{box.title}</div>
                                        <div className="text-xs lg:text-sm text-gray-500 font-light italic">"{box.desc}"</div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-[4rem] group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
                                <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src="file:///Users/ashiq/.gemini/antigravity/brain/9a4b7b56-95e9-4998-9e99-98854a31cadd/architectural_legacy_blueprint_1770913810522.png"
                                        alt="Architecture Blueprint"
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent"></div>

                                    <div className="absolute top-10 left-10 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                                        <div className="text-[8px] font-black text-emerald-500/60 mb-1 tracking-[0.2em] uppercase">Sector Node</div>
                                        <div className="text-white font-mono text-xs leading-none">PRNDR-ALPHA-9</div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Journey - Cinematic Padding */}
            <section className="py-40 px-6 md:px-12 bg-black/40 rounded-[6rem] mb-40 border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <RevealOnScroll>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tighter uppercase italic leading-none">
                                The <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">Timeline</span>
                            </h2>
                            <div className="space-y-16">
                                {[
                                    { title: 'ORIGIN // 2014', text: 'Founded with a mission to bring security to the real estate sector. Our first project was successfully delivered.' },
                                    { title: 'GROWTH // 2018', text: 'Evolved into a premier land management firm, focusing on high-growth corridors like Parandur.' },
                                    { title: 'TRUSTED // CURRENT', text: 'Delivered 500+ acres of prime land to 1000+ happy families. Expanding into the future.' }
                                ].map((step, i) => (
                                    <div key={i} className="relative pl-16 border-l-2 border-emerald-500/10 group hover:border-emerald-500 transition-all duration-1000 py-4">
                                        <div className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_20px_#10b981] scale-0 group-hover:scale-125 transition-all duration-700"></div>
                                        <h3 className="text-[10px] font-black text-emerald-500/50 mb-4 uppercase tracking-[0.5em] group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                                        <p className="text-gray-400 text-xl font-light italic leading-relaxed group-hover:text-gray-200 transition-colors">{step.text}</p>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <div className="relative group">
                                <div className="absolute -inset-10 bg-emerald-500/[0.03] rounded-[5rem] blur-3xl group-hover:bg-emerald-500/[0.05] transition-all duration-1000"></div>
                                <div className="relative overflow-hidden rounded-[5rem] border border-white/10 shadow-2xl bg-gray-950 group-hover:border-emerald-500/20 transition-all duration-1000">
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                                        alt="Team"
                                        className="w-full h-[650px] object-cover mix-blend-lighten opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-16 md:p-24">
                                        <div className="flex items-center gap-8">
                                            <div className="bg-emerald-500/10 backdrop-blur-3xl p-6 rounded-3xl border border-emerald-500/20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700">
                                                <History className="w-10 h-10 text-emerald-400" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-none mb-3">10Y+ ELITE STATUS</div>
                                                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.6em] italic">Chronological Dominance Verified</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Regional Network Section */}
            <section className="py-40 px-6 md:px-8 lg:px-10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <RevealOnScroll>
                        <h2 className="text-[10px] font-black text-emerald-500 mb-8 uppercase tracking-[0.6em] justify-center flex items-center gap-4 italic">
                            <Globe className="w-4 h-4" /> Global Grid
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase italic leading-none tracking-tighter">
                            Regional <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent italic">Network</span>
                        </h3>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { area: 'KANCHIPURAM', nodes: '12', status: 'ACTIVE' },
                            { area: 'SRIPERUMBUDUR', nodes: '08', status: 'SYNC' },
                            { area: 'CHENNAI PERIPHERY', nodes: '15', status: 'DIVERGING' },
                            { area: 'PARANDUR CORE', nodes: '22', status: 'PEAK' }
                        ].map((net, i) => (
                            <RevealOnScroll key={i} delay={i * 0.1}>
                                <div className="bg-white/5 p-8 lg:p-10 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/40 transition-all duration-700 group text-left">
                                    <div className="text-3xl font-black text-white mb-2 italic tracking-tighter group-hover:text-emerald-400 transition-colors">{net.area}</div>
                                    <div className="flex justify-between items-end mt-8 pt-6 border-t border-white/5">
                                        <div>
                                            <div className="text-[8px] font-black text-gray-500 tracking-[0.2em] uppercase mb-1">Asset Nodes</div>
                                            <div className="text-xl font-mono text-white leading-none">{net.nodes}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[8px] font-black text-gray-500 tracking-[0.2em] uppercase mb-1">Uplink Status</div>
                                            <div className="text-[10px] font-black text-emerald-400 tracking-widest">{net.status}</div>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Values Grid */}
            <section className="py-20 mb-32 max-w-7xl mx-auto text-center">
                <RevealOnScroll>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-32 uppercase italic tracking-tighter leading-none">Integrity <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">Matrix</span></h2>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-16">
                    {[
                        { icon: Shield, title: 'IMMUTABILITY', desc: 'Absolute honesty in every transaction node of the acquisition process.' },
                        { icon: Users, title: 'CLIENT UPLINK', desc: 'Your wealth preservation is our primary protocol, executed with surgical precision.' },
                        { icon: Zap, title: 'VELOCITY', desc: 'Delivering asset growth that consistently exceeds current market horizons.' }
                    ].map((item, i) => (
                        <RevealOnScroll key={i} delay={i * 0.2}>
                            <div className="group bg-gradient-to-b from-white/[0.04] to-transparent p-16 rounded-[5rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-1000 h-full flex flex-col items-center text-center shadow-2xl">
                                <div className="w-24 h-24 bg-emerald-500/5 rounded-[2.5rem] flex items-center justify-center mb-16 border border-white/5 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-700 shadow-2xl">
                                    <item.icon className="w-12 h-12 text-emerald-400" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-[0.3em] italic">{item.title}</h3>
                                <p className="text-gray-500 text-lg md:text-xl font-light italic leading-relaxed opacity-70 group-hover:opacity-100">"{item.desc}"</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </section>
        </div>
    );
}

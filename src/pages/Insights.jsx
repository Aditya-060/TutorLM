import React from 'react';
import { Download, AlertTriangle, HelpCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', time: 30 },
    { name: 'Tue', time: 45 },
    { name: 'Wed', time: 35 },
    { name: 'Thu', time: 80 },
    { name: 'Fri', time: 40 },
    { name: 'Sat', time: 30 },
    { name: 'Sun', time: 90 },
];

const Insights = () => {
    return (
        <div className="flex w-full h-full">
            <div className="flex-1 p-10 pt-12 pb-24 max-w-[1200px] mx-auto overflow-y-auto pr-8">

                {/* Header section */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-4xl font-black text-brand-dark dark:text-white tracking-tight mb-2">
                            Insights Dashboard
                        </h1>
                        <p className="text-brand-dark/70 dark:text-white/60 text-md font-medium">
                            Detailed performance metrics for your learning journey.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex bg-brand-muted/10 dark:bg-white/5 p-1 rounded-full border border-brand-muted/10 dark:border-white/10">
                            <button className="px-5 py-1.5 rounded-full bg-[#b897ab] dark:bg-[#E2FBCE]/20 text-white dark:text-[#E2FBCE] text-sm font-bold shadow-sm">Weekly</button>
                            <button className="px-5 py-1.5 rounded-full text-brand-text/50 dark:text-white/40 hover:text-brand-text dark:hover:text-white text-sm font-bold">Monthly</button>
                        </div>
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#dccpce] dark:bg-[#06231D]/40 bg-opacity-40 border border-[#c5b5ac]/40 dark:border-white/10 hover:bg-[#c5b5ac]/40 dark:hover:bg-white/10 text-[#0C342C] dark:text-[#fbcfe8] text-sm font-bold shadow-sm">
                            <Download className="w-4 h-4" />
                            <span>Export PDF</span>
                        </button>
                    </div>
                </div>

                {/* Top Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

                    {/* Total Progress Donut */}
                    <div className="bg-[#e2d5ce] dark:bg-[#0C342C]/60 border border-white/50 dark:border-white/10 rounded-[32px] p-8 shadow-sm flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 dark:bg-[#076653]/10 blur-2xl rounded-full -mt-10 -mr-10" />
                        <div className="flex items-center gap-2 mb-6 relative z-10">
                            <div className="w-5 h-5 rounded-full border-[3px] border-[#915f7f] dark:border-[#c49db9] border-t-transparent animate-[spin_3s_linear_infinite]" />
                            <h3 className="text-[15px] font-bold text-brand-dark dark:text-white">Total Progress</h3>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                            <div className="relative w-36 h-36 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="72" cy="72" r="60" stroke="#d4c5bd" className="dark:stroke-white/10" strokeWidth="12" fill="none" />
                                    <circle cx="72" cy="72" r="60" stroke="#0C342C" className="dark:stroke-[#c49db9]" strokeWidth="12" fill="none" strokeDasharray="377" strokeDashoffset="94" style={{ transition: 'all 1s ease-out' }} />
                                </svg>
                                <div className="absolute flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-black text-[#113a5d] dark:text-[#a1b0d6] leading-none">75%</span>
                                    <span className="text-[10px] font-bold text-brand-dark/50 dark:text-white/40 tracking-widest uppercase mt-1">COMPLETED</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-6 relative z-10">
                            <div className="flex flex-col text-center w-1/2 border-r border-brand-dark/10 dark:border-white/10">
                                <span className="text-[10px] font-bold text-brand-dark/50 dark:text-white/40 tracking-widest uppercase mb-1">FINISHED</span>
                                <span className="text-xl font-black text-brand-dark dark:text-white">12</span>
                            </div>
                            <div className="flex flex-col text-center w-1/2">
                                <span className="text-[10px] font-bold text-brand-dark/50 dark:text-white/40 tracking-widest uppercase mb-1">REMAINING</span>
                                <span className="text-xl font-black text-brand-dark dark:text-white">4</span>
                            </div>
                        </div>
                    </div>

                    {/* Learning Analytics Area Chart */}
                    <div className="lg:col-span-2 bg-[#e2d5ce] dark:bg-[#0C342C]/60 border border-white/50 dark:border-white/10 rounded-[32px] p-8 shadow-sm flex flex-col w-full h-[350px]">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-2">
                                <div className="text-[#a57392] dark:text-[#E2FBCE]">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                </div>
                                <h3 className="text-[15px] font-bold text-brand-dark dark:text-white">Learning Analytics</h3>
                            </div>
                            <div className="flex items-center gap-4 text-xs font-bold text-brand-dark/50 dark:text-white/50">
                                <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#a57392] dark:bg-[#E2FBCE]" /> Study Time</span>
                                <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#8aa3ba] dark:bg-[#93c5fd]" /> Target</span>
                            </div>
                        </div>

                        <div className="flex-1 w-full relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#a57392" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#a57392" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#113a5d', fontSize: 10, fontWeight: 'bold', opacity: 0.6 }} dy={10} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontWeight: 'bold', fontSize: '12px', color: '#113a5d' }}
                                        itemStyle={{ color: '#a57392' }}
                                    />
                                    <Area type="monotone" dataKey="time" stroke="#a57392" strokeWidth={3} fillOpacity={1} fill="url(#colorTime)" activeDot={{ r: 6, fill: '#113a5d', stroke: '#fff', strokeWidth: 2 }} />
                                </AreaChart>
                            </ResponsiveContainer>

                            {/* Simulated Target Line */}
                            <div className="absolute top-[40%] left-0 w-full border-t-[2px] border-dashed border-[#8aa3ba]/30 dark:border-[#93c5fd]/20 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                    {/* Weak Topics */}
                    <div className="lg:col-span-3 bg-[#e2d5ce] dark:bg-[#0C342C]/60 border border-white/50 dark:border-white/10 rounded-[32px] p-8 shadow-sm flex flex-col relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-[40%] h-32 bg-[#ffc1bb]/10 dark:bg-[#d45649]/10 rounded-full blur-3xl -mb-10 -ml-10" />

                        <div className="flex items-center justify-between mb-8 relative z-10">
                            <div className="flex items-center gap-2 text-[#d45649] dark:text-[#fca5a5]">
                                <AlertTriangle className="w-5 h-5 fill-[#ffc1bb]/40 dark:fill-[#d45649]/20" />
                                <h3 className="text-[17px] font-bold text-brand-dark dark:text-white">Weak Topics</h3>
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-brand-dark/40 dark:text-white/40 uppercase">Needs Review</span>
                        </div>

                        <div className="space-y-8 relative z-10">
                            {/* Prog 1 */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[14px] font-bold text-brand-dark dark:text-white">Organic Chemistry</span>
                                    <span className="text-[14px] font-bold text-[#d45649] dark:text-[#f87171]">42% Mastery</span>
                                </div>
                                <div className="w-full h-2 bg-brand-muted/10 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#f16d41] dark:bg-[#ef4444] rounded-full w-[42%]" />
                                </div>
                            </div>

                            {/* Prog 2 */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[14px] font-bold text-brand-dark dark:text-white">Quantum Physics</span>
                                    <span className="text-[14px] font-bold text-[#d45649] dark:text-[#f87171]">38% Mastery</span>
                                </div>
                                <div className="w-full h-2 bg-brand-muted/10 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#f16d41] dark:bg-[#ef4444] rounded-full w-[38%]" />
                                </div>
                            </div>

                            {/* Prog 3 */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[14px] font-bold text-brand-dark dark:text-white">Linear Algebra</span>
                                    <span className="text-[14px] font-bold text-[#eab308] dark:text-[#fef08a]">58% Mastery</span>
                                </div>
                                <div className="w-full h-2 bg-brand-muted/10 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#eab308] dark:bg-[#facc15] rounded-full w-[58%]" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center relative z-10">
                            <button className="text-brand-dark/40 dark:text-white/40 hover:text-brand-dark dark:hover:text-white font-bold text-sm bg-transparent border-none uppercase tracking-widest">
                                Generate Review Quiz
                            </button>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#e2d5ce] dark:from-[#1a1c23]/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Common Pain Points */}
                    <div className="lg:col-span-2 bg-[#e2d5ce] dark:bg-[#0C342C]/60 border border-white/50 dark:border-white/10 rounded-[32px] p-8 shadow-sm flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-[#a57392]/20 dark:bg-[#E2FBCE]/20 p-1.5 rounded-lg text-[#a57392] dark:text-[#E2FBCE]">
                                <HelpCircle className="w-4 h-4" />
                            </div>
                            <h3 className="text-[17px] font-bold text-brand-dark dark:text-white">Common Pain Points</h3>
                        </div>

                        <div className="space-y-4 flex-1">

                            <div className="bg-white/50 dark:bg-white/5 rounded-[20px] p-4 flex gap-4 hover:bg-white/80 dark:hover:bg-white/10 cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-[#E2FBCE] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#fbcfe8] flex items-center justify-center text-[10px] font-black shrink-0">Q1</div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-bold text-brand-dark dark:text-white leading-tight mb-1">How do covalent bonds form in polymers?</h4>
                                    <p className="text-[11px] font-medium text-brand-dark/50 dark:text-white/50 leading-snug">Asked 14 times this week in study session.</p>
                                </div>
                            </div>

                            <div className="bg-white/50 dark:bg-white/5 rounded-[20px] p-4 flex gap-4 hover:bg-white/80 dark:hover:bg-white/10 cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-[#E2FBCE] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#fbcfe8] flex items-center justify-center text-[10px] font-black shrink-0">Q2</div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-bold text-brand-dark dark:text-white leading-tight mb-1">Understanding the Heisenberg Uncertainty Principle.</h4>
                                    <p className="text-[11px] font-medium text-brand-dark/50 dark:text-white/50 leading-snug">Frequent clarification requested during physics sets.</p>
                                </div>
                            </div>

                            <div className="bg-white/50 dark:bg-white/5 rounded-[20px] p-4 flex gap-4 hover:bg-white/80 dark:hover:bg-white/10 cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-[#E2FBCE] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#fbcfe8] flex items-center justify-center text-[10px] font-black shrink-0">Q3</div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm font-bold text-brand-dark dark:text-white leading-tight mb-1">Deriving Navier-Stokes equations from scratch.</h4>
                                    <p className="text-[11px] font-medium text-brand-dark/50 dark:text-white/50 leading-snug">High re-watch rate on this specific lecture segment.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* AI Recommendation Banner */}
                <div className="mt-6 bg-[#FFFDEE] dark:bg-[#06231D]/40 border border-white/50 dark:border-white/10 rounded-[32px] p-8 shadow-sm flex items-center justify-center opacity-50 relative overflow-hidden">
                    <h3 className="text-[17px] font-bold text-brand-dark dark:text-white">AI Recommendation</h3>
                </div>

            </div>
        </div>
    );
};

export default Insights;

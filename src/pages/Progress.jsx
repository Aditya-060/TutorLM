import React from 'react';
import { TrendingUp, Flame, Target, Award, ArrowUpRight, BrainCircuit, Activity } from 'lucide-react';

const Progress = () => {
    return (
        <div className="flex w-full h-full bg-brand-bg dark:bg-transparent overflow-hidden">
            <div className="flex-1 p-8 pt-10 max-w-6xl mx-auto overflow-y-auto w-full">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 border-l-4 border-brand-purple pl-4">
                        <h1 className="text-2xl font-black text-brand-dark dark:text-white tracking-tight">
                            Learning Analytics
                        </h1>
                    </div>
                </div>

                {/* High-Level Overview Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

                    <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 p-5 rounded-3xl shrink-0 group">
                        <div className="flex items-center gap-2 mb-3">
                            <Flame className="w-5 h-5 text-orange-500" />
                            <span className="text-xs font-bold text-brand-muted dark:text-white/60 uppercase tracking-widest">Streak</span>
                        </div>
                        <h2 className="text-3xl font-black text-brand-dark dark:text-white">12 Days</h2>
                        <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-[#076653] dark:text-[#E2FBCE]">
                            <ArrowUpRight className="w-4 h-4" /> +2 from last week
                        </div>
                    </div>

                    <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 p-5 rounded-3xl shrink-0 group">
                        <div className="flex items-center gap-2 mb-3">
                            <Target className="w-5 h-5 text-brand-purple dark:text-brand-surface" />
                            <span className="text-xs font-bold text-brand-muted dark:text-white/60 uppercase tracking-widest">Accuracy</span>
                        </div>
                        <h2 className="text-3xl font-black text-brand-dark dark:text-white">84%</h2>
                        <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-[#076653] dark:text-[#E2FBCE]">
                            <ArrowUpRight className="w-4 h-4" /> +5% this month
                        </div>
                    </div>

                    <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 p-5 rounded-3xl shrink-0 group">
                        <div className="flex items-center gap-2 mb-3">
                            <BrainCircuit className="w-5 h-5 text-brand-purple dark:text-brand-surface" />
                            <span className="text-xs font-bold text-brand-muted dark:text-white/60 uppercase tracking-widest">Mastered</span>
                        </div>
                        <h2 className="text-3xl font-black text-brand-dark dark:text-white">18</h2>
                        <div className="mt-2 text-xs font-bold text-brand-muted/60 dark:text-white/40">
                            core topics learned
                        </div>
                    </div>

                    <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 p-5 rounded-3xl shrink-0 group">
                        <div className="flex items-center gap-2 mb-3">
                            <Award className="w-5 h-5 text-yellow-500" />
                            <span className="text-xs font-bold text-brand-muted dark:text-white/60 uppercase tracking-widest">Rank</span>
                        </div>
                        <h2 className="text-3xl font-black text-brand-dark dark:text-white">Top 5%</h2>
                        <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-[#076653] dark:text-[#E2FBCE]">
                            <TrendingUp className="w-4 h-4" /> among peers
                        </div>
                    </div>

                </div>

                {/* Dashboard Main Grids */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

                    {/* Course Mastery Progress */}
                    <div className="lg:col-span-2 bg-brand-card dark:bg-[#0C342C]/40 border border-brand-muted/5 dark:border-white/10 p-6 rounded-[2rem] shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-brand-dark dark:text-white">Course Mastery</h3>
                            <button className="text-xs font-bold text-brand-purple dark:text-brand-surface hover:underline">View All</button>
                        </div>

                        <div className="space-y-6">
                            {/* Subject 1 */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-brand-text dark:text-white">Data Structures</span>
                                    <span className="text-sm font-bold text-brand-purple dark:text-brand-surface">92%</span>
                                </div>
                                <div className="h-2.5 w-full bg-brand-dark/5 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-purple w-[92%] rounded-full shadow-[0_0_10px_rgba(7,102,83,0.5)] dark:shadow-[0_0_10px_rgba(226,251,206,0.3)]"></div>
                                </div>
                            </div>

                            {/* Subject 2 */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-brand-text dark:text-white">Advanced Macroeconomics</span>
                                    <span className="text-sm font-bold text-brand-purple dark:text-brand-surface">75%</span>
                                </div>
                                <div className="h-2.5 w-full bg-brand-dark/5 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-purple w-[75%] rounded-full"></div>
                                </div>
                            </div>

                            {/* Subject 3 */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="font-bold text-brand-text dark:text-white">Modern Philosophy</span>
                                    <span className="text-sm font-bold text-brand-muted/60 dark:text-white/50">40%</span>
                                </div>
                                <div className="h-2.5 w-full bg-brand-dark/5 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-muted/40 dark:bg-white/30 w-[40%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Needs Attention Panel */}
                    <div className="bg-[#FFFDEE] dark:bg-[#06231D]/80 border-2 border-orange-500/20 dark:border-orange-500/10 p-6 rounded-[2rem] flex flex-col items-start justify-center text-left relative overflow-hidden group hover:border-orange-500/40 transition-colors">
                        <div className="bg-orange-500/10 p-3 rounded-2xl mb-4 text-orange-600 dark:text-orange-400">
                            <Activity className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-black text-brand-dark dark:text-white tracking-tight mb-2">Needs Attention</h3>
                        <p className="text-sm font-medium text-brand-muted dark:text-white/60 leading-relaxed mb-6">
                            You scored below 50% in the last 3 practice sessions related to <strong className="text-brand-dark dark:text-white">Differential Equations</strong>.
                        </p>

                        <button className="w-full bg-brand-purple hover:bg-brand-darkHover text-white dark:bg-brand-surface dark:hover:bg-brand-purple dark:text-brand-dark py-3 rounded-xl text-xs font-bold shadow-md transition-all">
                            Review AI Material
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Progress;

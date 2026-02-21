import React from 'react';
import { AlertTriangle, Crosshair, ArrowRight, BookOpen, BrainCircuit, ShieldAlert } from 'lucide-react';

const WeakTopicCard = ({ title, course, score, status, actionLabel }) => {
    return (
        <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 p-6 rounded-3xl hover:bg-white/60 dark:hover:bg-white/10 transition-colors group">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl text-white ${score < 40 ? 'bg-orange-500' : 'bg-brand-purple'}`}>
                        {score < 40 ? <ShieldAlert className="w-5 h-5" /> : <Crosshair className="w-5 h-5" />}
                    </div>
                    <div>
                        <h4 className="font-bold text-brand-dark dark:text-white">{title}</h4>
                        <p className="text-[10px] uppercase font-bold text-brand-muted/70 dark:text-brand-surface/70 tracking-wider flex items-center gap-1">
                            <BookOpen className="w-3 h-3" /> {course}
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <span className={`text-xl font-black ${score < 40 ? 'text-orange-500 dark:text-orange-400' : 'text-brand-purple dark:text-brand-surface'}`}>
                        {score}%
                    </span>
                    <p className="text-[9px] uppercase font-bold text-brand-muted/50 dark:text-white/40 tracking-widest mt-0.5">Proficiency</p>
                </div>
            </div>

            <div className="mb-5">
                <div className="w-full h-1.5 bg-brand-muted/10 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${score < 40 ? 'bg-orange-500' : 'bg-brand-purple'}`} style={{ width: `${score}%` }}></div>
                </div>
            </div>

            <button className="w-full py-2.5 bg-brand-dark/5 dark:bg-white/5 hover:bg-brand-dark/10 dark:hover:bg-white/10 text-brand-dark dark:text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors">
                <BrainCircuit className="w-4 h-4" /> {actionLabel}
            </button>
        </div>
    );
};

const WeakTopics = () => {
    return (
        <div className="flex w-full h-full bg-brand-bg dark:bg-transparent overflow-hidden">
            <div className="flex-1 p-8 pt-10 max-w-6xl mx-auto overflow-y-auto w-full">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 border-l-4 border-orange-500 pl-4">
                        <h1 className="text-2xl font-black text-brand-dark dark:text-white tracking-tight">
                            Knowledge Gaps
                        </h1>
                    </div>
                </div>

                {/* Priority Intervention Panel */}
                <div className="bg-[#FFFDEE] dark:bg-[#06231D]/80 border-2 border-orange-500/30 dark:border-orange-500/20 p-8 rounded-[2rem] shadow-sm mb-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/10 rounded-full blur-[40px] group-hover:bg-orange-500/20 transition-colors pointer-events-none"></div>

                    <div className="bg-orange-500/10 dark:bg-orange-500/5 p-4 rounded-3xl text-orange-600 dark:text-orange-400 shrink-0">
                        <AlertTriangle className="w-10 h-10" />
                    </div>

                    <div className="flex-1 text-center md:text-left z-10">
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-orange-500/20 mb-3 inline-block">
                            Critical Priority
                        </span>
                        <h2 className="text-2xl font-black text-brand-dark dark:text-white tracking-tight mb-2">
                            Pointers & Memory Allocation in C
                        </h2>
                        <p className="text-sm font-medium text-brand-muted dark:text-white/60 leading-relaxed mb-6 md:mb-0 max-w-xl">
                            You have answered 4 out of 15 questions correctly in recent practice sessions. TutorLM suggests generating a specialized, step-by-step remedial plan to solidify these core concepts before moving forward.
                        </p>
                    </div>

                    <div className="shrink-0 w-full md:w-auto z-10">
                        <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                            Generate Remedial Plan <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Topics Grid */}
                <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-4">Areas Needing Review</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

                    <WeakTopicCard
                        title="Thermodynamics Laws"
                        course="Physics 101"
                        score={35}
                        status="Critical"
                        actionLabel="Watch Explainer Concept"
                    />

                    <WeakTopicCard
                        title="Differential Equations"
                        course="Calculus III"
                        score={42}
                        status="Moderate"
                        actionLabel="Take 10-Min Mini Quiz"
                    />

                    <WeakTopicCard
                        title="Neural Network Backprop"
                        course="Intro to AI"
                        score={55}
                        status="Review"
                        actionLabel="Read Source Material"
                    />

                    <WeakTopicCard
                        title="Macroeconomic Indicators"
                        course="Economics 204"
                        score={60}
                        status="Review"
                        actionLabel="Review AI Summary"
                    />

                    <WeakTopicCard
                        title="Dynamic Programming"
                        course="Data Structures & Algos"
                        score={38}
                        status="Critical"
                        actionLabel="Generate Step-by-Step Plan"
                    />

                </div>

            </div>
        </div>
    );
};

export default WeakTopics;

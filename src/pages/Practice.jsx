import React from 'react';
import { PenTool, Clock, LayoutGrid, BrainCircuit, Play, CheckCircle2 } from 'lucide-react';

const Practice = () => {
    return (
        <div className="flex w-full h-full bg-brand-bg dark:bg-transparent overflow-hidden">
            <div className="flex-1 p-8 pt-10 max-w-6xl mx-auto overflow-y-auto w-full">

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 border-l-4 border-brand-purple pl-4">
                        <h1 className="text-2xl font-black text-brand-dark dark:text-white tracking-tight">
                            Practice Arena
                        </h1>
                    </div>
                    <button className="bg-brand-purple hover:bg-brand-darkHover text-white dark:bg-brand-surface dark:hover:bg-brand-purple dark:text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2">
                        <PenTool className="w-4 h-4" />
                        Create Assessment
                    </button>
                </div>

                {/* Top Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-brand-card dark:bg-brand-darkHover border border-brand-muted/10 dark:border-white/10 rounded-3xl p-6 shadow-sm flex items-center gap-4">
                        <div className="bg-brand-purple/10 dark:bg-brand-surface/20 p-3 rounded-2xl text-brand-purple dark:text-brand-surface">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-brand-muted dark:text-white/50 uppercase tracking-wider mb-0.5">Time Practiced</p>
                            <h3 className="text-2xl font-black text-brand-text dark:text-white">14h 25m</h3>
                        </div>
                    </div>
                    <div className="bg-brand-card dark:bg-brand-darkHover border border-brand-muted/10 dark:border-white/10 rounded-3xl p-6 shadow-sm flex items-center gap-4">
                        <div className="bg-brand-purple/10 dark:bg-brand-surface/20 p-3 rounded-2xl text-brand-purple dark:text-brand-surface">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-brand-muted dark:text-white/50 uppercase tracking-wider mb-0.5">Avg. Accuracy</p>
                            <h3 className="text-2xl font-black text-brand-text dark:text-white">87%</h3>
                        </div>
                    </div>
                    <div className="bg-brand-card dark:bg-brand-darkHover border border-brand-muted/10 dark:border-white/10 rounded-3xl p-6 shadow-sm flex items-center gap-4">
                        <div className="bg-brand-purple/10 dark:bg-brand-surface/20 p-3 rounded-2xl text-brand-purple dark:text-brand-surface">
                            <LayoutGrid className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-brand-muted dark:text-white/50 uppercase tracking-wider mb-0.5">Tests Taken</p>
                            <h3 className="text-2xl font-black text-brand-text dark:text-white">32</h3>
                        </div>
                    </div>
                </div>

                {/* Active Assessments Grid */}
                <h2 className="text-lg font-bold text-brand-text dark:text-white mb-4">Active Quizzes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

                    {/* Test Card 1 */}
                    <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 p-6 rounded-3xl hover:bg-white/60 dark:hover:bg-white/10 transition-colors group cursor-pointer">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#E2FBCE] p-2 rounded-xl text-brand-dark">
                                    <BrainCircuit className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-text dark:text-white">Quantum Mechanics</h4>
                                    <p className="text-[10px] uppercase font-bold text-brand-purple dark:text-brand-surface tracking-wider">Multiple Choice • 20 Qs</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-brand-dark/5 dark:bg-white/10 rounded-full text-[10px] font-bold text-brand-text dark:text-white">In Progress</span>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-xs font-medium text-brand-muted dark:text-white/60 mb-1.5">
                                <span>Progress</span>
                                <span>12 / 20</span>
                            </div>
                            <div className="w-full h-1.5 bg-brand-muted/10 dark:bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-purple w-[60%]"></div>
                            </div>
                        </div>

                        <button className="w-full py-2 bg-brand-dark/5 dark:bg-white/5 hover:bg-brand-dark/10 dark:hover:bg-white/10 text-brand-text dark:text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors">
                            <Play className="w-3.5 h-3.5" /> Continue Test
                        </button>
                    </div>

                    {/* Test Card 2 */}
                    <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 p-6 rounded-3xl hover:bg-white/60 dark:hover:bg-white/10 transition-colors group cursor-pointer">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#FFFDEE] dark:bg-brand-dark p-2 rounded-xl text-brand-dark dark:text-brand-surface border border-brand-muted/10">
                                    <LayoutGrid className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-text dark:text-white">Linear Algebra Vocab</h4>
                                    <p className="text-[10px] uppercase font-bold text-brand-purple dark:text-brand-surface tracking-wider">Flashcards • 50 Cards</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-brand-dark/5 dark:bg-white/10 rounded-full text-[10px] font-bold text-brand-text dark:text-white">New</span>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-xs font-medium text-brand-muted dark:text-white/60 mb-1.5">
                                <span>Progress</span>
                                <span>0 / 50</span>
                            </div>
                            <div className="w-full h-1.5 bg-brand-muted/10 dark:bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-purple w-[0%]"></div>
                            </div>
                        </div>

                        <button className="w-full py-2 bg-brand-purple hover:bg-brand-darkHover text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors">
                            <Play className="w-3.5 h-3.5" /> Start Test
                        </button>
                    </div>

                </div>

                {/* Recent Scores List */}
                <h2 className="text-lg font-bold text-brand-text dark:text-white mb-4">Recent Scores</h2>
                <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 rounded-3xl overflow-hidden">
                    {[
                        { title: "Calculus I Midterm Review", type: "Mock Exam", date: "Today, 10:30 AM", score: "92%" },
                        { title: "Organic Chemistry Structures", type: "Flashcards", date: "Yesterday, 4:15 PM", score: "100%" },
                        { title: "History of Rome Chapter 4", type: "Multiple Choice", date: "Oct 24, 2:00 PM", score: "78%" },
                    ].map((item, idx) => (
                        <div key={idx} className={`p-4 flex items-center justify-between hover:bg-white/60 dark:hover:bg-white/10 transition-colors ${idx !== 2 ? 'border-b border-brand-muted/5 dark:border-white/5' : ''}`}>
                            <div>
                                <h4 className="font-bold text-sm text-brand-text dark:text-white">{item.title}</h4>
                                <p className="text-[10px] font-medium text-brand-muted dark:text-white/60">{item.type} • {item.date}</p>
                            </div>
                            <div className={`font-black text-lg ${item.score === '100%' || item.score === '92%' ? 'text-green-600 dark:text-[#E2FBCE]' : 'text-brand-purple'}`}>
                                {item.score}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Practice;

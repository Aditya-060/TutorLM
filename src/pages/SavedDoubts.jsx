import React from 'react';
import { Bookmark, Search, Filter, BookOpen, Clock, ChevronRight, Hash } from 'lucide-react';

const DoubtCard = ({ tag, question, answer, source, time }) => {
    return (
        <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 p-6 rounded-3xl hover:bg-white/60 dark:hover:bg-white/10 transition-colors group">

            <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-brand-purple/10 dark:bg-brand-surface/20 text-brand-purple dark:text-brand-surface rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Hash className="w-3 h-3" /> {tag}
                </span>
                <button className="text-brand-muted/40 hover:text-brand-purple dark:text-white/30 dark:hover:text-brand-surface transition-colors">
                    <Bookmark className="w-5 h-5 fill-current" />
                </button>
            </div>

            <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-2 leading-snug">
                {question}
            </h3>

            <p className="text-sm font-medium text-brand-muted dark:text-white/60 mb-6 bg-brand-dark/5 dark:bg-[#06231D]/50 border-l-2 border-brand-muted/20 dark:border-[#0C342C] p-3 rounded-r-xl line-clamp-3">
                {answer}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-brand-muted/10 dark:border-white/10">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-muted/70 dark:text-white/40">
                        <BookOpen className="w-3.5 h-3.5" /> {source}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-muted/70 dark:text-white/40">
                        <Clock className="w-3.5 h-3.5" /> {time}
                    </div>
                </div>

                <button className="flex items-center gap-2 text-xs font-bold text-brand-purple dark:text-brand-surface group-hover:translate-x-1 transition-transform">
                    Review Full <ChevronRight className="w-4 h-4" />
                </button>
            </div>

        </div>
    );
};

const SavedDoubts = () => {
    return (
        <div className="flex w-full h-full bg-brand-bg dark:bg-transparent overflow-hidden object-contain">
            <div className="flex-1 p-8 pt-10 max-w-6xl mx-auto overflow-y-auto w-full">

                {/* Header & Search */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-3 border-l-4 border-brand-purple pl-4">
                        <h1 className="text-2xl font-black text-brand-dark dark:text-white tracking-tight">
                            Saved Highlights
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group flex-1 md:w-80">
                            <Search className="w-4 h-4 text-brand-muted/60 dark:text-white/40 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-brand-purple transition-colors" />
                            <input
                                type="text"
                                placeholder="Search saved questions..."
                                className="w-full bg-white/60 dark:bg-[#0C342C]/40 border border-brand-muted/20 dark:border-white/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-brand-dark dark:text-white placeholder:text-brand-muted/50 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all font-medium shadow-sm"
                            />
                        </div>
                        <button className="bg-white/60 dark:bg-[#0C342C]/40 border border-brand-muted/20 dark:border-white/10 p-2.5 rounded-full text-brand-muted dark:text-white/60 hover:text-brand-purple hover:bg-white transition-all shadow-sm">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Categories Tab */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    <button className="px-4 py-1.5 text-xs font-bold rounded-full bg-brand-purple text-white dark:bg-brand-surface dark:text-brand-dark shadow-md transition-colors">All Topics</button>
                    <button className="px-4 py-1.5 text-xs font-bold rounded-full bg-white/40 dark:bg-white/5 border border-brand-muted/20 dark:border-white/10 text-brand-text dark:text-white/70 hover:bg-white hover:text-brand-dark transition-colors">Computer Science</button>
                    <button className="px-4 py-1.5 text-xs font-bold rounded-full bg-white/40 dark:bg-white/5 border border-brand-muted/20 dark:border-white/10 text-brand-text dark:text-white/70 hover:bg-white hover:text-brand-dark transition-colors">Philosophy</button>
                    <button className="px-4 py-1.5 text-xs font-bold rounded-full bg-white/40 dark:bg-white/5 border border-brand-muted/20 dark:border-white/10 text-brand-text dark:text-white/70 hover:bg-white hover:text-brand-dark transition-colors">Economics</button>
                </div>

                {/* Doubts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DoubtCard
                        tag="Computer Science"
                        question="Explain the difference between a mutex and a semaphore in OS."
                        answer="A mutex (mutual exclusion) is a locking mechanism used to synchronize access to a resource by ensuring only one thread can acquire it at a time. A semaphore is a signaling mechanism..."
                        source="OS_Textbook_Ch4.pdf"
                        time="2 days ago"
                    />
                    <DoubtCard
                        tag="Philosophy"
                        question="What is the veil of ignorance according to John Rawls?"
                        answer="The veil of ignorance is a thought experiment where individuals design a society without knowing their own place within it (race, class, intelligence). This supposedly leads to the fairest outcome..."
                        source="Justice_Lecture.docx"
                        time="5 days ago"
                    />
                    <DoubtCard
                        tag="Economics"
                        question="How does quantitative easing differ from regular open market operations?"
                        answer="While both involve a central bank buying bonds, regular OMOs target short-term interest rates. Quantitative easing (QE) is an unconventional policy where the central bank buys long-term securities..."
                        source="Macro_Unit_2.pdf"
                        time="1 week ago"
                    />
                    <DoubtCard
                        tag="Computer Science"
                        question="What's the worst-case time complexity of QuickSort?"
                        answer="The worst-case time complexity of QuickSort is O(n^2), which occurs when the pivot chosen is always the largest or smallest element (e.g., array is already sorted and taking the first/last element)..."
                        source="Algorithms_Notes.txt"
                        time="2 weeks ago"
                    />
                </div>

            </div>
        </div>
    );
};

export default SavedDoubts;

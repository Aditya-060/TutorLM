import React from 'react';
import { Users, Video, MessageSquare, Plus, ChevronUp, Share2, Sparkles, UserCircle2, Clock } from 'lucide-react';

const SessionCard = ({ title, participants, topic, time, isLive }) => {
    return (
        <div className="bg-white/40 dark:bg-white/5 border border-brand-muted/10 dark:border-white/10 p-6 rounded-3xl hover:bg-white/60 dark:hover:bg-white/10 transition-colors group cursor-pointer flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-brand-dark/5 dark:bg-[#06231D]/50 text-brand-dark dark:text-white rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-muted/10 dark:border-white/5">
                        {topic}
                    </span>
                    {isLive && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> LIVE
                        </div>
                    )}
                </div>

                <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-2 leading-snug">
                    {title}
                </h3>
                <p className="text-xs font-medium text-brand-muted dark:text-white/60 mb-6 flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> {participants} Participants
                </p>
            </div>

            <button className={`w-full py-2.5 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors ${isLive ? 'bg-brand-purple hover:bg-brand-darkHover text-white' : 'bg-brand-dark/5 dark:bg-white/5 text-brand-dark dark:text-white hover:bg-brand-dark/10 dark:hover:bg-white/10'}`}>
                {isLive ? <Video className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                {isLive ? 'Join Room' : `Starts at ${time}`}
            </button>
        </div>
    );
};

const DoubtThread = ({ user, question, upvotes, aiResponseSnippet }) => {
    return (
        <div className="bg-white/40 dark:bg-[#0C342C]/40 border border-brand-muted/10 dark:border-white/5 p-6 rounded-[2rem] hover:bg-white/60 dark:hover:bg-[#0C342C]/60 transition-colors mb-4 flex gap-4">

            {/* Upvote Column */}
            <div className="flex flex-col items-center gap-1 shrink-0">
                <button className="p-1 text-brand-muted/50 dark:text-white/30 hover:text-brand-purple dark:hover:text-brand-surface transition-colors rounded hover:bg-brand-dark/5 dark:hover:bg-white/5">
                    <ChevronUp className="w-6 h-6" />
                </button>
                <span className="font-bold text-brand-dark dark:text-white text-sm">{upvotes}</span>
            </div>

            {/* Content Column */}
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-brand-muted dark:text-white/50">
                    <UserCircle2 className="w-4 h-4" />
                    <span>{user}</span>
                    <span className="w-1 h-1 bg-brand-muted/30 dark:bg-white/20 rounded-full"></span>
                    <span>1 hour ago</span>
                </div>

                <h4 className="text-[15px] font-bold text-brand-dark dark:text-white mb-3">
                    {question}
                </h4>

                <div className="bg-brand-purple/5 dark:bg-[#E2FBCE]/5 border-l-4 border-brand-purple dark:border-[#E2FBCE] p-4 rounded-r-xl mb-4">
                    <div className="flex items-center gap-2 mb-1.5 text-brand-purple dark:text-[#E2FBCE] text-[10px] font-bold uppercase tracking-widest">
                        <Sparkles className="w-3.5 h-3.5" /> TutorLM Explanation
                    </div>
                    <p className="text-xs font-medium text-brand-dark/80 dark:text-white/70 leading-relaxed line-clamp-2">
                        {aiResponseSnippet}
                    </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-bold text-brand-muted/70 dark:text-white/50">
                    <button className="flex items-center gap-1.5 hover:text-brand-dark dark:hover:text-white transition-colors">
                        <MessageSquare className="w-4 h-4" /> 4 Replies
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-brand-dark dark:hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" /> Share
                    </button>
                </div>
            </div>

        </div>
    );
};

const Collaborative = () => {
    return (
        <div className="flex w-full h-full bg-brand-bg dark:bg-transparent overflow-hidden">
            <div className="flex-1 p-8 pt-10 max-w-6xl mx-auto overflow-y-auto w-full">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 border-l-4 border-[#E3EF26] pl-4">
                        <h1 className="text-2xl font-black text-brand-dark dark:text-white tracking-tight">
                            Study Groups
                        </h1>
                    </div>
                    <button className="bg-brand-purple hover:bg-brand-darkHover text-white dark:bg-brand-surface dark:hover:bg-brand-purple dark:text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Create Session
                    </button>
                </div>

                {/* Active Sessions Grid */}
                <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-4">Live & Upcoming Sessions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <SessionCard
                        title="Physics 101 Midterm Prep"
                        participants={12}
                        topic="Physics"
                        isLive={true}
                    />
                    <SessionCard
                        title="React Hooks Deep Dive"
                        participants={5}
                        topic="Web Dev"
                        isLive={true}
                    />
                    <SessionCard
                        title="Economics Study Group"
                        participants={8}
                        topic="Econ"
                        time="6:00 PM"
                        isLive={false}
                    />
                </div>

                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-brand-dark dark:text-white">Community Doubts Feed</h3>

                    {/* Fake Tabs */}
                    <div className="flex bg-brand-dark/5 dark:bg-white/5 p-1 rounded-full">
                        <button className="px-4 py-1.5 text-xs font-bold rounded-full bg-white dark:bg-brand-dark text-brand-dark dark:text-white shadow-sm transition-colors">Trending</button>
                        <button className="px-4 py-1.5 text-xs font-bold rounded-full text-brand-muted dark:text-white/60 hover:text-brand-dark dark:hover:text-white transition-colors">Classmates</button>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <DoubtThread
                        user="Alex Johnson"
                        question="Why does standard deviation use N-1 for a sample instead of N?"
                        upvotes={42}
                        aiResponseSnippet="The use of N-1 is called Bessel's correction. When you calculate the variance of a sample, you are estimating the population variance. Because the sample mean is used instead of the true population mean, the sample variance will consistently underestimate the true variance. Dividing by N-1 corrects this bias..."
                    />

                    <DoubtThread
                        user="Samantha Lee"
                        question="Can someone explain the Byzantine Generals Problem in simple terms?"
                        upvotes={28}
                        aiResponseSnippet="Imagine several generals surrounding a city. They must agree on a common plan (to attack or retreat) to succeed. However, some generals or messengers might be traitors trying to confuse the others. The problem asks: How can the loyal generals reach an agreement despite the traitors? This is foundational in decentralized systems..."
                    />

                    <DoubtThread
                        user="Kevin M."
                        question="What is the difference between a forward contract and a futures contract?"
                        upvotes={15}
                        aiResponseSnippet="Both are agreements to buy or sell an asset at a future date for a set price. A forward contract is a customized, private agreement traded over-the-counter (OTC), meaning it has higher counterparty risk. A futures contract is standardized and traded on a regulated exchange, which eliminates counterparty risk..."
                    />
                </div>

            </div>
        </div>
    );
};

export default Collaborative;

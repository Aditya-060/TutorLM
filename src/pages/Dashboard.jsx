import React from 'react';
import { ChevronRight, Calendar, Star, TrendingUp, DollarSign, Send, Play, Compass } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    let firstName = "USER";

    if (user?.user_metadata?.name) {
        // If full name exists → use it
        firstName = user.user_metadata.name.split(" ")[0].toUpperCase();
    } else if (user?.email) {
        // Fallback: clean email username
        const emailName = user.email.split("@")[0];

        // Remove numbers
        const cleanName = emailName.replace(/[0-9]/g, "");

        // Take only first part (before surname if possible)
        firstName = cleanName.substring(0, 6).toUpperCase();
    }

    return (
        <div className="w-full h-full max-w-[1200px] mx-auto flex flex-col gap-6 font-sans animate-fade-in">

            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[320px]">

                {/* Left Gradient Card */}
                <div className="lg:col-span-8 rounded-[32px] overflow-hidden relative shadow-lg shadow-brand-primary/10 bg-gradient-to-br from-[#277484] via-[#75a6a3] to-[#fad5c4] p-8 md:p-12 flex flex-col justify-center gap-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="z-10 relative">
                        <p className="text-white/90 font-semibold mb-2 text-lg">Welcome back to your workspace</p>
                        <h1 className="text-white text-5xl sm:text-6xl font-bold tracking-tight">Good Morning, {firstName} 👋</h1>
                    </div>

                    <div className="flex flex-wrap gap-10 z-10 relative">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm shadow-sm">
                                <Star className="w-6 h-6 text-white" fill="white" />
                            </div>
                            <div>
                                <p className="text-white/80 text-sm font-semibold">Daily Streak</p>
                                <p className="text-white font-bold text-2xl">14 Days</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm shadow-sm">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-white/80 text-sm font-semibold">Focus Score</p>
                                <p className="text-white font-bold text-2xl">9.2</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Light Orange Card - Study Planner */}
                <div className="lg:col-span-4 rounded-[32px] bg-[#fad5c4] p-6 flex flex-col relative shadow-sm h-full max-h-[320px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-[#3a2c27] font-bold">Study Planner</p>
                        <Calendar className="w-5 h-5 text-orange-600" />
                    </div>

                    <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 mb-4 shrink-0">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-brand-dark">October</span>
                            <span className="text-xs font-bold text-orange-600">Today: 14th</span>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i} className="text-[9px] font-bold text-[#5c4a43]">{d}</span>)}
                            {/* A compact single week view to save space */}
                            {[13, 14, 15, 16, 17, 18, 19].map((d, i) => (
                                <div key={i} className={`aspect-square flex items-center justify-center text-[10px] font-bold rounded-md ${d === 14 ? 'bg-orange-500 text-white shadow-sm' : 'text-[#3a2c27]'}`}>
                                    {d}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-xs font-bold text-[#3a2c27] mb-2">Today's Tasks</p>
                    <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1 pb-1 custom-scrollbar">
                        {[
                            { title: 'Thermodynamics Quiz', time: '10:00 AM' },
                            { title: 'History Essay Draft', time: '02:30 PM' },
                            { title: 'Math Formulas Review', time: '05:00 PM' }
                        ].map((task, i) => (
                            <div key={i} className="bg-white/70 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between shadow-sm border border-white/50 group hover:bg-white transition-colors cursor-pointer shrink-0">
                                <div>
                                    <p className="text-xs font-bold text-[#3a2c27] group-hover:text-brand-primary transition-colors">{task.title}</p>
                                    <p className="text-[10px] font-semibold text-[#5c4a43]/70">{task.time}</p>
                                </div>
                                <div className="w-4 h-4 rounded-full border border-orange-400 flex items-center justify-center group-hover:bg-orange-100 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 pt-4">

                {/* User Performance */}
                <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">User Performance</h3>
                    <div className="bg-[#f8f9fc] rounded-[24px] p-6 flex-1 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#277484] p-2.5 rounded-xl text-white">
                                    <Star className="w-4 h-4 stroke-[3]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#1e1e1e]">8 402</h4>
                                    <p className="text-xs font-semibold text-gray-400">Total XP earned</p>
                                </div>
                            </div>
                            <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                                <Calendar className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Bar Chart Container */}
                        <div className="flex items-end justify-between h-24 gap-2 mt-auto">
                            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, i) => {
                                const heights = ['h-12', 'h-16', 'h-10', 'h-14', 'h-20', 'h-16'];
                                const bg = i === 4 ? 'bg-[#277484]' : 'bg-[#e2e8f0]';
                                return (
                                    <div key={day} className="flex flex-col items-center gap-2 group flex-1">
                                        <div className={`w-2.5 ${heights[i]} ${bg} rounded-full transition-all group-hover:bg-[#277484] mx-auto`} />
                                        <span className="text-[9px] font-bold text-gray-400">{day}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Recently Discussed */}
                <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-brand-dark mb-4">Recently Discussed</h3>
                    <div className="flex flex-col gap-5 pt-2">
                        {[
                            { name: 'Quantum Physics', status: 'Exam Prep', score: 'Hard', img: '1', color: 'bg-[#fad5c4]' },
                            { name: 'Linear Algebra', status: 'Homework', score: 'Medium', img: '2', color: 'bg-green-100' },
                            { name: 'Cell Biology', status: '2 hours ago', score: 'Easy', img: '3', color: 'bg-blue-100' },
                        ].map((topic, i) => (
                            <div key={i} className={`flex items-center justify-between py-2 ${i < 2 ? 'border-b border-gray-100' : ''}`}>
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-brand-dark ${topic.color}`}>
                                            {topic.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold text-[#1e1e1e]">{topic.name}</h5>
                                        <p className="text-[10px] font-semibold text-gray-400 flex items-center gap-1">
                                            {topic.status}
                                        </p>
                                    </div>
                                </div>
                                <span className={`text-xs font-bold ${i === 1 ? 'text-[#277484]' : 'text-orange-400'}`}>{topic.score}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Explore Features */}
                <div className="flex flex-col group min-h-[220px]">
                    <h3 className="text-sm font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">Explore Features</h3>
                    <div className="bg-[#f8f9fc] rounded-[24px] p-6 flex-1 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer" onClick={() => {
                        const featuresTabBtn = Array.from(document.querySelectorAll('button')).find(el => el.textContent === 'Features');
                        if (featuresTabBtn) featuresTabBtn.click();
                    }}>
                        <div className="bg-[#277484]/10 p-5 rounded-full text-[#277484] shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <Compass className="w-10 h-10 stroke-[2]" />
                        </div>

                        <div>
                            <h4 className="font-bold text-brand-text mb-1">Discover Powerful AI Tools</h4>
                            <p className="text-xs text-brand-muted max-w-[200px] mx-auto">
                                Unlock your true potential with our specialized learning modules.
                            </p>
                        </div>

                        <button
                            className="bg-[#277484] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-[#277484]/30 hover:scale-110 hover:shadow-lg hover:shadow-[#277484]/50 transition-all duration-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                const featuresTabBtn = Array.from(document.querySelectorAll('button')).find(el => el.textContent === 'Features');
                                if (featuresTabBtn) featuresTabBtn.click();
                            }}
                        >
                            Go to Features
                        </button>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Search, Bell, Settings, Edit3, Share2, Clock, Flame, Award, Brain, Target, Shield, ArrowUpRight, User, Check, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user, updateProfile } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');

    const currentName = user?.user_metadata?.name || 'User';
    const email = user?.email || 'No email provided';

    useEffect(() => {
        setEditName(currentName);
    }, [currentName]);

    const handleSave = async () => {
        if (!editName.trim()) {
            setError('Name cannot be empty');
            return;
        }

        setIsSaving(true);
        setError('');

        try {
            const result = await updateProfile(editName.trim());
            if (result.success) {
                setIsEditing(false);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError('Failed to update profile');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="flex w-full h-full">
            <div className="flex-1 p-10 pt-12 pb-24 max-w-5xl mx-auto overflow-y-auto">
                {/* Top Nav Area */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex-1 max-w-lg relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-dark/40 dark:text-white/40">
                            <Search className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            className="w-full bg-white dark:bg-[#0C342C] border border-white dark:border-white/10 rounded-full py-3 pl-12 pr-4 text-sm font-medium text-brand-text dark:text-white placeholder-brand-dark/40 dark:placeholder-white/40 focus:outline-none shadow-sm"
                            placeholder="Search courses, skills, or members..."
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="text-[#076653] hover:text-[#916784] bg-[#E2FBCE] dark:bg-[#076653]/20 p-2.5 rounded-full">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="text-brand-dark/40 dark:text-white/40 hover:text-brand-dark dark:hover:text-white bg-white/50 dark:bg-white/5 p-2.5 rounded-full">
                            <Settings className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-3 border-l border-brand-dark/10 dark:border-white/10 pl-6">
                            <span className="text-sm font-bold text-brand-dark dark:text-white uppercase">{currentName.split(' ')[0]}</span>
                            <div className="w-10 h-10 rounded-full border border-white/20 bg-[#f4bf96] flex items-center justify-center font-bold text-[#076653] uppercase shadow-[0_0_15px_rgba(244,191,150,0.4)]">
                                {currentName.charAt(0)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Profile Card */}
                <div className="bg-[#e2d5ce] dark:bg-[#0C342C] border border-white/20 dark:border-white/5 rounded-[32px] p-8 flex shadow-sm gap-8 relative overflow-hidden">
                    <div className="w-40 h-40 bg-[#9fbab2] dark:bg-[#688a82] rounded-3xl shrink-0 flex items-center justify-center relative shadow-inner">
                        <User className="w-24 h-24 text-[#2d3340] dark:text-[#0f172a] opacity-80" />
                        <div className="absolute -bottom-3 -right-3 bg-white dark:bg-[#06231D] p-1 rounded-full">
                            <div className="bg-[#076653] text-white p-2.5 rounded-full">
                                <Shield className="w-4 h-4 fill-current" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex flex-col gap-1 w-full max-w-sm">
                                {isEditing ? (
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                            className="text-3xl font-black text-[#076653] dark:text-[#E2FBCE] bg-white/50 dark:bg-black/20 px-3 py-1 rounded-xl outline-none border border-[#076653]/30 focus:border-[#076653] w-full"
                                            autoFocus
                                        />
                                        {error && <span className="absolute -bottom-5 left-2 text-xs text-red-500 font-bold">{error}</span>}
                                    </div>
                                ) : (
                                    <h1 className="text-3xl font-black text-[#076653] dark:text-[#E2FBCE]">{currentName}</h1>
                                )}
                                <span className="text-sm font-bold text-brand-dark/50 dark:text-white/40">{email}</span>
                            </div>

                            <div className="flex gap-2 relative z-10 shrink-0 self-start">
                                {isEditing ? (
                                    <>
                                        <button
                                            onClick={handleSave}
                                            disabled={isSaving}
                                            className="flex items-center gap-2 px-5 py-2.5 bg-[#076653] hover:bg-[#0C342C] text-white text-sm font-bold rounded-xl shadow-sm disabled:opacity-50"
                                        >
                                            {isSaving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Check className="w-4 h-4" />} Save
                                        </button>
                                        <button
                                            onClick={() => {
                                                setIsEditing(false);
                                                setEditName(currentName);
                                                setError('');
                                            }}
                                            disabled={isSaving}
                                            className="flex items-center gap-2 px-5 py-2.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold rounded-xl disabled:opacity-50"
                                        >
                                            <X className="w-4 h-4" /> Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="flex items-center gap-2 px-5 py-2.5 bg-[#076653] hover:bg-[#0C342C] text-white text-sm font-bold rounded-xl shadow-sm"
                                    >
                                        <Edit3 className="w-4 h-4" /> Edit Name
                                    </button>
                                )}
                            </div>
                        </div>

                        <p className="text-brand-dark/70 dark:text-white/60 font-medium text-[15px] leading-relaxed mb-6 max-w-2xl">
                            Senior AI Researcher specializing in Large Language Models and Neural Architecture Search. Currently exploring the intersection of quantum computing and heuristic optimization.
                        </p>

                        <div className="flex gap-3">
                            {['#MachineLearning', '#Python', '#PyTorch', '#NeuralNetworks'].map(tag => (
                                <span key={tag} className="px-4 py-1.5 bg-[#f4ece8] dark:bg-white/5 text-[#b388a1] dark:text-[#E2FBCE] text-xs font-bold rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-6 mt-6">
                    <StatCard icon={<Clock />} title="Learning Hours" value="1,284" trend="+14%" color="#113a5d" bg="bg-[#e2d5ce] dark:bg-[#0C342C]" />
                    <StatCard icon={<Flame />} title="Current Streak" value="24 Days" trend="+2%" color="#a37996" bg="bg-[#e2d5ce] dark:bg-[#0C342C]" />
                    <StatCard icon={<Award />} title="Global Rank" value="#1,402" sub="TOP 5%" color="#eab308" bg="bg-[#e4d9c4] dark:bg-[#25221b]" />
                    <StatCard icon={<Brain />} title="AI Interactions" value="14.2k" trend="+5" color="#a37996" bg="bg-[#e2d5ce] dark:bg-[#0C342C]" />
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-3 gap-6 mt-6">
                    {/* Learning Paths */}
                    <div className="col-span-2 bg-[#e2d5ce] dark:bg-[#0C342C] border border-white/20 dark:border-white/5 rounded-[32px] p-8 shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-3 text-[#076653] dark:text-[#E2FBCE]">
                                <Target className="w-6 h-6" />
                                <h3 className="text-xl font-bold text-brand-dark dark:text-white">Current Learning Paths</h3>
                            </div>
                            <button className="text-brand-dark dark:text-white font-bold text-xs uppercase tracking-wider bg-transparent border-none">
                                View All
                            </button>
                        </div>

                        <div className="space-y-8">
                            <PathProgress title="Advanced LLM Orchestration" progress={84} active="2h ago" lessons="12 / 15 Lessons" />
                            <PathProgress title="AI Ethics & Bias Mitigation" progress={42} active="yesterday" lessons="4 / 10 Lessons" />
                            <PathProgress title="Neural Architecture Search (NAS)" progress={15} active="last week" lessons="2 / 20 Lessons" />
                        </div>
                    </div>

                    {/* Recent Badges */}
                    <div className="col-span-1 bg-[#e2d5ce] dark:bg-[#0C342C] border border-white/20 dark:border-white/5 rounded-[32px] p-8 shadow-sm">
                        <div className="flex items-center gap-3 text-[#eab308] mb-8">
                            <Award className="w-6 h-6 fill-current" />
                            <h3 className="text-xl font-bold text-brand-dark dark:text-white">Recent Badges</h3>
                        </div>

                        <div className="space-y-4">
                            <BadgeCard icon={<Award className="w-6 h-6 text-[#eab308]" />} title="Early Adopter" desc="Joined during Beta phase" />
                            <BadgeCard icon={<Edit3 className="w-6 h-6 text-[#113a5d]" />} title="Prompt Master" desc="Created 100+ optimized prompts" />
                            <BadgeCard icon={<Shield className="w-6 h-6 text-[#6a7280]" />} title="Knowledge Giant" desc="Complete 50 courses" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const UserSilhouette = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
)

const StatCard = ({ icon, title, value, trend, sub, color, bg }) => (
    <div className={`${bg} border border-white/20 dark:border-white/5 rounded-[28px] p-6 shadow-sm flex flex-col justify-between`}>
        <div className="flex justify-between items-start mb-6">
            <div className={`p-2.5 rounded-full`} style={{ backgroundColor: color, color: 'white', opacity: 0.9 }}>
                {React.cloneElement(icon, { className: "w-5 h-5" })}
            </div>
            {trend && <span className="text-xs font-bold text-[#388e61] dark:text-[#4ade80] flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> {trend}</span>}
            {sub && <span className="text-[10px] font-bold text-brand-dark/50 dark:text-white/40 tracking-wider uppercase">{sub}</span>}
        </div>
        <div>
            <h4 className="text-xs font-bold text-brand-dark/50 dark:text-white/40 mb-1">{title}</h4>
            <span className="text-2xl font-black text-brand-dark dark:text-white">{value}</span>
        </div>
    </div>
);

const PathProgress = ({ title, progress, active, lessons }) => (
    <div>
        <div className="flex justify-between items-end mb-2">
            <span className="text-[15px] font-bold text-brand-dark dark:text-white">{title}</span>
            <span className="text-[14px] font-bold text-[#076653] dark:text-[#E2FBCE]">{progress}%</span>
        </div>
        <div className="w-full h-2.5 bg-brand-muted/10 dark:bg-white/5 rounded-full mb-2 overflow-hidden">
            <div className="h-full bg-[#0C342C] rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between items-center text-xs font-medium text-brand-dark/40 dark:text-white/40">
            <span>Last active {active}</span>
            <span>{lessons}</span>
        </div>
    </div>
);

const BadgeCard = ({ icon, title, desc }) => (
    <div className="bg-white/60 dark:bg-white/5 p-4 rounded-2xl flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shrink-0 shadow-sm border border-brand-muted/5 dark:border-white/5">
            {icon}
        </div>
        <div className="flex flex-col">
            <h4 className="text-[15px] font-bold text-brand-dark dark:text-white leading-tight mb-1">{title}</h4>
            <p className="text-[11px] font-medium text-brand-dark/50 dark:text-white/40 leading-snug">{desc}</p>
        </div>
    </div>
);

export default Profile;

import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Moon, Sun, XCircle, CheckCircle2, BookOpen, Layers, ShieldCheck, Target, Zap, Activity, BrainCircuit } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Landing = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-[#FFFDEE] via-[#E2FBCE]/30 to-[#FFFDEE] dark:from-[#06231D] dark:via-[#06231D] dark:to-[#0C342C] font-sans overflow-x-hidden relative">

            {/* Top Navigation */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-[#ffffff]/80 dark:bg-[#06231D]/80 backdrop-blur-md rounded-full px-8 py-3.5 flex items-center justify-between shadow-sm border border-white/50 dark:border-white/10 z-50">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="bg-[#076653] dark:bg-[#E2FBCE] p-2 rounded-full">
                        <Sparkles className="w-5 h-5 text-white dark:text-[#0f172a]" />
                    </div>
                    <span className="text-xl font-bold text-brand-text dark:text-white tracking-tight">TutorLM</span>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-10">
                    <button className="text-sm font-semibold text-brand-muted hover:text-brand-text dark:text-white/60 dark:hover:text-white transition-colors">Features</button>
                    <button className="text-sm font-semibold text-brand-muted hover:text-brand-text dark:text-white/60 dark:hover:text-white transition-colors">Solutions</button>
                    <button className="text-sm font-semibold text-brand-muted hover:text-brand-text dark:text-white/60 dark:hover:text-white transition-colors">Pricing</button>
                    <button className="text-sm font-semibold text-brand-muted hover:text-brand-text dark:text-white/60 dark:hover:text-white transition-colors">About</button>
                </div>

                {/* Auth Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 mr-2 rounded-full hover:bg-brand-muted/10 dark:hover:bg-white/10 text-brand-text dark:text-white transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <Link to="/auth" className="hidden sm:block text-sm font-bold text-brand-text dark:text-white hover:opacity-70 transition-opacity">Login</Link>
                    <Link to="/auth" className="bg-[#076653] hover:bg-[#0C342C] text-white dark:bg-[#E2FBCE] dark:hover:bg-[#076653] dark:text-[#0f172a] px-5 sm:px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">Sign Up</Link>
                </div>
            </nav>

            {/* Main Hero Container */}
            <main className="max-w-7xl mx-auto pt-44 pb-20 px-8 flex flex-col lg:flex-row items-center justify-between relative z-10 min-h-[85vh] gap-8 lg:gap-16">

                {/* Left Side: Headlines & CTAs */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[45%] cursor-default">
                    {/* Badge */}
                    <div className="bg-white/50 dark:bg-white/10 border border-white/60 dark:border-white/20 backdrop-blur-sm px-5 py-2 rounded-full flex items-center gap-2 mb-8 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-[#076653]"></div>
                        <span className="text-xs font-bold tracking-widest text-brand-muted dark:text-white/70 uppercase">The Future of Education</span>
                    </div>

                    {/* Headlines */}
                    <h1 className="text-7xl md:text-8xl lg:text-[7rem] font-black text-brand-text dark:text-white tracking-tighter mb-6 leading-none">
                        TutorLM
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-medium text-[#E3EF26] dark:text-[#E2FBCE] leading-snug mb-12 max-w-lg">
                        Context-aware learning, <br className="hidden md:block" />
                        powered by advanced AI neural networks.
                    </h2>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link to="/auth" className="bg-[#076653] hover:bg-[#0C342C] text-white dark:bg-[#E2FBCE] dark:hover:bg-[#076653] dark:text-[#0f172a] px-8 py-4 rounded-full text-[15px] font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 transition-all relative z-20">
                            <span>Get Started</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/app" className="bg-white/60 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 text-brand-text dark:text-white backdrop-blur-md border border-white/50 dark:border-white/10 px-8 py-4 rounded-full text-[15px] font-bold shadow-sm hover:shadow-md transition-all relative z-20">
                            Try Demo
                        </Link>
                    </div>
                </div>

                {/* Right Side: Hero Illustration */}
                <div className="lg:w-[55%] relative w-full max-w-4xl mx-auto animate-fade-in-up transition-transform duration-700 hover:scale-[1.02] perspective-1000 mt-12 lg:mt-0 group cursor-default">
                    {/* Glowing Aura Behind Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-[#076653]/20 dark:bg-[#E2FBCE]/15 rounded-full blur-[100px] -z-10 group-hover:bg-[#076653]/30 dark:group-hover:bg-[#E2FBCE]/25 transition-colors duration-700"></div>

                    {/* Glassmorphism Container */}
                    <div className="bg-white/30 dark:bg-[#0C342C]/30 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[40px] shadow-2xl overflow-hidden relative p-4 lg:p-6">
                        {/* Decorative Reflection */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent dark:from-white/5 pointer-events-none"></div>

                        <img
                            src="/student-studying.png"
                            alt="Student focusing on materials"
                            className="w-full h-auto object-cover rounded-[24px] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </div>

            </main>

            {/* --- PROBLEM SECTION --- */}
            <section className="w-full py-24 relative z-10 bg-gradient-to-b from-transparent to-[#d8cdc4]/40 dark:to-[#06231D]/80 border-t border-white/20 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">

                    <div className="bg-red-500/10 dark:bg-rose-900/20 border border-red-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2 mb-6">
                        <ShieldCheck className="w-4 h-4 text-red-600 dark:text-rose-400" />
                        <span className="text-[11px] font-bold tracking-wider text-red-700 dark:text-rose-300 uppercase">The Problem</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-brand-text dark:text-white tracking-tight mb-16 text-center">
                        The Problem with <span className="text-[#E3EF26] dark:text-[#E2FBCE]">Generic AI Learning</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
                        {/* Pain Point 1 */}
                        <div className="bg-white/40 dark:bg-[#0C342C]/40 backdrop-blur-md border border-red-500/10 dark:border-rose-500/10 p-6 rounded-3xl shrink-0 group hover:border-red-400/30 transition-colors">
                            <XCircle className="w-8 h-8 text-red-500/70 dark:text-rose-400/80 mb-4" />
                            <h4 className="text-lg font-bold text-brand-text dark:text-white mb-2 leading-snug">Answers not based on syllabus</h4>
                        </div>
                        {/* Pain Point 2 */}
                        <div className="bg-white/40 dark:bg-[#0C342C]/40 backdrop-blur-md border border-red-500/10 dark:border-rose-500/10 p-6 rounded-3xl shrink-0 group hover:border-red-400/30 transition-colors">
                            <XCircle className="w-8 h-8 text-red-500/70 dark:text-rose-400/80 mb-4" />
                            <h4 className="text-lg font-bold text-brand-text dark:text-white mb-2 leading-snug">Too complex or irrelevant explanations</h4>
                        </div>
                        {/* Pain Point 3 */}
                        <div className="bg-white/40 dark:bg-[#0C342C]/40 backdrop-blur-md border border-red-500/10 dark:border-rose-500/10 p-6 rounded-3xl shrink-0 group hover:border-red-400/30 transition-colors">
                            <XCircle className="w-8 h-8 text-red-500/70 dark:text-rose-400/80 mb-4" />
                            <h4 className="text-lg font-bold text-brand-text dark:text-white mb-2 leading-snug">Incorrect or hallucinated answers</h4>
                        </div>
                        {/* Pain Point 4 */}
                        <div className="bg-white/40 dark:bg-[#0C342C]/40 backdrop-blur-md border border-red-500/10 dark:border-rose-500/10 p-6 rounded-3xl shrink-0 group hover:border-red-400/30 transition-colors">
                            <XCircle className="w-8 h-8 text-red-500/70 dark:text-rose-400/80 mb-4" />
                            <h4 className="text-lg font-bold text-brand-text dark:text-white mb-2 leading-snug">No transparency on sources</h4>
                        </div>
                    </div>

                    <div className="bg-[#076653]/10 dark:bg-[#E2FBCE]/10 border border-[#076653]/30 dark:border-[#E2FBCE]/20 px-8 py-5 rounded-[2rem] text-center shadow-inner">
                        <p className="text-xl md:text-2xl font-bold text-brand-text dark:text-white">
                            👉 Students need answers they can trust.
                        </p>
                    </div>

                </div>
            </section>

            {/* --- SOLUTION SECTION --- */}
            <section className="w-full py-24 relative z-10 bg-[#FFFDEE]/40 dark:bg-[#06231D]/80">
                <div className="max-w-5xl mx-auto px-8 relative">

                    {/* Glowing background orb for the solution */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#076653]/20 dark:bg-[#E2FBCE]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

                    <div className="bg-[#ffffff]/90 dark:bg-[#06231D]/80 backdrop-blur-2xl border border-white/60 dark:border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center gap-12 hover:shadow-[#076653]/10 transition-shadow duration-700">

                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-black text-brand-text dark:text-white tracking-tight mb-6">
                                Introducing <br />
                                <span className="text-[#076653] dark:text-[#E2FBCE]">TutorLM</span>
                            </h2>
                            <p className="text-lg text-brand-text/70 dark:text-white/70 font-medium leading-relaxed mb-8">
                                A context-aware AI learning assistant that provides accurate, step-by-step explanations using trusted study materials.
                            </p>
                        </div>

                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {/* Highlight 1 */}
                            <div className="flex items-center gap-4 bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-white/50 dark:border-white/5">
                                <CheckCircle2 className="w-6 h-6 text-[#076653] dark:text-[#E2FBCE] shrink-0" />
                                <span className="font-bold text-brand-text dark:text-white">Syllabus Aligned</span>
                            </div>
                            {/* Highlight 2 */}
                            <div className="flex items-center gap-4 bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-white/50 dark:border-white/5">
                                <CheckCircle2 className="w-6 h-6 text-[#076653] dark:text-[#E2FBCE] shrink-0" />
                                <span className="font-bold text-brand-text dark:text-white">Trusted Sources</span>
                            </div>
                            {/* Highlight 3 */}
                            <div className="flex items-center gap-4 bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-white/50 dark:border-white/5">
                                <CheckCircle2 className="w-6 h-6 text-[#076653] dark:text-[#E2FBCE] shrink-0" />
                                <span className="font-bold text-brand-text dark:text-white">Smart Explanations</span>
                            </div>
                            {/* Highlight 4 */}
                            <div className="flex items-center gap-4 bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-white/50 dark:border-white/5">
                                <CheckCircle2 className="w-6 h-6 text-[#076653] dark:text-[#E2FBCE] shrink-0" />
                                <span className="font-bold text-brand-text dark:text-white">Adaptive Learning</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- FEATURES GRID SECTION --- */}
            <section className="max-w-7xl mx-auto px-8 py-32 relative z-10 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-brand-text dark:text-white tracking-tight mb-4">
                        Everything You Need to Master Any Subject
                    </h2>
                    <p className="text-brand-text/60 dark:text-white/50 max-w-2xl mx-auto font-medium">
                        Our platform is built to solve the fundamental problems of modern studying through intelligent automation and verifiable context.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">

                    {/* Feature 1 */}
                    <div className="bg-[#ffffff]/80 dark:bg-[#06231D]/80 backdrop-blur-md border border-white/50 dark:border-white/10 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-[#076653]/5 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start w-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#076653]/10 dark:bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>
                        <div className="bg-white dark:bg-white/5 p-3.5 rounded-2xl shadow-sm mb-6 flex-shrink-0 group-hover:scale-110 transition-transform relative z-10">
                            <BrainCircuit className="w-6 h-6 text-brand-text dark:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text dark:text-white mb-3 relative z-10">Context-Aware Answers</h3>
                        <p className="text-brand-text/60 dark:text-white/60 font-medium leading-relaxed relative z-10">
                            An AI that remembers your past queries and uploaded documents to provide answers tailored exclusively to your syllabus.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-[#ffffff]/80 dark:bg-[#06231D]/80 backdrop-blur-md border border-white/50 dark:border-white/10 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-[#076653]/5 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start w-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#076653]/10 dark:bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>
                        <div className="bg-white dark:bg-white/5 p-3.5 rounded-2xl shadow-sm mb-6 flex-shrink-0 group-hover:scale-110 transition-transform relative z-10">
                            <Layers className="w-6 h-6 text-brand-text dark:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text dark:text-white mb-3 relative z-10">Step-by-Step Explanations</h3>
                        <p className="text-brand-text/60 dark:text-white/60 font-medium leading-relaxed relative z-10">
                            Break down complex problems into digestible, logical steps that guide you seamlessly to the final answer.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-[#ffffff]/80 dark:bg-[#06231D]/80 backdrop-blur-md border border-white/50 dark:border-white/10 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-[#076653]/5 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start w-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#076653]/10 dark:bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>
                        <div className="bg-white dark:bg-white/5 p-3.5 rounded-2xl shadow-sm mb-6 flex-shrink-0 group-hover:scale-110 transition-transform relative z-10">
                            <Target className="w-6 h-6 text-brand-text dark:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text dark:text-white mb-3 relative z-10">Confidence Indicator</h3>
                        <p className="text-brand-text/60 dark:text-white/60 font-medium leading-relaxed relative z-10">
                            Know exactly how certain the AI is about its answers, preventing hallucinations and ensuring total accuracy.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-[#ffffff]/80 dark:bg-[#06231D]/80 backdrop-blur-md border border-white/50 dark:border-white/10 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-[#076653]/5 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start w-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#076653]/10 dark:bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>
                        <div className="bg-white dark:bg-white/5 p-3.5 rounded-2xl shadow-sm mb-6 flex-shrink-0 group-hover:scale-110 transition-transform relative z-10">
                            <BookOpen className="w-6 h-6 text-brand-text dark:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text dark:text-white mb-3 relative z-10">Source-Based Learning</h3>
                        <p className="text-brand-text/60 dark:text-white/60 font-medium leading-relaxed relative z-10">
                            Every claim is backed by the exact paragraph and page number extracted straight from your uploaded course materials.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-[#ffffff]/80 dark:bg-[#06231D]/80 backdrop-blur-md border border-white/50 dark:border-white/10 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-[#076653]/5 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start w-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#076653]/10 dark:bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>
                        <div className="bg-white dark:bg-white/5 p-3.5 rounded-2xl shadow-sm mb-6 flex-shrink-0 group-hover:scale-110 transition-transform relative z-10">
                            <Zap className="w-6 h-6 text-brand-text dark:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text dark:text-white mb-3 relative z-10">Adaptive Modes</h3>
                        <p className="text-brand-text/60 dark:text-white/60 font-medium leading-relaxed relative z-10">
                            Switch between Beginner, Intermediate, and Expert explanation depths depending on your current grasp of the topic.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-[#ffffff]/80 dark:bg-[#06231D]/80 backdrop-blur-md border border-white/50 dark:border-white/10 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:shadow-[#076653]/5 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start w-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#076653]/10 dark:bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>
                        <div className="bg-white dark:bg-white/5 p-3.5 rounded-2xl shadow-sm mb-6 flex-shrink-0 group-hover:scale-110 transition-transform relative z-10">
                            <Activity className="w-6 h-6 text-brand-text dark:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-text dark:text-white mb-3 relative z-10">Smart Insights</h3>
                        <p className="text-brand-text/60 dark:text-white/60 font-medium leading-relaxed relative z-10">
                            Track your learning velocity, retention rates, and knowledge gaps over time with our built-in analytics dashboard.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Landing;

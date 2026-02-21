import React, { useState } from 'react';
import { User, Cpu, Sliders, LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [focusMode, setFocusMode] = useState(false);

    return (
        <div className="flex w-full h-full">
            <div className="flex-1 p-10 pt-12 pb-24 max-w-4xl mx-auto overflow-y-auto">

                {/* Header section */}
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-brand-dark dark:text-white tracking-tight mb-2">
                        Settings
                    </h1>
                    <p className="text-brand-dark/70 dark:text-white/60 text-md font-medium">
                        Personalize how TutorLM thinks, speaks, and looks.
                    </p>
                </div>

                <div className="bg-[#e4d6cc] dark:bg-[#0C342C]/60 border border-white/40 dark:border-white/10 rounded-[36px] p-10 shadow-sm relative overflow-hidden">

                    {/* Section 1: AI Interaction */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#a57392] dark:bg-[#E2FBCE]/20 p-1.5 rounded-full text-white dark:text-[#E2FBCE]">
                                <User className="w-4 h-4" />
                            </div>
                            <h2 className="text-lg font-bold text-brand-dark dark:text-white">AI Interaction</h2>
                        </div>

                        <div className="mb-8 pl-10">
                            <h3 className="text-xs font-bold tracking-widest text-[#113a5d]/70 dark:text-[#a1b0d6]/70 uppercase mb-1">Explanation Mode</h3>
                            <p className="text-sm font-medium text-[#113a5d]/50 dark:text-[#a1b0d6]/50 mb-4">Choose the verbosity and style of AI responses.</p>

                            <div className="flex bg-white/50 dark:bg-white/5 p-1.5 rounded-full border border-white dark:border-white/10 max-w-md">
                                <button className="flex-1 py-2 text-sm font-bold text-brand-dark/50 dark:text-white/50 hover:text-brand-dark dark:hover:text-white rounded-full">Quick</button>
                                <button className="flex-1 py-2 text-sm font-bold text-white bg-[#a57392] dark:bg-[#E2FBCE] shadow-sm rounded-full">Detailed</button>
                                <button className="flex-1 py-2 text-sm font-bold text-brand-dark/50 dark:text-white/50 hover:text-brand-dark dark:hover:text-white rounded-full">Example</button>
                            </div>
                        </div>

                        <div className="pl-10">
                            <h3 className="text-xs font-bold tracking-widest text-[#113a5d]/70 dark:text-[#a1b0d6]/70 uppercase mb-1">Knowledge Difficulty</h3>
                            <p className="text-sm font-medium text-[#113a5d]/50 dark:text-[#a1b0d6]/50 mb-6">Adjust the complexity level of the concepts explained.</p>

                            <div className="max-w-md px-2">
                                <div className="w-full h-2 bg-brand-muted/10 dark:bg-white/10 rounded-full relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#a57392] dark:bg-[#E2FBCE] rounded-full border-[3px] border-white dark:border-[#1e293b] shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-[#a57392]/20 dark:to-[#c49db9]/20 rounded-full pointer-events-none" />
                                </div>
                                <div className="flex justify-between mt-3 px-1">
                                    <span className="text-[10px] font-bold text-[#113a5d] dark:text-[#a1b0d6] opacity-50">Beginner</span>
                                    <span className="text-[10px] font-bold text-[#a57392] dark:text-[#E2FBCE]">Intermediate</span>
                                    <span className="text-[10px] font-bold text-[#113a5d] dark:text-[#a1b0d6] opacity-50">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="w-full h-[1px] bg-brand-muted/10 dark:bg-white/10 my-10" />

                    {/* Section 2: Interface */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#a57392] dark:bg-[#E2FBCE]/20 p-1.5 rounded-full text-white dark:text-[#E2FBCE]">
                                <Sliders className="w-4 h-4" />
                            </div>
                            <h2 className="text-lg font-bold text-brand-dark dark:text-white">Interface</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-10">
                            {/* Dark Mode Toggle */}
                            <div className="bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 p-5 rounded-3xl flex items-center justify-between shadow-sm cursor-pointer" onClick={toggleDarkMode}>
                                <div>
                                    <h4 className="text-[15px] font-bold text-brand-dark dark:text-white mb-0.5">Dark Mode</h4>
                                    <p className="text-[11px] font-medium text-brand-dark/50 dark:text-white/50">Enable high-contrast night theme</p>
                                </div>
                                <div className={`w-14 h-8 rounded-full p-1 ${darkMode ? 'bg-[#a57392] dark:bg-[#E2FBCE]' : 'bg-brand-muted/30 dark:bg-white/20'}`}>
                                    <div className={`w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
                                </div>
                            </div>

                            {/* Focus Mode Toggle */}
                            <div className="bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 p-5 rounded-3xl flex items-center justify-between shadow-sm cursor-pointer" onClick={() => setFocusMode(!focusMode)}>
                                <div>
                                    <h4 className="text-[15px] font-bold text-brand-dark dark:text-white mb-0.5">Focus Mode</h4>
                                    <p className="text-[11px] font-medium text-brand-dark/50 dark:text-white/50">Hide UI elements during chat</p>
                                </div>
                                <div className={`w-14 h-8 rounded-full p-1 ${focusMode ? 'bg-[#a57392] dark:bg-[#E2FBCE]' : 'bg-[#c2d0df] dark:bg-white/20'}`}>
                                    <div className={`w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${focusMode ? 'translate-x-6' : 'translate-x-0'}`} />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: API & Core */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-[#a57392] dark:text-[#E2FBCE]">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold text-brand-dark dark:text-white">API & Core</h2>
                        </div>

                        <div className="pl-10">
                            <div className="bg-white/30 dark:bg-white/5 border border-[#E2FBCE] dark:border-white/10 p-5 rounded-2xl flex items-center justify-between">
                                <div>
                                    <h4 className="text-[15px] font-medium text-brand-dark dark:text-white mb-1">Model: <span className="font-bold">TutorLM-Turbo-04</span></h4>
                                    <p className="text-[11px] font-medium text-brand-dark/50 dark:text-white/50">Last updated: Oct 12, 2023</p>
                                </div>
                                <button className="text-[#a57392] dark:text-[#E2FBCE] font-bold text-xs hover:underline flex items-center gap-1">Change Model  &#x2197;</button>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Action Bar */}
                    <div className="mt-16 flex items-center justify-end gap-4 border-t border-brand-muted/10 dark:border-white/10 pt-8 pl-10">
                        <button className="font-bold text-sm text-[#113a5d] dark:text-[#a1b0d6] px-6 py-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10">Discard</button>
                        <button className="bg-[#a57392] hover:bg-[#0C342C] text-white font-bold text-sm px-8 py-3 rounded-full shadow-sm">Save Changes</button>
                    </div>

                </div>

                <div className="mt-8 text-center text-xs font-medium text-brand-dark/50 dark:text-white/50">
                    Some changes may require a page refresh to take effect. Need help? <a href="#" className="text-[#a57392] dark:text-[#E2FBCE] hover:underline">Visit our Support Center</a>
                </div>

            </div>
        </div>
    );
};

export default Settings;

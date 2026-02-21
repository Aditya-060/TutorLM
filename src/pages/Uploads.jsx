import React from 'react';
import { UploadCloud, FileText, Settings, Shield, CheckCircle, Sparkles } from 'lucide-react';

const Uploads = () => {
    return (
        <div className="flex w-full h-full">
            {/* Main Content Area */}
            <div className="flex-1 p-10 pt-12 pb-24 max-w-5xl mx-auto overflow-y-auto">
                {/* Header section */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-4xl font-black text-brand-dark dark:text-white tracking-tight mb-2">
                            Upload Documents
                        </h1>
                        <p className="text-brand-dark/70 dark:text-white/60 text-md font-medium">
                            Index your files for deep AI contextual analysis.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-white/5 border border-brand-muted/20 dark:border-white/10 hover:border-brand-muted/40 dark:hover:border-white/20 text-brand-text dark:text-white/80 text-sm font-semibold shadow-sm">
                        <Settings className="w-4 h-4" />
                        <span>Documentation</span>
                    </button>
                </div>

                {/* Upload Zone */}
                <div className="bg-[#e4d6cc] dark:bg-[#0C342C]/60 border-2 border-dashed border-[#c5b5ac] dark:border-white/20 rounded-[32px] p-16 flex flex-col items-center justify-center text-center transition-all hover:bg-[#e0d0c5] dark:hover:bg-[#1a1c23] hover:border-[#b4a095] dark:hover:border-white/40 cursor-pointer relative shadow-inner overflow-hidden">
                    <div className="w-20 h-20 bg-[#E2FBCE] dark:bg-[#076653]/20 rounded-[24px] rotate-3 text-[#916784] dark:text-[#E2FBCE] hover:rotate-6 transition-transform flex items-center justify-center mb-6 shadow-sm">
                        <UploadCloud className="w-10 h-10 transform -rotate-3" />
                    </div>

                    <h2 className="text-2xl font-bold text-brand-dark dark:text-white mb-3">Drag & drop files here</h2>
                    <p className="text-brand-dark/60 dark:text-white/60 font-medium text-sm mb-6">Or click to browse from your device</p>

                    <div className="flex gap-4 mb-2">
                        <span className="px-5 py-2 rounded-full border border-[#c5b5ac] dark:border-white/20 text-[#a38c82] dark:text-white/60 text-xs font-bold uppercase tracking-wider bg-white/20 dark:bg-white/5">PDF</span>
                        <span className="px-5 py-2 rounded-full border border-[#c5b5ac] dark:border-white/20 text-[#a38c82] dark:text-white/60 text-xs font-bold uppercase tracking-wider bg-white/20 dark:bg-white/5">DOC</span>
                        <span className="px-5 py-2 rounded-full border border-[#c5b5ac] dark:border-white/20 text-[#a38c82] dark:text-white/60 text-xs font-bold uppercase tracking-wider bg-white/20 dark:bg-white/5">DOCX</span>
                        <span className="flex items-center text-xs font-bold text-[#a38c82] dark:text-white/50 ml-2">Max 25MB</span>
                    </div>
                </div>

                {/* Processed Documents List */}
                <div className="mt-12 bg-black/5 dark:bg-[#0C342C]/40 rounded-[32px] p-8 backdrop-blur-sm border border-white/20 dark:border-white/10">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-[13px] font-bold tracking-[0.1em] text-brand-dark dark:text-white/80 uppercase">Recently Processed</h3>
                        <button className="text-[#916784] dark:text-[#E2FBCE] hover:opacity-80 font-bold text-xs uppercase tracking-wider bg-transparent border-none">
                            View All
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* File Item 1 */}
                        <div className="bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 p-5 rounded-[24px] shadow-sm flex items-center justify-between hover:bg-white/80 dark:hover:bg-white/10 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#ffc1bb] dark:bg-[#d45649]/20 text-[#d45649] dark:text-[#ffc1bb] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-brand-text dark:text-white text-[15px] mb-0.5 max-w-[150px] truncate">Quarterly_Review_Q3.pdf</span>
                                    <span className="text-xs font-medium text-brand-text/50 dark:text-white/70">1.4 MB • 2 mins ago</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#d7ecd1] dark:bg-[#4d7348]/20 text-[#4d7348] dark:text-[#86efac] text-[10px] font-bold tracking-wider uppercase rounded-full border border-[#b2d3b2] dark:border-[#4d7348]/40">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#4d7348] dark:bg-[#86efac]" />
                                Indexed
                            </div>
                        </div>

                        {/* File Item 2 */}
                        <div className="bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 p-5 rounded-[24px] shadow-sm flex items-center justify-between hover:bg-white/80 dark:hover:bg-white/10 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#c9e0ff] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#93c5fd] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-brand-text dark:text-white text-[15px] mb-0.5 max-w-[150px] truncate">Project_Proposal_Draft.docx</span>
                                    <span className="text-xs font-medium text-brand-text/50 dark:text-white/70">842 KB • 15 mins ago</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#d7ecd1] dark:bg-[#4d7348]/20 text-[#4d7348] dark:text-[#86efac] text-[10px] font-bold tracking-wider uppercase rounded-full border border-[#b2d3b2] dark:border-[#4d7348]/40">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#4d7348] dark:bg-[#86efac]" />
                                Indexed
                            </div>
                        </div>

                        {/* File Item 3 (Processing) */}
                        <div className="bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 p-5 rounded-[24px] shadow-sm flex items-center justify-between hover:bg-white/80 dark:hover:bg-white/10 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#e2e8f0] dark:bg-white/10 text-brand-muted/70 dark:text-white/40 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform relative overflow-hidden">
                                    <FileText className="w-6 h-6 relative z-10" />
                                    <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#ccd5e0] dark:bg-white/20" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-brand-text dark:text-white text-[15px] mb-0.5 max-w-[150px] truncate opacity-50">Market_Research_v1.pdf</span>
                                    <div className="w-32 h-1 bg-brand-muted/20 dark:bg-white/20 rounded-full mt-2 overflow-hidden">
                                        <div className="w-[30%] h-full bg-[#0C342C] dark:bg-[#E2FBCE]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E2FBCE] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#fbcfe8] text-[10px] font-bold tracking-wider uppercase rounded-full border border-[#E2FBCE] dark:border-[#915f7f]/40">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#0C342C] dark:bg-[#fbcfe8] animate-pulse" />
                                Processing
                            </div>
                        </div>

                        {/* File Item 4 */}
                        <div className="bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 p-5 rounded-[24px] shadow-sm flex items-center justify-between hover:bg-white/80 dark:hover:bg-white/10 cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#c9e0ff] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#93c5fd] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-brand-text dark:text-white text-[15px] mb-0.5 max-w-[150px] truncate">Meeting_Notes_Jan.docx</span>
                                    <span className="text-xs font-medium text-brand-text/50 dark:text-white/70">240 KB • 1 hour ago</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#d7ecd1] dark:bg-[#4d7348]/20 text-[#4d7348] dark:text-[#86efac] text-[10px] font-bold tracking-wider uppercase rounded-full border border-[#b2d3b2] dark:border-[#4d7348]/40">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#4d7348] dark:bg-[#86efac]" />
                                Indexed
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Security Marks */}
                <div className="mt-8 flex items-center justify-between text-xs font-bold text-brand-text/50 dark:text-white/40 px-4">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-brand-text/40 dark:text-white/30" /> Secure 256-bit encryption</span>
                        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-text/40 dark:text-white/30" /> AI verification enabled</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-brand-text dark:hover:text-white text-brand-text/50 dark:text-white/40">Terms of Service</a>
                        <a href="#" className="hover:text-brand-text dark:hover:text-white text-brand-text/50 dark:text-white/40">Privacy Policy</a>
                    </div>
                </div>

            </div>

            {/* Right Sidebar - Storage & Insights */}
            <aside className="w-[320px] h-screen p-8 flex flex-col gap-6 bg-[#FFFDEE] dark:bg-[#0C342C] border-l border-brand-muted/10 dark:border-white/5 shrink-0 overflow-y-auto">

                {/* Storage Card */}
                <div className="bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 rounded-[32px] p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-brand-dark dark:text-white mb-4">Storage Usage</h3>

                    <div className="flex items-end justify-between mb-4 mt-2">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-brand-dark dark:text-white leading-none">4.2</span>
                            <span className="text-sm font-bold text-brand-dark/50 dark:text-white/50">GB</span>
                        </div>
                        <span className="text-xs font-bold text-brand-dark/60 dark:text-white/60">84% of 5GB</span>
                    </div>

                    <div className="w-full h-2.5 bg-brand-muted/20 dark:bg-white/10 rounded-full mb-6 overflow-hidden">
                        <div className="h-full bg-[#076653] dark:bg-[#E2FBCE] rounded-full w-[84%]" />
                    </div>

                    <button className="w-full border border-[#E2FBCE] dark:border-white/20 bg-white dark:bg-white/5 text-[#0C342C] dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 text-xs py-3 rounded-full font-bold">
                        Upgrade Storage
                    </button>
                </div>

                {/* AI Insights Note List */}
                <div className="flex-1 bg-white/40 dark:bg-[#06231D]/60 border border-white/50 dark:border-white/10 rounded-[32px] p-6 shadow-sm flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E2FBCE]/30 dark:bg-[#076653]/10 rounded-full blur-2xl -mt-10 -mr-10" />

                    <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="w-4 h-4 text-[#076653] dark:text-[#E2FBCE]" />
                        <h3 className="text-sm font-bold text-brand-dark dark:text-white">AI Insights</h3>
                    </div>

                    <ul className="space-y-6 flex-1">
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#076653] dark:bg-[#E2FBCE] mt-2 shrink-0" />
                            <p className="text-xs text-brand-dark/80 dark:text-white/70 font-medium leading-relaxed">PDF files with text layers are processed 3x faster than scanned documents.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#076653] dark:bg-[#E2FBCE] mt-2 shrink-0" />
                            <p className="text-xs text-brand-dark/80 dark:text-white/70 font-medium leading-relaxed">Combine multiple reports for cross-document thematic analysis.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#076653] dark:bg-[#E2FBCE] mt-2 shrink-0" />
                            <p className="text-xs text-brand-dark/80 dark:text-white/70 font-medium leading-relaxed">Use tags during upload to organize your library automatically.</p>
                        </li>
                    </ul>

                    <div className="mt-8 bg-white/60 dark:bg-white/5 rounded-2xl p-4 border border-white dark:border-white/10">
                        <h4 className="text-xs font-bold text-brand-dark dark:text-white mb-1 italic">New Feature!</h4>
                        <p className="text-[11px] text-brand-dark/60 dark:text-white/50 font-medium leading-relaxed">You can now chat with your documents immediately after they show as 'Indexed'.</p>
                    </div>
                </div>

            </aside>
        </div>
    );
};

export default Uploads;

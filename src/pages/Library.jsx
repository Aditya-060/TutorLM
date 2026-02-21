import React, { useState } from 'react';
import { Search, Bell, UploadCloud, FileText, Play, Terminal, Download, Trash2, Pause, X } from 'lucide-react';

const IngestionOption = ({ icon: Icon, title, description }) => (
    <div className="bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-pointer group">
        <div className="bg-[#E2FBCE] dark:bg-[#06231D] p-3 rounded-xl text-[#0C342C] dark:text-white/80 group-hover:scale-105 transition-transform">
            <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
            <h4 className="text-sm font-bold text-brand-dark dark:text-white mb-0.5">{title}</h4>
            <p className="text-[10px] uppercase font-bold text-brand-dark/50 dark:text-white/40 tracking-wider">
                {description}
            </p>
        </div>
        <div className="text-brand-dark/30 dark:text-white/30 group-hover:text-brand-dark/60 dark:group-hover:text-white/60 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </div>
    </div>
);

const FileRow = ({ filename, size, status, time, type }) => {
    const isProcessing = status === 'PARSING...';
    const isQueued = status === 'QUEUED';

    return (
        <div className="bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/60 dark:hover:bg-white/10 transition-colors group">
            <div className="flex items-center gap-4 flex-1">
                <div className="bg-[#E2FBCE] dark:bg-[#06231D] p-2.5 rounded-lg text-[#0C342C] dark:text-white/80">
                    {type === 'video' ? <Play className="w-4 h-4" /> : type === 'raw' ? <Terminal className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                </div>
                <div>
                    <h4 className="text-sm font-bold text-brand-dark dark:text-white mb-0.5">{filename}</h4>
                    <p className="text-[10px] font-medium text-brand-dark/50 dark:text-white/40">Uploaded {time}</p>
                </div>
            </div>

            <div className="flex-1 text-sm font-medium text-brand-dark/60 dark:text-white/60">
                {size}
            </div>

            <div className="flex-[1.5] flex flex-col justify-center">
                {isProcessing ? (
                    <div className="flex items-center gap-3 w-full max-w-[200px]">
                        <span className="text-[10px] font-bold text-[#0C342C] dark:text-[#076653] uppercase tracking-wider w-20">{status}</span>
                        <div className="flex-1 h-1.5 bg-brand-dark/10 dark:bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-[#0C342C] dark:bg-[#076653] w-[65%]" />
                        </div>
                    </div>
                ) : isQueued ? (
                    <div className="flex items-center gap-2 text-[10px] font-bold text-brand-dark/40 dark:text-white/40 uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-dark/30 dark:bg-white/30" />
                        {status}
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[#4d7348] dark:text-[#4ade80] uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4d7348] dark:bg-[#4ade80]" />
                        {status}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {isProcessing ? (
                    <>
                        <button className="text-brand-dark/40 dark:text-white/40 hover:text-brand-dark dark:hover:text-white"><Pause className="w-4 h-4" /></button>
                        <button className="text-brand-dark/40 dark:text-white/40 hover:text-red-500 dark:hover:text-red-400"><X className="w-4 h-4" /></button>
                    </>
                ) : (
                    <>
                        <button className="text-brand-dark/40 dark:text-white/40 hover:text-brand-dark dark:hover:text-white"><Download className="w-4 h-4" /></button>
                        <button className="text-brand-dark/40 dark:text-white/40 hover:text-red-500 dark:hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                    </>
                )}
            </div>
        </div>
    );
};

const Library = () => {
    const [activeTab, setActiveTab] = useState('ALL FILES');

    return (
        <div className="flex w-full h-full bg-[#FFFDEE] dark:bg-transparent">
            <div className="flex-1 p-8 pt-10 max-w-6xl mx-auto overflow-y-auto w-full">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3 border-l-4 border-[#0C342C] dark:border-[#076653] pl-4">
                        <h1 className="text-xl font-black text-brand-dark dark:text-white tracking-widest uppercase">
                            Data Ingestion Protocol
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <Search className="w-4 h-4 text-brand-dark/40 dark:text-white/40 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-brand-purple transition-colors" />
                            <input
                                type="text"
                                placeholder="Scan Database..."
                                className="bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 rounded-full pl-10 pr-16 py-2 text-sm text-brand-dark dark:text-white placeholder:text-brand-dark/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 w-64 transition-all"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded text-[9px] font-bold bg-white/50 dark:bg-white/10 border border-white/50 dark:border-white/10 text-brand-dark/50 dark:text-white/50">
                                CMD+K
                            </div>
                        </div>
                        <button className="relative text-brand-dark/60 dark:text-white/60 hover:text-brand-dark dark:hover:text-white transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute 0 right-0 w-2 h-2 bg-[#0C342C] dark:bg-[#076653] rounded-full" />
                        </button>
                    </div>
                </div>

                {/* Top Section: Upload Area & Options Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Main Upload Zone */}
                    <div className="lg:col-span-2 bg-[#FFFDEE]/50 dark:bg-[#0C342C]/30 border-2 border-dashed border-[#c5b5ac] dark:border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center relative hover:bg-[#e0d0c5]/50 dark:hover:bg-[#1a1c23]/50 transition-colors cursor-pointer group">
                        <div className="w-20 h-20 rounded-full border border-brand-dark/10 dark:border-white/10 flex items-center justify-center mb-6 relative">
                            <div className="absolute inset-2 rounded-full border border-brand-dark/20 dark:border-white/20" />
                            <div className="w-12 h-12 bg-[#0C342C] dark:bg-[#076653] rounded-full flex items-center justify-center shadow-lg shadow-[#3465a4]/30 z-10 group-hover:scale-110 transition-transform">
                                <UploadCloud className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <h2 className="text-xl font-black text-brand-dark dark:text-white tracking-widest uppercase mb-2">
                            Initiate Upload Sequence
                        </h2>
                        <p className="text-brand-dark/60 dark:text-white/60 font-medium text-sm">
                            Drag & drop files or <span className="text-[#0C342C] dark:text-[#076653] hover:underline cursor-pointer">browse terminal</span>
                        </p>

                        <div className="absolute bottom-6 right-6 flex gap-2">
                            <span className="px-2 py-1 rounded bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 text-[9px] font-bold text-brand-dark/50 dark:text-white/40 uppercase tracking-widest">
                                MAX: 5GB
                            </span>
                            <span className="px-2 py-1 rounded bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 text-[9px] font-bold text-brand-dark/50 dark:text-white/40 uppercase tracking-widest">
                                AES-256
                            </span>
                        </div>
                    </div>

                    {/* Right Side Options */}
                    <div className="flex flex-col gap-4 justify-between h-full">
                        <IngestionOption
                            icon={FileText}
                            title="DOCUMENT ANALYSIS"
                            description="PDF, DOCX extraction"
                        />
                        <IngestionOption
                            icon={Play}
                            title="VIDEO PROCESSING"
                            description="MP4 recognition"
                        />
                        <IngestionOption
                            icon={Terminal}
                            title="RAW DATA INPUT"
                            description="TXT, MD feeding"
                        />
                    </div>
                </div>

                {/* Middle Section: Files List */}
                <div className="mb-8">
                    {/* Tabs */}
                    <div className="flex items-center justify-between border-b border-[#c5b5ac] dark:border-white/10 mb-4 pb-0">
                        <div className="flex gap-8">
                            {['ALL FILES', 'PROCESSED', 'PENDING'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-4 text-xs font-bold tracking-widest uppercase transition-all relative ${activeTab === tab
                                            ? 'text-[#0C342C] dark:text-[#076653]'
                                            : 'text-brand-dark/40 dark:text-white/40 hover:text-brand-dark/70 dark:hover:text-white/70'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0C342C] dark:bg-[#076653] rounded-t-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-3 pb-4">
                            <button className="text-brand-dark/40 dark:text-white/40 hover:text-brand-dark dark:hover:text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></button>
                            <button className="text-brand-dark/40 dark:text-white/40 hover:text-brand-dark dark:hover:text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></button>
                        </div>
                    </div>

                    {/* Table Headers */}
                    <div className="flex px-4 py-2 mb-2 text-[10px] font-bold text-brand-dark/40 dark:text-white/30 uppercase tracking-widest">
                        <div className="flex-1">FILENAME</div>
                        <div className="flex-1">SIZE</div>
                        <div className="flex-[1.5]">STATUS</div>
                        <div className="w-16 text-right">ACTION</div>
                    </div>

                    {/* Rows */}
                    <div className="flex flex-col gap-2">
                        <FileRow
                            filename="Neural_Network_Basics.pdf"
                            size="4.2 MB"
                            status="COMPLETE"
                            time="2m ago"
                            type="pdf"
                        />
                        <FileRow
                            filename="Lecture_04_Advanced_DL.mp4"
                            size="128 MB"
                            status="PARSING..."
                            time="12m ago"
                            type="video"
                        />
                        <FileRow
                            filename="Research_Notes_v2.txt"
                            size="12 KB"
                            status="QUEUED"
                            time="1h ago"
                            type="raw"
                        />
                        <FileRow
                            filename="Legacy_Data_Structure.pdf"
                            size="8.4 MB"
                            status="COMPLETE"
                            time="3d ago"
                            type="pdf"
                        />
                    </div>
                </div>

                {/* Bottom Section: Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-black text-[#0C342C] dark:text-[#076653] mb-1">84<span className="text-xl">%</span></h3>
                        <p className="text-[10px] font-bold text-brand-dark/40 dark:text-white/30 uppercase tracking-widest">STORAGE USED</p>
                    </div>
                    <div className="bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-black text-brand-dark dark:text-white mb-1">1,024</h3>
                        <p className="text-[10px] font-bold text-brand-dark/40 dark:text-white/30 uppercase tracking-widest">FILES INDEXED</p>
                    </div>
                    <div className="bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-black text-[#4d7348] dark:text-[#4ade80] mb-1 tracking-wider uppercase">ACTIVE</h3>
                        <p className="text-[10px] font-bold text-brand-dark/40 dark:text-white/30 uppercase tracking-widest">NEURAL STATUS</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Library;

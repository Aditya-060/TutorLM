import React, { useState } from 'react';
import { Share2, FileText, Link as LinkIcon, Info, Send, Mic, Sparkles } from 'lucide-react';

const Workspace = () => {
    const [input, setInput] = useState('');

    return (
        <div className="flex w-full h-full">

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden px-8 py-6 max-w-5xl mx-auto">

                {/* Header */}
                <header className="flex items-center justify-between mb-8 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#113a5d] to-[#402E46] flex items-center justify-center shadow-sm">
                            <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
                        </div>
                        <h1 className="text-xl font-bold text-brand-text dark:text-white">TutorLM Workspace</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=113a5d" className="w-8 h-8 rounded-full border-2 border-[#e8ddd6]" alt="user1" />
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Sam&backgroundColor=2d3340" className="w-8 h-8 rounded-full border-2 border-[#e8ddd6]" alt="user2" />
                            <div className="w-8 h-8 rounded-full bg-[#076653] border-2 border-[#e8ddd6] flex items-center justify-center text-[10px] font-bold text-white">+3</div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#076653] hover:bg-[#0C342C] text-white text-sm font-semibold shadow-sm">
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                        </button>
                    </div>
                </header>

                {/* Chat Feed */}
                <div className="flex-1 overflow-y-auto space-y-8 pb-8 pr-2">

                    {/* User Message */}
                    <div className="flex justify-end mb-8">
                        <div className="bg-[#113a5d] text-white px-6 py-4 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                            <p className="font-medium text-[15px] leading-relaxed">
                                How can I optimize our data ingestion pipeline for real-time processing using Spark?
                            </p>
                        </div>
                    </div>

                    {/* AI Profile/Name row */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a37996] to-[#74506c] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                            RK
                        </div>
                        <span className="font-bold text-brand-text dark:text-white text-[15px]">TutorLM Intelligence</span>
                        <span className="text-xs font-medium text-brand-text/40 dark:text-white/40">just now</span>
                    </div>

                    {/* AI Quick Answer Card */}
                    <div className="bg-white/40 dark:bg-[#0C342C]/60 border border-white/60 dark:border-white/10 rounded-[24px] p-6 shadow-sm mb-4">
                        <div className="flex items-center justify-between mb-3 text-[#113a5d] dark:text-[#a1b0d6]">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-xs font-bold tracking-wider uppercase">Quick Answer</span>
                            </div>
                            <div className="flex flex-col gap-1 cursor-pointer opacity-50 hover:opacity-100">
                                <div className="w-2 h-2 border-t-2 border-l-2 border-current rotate-45 translate-y-1" />
                                <div className="w-2 h-2 border-b-2 border-r-2 border-current rotate-45 -translate-y-1" />
                            </div>
                        </div>

                        <p className="text-[#96a5d4] dark:text-[#b4c5fc] font-medium text-[15px] leading-relaxed mb-6">
                            The most effective way is to implement Structured Streaming with Kafka as a source, ensuring you use 'Direct Streams' and proper checkpointing for exactly-once semantics.
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-[#E2FBCE] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#fbcfe8] text-xs font-bold rounded-lg whitespace-nowrap border border-[#E2FBCE] dark:border-[#915f7f]/40">Official Docs</span>
                                <span className="px-3 py-1 bg-[#E2FBCE] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#fbcfe8] text-xs font-bold rounded-lg whitespace-nowrap border border-[#E2FBCE] dark:border-[#915f7f]/40">Big Data Best Practices</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-brand-text/50 dark:text-white/50 uppercase tracking-wide">Confidence</span>
                                <div className="w-24 h-1.5 bg-brand-muted/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#076653] w-[98%]" />
                                </div>
                                <span className="text-xs font-bold text-[#076653] ml-1">98%</span>
                            </div>
                        </div>
                    </div>

                    {/* AI Step-by-Step Card */}
                    <div className="bg-white/40 dark:bg-[#0C342C]/60 border border-white/60 dark:border-white/10 rounded-[25px] p-7 shadow-sm mb-4">
                        <div className="flex items-center gap-2 mb-6 text-[#113a5d] dark:text-[#a1b0d6]">
                            <FileText className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-wider uppercase">Step-by-Step Explanation</span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-[#E2FBCE] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#fbcfe8] flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                                <p className="text-[15px] text-brand-text/80 dark:text-white/80 leading-relaxed font-medium">
                                    <strong className="text-brand-text dark:text-white font-bold">Source Configuration:</strong> Connect your Spark cluster to a high-throughput broker like Kafka or Kinesis using the Structured Streaming API.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-[#E2FBCE] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#fbcfe8] flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                                <p className="text-[15px] text-brand-text/80 dark:text-white/80 leading-relaxed font-medium">
                                    <strong className="text-brand-text dark:text-white font-bold">Watermarking:</strong> Define event-time watermarking to handle late-arriving data effectively without causing state size explosion.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-[#E2FBCE] dark:bg-[#0C342C]/20 text-[#0C342C] dark:text-[#fbcfe8] flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                                <p className="text-[15px] text-brand-text/80 dark:text-white/80 leading-relaxed font-medium">
                                    <strong className="text-brand-text dark:text-white font-bold">Stateful Operations:</strong> Use `mapGroupsWithState` for complex per-key logic instead of simple aggregations if sessionization is required.
                                </p>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 mt-8 bg-white dark:bg-white/5 text-brand-text dark:text-white text-xs font-bold rounded-lg border border-brand-muted/10 dark:border-white/10 shadow-sm hover:bg-gray-50 dark:hover:bg-white/10">
                            <FileText className="w-3.5 h-3.5" />
                            Copy Steps
                        </button>
                    </div>

                    {/* Code Implementation */}
                    <div className="bg-white/40 dark:bg-[#0C342C]/60 border border-white/60 dark:border-white/10 rounded-[20px] p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-[#113a5d] dark:text-[#a1b0d6]">
                                <span className="font-mono font-bold text-lg leading-none mt-[-4px]">&lt;&gt;</span>
                                <span className="text-xs font-bold tracking-wider uppercase">Code Implementation</span>
                            </div>
                            <span className="text-[10px] font-bold text-brand-text/40 dark:text-white/40 tracking-widest uppercase">Scala / Spark 3.x</span>
                        </div>

                        <pre className="font-mono text-[13px] text-brand-text/80 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                            {`val streamingDF = spark.readStream
  .format("kafka")
  .option("kafka.bootstrap.servers", "host:port")
  .option("subscribe", "topic")
  .load()`}
                        </pre>
                    </div>

                </div>

                {/* Input Area */}
                <div className="relative mt-4 shrink-0">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-muted dark:text-white/40">
                        <LinkIcon className="w-5 h-5 opacity-60" />
                    </div>
                    <input
                        type="text"
                        className="w-full bg-white/70 dark:bg-[#1f2937]/80 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-2xl py-4 pl-12 pr-28 text-[15px] font-medium text-brand-text dark:text-white placeholder-brand-text/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#a37996]/30 shadow-sm"
                        placeholder="Type your message or / for commands..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-2 flex items-center gap-2">
                        <button className="p-2 text-brand-text/40 hover:text-brand-text">
                            <Mic className="w-5 h-5" />
                        </button>
                        <button className="bg-[#076653] hover:bg-[#0C342C] text-white p-2.5 rounded-xl shadow-sm">
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>

            {/* Right Sidebar - Contextual Insights */}
            <aside className="w-[320px] h-screen p-8 flex flex-col gap-8 bg-[#FFFDEE] dark:bg-[#0C342C] border-l border-brand-muted/10 dark:border-white/5 shrink-0 overflow-y-auto">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-bold tracking-[0.15em] text-[#113a5d] dark:text-[#a1b0d6] uppercase">Contextual Insights</h3>
                    <Info className="w-4 h-4 text-[#113a5d]/70 dark:text-[#a1b0d6]/70" />
                </div>

                {/* Linked Resources */}
                <section>
                    <h4 className="text-[11px] font-bold tracking-wider text-brand-text/50 dark:text-white/40 uppercase mb-4">Linked Resources</h4>
                    <div className="space-y-3">
                        <div className="bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 p-3 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-white/60 dark:hover:bg-white/10">
                            <div className="bg-[#E2FBCE] dark:bg-[#0C342C]/20 p-2 rounded-xl text-[#0C342C] dark:text-[#fbcfe8]">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-brand-text dark:text-white">Spark_Streaming_Guide.pdf</span>
                                <span className="text-[10px] text-brand-text/50 dark:text-white/50 font-medium">2.4 MB • Internal Doc</span>
                            </div>
                        </div>

                        <div className="bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 p-3 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-white/60 dark:hover:bg-white/10">
                            <div className="bg-[#e9dcd8] dark:bg-white/10 p-2 rounded-xl text-brand-text/50 dark:text-white/40">
                                <LinkIcon className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-brand-text/60 dark:text-white/60">Kafka_Consumer_V3.md</span>
                                <span className="text-[10px] text-[#4d7394] dark:text-[#93c5fd] font-medium">Github Enterprise</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conversation Metadata */}
                <section className="mt-2">
                    <h4 className="text-[11px] font-bold tracking-wider text-brand-text/50 dark:text-white/40 uppercase mb-4">Conversation Metadata</h4>
                    <div className="bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 p-5 rounded-3xl space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-brand-text/60 dark:text-white/50 font-medium">Model Used</span>
                            <span className="font-bold text-brand-dark dark:text-white">TutorLM-GPT4-o</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-brand-text/60 dark:text-white/50 font-medium">Tokens Consumed</span>
                            <span className="font-bold text-brand-dark dark:text-white">1,420 / 128k</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-brand-text/60 dark:text-white/50 font-medium">Latency</span>
                            <span className="font-bold text-brand-dark dark:text-white">246ms</span>
                        </div>
                    </div>
                </section>

                {/* Cluster Distribution */}
                <section className="mt-2">
                    <h4 className="text-[11px] font-bold tracking-wider text-brand-text/50 uppercase mb-4">Cluster Distribution</h4>
                    <div className="bg-[#111e2d] rounded-2xl overflow-hidden relative h-[140px] border border-white/10 flex items-center justify-center p-4 cursor-pointer group">
                        {/* Note: In a real app we'd use a canvas/svg map here, simulating with CSS */}
                        <div className="w-full h-full opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain filter invert opacity-30" />

                        {/* Node Marker */}
                        <div className="absolute top-[45%] left-[25%]">
                            <div className="w-4 h-4 rounded-full bg-[#f2aab8] opacity-50 animate-ping absolute" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#e8a3b0] shadow-[0_0_10px_#e8a3b0] relative z-10" />
                        </div>
                        <div className="absolute top-[35%] left-[55%]">
                            <div className="w-3 h-3 rounded-full bg-brand-purple opacity-30 animate-pulse absolute" />
                            <div className="w-2 h-2 rounded-full bg-brand-purple relative z-10" />
                        </div>

                        <div className="absolute bottom-3 left-3 bg-[#1c2e42] text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10">West US-1 Nodes</div>
                    </div>
                </section>

                {/* Bottom Actions */}
                <div className="mt-auto pt-4">
                    <button className="w-full bg-[#e3dad3] dark:bg-[#076653]/10 hover:bg-[#FFFDEE] dark:hover:bg-[#076653]/20 border border-white/50 dark:border-white/10 text-[#0C342C] dark:text-[#E2FBCE] font-bold text-xs py-3.5 rounded-full shadow-sm tracking-wide uppercase">
                        Generate Report
                    </button>
                </div>

            </aside>
        </div>
    );
};

export default Workspace;

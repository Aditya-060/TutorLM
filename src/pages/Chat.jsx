import React, { useState } from 'react';
import {
    Send,
    Mic,
    Image as ImageIcon,
    Bot,
    User,
    MoreVertical,
    Volume2,
    Sparkles,
    Settings,
    ChevronDown
} from 'lucide-react';
import RightSidebar from '../components/layout/RightSidebar';

const ChatMessage = ({ isAi, text, time, showVoiceStatus = false }) => {
    return (
        <div className={`flex w-full ${isAi ? 'justify-start' : 'justify-end'} mb-6`}>
            <div className={`flex max-w-[80%] ${isAi ? 'flex-row' : 'flex-row-reverse'} gap-4`}>

                {/* Avatar */}
                <div className="flex-shrink-0 mt-1">
                    {isAi ? (
                        <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center shadow-[0_0_15px_rgba(163,121,150,0.5)]">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                    ) : (
                        <img
                            src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=a3c4bc"
                            alt="User"
                            className="w-10 h-10 rounded-full border-2 border-brand-purple/20"
                        />
                    )}
                </div>

                {/* Message Bubble */}
                <div className={`flex flex-col ${isAi ? 'items-start' : 'items-end'}`}>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-brand-dark dark:text-white">
                            {isAi ? 'TutorLM Tutor' : 'You'}
                        </span>
                        <span className="text-xs font-semibold text-brand-dark/40 dark:text-white/40">
                            {time}
                        </span>
                    </div>

                    <div className={`p-4 rounded-2xl ${isAi
                        ? 'bg-white dark:bg-[#0C342C] border border-brand-purple/10 dark:border-white/5 rounded-tl-none text-brand-text dark:text-white/90 shadow-sm'
                        : 'bg-brand-purple text-white rounded-tr-none shadow-md'
                        }`}>
                        <p className="leading-relaxed font-medium text-sm md:text-base whitespace-pre-line">
                            {text}
                        </p>

                        {/* Demo voice status for AI message */}
                        {isAi && showVoiceStatus && (
                            <div className="mt-4 flex items-center gap-3 bg-brand-purple/5 dark:bg-black/20 p-2.5 rounded-xl w-fit">
                                <Volume2 className="w-5 h-5 text-brand-purple" />
                                <div className="flex items-center gap-1.5 h-4">
                                    <div className="w-1 h-2 bg-brand-purple rounded-full animate-pulse"></div>
                                    <div className="w-1 h-3 bg-brand-purple rounded-full animate-pulse delay-75"></div>
                                    <div className="w-1 h-4 bg-brand-purple rounded-full animate-pulse delay-150"></div>
                                    <div className="w-1 h-2 bg-brand-purple rounded-full animate-pulse delay-200"></div>
                                    <div className="w-1 h-3 bg-brand-purple rounded-full animate-pulse delay-300"></div>
                                </div>
                                <span className="text-xs font-bold text-brand-purple tracking-wide ml-2">Speaking...</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

const Chat = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [selectedMode, setSelectedMode] = useState('Step-by-Step');

    const modes = ['Quick Answer', 'Step-by-Step', 'Exam Mode'];

    return (
        <div className="flex w-full h-full bg-[#fdfbf9] dark:bg-[#0b1120]">
            <div className="flex-1 flex flex-col h-full max-w-5xl mx-auto">

                {/* Chat Header */}
                <div className="flex items-center justify-between px-10 py-6 border-b border-brand-text/5 dark:border-white/5 bg-white/50 dark:bg-[#0b1120]/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center shadow-[0_0_15px_rgba(163,121,150,0.5)]">
                                <Bot className="w-7 h-7 text-white" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-[#0b1120] rounded-full"></div>
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-brand-dark dark:text-white flex items-center gap-2">
                                TutorLM Tutor
                                <Sparkles className="w-4 h-4 text-brand-purple" />
                            </h2>
                            <p className="text-sm font-semibold text-brand-dark/50 dark:text-white/50">
                                Always here to help you understand
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Mode Selector */}
                        <div className="hidden md:flex bg-brand-text/5 dark:bg-white/5 p-1 rounded-xl">
                            {modes.map(mode => (
                                <button
                                    key={mode}
                                    onClick={() => setSelectedMode(mode)}
                                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${selectedMode === mode
                                        ? 'bg-white dark:bg-[#0C342C] text-brand-purple shadow-sm'
                                        : 'text-brand-dark/60 dark:text-white/60 hover:text-brand-dark dark:hover:text-white'
                                        }`}
                                >
                                    {mode}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Mode Selector (Dropdown icon) */}
                        <button className="md:hidden p-2 text-brand-dark/60 dark:text-white/60 hover:bg-brand-text/5 dark:hover:bg-white/5 rounded-xl">
                            <ChevronDown className="w-5 h-5" />
                        </button>

                        <button className="p-2 text-brand-dark/60 dark:text-white/60 hover:bg-brand-text/5 dark:hover:bg-white/5 rounded-xl transition-colors">
                            <Settings className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-brand-dark/60 dark:text-white/60 hover:bg-brand-text/5 dark:hover:bg-white/5 rounded-xl transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto p-10 space-y-2 scrollbar-hide">

                    <div className="flex justify-center mb-8">
                        <span className="text-xs font-bold text-brand-text/40 dark:text-white/30 bg-brand-text/5 dark:bg-white/5 px-4 py-1.5 rounded-full">
                            Today, 10:24 AM
                        </span>
                    </div>

                    <ChatMessage
                        isAi={false}
                        text="Hey! Can you explain how Action Potentials work in neurons? I'm having trouble understanding the depolarization phase."
                        time="10:24 AM"
                    />

                    <ChatMessage
                        isAi={true}
                        text={'Absolutely! Let\'s break down the Action Potential step-by-step.\n\nImagine a neuron as a tiny battery. Normally, it rests with a negative charge inside (Resting Potential). When a signal arrives, "gates" on the neuron\'s surface suddenly fly open!\n\n1. Depolarization: Sodium ions (Na+) rush inside the neuron. Because Na+ is positive, the inside of the neuron quickly becomes positive.\n\n2. Repolarization: Right after, Potassium (K+) gates open, and K+ rushes out to make the inside negative again.\n\nWould you like me to draw a quick graph comparing the voltage levels over time?'}
                        time="10:24 AM"
                        showVoiceStatus={false}
                    />

                    <ChatMessage
                        isAi={false}
                        text="Yes please! That would be really helpful!"
                        time="10:25 AM"
                    />

                    <ChatMessage
                        isAi={true}
                        text="Here's a quick explanation with audio walking you through the graph points."
                        time="10:25 AM"
                        showVoiceStatus={true}
                    />

                </div>

                {/* Chat Input Area */}
                <div className="p-6 bg-white/50 dark:bg-[#0b1120]/80 backdrop-blur-md border-t border-brand-text/5 dark:border-white/5">
                    <div className="max-w-4xl mx-auto relative flex items-end gap-2 bg-white dark:bg-[#0C342C] p-2 rounded-[24px] border border-brand-purple/20 dark:border-white/10 shadow-sm focus-within:ring-2 focus-within:ring-brand-purple/50 focus-within:border-transparent transition-all">

                        <div className="flex items-center pb-1 pl-2 space-x-1">
                            <button className="p-2.5 text-brand-dark/50 dark:text-white/50 hover:text-brand-purple hover:bg-brand-purple/10 dark:hover:bg-brand-purple/20 rounded-xl transition-colors">
                                <ImageIcon className="w-5 h-5" />
                            </button>
                            <button className="p-2.5 text-brand-dark/50 dark:text-white/50 hover:text-brand-purple hover:bg-brand-purple/10 dark:hover:bg-brand-purple/20 rounded-xl transition-colors">
                                <Mic className="w-5 h-5" />
                            </button>
                        </div>

                        <textarea
                            rows={1}
                            className="flex-1 max-h-32 p-3 bg-transparent border-none outline-none resize-none text-brand-dark dark:text-white text-sm font-medium placeholder:text-brand-dark/30 dark:placeholder:text-white/30 scrollbar-hide"
                            placeholder="Ask a doubt or paste a question..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    // Send action here
                                }
                            }}
                        />

                        <div className="pb-1 pr-1">
                            <button className="p-3 bg-brand-purple hover:bg-brand-purpleHover text-white rounded-[18px] shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-3">
                        <p className="text-xs font-semibold text-brand-dark/40 dark:text-white/40">
                            TutorLM can make mistakes. Consider verifying important academic information.
                        </p>
                    </div>
                </div>
            </div>

            {/* Optional Right Sidebar for chat context if desired, or skip it for a wider chat area */}
            <RightSidebar />
        </div>
    );
};

export default Chat;

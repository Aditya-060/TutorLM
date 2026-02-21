import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className="w-full bg-brand-card/60 dark:bg-[#0C342C]/80 backdrop-blur-md rounded-full mt-6 py-2 pr-2 pl-6 flex items-center justify-between shadow-sm border border-white/50 dark:border-white/10">
            <div className="flex items-center gap-3 flex-1">
                <div className="text-brand-purple/70 dark:text-[#E2FBCE]/70">
                    <HelpCircle className="w-5 h-5" />
                </div>
                <input
                    type="text"
                    placeholder="Ask your doubt... (e.g. Explain Quantum Entanglement)"
                    className="bg-transparent border-none focus:ring-0 text-brand-text dark:text-white placeholder-brand-text/40 dark:placeholder-white/40 font-medium w-full text-[15px] outline-none"
                />
            </div>
            <button className="bg-[#076653] hover:bg-[#0C342C] text-white py-3 px-6 rounded-full font-semibold flex items-center gap-2 shadow-sm ml-4">
                <span>Analyze</span>
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
    );
};

export default SearchBar;

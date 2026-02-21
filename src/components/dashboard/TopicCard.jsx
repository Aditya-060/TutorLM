import React from 'react';

const TopicCard = ({ title, timeAgo, imageSrc }) => {
    return (
        <div className="bg-brand-card dark:bg-[#0C342C] rounded-3xl shadow-sm border border-white/40 dark:border-white/10 flex flex-col overflow-hidden w-full cursor-pointer hover:-translate-y-1 transition-all group">
            {/* Image Container */}
            <div className="h-36 w-full overflow-hidden bg-brand-muted/10 dark:bg-[#06231D] relative object-cover">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-5 bg-white dark:bg-[#0C342C]/50">
                <h3 className="font-bold text-brand-text dark:text-white text-[15px] mb-1 leading-snug">{title}</h3>
                <p className="text-xs font-medium text-brand-text/50 dark:text-white/60">{timeAgo}</p>
            </div>
        </div>
    );
};

export default TopicCard;

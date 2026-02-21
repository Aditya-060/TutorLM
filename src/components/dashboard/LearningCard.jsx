import React from 'react';

const LearningCard = ({ title, subtitle, progress, icon, iconBgClass }) => {
    // A simple percentage text calculation and bar width mapping
    const widthPercentage = `${progress}%`;

    // Choose text color based on progress (green if 65%, yellow if 20% for demo matching mockup)
    const isHighProgress = progress > 50;
    const progressBgColor = isHighProgress ? 'bg-[#c5e6d6] dark:bg-[#388e61]/20' : 'bg-[#faead4] dark:bg-[#cfa45d]/20';
    const progressTextColor = isHighProgress ? 'text-[#388e61] dark:text-[#4ade80]' : 'text-[#cfa45d] dark:text-[#fde047]';
    const barBgColor = isHighProgress ? 'bg-[#0C342C]' : 'bg-[#0C342C]'; // Seems same purple for both bars

    return (
        <div className="bg-brand-card dark:bg-[#0C342C] rounded-[28px] p-6 shadow-sm border border-white/40 dark:border-white/10 flex flex-col justify-between h-[180px] w-full hover:-translate-y-1 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-6">
                {/* Icon Area */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${iconBgClass} dark:bg-white/5`}>
                    {icon}
                </div>

                {/* Progress Badge */}
                <div className={`${progressBgColor} ${progressTextColor} px-3 py-1 rounded-full text-xs font-bold tracking-wide`}>
                    {progress}% DONE
                </div>
            </div>

            <div className="flex flex-col mt-auto">
                <h3 className="text-lg font-bold text-brand-text dark:text-white leading-snug">{title}</h3>
                <p className="text-sm font-medium text-brand-text/50 dark:text-white/60 mt-1">{subtitle}</p>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-brand-muted/15 dark:bg-white/10 rounded-full mt-4 overflow-hidden relative">
                    <div
                        className={`absolute top-0 left-0 h-full ${barBgColor} rounded-full`}
                        style={{ width: widthPercentage }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LearningCard;

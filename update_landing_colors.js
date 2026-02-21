const fs = require('fs');
const path = require('path');

const file = 'd:/Clarify/clarifai/src/pages/Landing.jsx';
let content = fs.readFileSync(file, 'utf8');

// The Goal: Match the Dashboard's Light Theme (Taupe/Browns) and Dark Theme (Navy/Slate)
// Dashboard Light background: bg-[#e8ddd6] or #d8cdc4 or #f9f6f4 (cards)
// Dashboard Dark background: bg-[#0f172a] or #1e293b (cards)
// Text/Accents: #a37996 (purple), #113a5d (brand dark text)

const replacements = [
    // Background gradient: 
    // Light: Soft taupe/warm tones
    // Dark: Navy/Slate tones
    { from: /bg-gradient-to-br from-\[#f2e6e1\] via-\[#e2e1ef\] to-\[#c8d9ea\]/g, to: 'bg-gradient-to-br from-[#e8ddd6] via-[#d8cdc4] to-[#e8ddd6]' },
    { from: /dark:from-\[#0b101e\] dark:via-\[#131b2f\] dark:to-\[#172545\]/g, to: 'dark:from-[#0f172a] dark:via-[#0f172a] dark:to-[#1e293b]' },

    // Top Nav:
    { from: /bg-white\/80 dark:bg-\[#1e293b\]\/80/g, to: 'bg-[#f9f6f4]/80 dark:bg-[#1e293b]/80' },

    // Auth Button / CTAs (Make sure purple accent #a37996 is used instead of generic blues)
    { from: /bg-\[#113a5d\] hover:bg-\[#1c4d79\] dark:bg-\[#c49db9\] dark:hover:bg-\[#a37996\] text-white dark:text-\[#0f172a\]/g, to: 'bg-[#a37996] hover:bg-[#916784] text-white dark:bg-[#c49db9] dark:hover:bg-[#a37996] dark:text-[#0f172a]' },

    // Typography (Match brand text #2d3340 instead of #113a5d everywhere)
    { from: /text-\[#113a5d\]/g, to: 'text-brand-text' },
    { from: /text-\[#113a5d\]\/60/g, to: 'text-brand-text/60' },

    // Decorative Circle/Badges
    { from: /bg-blue-500/g, to: 'bg-[#a37996]' },
    { from: /bg-pink-500/g, to: 'bg-[#c49db9]' },
    { from: /bg-\[#3b82f6\]/g, to: 'bg-[#a37996]' }, // Badge dot

    // Floating cards backgrounds (Light mode should use brand-card #f9f6f4)
    { from: /bg-white\/70 dark:bg-white\/5/g, to: 'bg-[#f9f6f4]/90 dark:bg-[#1e293b]/90' },
    { from: /bg-white\/60 dark:bg-white\/5/g, to: 'bg-[#f9f6f4]/80 dark:bg-[#1e293b]/80' },
    { from: /bg-white\/90 dark:bg-white\/10/g, to: 'bg-[#f9f6f4] dark:bg-[#1e293b]' },

    // Feature card icons
    { from: /bg-white dark:bg-white\/10/g, to: 'bg-white dark:bg-white/5' },
    { from: /stroke="#113a5d"/g, to: 'stroke="#2d3340"' },

    // Retention rate icon background
    { from: /bg-\[#ccfbf1\] dark:bg-\[#14b8a6\]\/20/g, to: 'bg-[#d7ecd1] dark:bg-[#4d7348]/20' },
    { from: /text-\[#14b8a6\]/g, to: 'text-[#4d7348] dark:text-[#86efac]' },

    // Links text color transition in Nav
    { from: /hover:text-\[#113a5d\]/g, to: 'hover:text-brand-text' }
];

let newContent = content;
replacements.forEach(r => {
    newContent = newContent.replaceAll(r.from, r.to);
});

fs.writeFileSync(file, newContent, 'utf8');
console.log('Landing page theme colors updated.');

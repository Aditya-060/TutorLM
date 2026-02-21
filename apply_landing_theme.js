const fs = require('fs');

const file = 'd:/Clarify/clarifai/src/pages/Landing.jsx';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
    // Background gradient for Light Mode: old Taupe/Lavender -> Green Palette Warm Off-White / Lime
    { from: /from-\[#e8ddd6\] via-\[#d8cdc4\] to-\[#e8ddd6\]/g, to: 'from-[#FFFDEE] via-[#E2FBCE]/30 to-[#FFFDEE]' },
    // Background gradient for Dark Mode: old Navy -> Green Palette Darkest Green / Emerald shades
    { from: /dark:from-\[#0f172a\] dark:via-\[#0f172a\] dark:to-\[#1e293b\]/g, to: 'dark:from-[#06231D] dark:via-[#06231D] dark:to-[#0C342C]' },

    // Top Nav / Header
    { from: /dark:bg-\[#0C342C\]\/80/g, to: 'dark:bg-[#06231D]/80' }, // Enforce darkest green for nav
    { from: /bg-\[#113a5d\] dark:bg-\[#E2FBCE\]/g, to: 'bg-[#076653] dark:bg-[#E2FBCE]' }, // Brand Logo bg

    // Hero Text Highlights
    { from: /text-\[#a57392\]/g, to: 'text-[#E3EF26]' },

    // Landing Page specific components and borders with remnants of old dark brand
    // Note: Most of the other accents/buttons were already updated by the global script!

    // Check if the previous script missed any #0C342C that should be #06231D or vice versa for the landing page
    { from: /dark:to-\[#0f172a\]\/80/g, to: 'dark:to-[#06231D]/80' }, // The Problem section gradient

    // Shadow colors
    { from: /shadow-\[#a37996\]/g, to: 'shadow-[#076653]' },

    // Feature Grid backgrounds / border / glows 
    // Ensuring everything matches Strong Emerald (#076653) or Bright Lime (#E3EF26)
    { from: /dark:border-\[#c49db9\]\/20/g, to: 'dark:border-[#E2FBCE]/20' }
];

let newContent = content;
replacements.forEach(r => {
    newContent = newContent.replace(r.from, r.to);
});

fs.writeFileSync(file, newContent, 'utf8');
console.log('Landing.jsx theme colors mapped to Green Palette.');

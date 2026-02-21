const fs = require('fs');
const path = require('path');

const directory = 'd:/Clarify/clarifai/src';
const replacements = [
    // --- BACKGROUNDS ---
    // Dark mode deep backgrounds (from Luna Deep Navy to Green Palette Darkest Green)
    { from: /dark:bg-\[#011C40\](\/[0-9]+)?/g, to: 'dark:bg-[#06231D]$1' },
    // Dark mode elevated cards (from Luna Navy to Green Palette Deep Forest Green)
    { from: /dark:bg-\[#023859\](\/[0-9]+)?/g, to: 'dark:bg-[#0C342C]$1' },

    // Light mode main backgrounds (from Luna Light Cyan to Green Palette Warm Off-White)
    { from: /bg-\[#F0FBFC\](\/[0-9]+)?/g, to: 'bg-[#FFFDEE]$1' },

    // Light mode cards/elements (from Luna cyan to Green Palette Very Light Lime)
    { from: /bg-\[#A7EBF2\](\/[0-9]+)?/g, to: 'bg-[#E2FBCE]$1' },

    // --- ACCENTS & TEXT ---
    // Primary Cyan -> Green Palette Strong Emerald Green 
    { from: /bg-\[#54ACBF\](\/[0-9]+)?/g, to: 'bg-[#076653]$1' },
    { from: /text-\[#54ACBF\](\/[0-9]+)?/g, to: 'text-[#076653]$1' },
    { from: /border-\[#54ACBF\](\/[0-9]+)?/g, to: 'border-[#076653]$1' },

    // Secondary Dark Cyans -> Green Palette Deep Forest Green
    { from: /bg-\[#26658C\](\/[0-9]+)?/g, to: 'bg-[#0C342C]$1' },
    { from: /text-\[#26658C\](\/[0-9]+)?/g, to: 'text-[#0C342C]$1' },
    { from: /border-\[#26658C\](\/[0-9]+)?/g, to: 'border-[#0C342C]$1' },
    { from: /stroke="#26658C"/g, to: 'stroke="#0C342C"' },

    // Secondary Light Cyans -> Green Palette Very Light Lime/Green
    { from: /text-\[#A7EBF2\](\/[0-9]+)?/g, to: 'text-[#E2FBCE]$1' },
    { from: /border-\[#A7EBF2\](\/[0-9]+)?/g, to: 'border-[#E2FBCE]$1' },

    // Specific Landing Page Gradients
    { from: /bg-gradient-to-br from-\[#F0FBFC\] via-\[#A7EBF2\]\/20 to-\[#A7EBF2\]\/40/g, to: 'bg-gradient-to-br from-[#FFFDEE] via-[#E2FBCE]/40 to-[#E3EF26]/20' },

    // Fallbacks
    { from: /'#F0FBFC'/g, to: "'#FFFDEE'" },
    { from: /'#011C40'/g, to: "'#06231D'" }
];

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(directory);
let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;

    replacements.forEach(r => {
        newContent = newContent.replace(r.from, r.to);
    });

    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        modifiedCount++;
        console.log(`Modified ${file}`);
    }
});

console.log(`Updated ${modifiedCount} files with Green Theme.`);

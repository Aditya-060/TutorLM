const fs = require('fs');
const path = require('path');

const directory = 'd:/Clarify/clarifai/src';
const replacements = [
    // --- BACKGROUNDS ---
    // Dark mode deep backgrounds (from slate/navy to Luna Deep Navy)
    { from: /dark:bg-\[#0f172a\](\/[0-9]+)?/g, to: 'dark:bg-[#011C40]$1' },
    { from: /dark:bg-\[#1a1c23\](\/[0-9]+)?/g, to: 'dark:bg-[#011C40]$1' },
    // Dark mode elevated cards (from slate to Luna Navy Blue)
    { from: /dark:bg-\[#1e293b\](\/[0-9]+)?/g, to: 'dark:bg-[#023859]$1' },

    // Light mode main backgrounds (from taupes to Luna Light Cyan Base)
    { from: /bg-\[#e8ddd6\](\/[0-9]+)?/g, to: 'bg-[#F0FBFC]$1' },
    { from: /bg-\[#e5dcd6\](\/[0-9]+)?/g, to: 'bg-[#F0FBFC]$1' },
    { from: /bg-\[#d8cdc4\](\/[0-9]+)?/g, to: 'bg-[#F0FBFC]$1' },

    // Light mode cards/elements (from warm taupes to white or light cyan)
    { from: /bg-\[#f9f6f4\](\/[0-9]+)?/g, to: 'bg-[#ffffff]$1' },
    { from: /bg-\[#f4f0ec\](\/[0-9]+)?/g, to: 'bg-[#F0FBFC]$1' },
    { from: /bg-\[#e4d3db\](\/[0-9]+)?/g, to: 'bg-[#A7EBF2]$1' }, // old light purple muted bg
    { from: /bg-\[#d1a6bb\](\/[0-9]+)?/g, to: 'bg-[#A7EBF2]$1' },

    // --- ACCENTS & TEXT ---
    // Primary Purple -> Luna Medium Cyan 
    { from: /bg-\[#a37996\](\/[0-9]+)?/g, to: 'bg-[#54ACBF]$1' },
    { from: /text-\[#a37996\](\/[0-9]+)?/g, to: 'text-[#54ACBF]$1' },
    { from: /border-\[#a37996\](\/[0-9]+)?/g, to: 'border-[#54ACBF]$1' },

    // Secondary Purples -> Luna Cyans
    { from: /bg-\[#916784\](\/[0-9]+)?/g, to: 'bg-[#26658C]$1' },
    { from: /bg-\[#915f7f\](\/[0-9]+)?/g, to: 'bg-[#26658C]$1' },
    { from: /text-\[#915f7f\](\/[0-9]+)?/g, to: 'text-[#26658C]$1' },
    { from: /stroke="#915f7f"/g, to: 'stroke="#26658C"' },
    { from: /bg-\[#c49db9\](\/[0-9]+)?/g, to: 'bg-[#A7EBF2]$1' },
    { from: /text-\[#c49db9\](\/[0-9]+)?/g, to: 'text-[#A7EBF2]$1' },
    { from: /bg-\[#a87a95\](\/[0-9]+)?/g, to: 'bg-[#54ACBF]$1' },
    { from: /text-\[#a87a95\](\/[0-9]+)?/g, to: 'text-[#54ACBF]$1' },
    { from: /border-\[#d2bbca\](\/[0-9]+)?/g, to: 'border-[#A7EBF2]$1' },

    // Old Blues -> Luna Dark Cyan / Navy
    { from: /bg-\[#3465a4\](\/[0-9]+)?/g, to: 'bg-[#26658C]$1' },
    { from: /text-\[#3465a4\](\/[0-9]+)?/g, to: 'text-[#26658C]$1' },
    { from: /border-\[#3465a4\](\/[0-9]+)?/g, to: 'border-[#26658C]$1' },
    { from: /bg-\[#60a5fa\](\/[0-9]+)?/g, to: 'bg-[#54ACBF]$1' },
    { from: /text-\[#60a5fa\](\/[0-9]+)?/g, to: 'text-[#54ACBF]$1' },
    { from: /border-\[#60a5fa\](\/[0-9]+)?/g, to: 'border-[#54ACBF]$1' },

    // Specific Landing Page Gradients
    { from: /bg-gradient-to-br from-\[#f2e6e1\] via-\[#e2e1ef\] to-\[#c8d9ea\]/g, to: 'bg-gradient-to-br from-[#F0FBFC] via-[#A7EBF2]/20 to-[#A7EBF2]/40' },

    // Theme context script colors (for spline fallback or body colors if any)
    { from: /'#e8ddd6'/g, to: "'#F0FBFC'" },
    { from: /'#0f172a'/g, to: "'#011C40'" }
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

console.log(`Updated ${modifiedCount} files with Luna Theme.`);

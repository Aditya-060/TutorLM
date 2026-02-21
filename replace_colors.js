const fs = require('fs');
const path = require('path');

const directory = 'd:/Clarify/clarifai/src';
const replacements = [
    { from: /dark:bg-\[#151a25\](\/\d+)?/g, to: 'dark:bg-[#0f172a]$1' },
    { from: /dark:bg-\[#1a1c23\](\/\d+)?/g, to: 'dark:bg-[#1e293b]$1' },
    { from: /dark:bg-\[#111622\](\/\d+)?/g, to: 'dark:bg-[#0f172a]$1' },
    { from: /dark:border-\[#1a1c23\]/g, to: 'dark:border-[#1e293b]' },
    { from: /dark:text-\[#151a25\]/g, to: 'dark:text-[#0f172a]' }
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

console.log(`Updated ${modifiedCount} files.`);

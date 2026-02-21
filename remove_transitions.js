const fs = require('fs');
const path = require('path');

const directory = 'd:/Clarify/clarifai/src';
// Remove transition-colors and duration-300 from all files because we added it globally to *
// (Except maybe we just remove transition-colors which was universally added by us earlier)
const replacements = [
    { from: / transition-colors/g, to: '' },
    { from: / duration-300/g, to: '' }
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

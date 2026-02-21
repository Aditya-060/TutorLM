const fs = require('fs');
const path = require('path');

const directories = ['d:/Clarify/clarifai/src', 'd:/Clarify/clarifai/public'];
const replacements = [
    { from: /ClarifAI/g, to: 'TutorLM' },
    { from: /clarifai/g, to: 'tutorlm' }
];

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.json')) {
            results.push(file);
        }
    });
    return results;
}

let modifiedCount = 0;

directories.forEach(dir => {
    const files = walk(dir);
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
});

console.log(`Updated ${modifiedCount} files with new brand name TutorLM.`);

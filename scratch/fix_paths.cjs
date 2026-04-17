const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/\/public\//g, '/');
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function walkAndReplace(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkAndReplace(fullPath);
        } else if (['.tsx', '.ts', '.css', '.html'].includes(path.extname(fullPath))) {
            replaceInFile(fullPath);
        }
    }
}

const srcDir = path.join(__dirname, '..', 'src');
walkAndReplace(srcDir);
replaceInFile(path.join(__dirname, '..', 'index.html'));

const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'backend', 'data', 'businesses.js');
let content = fs.readFileSync(targetPath, 'utf8');

// We will manually append the roadmaps and new businesses by rewriting the file entirely since it's easier to maintain consistent formatting.
// But first, let's just create a new file content and overwrite it.

const fs = require('fs');
const textln = fs.readFileSync('./txt/input.txt', 'utf-8', (err, data) =>{console.log(data);});
console.log(textln);

const textOut = `This is what we know about avocado: ${textln}.\n created on : ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);

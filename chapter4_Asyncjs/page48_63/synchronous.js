const fs = require('fs');
process.chdir('chapter4_Asyncjs'); // change the working directory

let concatenation = '';

fs.readdirSync('.')
.filter(filename => fs.statSync(filename).isFile() // ignore directories
)
.forEach(filename => concatenation += fs.readFileSync(filename, 'utf8')
// add contents to our output
);

console.log(concatenation);

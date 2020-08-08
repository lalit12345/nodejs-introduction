const path = require('path');

// base file name
console.log(path.basename(__filename));

// base dir name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// path object
console.log(path.parse(__filename));

// concatename paths
console.log(path.join(__dirname, 'test', 'hello.html'));
const fs = require("fs");
const input = process.argv;
console.log(input)
fs.writeFileSync(input[3], input[4])
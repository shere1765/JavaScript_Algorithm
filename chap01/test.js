const readlineSync = require("readline-sync");

const a = Number(readlineSync.question("input inteager a : "));
const b = Number(readlineSync.question("input inteager b : "));

let sum = 0;

for (let i = a; i <= b; i++) {
    if (i < b) {
        process.stdout.write(`${i} + `);
    } else {
        process.stdout.write(`${i} = `);
    }
    sum += i;
}

console.log(sum);

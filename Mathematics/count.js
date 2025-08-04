// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("", (a)=> {
//   console.log(a);
//   rl.close();
// });

// let a = 98711;


function count(s) {
    let res = 0;
    
    while (s > 0) {
        s = Math.floor(s / 10);
        res++;
    }
    return res;
}

console.log(count(123))
function FibonacciRecursion(n) {
  if (n <= 1) return n;
  return FibonacciRecursion(n - 1) + FibonacciRecursion(n - 2);
}

const n1 = 50;

for (let i = 0; i < n1; i++) {
  console.log(FibonacciRecursion(i));
}

// function fibarray(n) {
//   if (n <= 1) return n;
//   const fib = [0, 1];

//   for (let i = 2; i < n2; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// const n2 = 10;
// console.log("fibonacci series with array: ");
// console.log(fibarray(n2));

// function fibOptimized(n) {
//   if (n <= 1) return n;

//   let a = 0;
//   let b = 1;
//   let c;

//   for (let i = 2; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// const n3 = 100;
// console.log("optimized fibonacci series: ");


// for (let i = 0; i < n3; i++) {
//   console.log(fibOptimized(i));
// }

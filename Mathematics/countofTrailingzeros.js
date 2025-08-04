// function TrailingZeros(n) {
//   let fact = 1;
//   if (n == 1 || n == 0) return n;
//   for (let i = 2; i <= n; i++) {
//     fact = fact * i;
//   }
//   let res = 0;
//   while (fact % 10 === 0) {
//     res++;
//     fact = fact / 10;
//     // console.log(fact);
//   }
//   return res;
// }
// console.log(TrailingZeros(30));

function CountOfTrailZeors(n) {
  let count = 0;
  let Powof5 = 5;
  while (Math.floor(n/Powof5) > 0) {
    count += Math.floor(n / Powof5);
    Powof5 = Powof5 * 5;
  }
  //   let res = Math.floor(n / 25);
  console.log(count);
}
CountOfTrailZeors(125);
// x^y * k = n!

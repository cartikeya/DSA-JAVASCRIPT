function gcd(a, b) {
  // code here
  if (b === 0) return a;
  while (b != 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}
console.log(gcd(1_000_000_000, 2));

// bruteforce approach
function gcdb(a, b) {
  let res = Math.min(a, b);
  while (res > 0) {
    if (a % res == 0 && b % res == 0) {
      return res;
    }
    res--;
  }
}

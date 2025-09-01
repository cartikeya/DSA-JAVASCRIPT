function isPrime(num) {
  if (num == 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}


function primefactors(n) {
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      let x = i;
      while (n % x == 0) {
        console.log(i);
        x = x * i;
      }
    }
  }
}
console.log(primefactors(5))


// efficient solution
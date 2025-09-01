function lcm(a, b) {
  let res = Math.max(a, b);
  let c = a * b;
  let temp = res;
  for (let i = res; i <= c; i++) {
    if (i % a == 0 && i % b == 0) {
      temp = i;
      break;
    }
  }
  return temp;
}

console.log(lcm(4,6))

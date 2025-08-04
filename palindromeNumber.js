function palindrome(num) {
  let temp = num;
  let rev = 0;

  while (temp !== 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  return (num === rev);
}
console.log(palindrome(121));

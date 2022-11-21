// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

//O(n)
function fibonacciIterative(n){
  //code here;
  // if(n<2){return n};
  if (n === 0) {
      return 0;
  } else if(n === 1){
      return 1;
  }
  
  let prev = 0;
  let now = 1;
  let ans = 0;
  for (let i = 0; i < n-1; i++ ){
      ans = prev + now;
      prev = now;
      now = ans;
  }
  return ans;
}
console.log(fibonacciIterative(10));

//O(2^n)
function fibonacciRecursive(n) {
  //code here;
  //base case
  if (n === 0) {
      return 0;
  } else if(n === 1){
      return 1;
  }
  
  //other case
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(10));
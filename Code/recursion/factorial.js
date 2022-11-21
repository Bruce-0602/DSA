// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// O(n)
function findFactorialRecursive(number) {
  //code here
  // base case
  if (number === 1){
      return 1;
  }
  //other cases
  let answer = number;
  answer *= findFactorialRecursive(number-1);
  return answer;
}

// O(n)
function findFactorialIterative(number) {
  //code here
  let answer = number;
  for (let i = number - 1; i > 1; i--) {
      answer *= i
  }
  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
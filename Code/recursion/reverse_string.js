//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIteration(str) {
    let ans = "";
    for (let i = str.length - 1; i >= 0; i--){
        ans += str[i]; 
    }
    return ans;
}

function reverseStringRecursion(str) {
    if (str == ""){
        return "";
    }
    return reverseStringRecursion(str.slice(1)) + str[0];
}

console.log(reverseStringIteration('yoyo mastery'));
console.log(reverseStringRecursion('yoyo mastery'));
//should return: 'yretsam oyoy'
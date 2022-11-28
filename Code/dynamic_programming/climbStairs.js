/*
if you START with 1 step, there are climbStairs(n-1) ways to climb
if you START with 2 step, there are climbStairs(n-2) ways to climb

since can only start with 1 OR 2 steps, there are climbStairs(n-2) + climbStairs(n-1) ways in total 
*/

// bottom up approach
var climbStairs = function (n){
    let answer = [1,2]
    if (n < 3) return n;
    for ( let i = 2; i < n; i++){
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop();
};

/*
Dynamic programming (slower than bottom up)
function climbStairsDP(){
    let cache = {};
    return function climbStairsR(n){
        if(n<=3){
            return n;
        } 
        cache[n] = climbStairsR(n-1) + climbStairsR(n-2)
        return cache[n];
    }
}
 var climbStairs = climbStairsDP();
 */
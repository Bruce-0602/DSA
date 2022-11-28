function fibonacciDP(){
    let cache = {};
    
    return function fib (n){
        
        if (n in cache){
            return cache[n];
        }else {
            if (n<2){
                cache[n] = n;
                return n;
            }
            cache[n] = fib(n-2) + fib(n-1);
            return cache[n];
        }
    }
}

//Bottomup approach
function fibonacciDPBottomUp(n) {
    let answer = [0, 1];
    for ( let i = 2; i <= n; i++){
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop();
}

const fibonacci = fibonacciDP();

console.log(fibonacci(10));
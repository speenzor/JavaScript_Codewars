/*
This is my solution to the Codewars Challenge: Memoized Fibonacci
This function, "fibonacci(n)", will return the nth number of the Fibonacci sequence.
I saught out this challenge in order to better understand recurssion and memoization.
*/

var fibonacci = memoize((x) => {
    if(x == 0 || x == 1)
        return x;
    return fibonacci(x-1) + fibonacci(x-2);
});

function memoize(fn) {
  let cache = {};
  return function(n){
    if (cache[n]) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

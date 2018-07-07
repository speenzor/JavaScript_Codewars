/*
This is my solution to the Codewars Challenge: Memoized Fibonacci
This function, "fibonacci(n)", will return the nth number of the Fibonacci sequence.
I saught out this challenge in order to better understand recurssion and memoization.
This problem had the unintended benefit of teaching me much more about how Javascript works.
*/

//Here the fibonacci variable will store the memoize function
var fibonacci = memoize((x) => {
    if (x == 0 || x == 1)
        return x;
    return fibonacci(x-1) + fibonacci(x-2);
});

//The memoize function receives a function as an argument and
//returns a function
function memoize(fn) {
  let cache = {};
  return function(n){
    if (cache[n]) {
      return cache[n];
    } else {
      //If the cache does not contain the answer we want then we have to call the
      //function passed to memoize, which is defined above as an arrow function.
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

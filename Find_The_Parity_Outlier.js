/*
This is my solution to the Codewars Challenge: Find the Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
This function then takes the array as an argument and returns this "outlier" N.

This uses two "for" loops that are not nested and therefore takes O(n) time on average. The first loop only loops the necessary 3 times
and therefore is not affected by the number of elements in "integers".
*/

function findOutlier(integers){
  let i;
  let evenCount = 0;
  let oddCount = 0;
  for (i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  for (i = 0; i < integers.length; i++) {
    if (evenCount < oddCount && integers[i] % 2 === 0) {
      return integers[i];
    } else if (evenCount > oddCount && integers[i] % 2 !== 0) {
      return integers[i];
    }
  }
}

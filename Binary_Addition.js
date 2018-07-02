/*
This is my solution the Codewars Challenge: Binary Addition
This function adds two numbers together and returns their sum in binary.
The binary number returned is a string.
*/

function addBinary(a,b) {
  let sum = a + b;
  let binary = '';
  while ((sum/2) > 0) {
    binary = (sum % 2).toString() + binary;
    sum = Math.floor(sum/2);
  }
  return binary;
}

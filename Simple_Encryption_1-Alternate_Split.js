/*
This is my solution the Codewars Challenge: Simple Encryption #1- Alternative Split
You can find my initial attempt at this problem in Python in my "Codewars" repository. I had given up after trying hard to solve
this problem in Python 4 months ago. That file is called "Failed-SimpleEncryption.py".

These two functions encrypt and decrypt a given string.
For building the encrypted string:
Take every 2nd character from the string, then the other characters, that are not every 2nd char, and concatenate them as new String.
Do this n times!
The decrypt function will then decrypt the encrypted text back to its original form.
*/

function encrypt(text, n) {
  if (text === null) {return null}
  if (n <= 0) {return text}
  let secondChars = [];
  let otherChars = [];
  let i;
  let t;
  let encryptedText = text;
  for (t = 0; t < n; t++) {
    secondChars = [];
    otherChars = [];
    for (i = 0; i < encryptedText.length; i++) {
      if (i % 2 === 0) {
        secondChars.push(encryptedText[i]);
      } else {
        otherChars.push(encryptedText[i]);
      }
    }
    encryptedText = (otherChars.concat(secondChars)).join('');
  }
  return encryptedText;
}

function decrypt(encryptedText, n) {
  if (encryptedText === null) {return null}
  if (n <= 0) {return encryptedText}
  let secondChars = [];
  let otherChars = [];
  let i;
  let t;
  let decryptedText = [];
  let newText = encryptedText.split('');
  for (t = 0; t < n; t++) {
    decryptedText = [];
    secondChars = newText.slice(newText.length/2, newText.length);
    otherChars = newText.slice(0, newText.length/2);
    for (i = 0; i < newText.length; i++) {
      if (i % 2 === 0) {
        decryptedText.push(secondChars.shift());
      } else {
        decryptedText.push(otherChars.shift());
      }
    }
    newText = decryptedText;
  }
  return newText.join('');
}

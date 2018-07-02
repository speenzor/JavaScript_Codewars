/*
My solution to the Codewars Challenge: Shortest Word
Given a string of words this function return the length of the shortest word(s).
*/

function findShort(s){
  let array = s.split(' ');
  let i;
  let shortest = array[0].length;
  for (i = 1; i < array.length; i++) {
    if (array[i].length < shortest) {
      shortest = array[i].length;
    }
  }
  return shortest;
}

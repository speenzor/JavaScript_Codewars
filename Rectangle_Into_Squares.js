/*
This is my solution to the Codewars Challange: Rectangle Into Square
This function takes two dimensions:
  a positive integer length (parameter named lng)
  a positive integer width (parameter named wdth)
It will then return an array with the size of each of the squares that the true rectangle can be split into.
*/

function sqInRect(lng, wdth){
  if (lng === wdth) {return null};
  let answer = [];
  let newLng = lng;
  let newWdth = wdth;
  while (newLng > 0 && newWdth > 0) {
    if (newLng > newWdth) {
      answer.push(newWdth);
      newLng -= newWdth;
    } else {
      answer.push(newLng);
      newWdth -= newLng;
    }
  }
  return answer;
}

/*
This is my FAILED solution to the Codewars Challenge: Binary Search Tree Validation.
The isBST function will validate that a given binary tree is a binary search tree. The first node is the root node as a new Node object.
This was very difficult for me and I had to read a lot about binary search trees and how one might go about this problem.
This solution does successfully validate a binary search tree if, and only if, the tree is balanced by smaller values going left
and larger values going right. If that convention is flipped then this solution won't work. I was working on solving that problem with
a seemingly simple "if" statement, but kept coming up with wrong answers.
*/

// This is here as documentation. The nodes in the tree are instances of
// this class. This implementation was provided by the kata.
class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const isBST = (node, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
  if (node == null) {
    return true;
  }
  if (node.value < min || node.value > max) {
    return false;
  }
  return isBST(node.left, min ,node.value - 1) && isBST(node.right, node.value + 1, max);
};

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError();
  } else if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

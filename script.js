function alphabetic(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i] < s[i - 1]) {
      // If the current character is less than the previous character, the string is not in alphabetical order
      return false;
    }
  }
  // If we make it through the loop without finding a pair of characters that are out of order, the string is in alphabetical order
  return true;

}

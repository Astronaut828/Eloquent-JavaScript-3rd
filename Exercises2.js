// Minimum
// Write a function min that takes two arguments and returns their minimum
function min(a, b) {
  return Math.min(a, b);
}
// Calling and logging the function
console.log(min(5, 12));

// Recursion
// Define a recursive function isEven corresponding to this description.
// The function should accept a single parameter (a positive, whole number) and return a Boolean.
function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}
// Calling and logging the function, testing for 50 and 75
console.log(isEven(50));
console.log(isEven(75));

// Bean Counting
// Write a function countBs that takes a string as its only argument and returns a number
// that indicates how many uppercase “B” characters there are in the string.
function countBs(testSting) {
  let counter = 0;
  for (let i = 0; i < testSting.length; i++) {
    if (testSting[i] === "B") {
      counter++;
    }
  }
  return counter;
}
// Calling and logging the function, testing for uppercase B's
// -> 9
console.log(countBs("bbbBBBaaaBBBcccBBB"));

// Write a function called countChar that behaves like countBs, except it takes a second argument
// that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
function countChar(testSting, char) {
  let counter = 0;
  for (let i = 0; i < testSting.length; i++) {
    if (testSting[i] === char) {
      counter++;
    }
  }
  return counter;
}
// Calling and logging the function, testing for lowercase a's
// -> 3
console.log(countChar("bbbBBBaaaBBBcccBBB", "a"));

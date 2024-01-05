// Flattening
// Use the reduce method in combination with the concat method to “flatten” an array of arrays
// into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];

let flatArray = arrays.reduce((arr, element) => {
  return arr.concat(element);
});
console.log(flatArray); // → [1, 2, 3, 4, 5, 6]
// Using method .flat() to achieve same result.
console.log(arrays.flat()); // → [1, 2, 3, 4, 5, 6]

// Your own loop
// Write a higher-order function loop that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function.
function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

// Everything
// Implement every as a function that takes an array and a predicate function as parameters.
// Write two versions, one using a loop ...
function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}
console.log(every([1, 3, 5], (n) => n < 10)); // → true
console.log(every([2, 4, 16], n => n < 10)); // → false
console.log(every([], n => n < 10)); // → true

// and one using the some method.
function everyMeth(array, test) {
  return array.every((element) => test(element));
}
console.log(everyMeth([1, 3, 5], (n) => n < 10)); // → true
console.log(everyMeth([2, 4, 16], n => n < 10)); // → false
console.log(everyMeth([], n => n < 10)); // → true


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

// Next Exercise 

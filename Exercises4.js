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
loop(3, (n) => n > 0, (n) => n - 1, console.log);
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

// Dominant writing direction
// Write a function that computes the dominant writing direction in a string of text.
const SCRIPTS = require("./SCRIPTS.js");

function dominantDirection(text) {
  let counted = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!")); // → ltr
console.log(dominantDirection("Hey, مساء الخير")); // → rtl
console.log(dominantDirection("你好, こんにちは, 안녕하세요")); // → ltr

// Helper functions 
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}



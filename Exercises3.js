// The Sum of a Range
// Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to (and including) end.
function range(start, end) {
  let nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  return nums;
}
// console.log(range(2, 6)); //-> [ 2, 3, 4, 5, 6 ]

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sum(range(1, 10))); //-> 55

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array.
function rangeStep(start, end, step) {
  let nums = [];
  if (step == undefined) {
    for (let i = start; i <= end; i++) {
      nums.push(i);
    }
  } else if (start < end) {
    for (let i = start; i <= end; i += step) {
      nums.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= Math.abs(step)) {
      nums.push(i);
    }
  }
  return nums;
}
// console.log(rangeStep(1, 10, 2)); //-> [ 1, 3, 5, 7, 9 ]
// console.log(rangeStep(10, 1, -2)); //-> [ 10, 8, 6, 4, 2 ]

// Reversing an Array
// Neither may use the standard reverse method.
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
// For this exercise, write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
function reverseArray(arr) {
  let newArr = [];
  for (let i = 1; i <= arr.length; i++) {
    newArr.unshift(i);
  }
  return newArr;
}
// console.log(reverseArray([1, 2, 3, 4, 5])); //-> [ 5, 4, 3, 2, 1 ]

// The second, reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument by reversing its elements.
function reverseArrayInPlace(arr) {
  let items = arr.length;
  for (let i = 1; i <= items; i++) {
    arr.unshift(i);
    arr.pop();
  }
  return arr;
}
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); //-> [ 5, 4, 3, 2, 1 ]

// A List
// Objects, as generic blobs of values, can be used to build all sorts of data structures.
// A common data structure is the list (not to be confused with the array).
// A list is a nested set of objects, with the first object holding a reference to the second,
// the second to the third, and so on.

// let list = {value: 1, rest: { value: 2, rest: { value: 3, rest: null}}}

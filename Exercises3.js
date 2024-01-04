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
console.log(range(2, 6)); //-> [ 2, 3, 4, 5, 6 ]

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum(range(1, 10))); //-> 55

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
console.log(rangeStep(1, 10, 2)); //-> [ 1, 3, 5, 7, 9 ]
console.log(rangeStep(10, 1, -2)); //-> [ 10, 8, 6, 4, 2 ]

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
console.log(reverseArray([1, 2, 3, 4, 5])); //-> [ 5, 4, 3, 2, 1 ]

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
console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); //-> [ 5, 4, 3, 2, 1 ]

// A List
// Objects, as generic blobs of values, can be used to build all sorts of data structures.
// A common data structure is the list (not to be confused with the array).
// A list is a nested set of objects, with the first object holding a reference to the second,
// the second to the third, and so on.

let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
let arr = [1, 2, 3];

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}
console.log(arrayToList(arr)); //-> { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

// Also write a listToArray function that produces an array from a list.
function listToArray(list) {
  let newArr = [];
  while (list !== null) {
    newArr.push(list.value);
    list = list.rest;
  }
  return newArr;
}
console.log(listToArray(list)) //-> [1, 2, 3]

// Add a helper function, which takes an element and a list and creates a new list that adds the element to the front of the input list.
function prepend(elem, list) {
  let prependList = { value: elem, rest: list };
  return prependList;
}
console.log(prepend(10, prepend(20, null))) // → {value: 10, rest: {value: 20, rest: null}}

// Write a helper function nth, which takes a list and a number and returns the element at the given position in the list
// (with zero referring to the first element)
// or undefined when there is no such element.
function nth(list, num) {
  let item = list;
  let currentItem = 0;
  while (item !== null) {
    if (currentItem === num) {
      return item.value;
    }
    item = item.rest;
    currentItem++;
  }
  return undefined;
}
console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20

// nth recursive
function nthRecursive(list, num) {
  if (list === null) {
    return undefined;
  } else if (num === 0) {
    return list.value;
  } else {
    return nthRecursive(list.rest, num - 1);
  }
}
console.log(nthRecursive(arrayToList([10, 20, 30]), 1)); // → 20

// Deep Comparison
// Write a function deepEqual that takes two values and returns true only if they are the same value
// or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
let obj = { here: { is: "an" }, object: 2 };

function deepEqual(objA, objB) {
  if (
    objA !== null &&
    objB !== null &&
    typeof objA == "object" &&
    typeof objB == "object"
  ) {
    let objAProps = Object.keys(objA);
    let objBProps = Object.keys(objB);

    if (objAProps.length == objBProps.length) {
      for (let prop in objAProps) {
        if (objB.hasOwnProperty(objAProps[prop])) {
          if (!deepEqual(objA[objAProps[prop]], objB[objAProps[prop]])) {
            return false;
          }
        } else {
          console.log(
            "Props not matching:",
            objAProps[prop],
            objBProps[prop]
          );
          return false;
        }
      }
    } else {
      console.log("Amount of properties !==", objAProps, objBProps);
      return false;
    }
  } else {
    return objA === objB;
  }
  return true;
}

console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual({ a: 1, b: 4 }, null)); // → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // → true
console.log(deepEqual(obj, { here: 1, object: 2 })); // → false
//Nested Objects:
console.log(deepEqual({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } })); // → true
console.log(deepEqual({ a: { b: 1 } }, { a: { b: 2 } })); // → false
// Objects with Arrays:
console.log(deepEqual({ arr: [1, 2, 3] }, { arr: [1, 2, 3] })); // → true
console.log(deepEqual({ arr: [1, 2, 3] }, { arr: [1, 2, 4] })); // → false
// Objects with Different Types of Values:
console.log(deepEqual({ a: 1, b: "yes", c: null }, { a: 1, b: "yes", c: null })); // → true
console.log(deepEqual({ a: 1, b: "yes", c: null }, { a: 1, b: "no", c: null })); // → false


// A Vector Type
// Write a class Vec that represents a vector in two-dimensional space.
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter
// and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of the vector—that is,
// the distance of the point (x, y) from the origin (0, 0).

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(addVec) {
    return new Vec(this.x + addVec.x, this.y + addVec.y);
  }
  minus(subVec) {
    return new Vec(this.x - subVec.x, this.y - subVec.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Groups
// The standard JavaScript environment provides another data structure called Set.
// Write a class called Group (since Set is already taken).
// Like Set, it has add, delete, and has methods.

// Give the class a static from method that takes an iterable object as argument and creates a group
// that contains all the values produced by iterating over it.

class Group {
  constructor() {
    this.group = [];
  }
  add(x) {
    if (this.group.indexOf(x) === -1) {
      this.group.push(x);
    }
  }
  delete(x) {
    let index = this.group.indexOf(x);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }
  has(x) {
    return this.group.includes(x);
  }
  static from(arr) {
    let newSet = new Group();
    for (let elem in arr) {
      newSet.add(arr[elem]);
    }
    return newSet;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
group.delete(10);
console.log(group.has(10)); // → false
let newGroup = Group.from([1, 2, 3, 3, 3, 4, 5]);
console.log(newGroup.group); // → [1, 2, 3, 4, 5]

// Iterable Groups
// Make the Group class from the previous exercise iterable.
// Don’t just return the iterator created by calling the Symbol.iterator method on the array.
// That would work, but it defeats the purpose of this exercise.
class IterableGroup {
  constructor() {
    this.group = [];
  }
  add(x) {
    if (this.group.indexOf(x) === -1) {
      this.group.push(x);
    }
  }
  delete(x) {
    let index = this.group.indexOf(x);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }
  has(x) {
    return this.group.includes(x);
  }
  static from(arr) {
    let newSet = new IterableGroup();
    for (let elem in arr) {
      newSet.add(arr[elem]);
    }
    return newSet;
  }
  [Symbol.iterator]() {
    return new SetIterator(this);
  }
}

class SetIterator {
  constructor(group) {
    this.set = group;
    this.position = 0;
  }
  next() {
    if(this.position >= this.set.group.length) {
      return { done: true };
    } else {
      let value = { value: this.set.group[this.position], done: false };
      this.position++;
      return value;
    }
  }
}

for (let value of IterableGroup.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

// Borrowing a Method
// Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust alternative to the in operator
// when you want to ignore the prototype’s properties.
// But what if your map needs to include the word "hasOwnProperty"?
let map = {one: true, two: true, hasOwnProperty: true};
console.log(Object.prototype.hasOwnProperty.call(map, "hasOwnProperty"));// → true


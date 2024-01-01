// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
let size = 7;
for (let i = 1; i <= size; i++) {
  row = "";
  for (let j = 1; j <= i; j++) {
    row += "#";
  }
  console.log(row);
}

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by
// 5 (and not 3), print "Buzz" instead.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
let gridSize = 12;

for (let i = 0; i < gridSize; i++) {
  let row = "";

  for (let j = 0; j <= gridSize; j++) {
    if ((j + i) % 2 === 0) {
      row += " ";
    } else {
      row += "#";
    }
  }

  console.log(row);
}


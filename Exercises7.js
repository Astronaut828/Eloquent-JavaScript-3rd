// Retry
// Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers
// and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure.
// Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.

function primitiveMultiply(x) {
  let luckyPick = Math.round(Math.random() * 100);
  if (luckyPick <= 60 && luckyPick >= 40) {
    return x * x;
  } else {
    throw new Error("MultiplicatorUnitFailure");
  }
}

let lucky = false;
do {
  try {
    console.log(
      "primitiveMultiply is: ",
      primitiveMultiply(Math.round(Math.random() * 100))
    );
    lucky = true;
  } catch (e) {
    if (e.message == "MultiplicatorUnitFailure") {
      console.log("Error: MultiplicatorUnitFailure");
    }
  }
} while (lucky == false);

// The locked box
// Consider the following (rather contrived) object:
const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [1, 2, 3],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

// It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.
// Directly accessing the private _content property is forbidden.
// Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, 
// runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.

let readContent = (boxContent) => {
  let secretBoxContent = [];
  for (content of boxContent) {
    secretBoxContent.push(content);
  }
  return secretBoxContent;
};

function withBoxUnlocked(readContent) {
  let initialBoxState = box.locked;
  let boxContent;
  try {
    if (initialBoxState) {
      box.unlock();
    }
    boxContent = readContent(box.content);
  } catch (e) {
    throw e;
  } finally {
    if (initialBoxState) {
      box.lock();
    }
  }
  return boxContent;
}

console.log(withBoxUnlocked(readContent));

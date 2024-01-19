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

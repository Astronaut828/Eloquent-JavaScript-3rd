// Regexp golf
// Fill in the regular expressions
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

verify(
  /ferr(e|y|a)[a-z]*/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);

verify(
  /ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);

verify(
  /\w{7}/,
  ["Siebentausenddreihundertzweiundzwanzig"],
  ["no", "three small words"]
);

verify(
  /\b[^\We]+\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}

// Quoting Style
// Replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.
let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(^|\W)'|'(\W|'$)/g, '$1"$2')); // → "I'm the cook," he said, "it's my job."

// Numbers Again
// Write an expression that matches only JavaScript-style numbers.
// It must support an optional minus or plus sign in front of the number, the decimal dot, and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent.
let number = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}

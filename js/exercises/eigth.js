/*
 *    24) Take an array and return an object with two arrays, the first
 *    one must be ordered ascendingly and the second one descendingly
 */

const sortNumbers = (numbers) =>
  !(numbers instanceof Array)
    ? console.warn(`The element you provided does not seem to be an Array.`)
    : numbers.length < 1
    ? console.warn("The Array can't be empty.")
    : numbers.every((number) => typeof number === "number")
    ? console.log({
        ascending: [...numbers].sort((a, b) => a - b),
        descending: [...numbers].sort((a, b) => b - a),
      })
    : console.warn(`All the elements in the array must be numbers.`);

console.group("24");
sortNumbers([21, 18, 27, 9, 12, 15, 0, 3, 24]);
sortNumbers("");
sortNumbers([]);
sortNumbers(1234);
sortNumbers([1, 2, "3"]);
sortNumbers([4, 1, 9, 3, 5, 6, 7, 8]);
console.groupEnd();

/*
 *    25) Receive array and return a new array with the unique elements.
 */

const removeRepeated = (numbers) =>
  !(numbers instanceof Array)
    ? console.warn(`The element you provided does not seem to be an Array.`)
    : numbers.length < 1
    ? console.warn("The Array can't be empty.")
    : console.log({
        original: numbers,
        unique: [...new Set(numbers)],
      });

console.group("25");
removeRepeated([21, 18, 27, 9, 12, 15, 0, 3, 24]);
removeRepeated("");
removeRepeated([]);
removeRepeated(1234);
removeRepeated([1, 2, "3", 4, "N", "3", true, false, true, false, "N", "I"]);
removeRepeated([4, 4, 4, 1, 3, 1, 4, 5, 6]);
console.groupEnd();

/*
 *    26) Receive array of numbers and return the average.
 */

const averageNumbers = (numbers) =>
  !(numbers instanceof Array)
    ? console.warn(`The element you provided does not seem to be an Array.`)
    : numbers.length < 1
    ? console.warn("The Array can't be empty.")
    : numbers.every((number) => typeof number === "number")
    ? console.log(
        `The average value in [${numbers}] is: ${
          numbers.reduce((a, b) => a + b) / numbers.length
        }`
      )
    : console.warn(`All the elements in the array must be numbers.`);

console.group("26");
averageNumbers([21, 18, 27, 9, 12, 15, 0, 3, 24]);
averageNumbers("");
averageNumbers([]);
averageNumbers(1234);
averageNumbers([1, 2, "3"]);
averageNumbers([4, 1, 9, 3, 5, 6, 7, 8, 2]);
console.groupEnd();

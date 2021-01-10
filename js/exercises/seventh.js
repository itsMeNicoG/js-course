/*
 *    21) Receive array of numbers and return them squared in a new array.
 */

const squareNumbers = (numbers) =>
  !(numbers instanceof Array)
    ? console.warn(`The element you provided does not seem to be an Array.`)
    : numbers.length < 1
    ? console.warn("The Array can't be empty.")
    : numbers.every((number) => typeof number === "number")
    ? console.log(
        `This is how (${numbers}) looks when squared: (${numbers.map(
          (x) => x * x
        )})`
      )
    : console.warn(`All the elements in the array must be numbers.`);

squareNumbers([21, 18, 27, 9, 12, 15, 0, 3, 24]);
squareNumbers("");
squareNumbers([]);
squareNumbers([1, 2, "3"]);
squareNumbers();
squareNumbers(1234);

/*
 *    22) Receive array and return smallest and largest number
 */

const compareNumbers = (numbers) =>
  !(numbers instanceof Array)
    ? console.warn(`The element you provided does not seem to be an Array.`)
    : numbers.length < 1
    ? console.warn("The Array can't be empty.")
    : numbers.every((number) => typeof number === "number")
    ? console.log(
        `Smallest: ${Math.min(...numbers)} Largest: ${Math.max(...numbers)}`
      )
    : console.warn(`All the elements in the array must be numbers.`);

compareNumbers([0, 3, 6, 9, 12, 15, 18, 21, 24, 27]);
compareNumbers("");
compareNumbers([]);
compareNumbers(1234);
compareNumbers([1, 2, "3"]);
compareNumbers([4, 1, 9, 3, 5, 6, 7, 8]);

/*
 *    23) Receive array of numbers and return an object with 2 arrays,
 *        one with even numbers and the other one with odd numbers.
 */

const oddOrEvenNumbers = (numbers) => {
  if (!(numbers instanceof Array))
    return console.warn(
      `The element you provided does not seem to be an Array.`
    );
  if (numbers.length < 1) return console.warn("The Array can't be empty.");
  if (!numbers.every((number) => typeof number === "number"))
    return console.warn(`All the elements in the array must be numbers.`);
  let oddEven = {
    odd: numbers.filter((number) => number % 2 !== 0),
    even: numbers.filter((number) => number % 2 === 0),
  };
  return console.log(oddEven);
};

oddOrEvenNumbers([0, 3, 6, 9, 12, 15, 18, 21, 24, 27]);
oddOrEvenNumbers("");
oddOrEvenNumbers([]);

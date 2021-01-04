/*
 *    9) function to obtain a random number between 501 and 600
 */

const getRandomNumber = () => Math.ceil(Math.random() * 100 + 500);

console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());

/*
 *    10) function to evaluate if a number is palindrome
 */

const isPalindrome = (number = NaN) => isNaN(parseFloat(number))
  ? console.warn("You did not enter a valid number.")
  : number.toString() === number.toString().split("").reverse().join("")
    ? console.log(`${number} is definitely palindrome.`)
    : console.log(`${number} is definitely not palindrome.`);

isPalindrome(1234567);
isPalindrome(24242);
isPalindrome(888888);
isPalindrome("Nico");
isPalindrome(24242);
isPalindrome("nico");
isPalindrome(7777);
isPalindrome();

/*
 *    11) calculate factorial of a number
 */

const calculateFactorial = (number) => {.
  if (isNaN(parseInt(number)))
    return console.warn(
      "You need to enter a number greater than or equal to 1."
    );
  if (Math.sign(number) !== 1)
    return console.warn(
      "You need to enter a number greater than or equal to 1."
    );
  let factorial = number;
  for (let i = number - 1; i > 0; i--) {
    factorial *= i;
  }
  console.log(`The factorial of ${number} is ${factorial}`);
};

calculateFactorial(10);
calculateFactorial("");
calculateFactorial(5);
calculateFactorial();
calculateFactorial(8);
calculateFactorial("Nico");
calculateFactorial(7);
calculateFactorial(-4);

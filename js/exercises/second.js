import { isString, isNumber } from "./validations.js";

/*
 *    5) Invert characters in a string
 */

function invertString(str = "") {
  if (isString(str)) {
    //we separe the string into an array of characters to take advantage of the Array's reverse method
    const stringArray = str.split("");
    stringArray.reverse();
    str = stringArray.join("");
    console.log(str);
    return str;
  }
}

/*
 *    6) Count number of times a word appears in a string
 */

//we turn the string into an array of words and then filter it to get only the items that match
const countWords = (str, word) =>
  isString(word) && isString(str)
    ? console.log(str.split(" ").filter((item) => item === word).length)
    : null;

/*
 *    7) Count number of times a word appears in a string
 */

const isPalindrome = (word = "") =>
  isString(word)
    ? word.toLowerCase() === invertString(word).toLowerCase()
      ? console.log(`The word "${word}" is palindrome.`)
      : console.log(`The word "${word}" is not palindrome.`)
    : null;

/*
 *    8) Remove pattern from text
 */

const removePattern = (text = "", pattern = "") =>
  isString(text) && isString(pattern)
    ? console.log(text.replaceAll(pattern, ""))
    : null;

/////////////////////////////// END OF FUNCTIONS /////////////////////////////////

invertString("Hello World!"); //should output "!dlroW olleH"
invertString(1234); //should throw an error as the argument is not a string
countWords("hola mundo adios mundo", "mundo"); //should otput 2
countWords("hola mundo adios mundo", 2); //should throw an error as both arguments need to be strings
isPalindrome("salas"); //should output "The word "salas" is palindrome"
isPalindrome("oso"); //should output "The word "oso" is palindrome"
isPalindrome("nico");
isPalindrome(1234); //should throw an error as the argument is not a string
removePattern("xyz1, xyz2, xyz3, xyz4 and xyz5", "xyz"); //should output 1, 2, 3, 4 and 5
removePattern(1234, "xyz"); //should throw an error as both arguments need to be strings
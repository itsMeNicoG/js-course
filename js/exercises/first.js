// Method to validate strings and numbers

function isString(str) {
  try {
    if (typeof str === "string") {
      return true;
    } else {
      throw new Error("The argument provided is not a string.");
    }
  } catch (e) {
    console.error(e);
    return false;
  }
}

function isNumber(num) {
    try {
      if (typeof num === "number") {
        return true;
      } else {
        throw new Error("The argument provided is not a number.");
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  }

/*
 * Count number of characters in a string
 */

function countCharacters(myString) {
  if (isString(myString)) {
    console.log(
      `The string "${myString}" has a total amount of ${myString.length} characters.`
    );
  }
}

countCharacters("1"); //should output "The string "1" has a total amount of 1 characters."
countCharacters(1); //should output error "The value you provided does not correspond to a text."
countCharacters(["Hello", "Darkness", "My", "Old", "Friend"]); //should output error "The value you provided does not correspond to a text."
countCharacters({ name: "Nico" }); //should output error "The value you provided does not correspond to a text."

/*
 * Cut text to the desired length
 */

function sliceText(text, newLength) {
  try {
    if (newLength > text.length) {
      throw new Error("The new length has to be less than the original one.");
    }
    if (isString(text)) {
      console.log(
        `The string "${text}" has been cut to ${text.slice(0, newLength)}`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

sliceText("Hola mundo", 4); //should output "Hola"
sliceText("Hola mundo", 20); //should throw an error as the new length has to be less than the original one
sliceText(1234, 4); //should throw error as the first parameter is not a string

/*
 * Separate string into array of words separated by the character provided
 */

function splitText(text, separator) {
  if (isString(text) && isString(separator)) {
    console.log(`The string "${text}" has been transformed to: `);
    console.log(text.split(separator));
  }
}

splitText("Hola mundo", " "); //should output [Hola,mundo]
splitText("Hello my name is Nicolas", " "); //should output [Hello,my,name,is,Nicolas]
splitText(12345, ""); //will output error as the input is not a string
splitText("Hello World!", "a"); //will output an array containing a single element as the separator does not appear in the text
splitText("Hello World!", 1); //will output an error as the separator is not a string

/*
 * Repeat text a certain amount of times
 */

function repeatText(text, repeatCount) {
  if (isString(text) && isNumber(repeatCount)) {
    console.log(text.repeat(repeatCount));
  }
}

repeatText("Hello", 3); //will output HelloHelloHello
repeatText("Hello", "a"); //will throw error as the number of repetitions is not a number

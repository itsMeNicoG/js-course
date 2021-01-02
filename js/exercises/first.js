import { isString, isNumber } from "./validations.js";

/*
 *    1) Count number of characters in a string
 */

const countCharacters = (myString) =>
  isString(myString)
    ? console.log(`"${myString}" has ${myString.length} characters.`)
    : null;

countCharacters("1"); //should output "The string "1" has a total amount of 1 characters."
countCharacters(1); //should output error "The value you provided does not correspond to a text."
countCharacters(["Hello", "Darkness", "My", "Old", "Friend"]); //should output error "The value you provided does not correspond to a text."
countCharacters({ name: "Nico" }); //should output error "The value you provided does not correspond to a text."

/*
 *    2) Cut text to the desired length
 */

const sliceText = (text, newLength) => {
    if (newLength > text.length) return console.warn("The new length has to be less than the original one.");
    if (isString(text)) console.log(`The string "${text}" has been cut to ${text.slice(0, newLength)}`);
}

sliceText("Hola mundo", 4); //should output "Hola"
sliceText("Hola mundo", 20); //should throw an error as the new length has to be less than the original one
sliceText(1234, 4); //should throw error as the first parameter is not a string

/*
 *    3) Separate string into array of words separated by the character provided
 */

const splitText= (text, separator) =>
  isString(text) && isString(separator)
    ?console.log(`The string "${text}" has been transformed to: `)
    :console.log(text.split(separator));

splitText("Hola mundo", " "); //should output [Hola,mundo]
splitText("Hello my name is Nicolas", " "); //should output [Hello,my,name,is,Nicolas]
splitText(12345, ""); //will output error as the input is not a string
splitText("Hello World!", "a"); //will output an array containing a single element as the separator does not appear in the text
splitText("Hello World!", 1); //will output an error as the separator is not a string

/*
 *    4) Repeat text a certain amount of times
 */

const repeatText = (text, repeatCount) => {
  if (isString(text) && isNumber(repeatCount)) console.log(text.repeat(repeatCount));
}


repeatText("Hello", 3); //will output HelloHelloHello
repeatText("Hello", "a"); //will throw error as the number of repetitions is not a number

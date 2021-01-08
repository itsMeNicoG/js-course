/*
 *    12) Determine if a number is prime
 */

const isPrime = (number=NaN) => {
  if (isNaN(parseInt(number))) return console.warn("You must enter a number.");
  if (!Number.isInteger(number)) return console.warn("The number must be an integer.");
  if (Math.sign(number) !== 1) return console.warn("The number must be positive.");
  if (number === 1) return console.log("1 is not prime.");
  let prime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log(`${number} is divisible by ${i}.`)
      prime = false;
      break;
    } else {
      console.log(`${number} is not divisible by ${i}.`);
    }
  }
  return prime
    ? console.log(`The number ${number} is prime.`)
    : console.log(`The number ${number} is not prime.`);
}

isPrime("Nico");
isPrime();
isPrime(0);
console.group(`Testing 25`);
isPrime(25);
console.groupEnd();
console.group(`Testing 101`);
isPrime(101);
console.groupEnd();
console.group(`Testing 113`);
isPrime(113);
console.groupEnd();
console.group(`Testing 117`);
isPrime(117);
console.groupEnd();
console.group(`Testing 2`);
isPrime(2);
console.groupEnd();
console.group(`Testing 1`);
isPrime(1);
console.groupEnd();
isPrime("");

/*
 *    13) Determine if a number is even
 */

const isEven = (number=NaN) => {
  if (isNaN(parseInt(number))) return console.warn("You must enter a number.");
  return number % 2 === 0
    ? console.log(`The number ${number} is even.`)
    : console.log(`The number ${number} is not even.`);
}

isEven("Nico");
isEven(10);
isEven();
isEven(5);
isEven(10.2);
isEven("");

/*
 *    14) Convert Farenheit to Celsius
 */

const toCelsiusOrFarenheit = (degrees = NaN, to = "") => {
  if (isNaN(parseFloat(degrees))) return console.warn("The source temperature must be a number.");
  if(!to) return console.warn("You must specify the conversion target (celsius or farenheit).");
  if (typeof to !== "string") return console.warn("The conversion target must be a string.")
    
  switch(to){
    case 'c':
      let celsius = Math.round((degrees - 32) * (5/9));
      console.log(`${degrees}°F is the same as ${celsius}°C.`);
      break;
    case 'f':
      let farenheit = Math.round((degrees * (9/5)) + 32);
      console.log(`${degrees}°C is the same as ${farenheit}°F.`);
      break;
    default:
      console.log(`Only 'c' and 'f' are valid options.`);
      break;
    }
  
}

toCelsiusOrFarenheit(32, 'f');
toCelsiusOrFarenheit("Nico");
toCelsiusOrFarenheit(150, 'c');
toCelsiusOrFarenheit("");
toCelsiusOrFarenheit(250, 'c');
toCelsiusOrFarenheit();
toCelsiusOrFarenheit(350, 10);
toCelsiusOrFarenheit(350, 'n');
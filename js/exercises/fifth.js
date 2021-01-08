/*
 *    15) Convert numbers from binary to decimal
 */

const toDecimalOrBinary = (number = 0, sourceBase = 0) => {
  if (isNaN(parseInt(number)) || isNaN(parseInt(sourceBase)))
    return console.warn(
      "Both the number to be converted and the source base must be numbers"
    );
  if (!number)
    return console.warn(
      "The number to be converted can't be empty and has to be greater than 0"
    );
  if (!sourceBase) return console.warn("The source base can't be empty");
  switch (sourceBase) {
    case 2:
      return /^[0-1]*$/gm.test(number.toString())
        ? console.log(
            `${number} converted to decimal would be ${parseInt(number, 2)}`
          )
        : console.warn(`${number} is not a valid binary number.`);
      break;
    case 10:
      return /^[0-9]*$/gm.test(number.toString())
        ? console.log(
            `${number} converted to binary would be ${number.toString(2)}`
          )
        : console.warn(`${number} is not a valid decimal number.`);
      break;
    default:
      return console.warn("Only 2 and 10 are valid source bases.");
      break;
  }
};

toDecimalOrBinary(100, 2);
toDecimalOrBinary();
toDecimalOrBinary(100, 8);
toDecimalOrBinary(4, 10);
toDecimalOrBinary("Nico");
toDecimalOrBinary(150, 2);

/*
 *    16) Apply discount by percentage
 */

const applyDiscount = (price = 0, discount = 0) => {
  if (isNaN(parseFloat(price)))
    return console.warn("You must enter a valid original price.");
  if (!price) return console.warn("The original price must be a valid number.");
  if (isNaN(parseFloat(discount)))
    return console.warn("You must enter a valid discount percentage.");
  if (discount < 0 || discount > 99)
    return console.warn(
      "You must provide a valid discount percentage between 0 and 100."
    );
  let newPrice = price - (parseFloat(price) * parseFloat(discount)) / 100;
  console.log(
    `The price has gone from ${price} to ${newPrice} with a -${discount}% discount.`
  );
};

applyDiscount(1000, 20);
applyDiscount(1000, 0);
applyDiscount(1000, "Nico");
applyDiscount("Nico", 10);
applyDiscount(1000, 100);

/*
 *    17) See how many years have passed since date
 */

const howManyYearsSince = (date = "") => {
  if (!date) return console.warn("Date can't be empty.");
  if (!(date instanceof Date))
    return console.warn("You have not entered a valid date.");
  let years = (new Date() - date) / (1000 * 60 * 60 * 24 * 365);
  return Math.sign(years) === 1
    ? console.log(
        `${Math.floor(years)} years have passed since ${date.getFullYear()}.`
      )
    : Math.sign(years) === 0
    ? console.log(
        `No time to wait for ${date.getFullYear()}, it's already here!`
      )
    : console.log(
        `${date.getFullYear()} will come in ${Math.floor(
          Math.abs(years)
        )} years.`
      );
};

howManyYearsSince(new Date(1984, 4, 23));
howManyYearsSince(new Date(2022, 12, 28));
howManyYearsSince(new Date("1998-12-28"));
howManyYearsSince("");
howManyYearsSince("Nico");

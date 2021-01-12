const myNumbers = [1,2,3,4,5,6,7,8,9,10];

//using this notation we can extract the values from an array and save them to variables
let [first, second, third] = myNumbers;

console.log(first, second, third);

//we can also create subArrays like this: 
let [one, two, three, ...otherNumbers] = myNumbers;
console.log(otherNumbers);

//we can also skip values: 
[one, two, , three] = myNumbers;
//will output 4
console.log(three);




//we can also extract variables from objects like this: 
const nico = {
    name : "Nico",
    lastName: "Gongora",
    age: 21
}
//we need to make sure the variables have the same name as the 
//properties we're trying to extract
let {name, lastName, age} = nico;

//we can also assign new names like this: 
let {name: theName, lastName: theLastName, age: theAge} = nico;
console.log(theName);



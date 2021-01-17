//all properties names in a JSON must be between double quotes

//JSON.parse will transform from string to JS objects
//JSON.stringify will transform from js objects to string

const json = {
  "string": "Nico",
  "number": "35",
  "boolean": "true",
  "array": "[]",
  "object": {
    
  }
}

console.log(json);
console.log(JSON.stringify(json));

const jsonString = '{"string":"Nico","number":"35","boolean":"true","array":"[]","object":{}}';

console.log(jsonString);
console.log(JSON.parse(jsonString));

let myJson;

//get json data from API and print character names
async function printCharacterNames() {
  let jsondata = await fetch("https://breakingbadapi.com/api/characters").then(json => json.json()).then(data => myjson = data);
  console.log(jsondata);
  myJson = jsondata;
  const iterator = myJson[Symbol.iterator]();
  let next = iterator.next();
  while (!next.done) {
    console.log(`Current Character: ${next.value.name}`);
    next = iterator.next();
  }
  
  /*for (let character of myJson) {
    console.log("Current character:" );
    console.log(character.name);
  }*/
}

printCharacterNames();



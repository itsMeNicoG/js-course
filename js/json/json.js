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


async function getJSON() {
  let jsondata = await fetch("https://breakingbadapi.com/api/characters");
  return jsondata.json();
}

let myJson = await getJSON();
console.log(myJson);


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

// we can read a json file using fetch like this: 
function testReadFile(url){
  fetch(url).then(response => response.json()).then(data => console.log(data));
}

testReadFile("./js/json/file.json");
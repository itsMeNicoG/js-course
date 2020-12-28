const nico = {
    name: "Nicolás",
    lastName: "Góngora",
    age: 21,
    hobbies: ["videogames", "cooking"],
    contact: {
        email: "nicolasgongora28@gmail.com",
        phone: "3012617652"
    },
    sayHi(){
        log(`Hello, my name is ${this.name} ${this.lastName} and I'm ${this.age} years old`);
    }
};

//when we use the or shortcircuit operator, the value that evaluates to true will be assigned, if both are true the first one will be assigned
console.log(nico.currentJob || "unemployed");


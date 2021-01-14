const userObj = {};
const users = ["Nico", "Kathe", "Costillín", "Ribby"];

//this is how we can dinamycally assign property names to an object
users.forEach((user, index) => userObj[`id_${index}`] = user);

console.log(userObj);
 
//PART 1 — Object basics 
const bike = {
  name: "Honda",
  age: 2000,
  wheel: 2,
}

const user = {
  name: "Tsogt",
  age: 10,
  city: "Ulaanbaatar",
  email: "mtsogtbayargmail.com"
}

// set
user["likes birds"] = true;

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

console.log(user["likes birds"]);

// delete
//  delete user["likes birds"];

console.log(user.age);
console.log(user.name);
console.log(user);

//PART 2 — Function + object 

let introduce = (user) => {
  if(!user){
    return "No user is provided!";
  }
  return `Hi my name is ${user.name} and I am ${user.age}`;
}


// function introduce(user){
//   if(!user){
//     return "No user is provided!";
//   }
//   return `Hi my name is ${user.name} and I am ${user.age}`;
// }

console.log(introduce(bike));

let ageCheck = (user) => {
  if (user.age > 17){
    return `${user.name} u are Adult. Wow congratulations 🎉`
  }
  return `${user.name} u are Kid. Go play w ur crayons.`
}

console.log(ageCheck(user));

//PART 3 — Array of objects

const users = [
  {name: "A", age: 17},
  {name: "B", age: 22},
  {name: "C", age: 25},
]

let adult = users.filter(u => u.age > 17);
console.log(adult);

let names = users.map(u => u.name);
console.log(names);

let totalAge = users.reduce((acc, u) => acc + u.age , 0);
console.log(totalAge);


const product =[
  {name: "Water", price: 1000, inStock: true},
  {name: "KeyBoard", price: 500, inStock: true},
  {name: "Mouse", price: 300, inStock: false},
  {name: "Monitor", price: 2000, inStock: true},
];
let result = product
.filter(u => u.inStock === true)
.map(u => u.name);
console.log(result);

let totalPrice = product.reduce((sum, u) => sum + u.price, 0);
console.log(totalPrice);
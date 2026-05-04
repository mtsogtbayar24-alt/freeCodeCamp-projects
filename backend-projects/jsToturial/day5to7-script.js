const user = [
  {name: "A", age: 17},
  {name:"B", age: 22},
  {name: "C", age: 25},
];

const process = (users) => {
  return users
  .filter(u => u.age >= 18)
  .map(u => u.name);
}
console.log(process(user));


const totalAge = user.reduce((sum, u) => sum+ u.age, 0);

const medianAge = user.reduce((sum, u) => sum+ u.age, 0) / user.length;

const findOldest = (user) => {
  let oldest = 0;
  for (let i=0; i < user.length; i++){
    if(user[i].age > oldest){
      oldest = user[i].age;
    }
  }
   return oldest;
}

console.log(totalAge);

console.log(findOldest(user));

const oldestMax =  Math.max(...user.map(u => u.age));

console.log(oldestMax);

const oldestReduce = user.reduce((max, u) => (u.age > max ? u.age: max), 0);
console.log(oldestReduce);


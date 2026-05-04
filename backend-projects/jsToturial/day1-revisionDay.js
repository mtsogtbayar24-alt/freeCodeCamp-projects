//🧪 TASK 1 — Async Practice

// function wait(ms){
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function run() {
//   console.log("Start");

//   await wait(1000);
//   console.log("1 sec");

//   await wait(2000);
//   console.log("3 sec");

//   await wait(5000);
//   console.log("8 sec");

//   await wait(5000);
//   console.log("13 sec");

//   await wait(7000);
//   console.log("20 sec");

//   console.log("End");
// }

// run();

//🧪 TASK 2 — Array Mastery

// const arr = [5, 10, 15, 20];

// let x = arr.map(n => n * 2).filter(n => n > 20).reduce((prev, curr) => prev + curr, 0);

// console.log(x)

//🧪 TASK 3 — Object Practice

const user = {
  name: "Tsogtoo",
  age: 20,
  isStudent: true,
  greet(){
  return "Hello " + this.name;
}
};
console.log(user.greet());

let x = (user) => {
  if(!user){
    return "No user is provided.";
  }
  return `Hi my name is ${user.name} and i am ${user.age} old.`
}

console.log(x(user));

//🔹 3. MINI CHALLENGE

const arr = [1, 2, 3, 4, 5];

let y = arr.filter(n => n % 2 === 0).map(n => n * 3).reduce((acc, curr) => acc + curr, 0);

console.log(y)
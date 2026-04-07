 //1️⃣ map
 let nums = [1, 2, 3];

 const result = nums.map(n => n*2);
 console.log(result);

 //2️⃣ filter
 nums = [1, 2, 3, 4];
 const even = nums.filter(n => n%2 ===0);
 console.log(even);

 //3️⃣ reduce (🔥 important)
 nums = [1, 2, 3];
 const sum = nums.reduce((acc, curr) => acc + curr, 0);
 console.log(sum);

//MY CHALLENGE

const massiv = [10, 20, 30, 40];

const result1 = massiv
.map(n => n*2)
.filter( n => n > 30)
.reduce((acc, curr) => acc + curr, 0)
console.log(result1);

// GEMINI CHALLANGE

const transictions = [
  {id: 1, type: "income", amount: 5000, desc: "Salary"},
  {id: 2, type: "expense", amount: 1200, desc: "Lunch"},
  {id: 3, type: "expense", amount: 500, desc: "Bus"},
  {id: 4, type: "income", amount: 1000, desc: "Freelance" } 
]

// const Urdun = transictions
// .filter( item => {return item.type === 'expense';})
// .map(item => {return item.amount})
// .reduce((acc, curr) => acc + curr, 0);

const Urdun1 = transictions
.filter( item => item.type === 'expense')
.map(item => item.amount)
.reduce((acc, curr) => acc + curr, 0);

const Urdun = transictions.reduce((acc, curr) => {
  if(curr.type === "expense") {
    return acc + curr.amount;
  }
  return acc;
}, 0);
console.log(Urdun);

const Urdun2 = transictions.reduce((acc, curr) => {
return acc + (curr.type === 'expense' ? curr.amount : 0)
}, 0);
console.log(Urdun2);

const Urdun3 = transictions.reduce((acc, curr) =>  acc + (curr.type === 'expense' ? curr.amount : 0), 0);
console.log(Urdun3);
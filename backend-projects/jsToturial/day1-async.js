// Promise 

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ("data comeback");
    }, 1000);

    setTimeout(() => reject(new Error("Whoops")), 1000);
  });
}

getData()
.then(result => {
  console.log(result);
})
.catch(err=>{
  console.log(err);
});

// //successful job completion, a “fulfilled promise”.
// let promise = new Promise(function(resolve, reject){
//   // the function is executed automatically when the promise is constructed

//   // after 1 second signal that the job i sdone with the result "done" 
//   setTimeout(() => {
//     resolve("done");
//   }, 1000);
// });

// //rejecting the promise with an error:
// let promiseF = new Promise(function(resolve, reject){
//   // the function is executed automatically when the promise is constructed

//   // after 1 second signal that the job i sdone with the result "done" 
//   setTimeout(() => reject(new Error(("Whoops")), 1000);
//});

//ASYNC / AWAIT (solution #2 — BEST)

async function run(){
  try{
  const result = await getData();
  console.log(result);
} catch (err) {
  console.log("Async error", err);
}
}
run();

//⚡ SIDE BY SIDE

getData ()
.then(res => {
  return res + " Nemelt";
})
.then(final=> {
  console.log(final);
});

async function run () {
  const res = await getData();
  const final = res + " Nemelt";
  console.log(final);
}

//⚠️ ERROR HANDLING

//Promise:
//.catch(err => console.log(err))

//Async/Await:

// try{
//   const data =  await getData();
// } catch(err){
//   console.log(err);
// }

// Unuudriin Task

function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function run() {
  console.log("start");
  await wait (1000);
  console.log("After 1 sec");
}

run();
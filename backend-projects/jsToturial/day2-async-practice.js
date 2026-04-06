//1️⃣ callback version бич:
 setTimeout(() => {
   console.log("1");
   setTimeout(() =>{
     console.log("2");
     setTimeout(() => {
      console.log("Done")
     }, 1000)
   }, 1000);
 }, 1000)

//2️⃣ promise version болго:
function wait(ms){
  return new Promise( resolve => setTimeout(resolve, ms));
}
wait(1000)
.then(() => {
  console.log("1");
  return wait(1000);
})
.then(() => {
  console.log("2");
  return wait(1000);
})
.then(() => {
  console.log("Done")
});

//3️⃣ async/await version болго:
async function run() {
  await wait(1000);
  console.log("1");
  await wait(1000);
  console.log("2");
  await wait(1000);
  console.log("Done");
}

run();

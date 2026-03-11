const args = process.argv;

console.log("All arguments:", args);

// Loop through and print only the user-provided arguments
console.log("User arguments:");
args.slice(2).forEach((val, index) => {
  console.log(`${index + 1}: ${val}`);
});

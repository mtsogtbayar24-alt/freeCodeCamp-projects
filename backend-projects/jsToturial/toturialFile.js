// document.getElementById("count").innerText = 5;
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);


// let myAge = 20;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// console.log(myAge);

// let count = 5;
// count = count + 1;
// console.log(count);

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;

// console.log(bonusPoints);

//subway counter app
//lesson 8, 14

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//   count = count + 1;
//   console.log(count);}
// document.getElementById("count-el").innerText = count;


// function increment() {
//     console.log('The button was clicked');
// }

// lesson 9
// function countDown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// // setting up the the race

// countDown();
// // GO
// // Players are running the race
// // Race is finished

// //Get ready for new race
// countDown();

// lesson 10

// function fortyTwo() {
//     console.log(42);
// }

// fortyTwo();

// lesson 11
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLapTime() {
//     //let totalTime = lap1 + lap2 + lap3;
//     console.log(lap1 + lap2 + lap3);
// }

// totalLapTime();

// lesson 12
// let lapsCompleted = 0;

// function increment() {
//     lapsCompleted = lapsCompleted + 1;
//     //console.log(lapsCompleted);
// } 
// increment();
// increment();
// increment();

// console.log(lapsCompleted);

// lesson 13

// camelCase

// let countEl = document.getElementById("count-el");

// console.log(countEl);
 
// let count = 0;

// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
// }
// increment()

// // lesson 14
// function save() {
//     console.log(count);
// }

// lesson 19

// let userName = "Per";

// console.log(userName);

// let message = "You have 3 notifications";

// let messageToUser = message + ", " + userName + "!";

// console.log(messageToUser);

//lesson 20

// let name1 = "Tsogtbayar";

// let greeting = "Hi, my name is "

// let myGreeting = greeting + name1;

// console.log(myGreeting);

// // let totalPoints = points + bonusPoints

// console.log(4 + 5) 
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100 + "100")

// lesson 21

// let welcomeEl = document.getElementById('welcome-el')

// let name1 = "Tsogtbayar";

// let greeting = "Welcome Back "

// welcomeEl.innerText = greeting + name1

// welcomeEl.innerText += " 👋"

// challange 1

// let firstName = "Tsogtbayar"

// let lastName = " Munguntuya"

// let fullName = firstName + lastName

// console.log(fullName)

// challange 2

// let game = "Linda"
// let greeting = "Hi there"

// function greetingGame(){
//   console.log(greeting + ", " + game + "!")
// }

// greetingGame()

// challange 3

// let myPoints = 3

// function add3Points(){
//   myPoints += 3
// }

// function remove1Point(){
//   myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)

// challange 4

// Try to predict what each of the lines will log out
// console.log("2" + 2) // 22
// console.log(11 + 7) // 18
// console.log(6 + "5") // 65
// console.log("My points: " + 5 + 9) // My points: 59 
// console.log(2 + 2) //  4
// console.log("11" + "14") // 1114

//challange 5

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// errorP = document.getElementById("error")
// console.log(errorP)

// function purchase(){
//   console.log("Button clicked")
//   errorP.textContent = "something went wrong, please try again"
// }

// challenge 6

// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// sumEl = document.getElementById("sum-el")

// function add(){
//   sum = num1 + num2
//   sumEl.textContent = "Sum:" + sum
// }
// function subtract(){
//   let subtract = num1 - num2
//   sumEl.textContent = "Subtract:" + subtract
// }
// function divide(){
//   let divide = num1 / num2
//   sumEl.textContent = "Divide:" + divide
// }
// function multiply(){
//   let multiply = num1 * num2
//   sumEl.textContent = "Multiply:" + multiply
// }


// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

//SECTION 2 BLACKJACK GAME
//LESS 1, 2 add firstCard, secondCard, sum

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard + 6

//LESS 3 if else conditionals

// if (sum < 21) {
//   console.log("Do you want to draw a new card?")
// } else if (sum === 21){
//   console.log("Woohoo! You've got Blackjack!")
// } else {
//   console.log(" You're out of the game!")
// }

//LESS 4 Your first if else statement

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

//let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// if (age < 21) {
//   console.log("You can not enter the club!")
// } else {
//   console.log("Welcome!")
// }

// LESS 5 if/else ... if/else statement

// Check if the person is elegible for a birthday card from the King! (100)

//let age = 106

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

// if (age < 100) {
//   console.log("Not elegible")
// } else if (age === 100){
//   console.log("Here is your birthday card from the King!")
// } else {
//   console.log("Not elegible, you have already gotten one")
// }

//LESS 6 The if/else statement for our game

// let firstCard = 10
// let secondCard = 7
// let sum = firstCard + secondCard

// if (sum <= 20){
//   console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21){
//   console.log("Wohoo! You've got Blackjack! 🥳")
// }else{
//   console.log("You're out of the game! 😭")
// }

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

//LESS 7 addHasBlackjack variable

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let HasBlackjack = false

// if (sum <= 20){
//   console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21){
//   console.log("Wohoo! You've got Blackjack! 🥳")
//   HasBlackjack = true
// }else{
//   console.log("You're out of the game! 😭")
// }

// console.log(HasBlackjack)

//LESS8 add isAlive variable

// let firstCard = 11
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// // 1. Create a variable called isAlive and assign it to true

// // 2. Flip its value to false in the appropriate code block 
// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game! 😭")
//     isAlive = false
// }
// console.log(isAlive)

// 3. Log it out to check that you're doing it right

//LESS 9 lets practice boolean conditions

// console.log(4 === 3)  //  false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false

// LESS 10 add a message variable

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard + 4
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// // 1. Declare a variable called message and assign its value to an empty string

// // 2. Reassign the message variable to the string we're logging out
// if (sum <= 20) {
//   message = "Do you want to draw a new card? 🙂"
// } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack! 🥳"
//      hasBlackJack = true
// } else {
//   message = "You're out of the game! 😭"
//     isAlive = false
// }

// console.log(message)
// // 3. Log it out!

// LESS 21 intro of arrays

// Arrays - ordered lists of items

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

// let myExperience = [
//   "waiter-bull hotpot",
//   "waiter-tse pub",
//   "hskRunner-hyat regency"
// ]

// let education = [
//   "1-10 durgun EBS",
//   "10-12 hovd labrtory 1 EBS",
//   "software engineer- MUST-SICT"
// ]

// console.log(education[0])

// Arrays - ordered lists of items

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]


// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// console.log(featuredPosts.length)

//arrays with multiple data types

// let aboutMe = [
//   "Tsogtbayar ",
//   20 ,
//   true
// ]
// console.log(aboutMe)

//push method

// let cards = [7, 4]
// cards.push(6)
// //console.log(cards)

// // Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)

// messages.pop()

// console.log(messages)

// let age = 18

// function ageCalc(){
//   if (age<=17){
//     console.log("ta nsand hureegui baina")
//   } 
//   else{
//     console.log("ta nasand hursen baina")
//   }
// }

// ageCalc()

// let text = []

// // for (let i = 0; i < 5; i++) {
// //   text += "The number is " + i + "<br>";
// // }
// let i = 0

// while (i < 10) {
//   text += "The number is " + i + ". ";
//   i++;
// }
// console.log(text)

// do {
//   text += "The number is " + i;
//   i++;
// }
// while (i < 10);

//OBJECTS

// const car = {
//   type: "Fiat",
//   model: "500",
//   color: "White"
// }

// let x = car.type
// let y = car['model']

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };


//ES6 arrowFunctions

// function sum(a, b){
//   return a+b
// }

// let sum2 = (a, b) => a + b

// function isPositive(number){
//   return number >= 0
// }

// let isPositive2 = (number) => number >= 0

// function randomNumber(){
//   return Math.random
// }
// let randomNumber2 = () => Math.random

// document.addEventListener('click',function(){
//   console.log('click')
// } )

// document.addEventListener('click',() => console.log('click'))

/////////////////////////////////ES6 destructuring

// const alhpabet = ["A", "B", "C", "D", "E", "F"]
// const numbers = ['1', '2', '3', '4', '5', '6']

// // const a = alhpabet[0]
// // const b = alhpabet[1]

// const [a,, c, ...rest] = alhpabet

// // newArray = [...alhpabet, ...numbers]

// newArray = alhpabet.concat(numbers)

// // console.log(a)
// // console.log(b)
// // console.log(c)
// // console.log(rest)
// console.log(newArray)

// function sumAndMultiply (a, b){
//   return [a+b, a*b, a/b]
// }
// const [sum, multiply, division="No division"] = sumAndMultiply(2, 3)

// console.log(sum)
// console.log(multiply)
// console.log(division)

//OBJECT destructuring

// const personOne = {
//   name: "Kyle",
//   age: 24,
//   adress: {
//     city: "Somewhere",
//     state: "One of them"
//   }
// }

// const personTwo = {
//   name: "Sally",
//   age: 32,
//   favoriteFood: "waterMelon",
//   adress: {
//     city: "Somewhere",
//     state: "Anothet one of them"
//   }
// }

// const { name: firstnName = "John", age, favoriteFood = "Rice"} = personTwo

// console.log(firstnName)
// console.log(age)
// console.log(favoriteFood)

// const { name: firstnName, adress: {city}} = personTwo

// console.log(city)

// const personOne = {
//   name: "Kyle",
//   age: 24,
//   adress: {
//     city: "Somewhere",
//     state: "One of them"
//   }
// }

// const personTwo = {
//   age: 32,
//   favoriteFood: "waterMelon",
// }

// const personThree = {...personOne, ...personTwo}

// console.log(personThree)

// const personOne = {
//   name: "Kyle",
//   age: 24,
//   fovariteFood: "Rice",
//   adress: {
//     city: "Somewhere",
//     state: "One of them"
//   }
// }

// function printUser({name, age, fovariteFood="WaterMelon"}){
//   console.log(`Name is: ${name}. Age is: ${age}. FovariteFood is: ${fovariteFood}`)
// }

// printUser(personOne)

////////////////////////////////// ARRAY MAP ///////////////////////////////////

// const prices = [4, 8, 15, 16, 23, 42]

// const discountPrices = prices.map(price => price * 0.5)
// console.log (prices)
// console.log(discountPrices)

////////////////////////////////// ARRAY FILTER ///////////////////////////////////

// let arr = [2, 4, 8, 10];
// let updatedArr = arr.slice().filter(val => val < 5);
// console.log(arr);
// console.log(updatedArr);

////////////////////////////////// ARRAY REDUCE ///////////////////////////////////

// let arr1= [2,4,8,10]
// let updatedArr1 = arr.reduce((prev, curr)=> curr= prev+curr)
// console.log(arr);
// console.log(updatedArr);

/////////////////////////////////// Array squared ///////////////////////////////////

// const input = [1, 2, 3, 4, 5];
// const output = input.map(input => Math.pow(input, 2))
// console.log(output)
// input.map(function (num) {
//   return Math.pow(num, 2);
// });
// input.map((num) => Math.pow(num, 2));

/////////////////////////////////// Sum of every positive element ///////////////////////////////////

// const input = [1, -4, 12, 0, -3, 29, -150];

// let output = input.filter(val => val > 0)

// output = output.reduce((prev, curr)=> curr = prev+curr)

// console.log(output)

/////////////////////////////////// Calculate median and mean ///////////////////////////////////

const input = [10, 46, 32, 64];
input.sort((a, b) => a - b);

const output = input.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator.mean += currentValue / array.length;

    if (array.length % 2 === 0) {
      // if the array has an even number of elements
      if (index === array.length / 2 - 1) {
        accumulator.median += currentValue;
      } else if (index === array.length / 2) {
        accumulator.median += currentValue;
        accumulator.median /= 2;
      }
    } else {
      // if the array has an odd number of elements
      if (index === (array.length - 1) / 2) {
        accumulator.median = currentValue;
      }
    }

    return accumulator;
  },
  { mean: 0, median: 0 }
);
console.log(output)
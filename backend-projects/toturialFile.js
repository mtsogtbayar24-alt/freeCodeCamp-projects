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


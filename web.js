// Chapter 1
// Exercise 1

// alert("Wlcome to my Website");

// Exercise 2
// alert("Error! Please enter a valid password.");

// Exercise 3
// alert("Welcome to JS Land...\nHappy Coding!");

// Exercise 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// Exercise 5
// console.log("Hello... I can run JS through my web browser's console");

// Exercise 6
// 1. Include script in head or body section
// 2. External file
// 3. At the end of body section

// Chapter 2
// Exercise 1
// var username;

// Exercise 2
// var myName = "Hyder Lodhi";

// Exercise 3
// var message;
// message = "Hello World";
// alert(message);

// Exercise 4
// var name = "Hyder Lodhi";
// var age = "19 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// Exercise 5
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// Exercise 6
// var email = "hyderlodhi3@gmail.com";
// alert("My email address is " + email);

// Exercise 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// Exercise 8
// document.writeln("Yah! I can write HTML content through JavaScript");

// Exercise 9
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);

// Chapter 3
// Exercise 1
// var age = 19;
// alert("I am " + age + " years old");

// Exercise 2
// var visit = 14;
// alert("You have visited this site " + visit + " times");

// Exercise 3
// var birthYear = 2004;
// document.writeln("My birth year is " + birthYear + "<br>Data type of my declared variable is number");

// Exercise 4
// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.writeln(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");


// Chapter 4
// Exercise 1
// var a, b, c;

// Exercise 2
// Legal Variables
// var myName;
// var $name;
// var name1;
// var _name;
// var userName;

// Illegal Variables
// var 1name;
// var my-name;
// var my name;
// var @name;
// var alert;

// Exercise 3
// document.writeln("<h1>Rules for naming JS variables</h1><br>");
// document.writeln("Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable<br>");
// document.writeln("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
// document.writeln("Variable names are case sensitive<br>");
// document.writeln("Variable names should not be JS keywords");

// Chapter 5
// Exercise 1
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.writeln("Sum of " + num1 + " and " + num2 + " is " + sum);

// Exercise 2
// var num1 = 3;
// var num2 = 5;
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var mod = num1 % num2;
// document.writeln("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");
// document.writeln("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");
// document.writeln("Division of " + num1 + " and " + num2 + " is " + div + "<br>");
// document.writeln("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br>");

// Exercise 3
// var num;
// document.writeln("Value after variable declaration is: " + num + "<br>");
// num = 5;
// document.writeln("Initial value: " + num + "<br>");
// num++;
// document.writeln("Value after increment is: " + num + "<br>");
// num = num + 7;
// document.writeln("Value after addition is: " + num + "<br>");
// num--;
// document.writeln("Value after decrement is: " + num + "<br>");
// num = num % 3;
// document.writeln("The remainder is: " + num + "<br>");

// Exercise 4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.writeln("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// Exercise 5
// var num = 4;
// document.writeln("Table of " + num + "<br>");
//     document.writeln(num + " x 1 = " + (num*1) + "<br>");
//     document.writeln(num + " x 2 = " + (num*2) + "<br>");
//     document.writeln(num + " x 3 = " + (num*3) + "<br>");
//     document.writeln(num + " x 4 = " + (num*4) + "<br>");
//     document.writeln(num + " x 5 = " + (num*5) + "<br>");
//     document.writeln(num + " x 6 = " + (num*6) + "<br>");
//     document.writeln(num + " x 7 = " + (num*7) + "<br>");
//     document.writeln(num + " x 8 = " + (num*8) + "<br>");
//     document.writeln(num + " x 9 = " + (num*9) + "<br>");
//     document.writeln(num + " x 10 = " + (num*10) + "<br>");

// Exercise 6
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.writeln(celsius + "°C is " + fahrenheit + "°F<br>");
// var fahrenheit2 = 70;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C<br>");

// Exercise 7
// var item1Price = 650;
// var item2Price = 100;
// var quantity1 = 3
// var quantity2 = 7
// var shipping = 100

// document.writeln("Price of item 1 is " + item1Price)
// document.writeln("<br> Quantity of item 1 is " + quantity1)
// document.writeln("<br> Price of item 2 is " + item2Price)
// document.writeln("<br> Quantity of item 2 is " + quantity2)
// document.writeln("<br> Shipping Charges: " + shipping)

// document.writeln("<br> <br> Total cost of your order is " + (item1Price * quantity1 + item2Price * quantity2 + shipping))

// Exercise 7
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.writeln("Total Marks: " + totalMarks);
// document.writeln("<br>Obtained Marks: " + obtainedMarks);
// document.writeln("<br>Percentage: " + percentage.toFixed(2) + "%");

// Exercise 8

// var dollar = 104.80
// var riyal = 28
// document.writeln("Total currency in PKR: " + ((dollar * 10) + (riyal * 25)))

// Exercise 9
// var number = 10; 
// var result = ((number + 5) * 10) / 2;

// document.writeln("Initial number: " + number);
// document.writeln("<br>Result after calculations: " + result);

// Exercise 10
// var currentYear = 2016;
// var birthYear = 1992;
// var age1 = currentYear - birthYear;

// document.writeln("Current Year: " + currentYear);
// document.writeln("<br>Birth Year: " + birthYear);
// document.writeln("<br> Your age is: "+ age1 );

// Exercise 11
// var radius = 20;
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.writeln("Radius of the circle: " + radius);
// document.writeln("<br>The circumference is " + circumference.toFixed(2));
// document.writeln("<br>The area is " + area.toFixed(2));

// Exercise 12
// var favoriteSnack = "Chocolate Chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;
// var totalNeeded = (maxAge - currentAge) * amountPerDay;

// document.writeln("<h1>The Lifetime Supply Calculator</h1>");
// document.writeln("<br>Favorite Snack: " + favoriteSnack);
// document.writeln("<br>Current Age: " + currentAge);
// document.writeln("<br>Estimated Maximum Age: " + maxAge);
// document.writeln("<br>Amount Per Day: " + amountPerDay);
// document.writeln("<br>You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");

// Chapter 6
// Exercise 1
// var a = 10;

// document.writeln("Result:<br>");
// document.writeln("The value of a is: " + a);
// document.writeln("<br>........................................<br><br>");

// document.writeln("The value of ++a is: " + (++a));
// document.writeln("<br>Now the value of a is: " + a + "<br><br>");

// document.writeln("The value of a++ is: " + (a++));
// document.writeln("<br>Now the value of a is: " + a + "<br><br>");

// document.writeln("The value of --a is: " + (--a));
// document.writeln("<br>Now the value of a is: " + a + "<br><br>");

// document.writeln("The value of a-- is: " + (a--));
// document.writeln("<br>Now the value of a is: " + a);

// Exercise 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.writeln("<h2>Result:</h2>");
// document.writeln("a is: " + a + "<br>");
// document.writeln("b is: " + b + "<br>");
// document.writeln("result is: " + result + "<br><br>");

// Exercise 3
// var userName = prompt("Enter your name:");
// document.writeln("Hello " + userName + "! Welcome!");

// Exercise 4
// Exercise 5
// var number = prompt("Enter a number to display its multiplication table:", "5");

// if (number === "" || number === null) {
//     number = 5;
// }

// document.writeln("<h2>Multiplication Table of " + number + "</h2>");

// document.writeln(number + " x 1 = " + (number * 1) + "<br>");
// document.writeln(number + " x 2 = " + (number * 2) + "<br>");
// document.writeln(number + " x 3 = " + (number * 3) + "<br>");
// document.writeln(number + " x 4 = " + (number * 4) + "<br>");
// document.writeln(number + " x 5 = " + (number * 5) + "<br>");
// document.writeln(number + " x 6 = " + (number * 6) + "<br>");
// document.writeln(number + " x 7 = " + (number * 7) + "<br>");
// document.writeln(number + " x 8 = " + (number * 8) + "<br>");
// document.writeln(number + " x 9 = " + (number * 9) + "<br>");
// document.writeln(number + " x 10 = " + (number * 10) + "<br>");

// Exercise 6
// MARKSHEET ASSIGNMENT SUBMITTED ALREADY

// Chapter 9
// Exercise 1
// var city = prompt("Enter your city name:");

// if (city === "karachi") {
//     document.writeln("Welcome to city of lights");
// } else {
//     document.writeln("Welcome to " + city);
// }

// Exercise 2
// var gender = prompt("Enter your gender (male or female):");

// if (gender.toLowerCase() === "male") {
//     document.writeln("Good Morning Sir.");
// } 
// else if (gender.toLowerCase() === "female") {
//     document.writeln("Good Morning Ma’am.");
// } 
// else {
//     document.writeln("Good Morning!");
// }

// Exercise 3
// var color = prompt("Enter the color of the traffic signal (Red, Yellow, Green):");

// if (color.toLowerCase() === "red") {
//     document.writeln("Must Stop");
// }
// else if (color.toLowerCase() === "yellow") {
//     document.writeln("Ready to move");
// }
// else if (color.toLowerCase() === "green") {
//     document.writeln("Move now");
// }
// else {
//     document.writeln("Invalid color! Please enter Red, Yellow, or Green.");
// }

// Exercise 4
// var fuel = prompt("Enter remaining fuel in litres:");

// if (fuel < 0.25) {
//     document.writeln("Please refill the fuel in your car");
// } else {
//     document.writeln("You have enough fuel.");
// }

// Exercise 5
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// Exercise 6
// ALREADY SUBMITTED MARKSHEET ASSIGNMENT


// Exercise 7
// var secretNumber = 7;
// var userGuess = +prompt("Guess the secret number (between 1 and 10):");

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// }
// else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("Try again!");
// }


// Exercise 8
// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is not divisible by 3");
// }

// Exercise 9
// var number = +prompt("Enter a number:");

// if(number % 2 === 0){
//     alert("Number is Even")
// }
// else{
//     alert("Number is ODD")
// }

// Exercise 10
// var temperature = +prompt("Enter the temperature:");

// if (temperature > 40) {
//   alert("It is too hot outside.");
// } 
// else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } 
// else if (temperature > 20) {
//   alert("Today’s Weather is cool.");
// } 
// else if (temperature > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } 
// else {
//   alert("It’s really cold outside!");
// }

// Exercise 11
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operation = prompt("Enter operation (+, -, *, /, %):");

// if (operation === "+") {
//     alert("Result: " + (num1 + num2));
// }
// else if (operation === "-") {
//     alert("Result: " + (num1 - num2));
// }
// else if (operation === "*") {
//     alert("Result: " + (num1 * num2));
// }
// else if (operation === "/") {
//     alert("Result: " + (num1 / num2));
// }
// else if (operation === "%") {
//     alert("Result: " + (num1 % num2));
// }
// else {
//     alert("Invalid operation!");
// }


// Chapter 12-13
// Exercise 1
// var char = prompt("Enter a character (number or letter):");
// var code = char.charCodeAt(0);

// if (code >= 48 && code <= 57) {
//   alert("The input is a number.");
// } 
// else if (code >= 65 && code <= 90) {
//   alert("The input is an uppercase letter.");
// } 
// else if (code >= 97 && code <= 122) {
//   alert("The input is a lowercase letter.");
// } 
// else {
//   alert("The input is not a number or letter.");
// }

// Exercise 2
// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");

// if (num1 > num2) {
//   alert("The larger number is: " + num1);
// } 
// else if (num2 > num1) {
//   alert("The larger number is: " + num2);
// } 
// else {
//   alert("Both numbers are equal.");
// }

// Exercise 3
// var char = prompt("Enter a single character:");

// char = char.toLowerCase();

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//   alert("True — it is a vowel.");
// } 
// else {
//   alert("False — it is not a vowel.");
// }


// Exercise 4
// var correctPassword = "abc123";
// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//   alert("Please enter your password");
// } 
// else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password");
// } 
// else {
//   alert("Incorrect password");
// }

// Exercise 5
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// document.writeln(greeting);

// Exercise 6
// var time = +prompt("Enter time in 24-hour format (e.g., 1900):");

// if (time >= 0 && time < 12) {
//   alert("Good morning!");
// } 
// else if (time >= 12 && time < 17) {
//   alert("Good afternoon!");
// } 
// else if (time >= 17 && time < 21) {
//   alert("Good evening!");
// } 
// else if (time >= 21 && time <= 23) {
//   alert("Good night!");
// } 
// else {
//   alert("Invalid time entered!");
// }


// Chapter 14
// Exersice 1
// var studentNames = [];

// Exercise 2
// var studentNames = new Array();

// 3
// var stringsArray = ["Apple", "Banana", "Cherry", "Mango"];

// 4
// var numbersArray = [10, 20, 30, 40, 50];

// 5
// var booleanArray = [true, false, true, false];

// 6
// var mixedArray = ["Ali", 25, true, null, 3.14];

// 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.writeln(qualifications)
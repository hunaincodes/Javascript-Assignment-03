// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter your city name:");

// Check if the city is Karachi
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}


//Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender (male / female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} 
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// Take signal color from user
var color = prompt("Enter traffic signal color (red / yellow / green):");

// Convert to lowercase to avoid case issues
color = color.toLowerCase();

// Show message according to color
if (color === "red") {
    alert("Must Stop");
}
else if (color === "yellow") {
    alert("Ready to move");
}
else if (color === "green") {
    alert("Move now");
}


//  Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”


var fuel = prompt("Enter remaining fuel in your car (in litres):");

fuel = parseFloat(fuel);

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;

if (++a === 5){
    alert("given condition for variable a is true");
}

if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}


// Take marks from user
var sub1 = parseFloat(prompt("Enter marks of Subject 1:"));
var sub2 = parseFloat(prompt("Enter marks of Subject 2:"));
var sub3 = parseFloat(prompt("Enter marks of Subject 3:"));

var totalMarks = parseFloat(prompt("Enter total marks:"));

// Calculate obtained marks
var obtainedMarks = sub1 + sub2 + sub3;

// Calculate percentage
var percentage = (obtainedMarks / totalMarks) * 100;

// Display results on page
document.write("<h2>Mark Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

// Calculate grade and remarks
if (percentage >= 80) {
    document.write("Grade: A+ <br>");
    document.write("Remarks: Excellent");
}
else if (percentage >= 70) {
    document.write("Grade: A <br>");
    document.write("Remarks: Good");
}
else if (percentage >= 60) {
    document.write("Grade: B <br>");
    document.write("Remarks: You need to improve");
}
else {
    document.write("Grade: Fail <br>");
    document.write("Remarks: Sorry");
}


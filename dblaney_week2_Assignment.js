/**
 * Prompts the user to enter their first name and favorite number, and displays a greeting and the area of a circle.
 * @param {string} fName - The user's first name.
 * @param {number} myFavNum - The user's favorite number.
 */
alert("Please enter your first name:");

let fName = prompt("Enter your first name: ");

const piValue = 3.1415926;

alert("Please enter your favorite number:");
let myFavNum = prompt("Enter your favorite number: ");

var myArea = piValue * myFavNum * myFavNum;
 /* could also be written as Math.PI * myFavNum * myFavNum; or Math.PI * Math.pow(myFavNum, 2); 
 or Math.PI * myFavNum ** 2; or Math.PI * (myFavNum * myFavNum); or Math.PI * (myFavNum ** 2); */
alert("Hello " + fName + ", you entered the number " + myFavNum + ". If that was the radius of a circle, its area would be " + myArea + ".");


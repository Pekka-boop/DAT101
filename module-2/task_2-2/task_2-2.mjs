"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(2+(3*(2-4))*6);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const millimeters = 25340;  // 25 m + 34 cm
const inch = 25.4;

let inches =millimeters/inch;
printOut("25 meters and 34 centimeters =" +  inches.toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;
let DaysToHours = 24*3+12;
let HoursToMinutes = 84*60;
let SecondsToMinutes = 45/60;
let answer = HoursToMinutes + SecondsToMinutes + minutes;
printOut("Replace this with you answer!" + answer);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let AmountOfDays = 6000/1400;
let AmountOfHours = 540/300;
let AmountOfHours2 = 300*AmountOfHours;
let AmountOfHours3 = AmountOfHours2/60;
let AmountOfSeconds = 0.52*60;
let AmountOfMinutes = 22;
printOut(" Days: " + AmountOfDays.toFixed(0) + ", Hours: " + AmountOfHours3 + ", Minutes: " + AmountOfMinutes + ", Seconds: " + AmountOfSeconds.toFixed(0));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let VekselkursKTD = 8.837;
let VekselKursDTK = 0.113;
let KronerToDollars = 54*VekselkursKTD;
let DollarsToKroner = 477*VekselKursDTK;
printOut("USD - Kroner: " + KronerToDollars.toFixed(0) + "kr" + " Kroner - USD:" + DollarsToKroner.toFixed(0) + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let sentence = "There is much between heaven and earth that we do not understand.";
printOut("There is much between heaven and earth that we do not understand.")

let letters = sentence.length - sentence.split(" ").length; 
printOut("There are " + letters + " letters in this line of text!")

printOut("The 19th character in this line of text is " + sentence.charAt(18))

printOut("The substring from the 35th and 8th character forward is: " +  sentence.substring(34,8) )

printOut("The word 'earth' starts at index " + sentence.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number1 = 5;
let number2 = 3;
if (number1 > number2);
    printOut("This number " + number1 + " is bigger than " + number2);

let number3 = 7;
let number4 = 7;
if (number3 === number4);
    printOut("This number " + number3 + " is equal to " + number4);

let letter1 = "A";
let letter2 = "B";
if (letter1 < letter2);
    printOut(letter1 + " > " + letter2 + " is false");

let number5 = 1;
let letter3 = "a";
if (number5 == letter3);
    printOut(number5 + " < " + letter3 + " is false");

let number6 = 2500;
let letter4 = "abcd";
if (number6 != letter4);
    printOut(number6 + " < " + letter4 + " is true");

let name1 = "Arne";
let name2 = "Thomas";
if (name1 ==! name2);
    printOut(name1 + " ==! " + name2 + " is true");

let number7 = 2;
let number8 = 5;
if (number7 === number8);
    printOut( "(" + number7 + " === " + number8 + ")" + "===" + " false is true");

let letters3 = "abcd";
let letters2 = "bcd";
if (letters > letters2);
    printOut( "(" + letters3 +  " > "  + letters2 + ")" + " === " + "false is true");

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const str1 = "254";
const num1 = +str1;
 printOut( "'" + "254" + "'" + " = " + num1); 

const str2 = "57.23";
const num2 = +str2;
printOut( "'" + "57.23" + "'" + " = " + num2);

const str3 = 25;
const num3 = +str3
printOut( "'" + "25 kroner" + "'" + " = " + num3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Random number between 1 and 360: " + Math.ceil(Math.random() * 360));
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totaldays = 131;
const weeks = Math.floor(totaldays / 7);
const daysLeft = totaldays % 7;
printOut(totaldays + " days is " + weeks + " weeks and " + daysLeft + " days.");
printOut(newLine);
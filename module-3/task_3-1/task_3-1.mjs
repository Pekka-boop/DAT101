"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 7;
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = -2;
if (number > 0) {
  printOut("Positive number");
} else if (number < 0) {
  printOut("Negative number");
} else {
  printOut("The number is zero");
}
printOut(newLine);

printOut("--- Part 6,7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 8 + 1);

if (r >= 4 && r <= 6) {
  printOut(r + "MP" + " Thank you");
} else if (r > 6) {
  printOut(r + "MP" + " Your image is too big");
  }  else printOut (r + "MP" + " Your image is too small"); 
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"June", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.includes("r")){
  printOut (monthName + ":" + " You must take vitamin D") 
} else
   printOut (monthName + ":" + " You do not need to take vitamin D")

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
switch (monthName) {
  case "February":
  printOut (monthName + " has 28 days");
break
  case "January":
  case "Mars":
  case "Mai":
  case "Juli":
  case "August":
  case "October":
  case "December":
  printOut (monthName + " has 31 days innit");
break
  case "April":
  case "June":
  case "September":
  case "November":
  printOut (monthName + " has 30 days");
break
}
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
switch (monthName){
  case "April":
  printOut ("We are temporary open in " + monthName);
break
  case "Mars":
  case "Mai":
  printOut ("We are closed in " + monthName);
break
  case "January":
  case "February":
  case "June":
  case "Juli":
  case "August":
  case "September":
  case "October":
  case "November":
  case "December":
  printOut ("We are open in " + monthName + "." + " Welcome!");
break
}
printOut(newLine);

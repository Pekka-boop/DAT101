"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtPrintValue = "";
for (let a = 1; a <= 10; a++){
    txtPrintValue += " " + a.toString ();
}
printOut(txtPrintValue);

let txtPrintValue2 = "";
for (let b = 10; b > 0; b--){
    txtPrintValue2 += " " + b.toString ();
}  
printOut(txtPrintValue2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = Math.floor(Math.random() * 60) + 1;
number = Math.floor(Math.random() * 60) + 1;
while (number !== 42) {
    number = Math.floor(Math.random() * 60) + 1;
    
}
printOut("I guess the number is "  + number.toString() + ", is that correct?");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let timeStarted = Date.now();
let number1 = Math.floor(Math.random() * 1000000) + 1;
let GuessedVariable1 = Math.floor(Math.random() * 1000000) + 1;
let attempts = GuessedVariable1;
number1 = Math.floor(Math.random() * 1000000) + 1;
while (number1 !== 34890) {
    number1 = Math.floor(Math.random() * 1000000) + 1;
}

let timesStopped = Date.now();
let timeDiff = timesStopped - timeStarted;
printOut("I guess the number is " + number1.toString()  + ", is that correct?");
printOut("It took me " + timeDiff.toString() + " milliseconds to find the number 34890.");
printOut("Walter, it took me " + attempts.toString() + " attempts to find the number 34890.");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primeNumber = "";
for (let i = 1; i <= 200; i++) {
    if (i < 2) continue;
    let isPrime = true;
    let num = 2;
    while (num <= Math.sqrt(i)) {
        if (i % num === 0) {
            isPrime = false;
            break;
        }
        num++;
    }
    if (isPrime) {
        primeNumber += " " + i.toString();
    }
}
printOut(primeNumber);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let textPart5 = "";
for (let row = 1; row <= 7; row++) {
    let line = "";
    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + " ";
    }
    textPart5 += line + newLine;
}
printOut(textPart5);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let i = 1; i <= 5; i++) {
  // Generate a random score between 1 and 236
  let score = Math.floor(Math.random() * 236) + 1;

  // Convert score to percentage (out of 236)
  let grade = (score / 236) * 100;

  if (grade >= 89 && grade <= 100) {
    printOut(grade.toFixed(2) + "% = A");
  } else if (grade >= 77 && grade <= 88) {
    printOut(grade.toFixed(2) + "% = B");
  } else if (grade >= 65 && grade <= 76) {
    printOut(grade.toFixed(2) + "% = C");
  } else if (grade >= 53 && grade <= 64) {
    printOut(grade.toFixed(2) + "% = D");
  } else if (grade >= 41 && grade <= 52) {
    printOut(grade.toFixed(2) + "% = E");
  } else {
    printOut(grade.toFixed(2) + "% = F");
  }
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function matchNumber(aText, aNumber) {
  let count = 0;
  for (let i = 0; i < aText.length; i++) {
    if (aText.charAt(i) === aNumber.toString()) {
      count++;
    }
  }
  return count;
}
let throws = 0;
let fullStraight = false;
let yahtzee = false;
let tower = false; // 2 + 4 of a kind
let threePairs = false; // 3 pairs e.g., 112233
do {
  const d1 = Math.ceil(Math.random() * 6);
  const d2 = Math.ceil(Math.random() * 6);
  const d3 = Math.ceil(Math.random() * 6);
  const d4 = Math.ceil(Math.random() * 6);
  const d5 = Math.ceil(Math.random() * 6);
  const d6 = Math.ceil(Math.random() * 6);
  throws++;
  const t = d1.toString() + d2.toString() + d3.toString() + d4.toString() + d5.toString() + d6.toString();

  let c1 = matchNumber(t, 1);
  let c2 = matchNumber(t, 2);
  let c3 = matchNumber(t, 3);
  let c4 = matchNumber(t, 4);
  let c5 = matchNumber(t, 5);
  let c6 = matchNumber(t, 6);
  const t2 = c1.toString() + c2.toString() + c3.toString() + c4.toString() + c5.toString() + c6.toString();

  const cm1 = matchNumber(t2, 1); // count of numbers that appear once, used for full straight
  const cm2 = matchNumber(t2, 2); // count of numbers that appear twice, used for three pairs and tower
  const cm4 = matchNumber(t2, 4); // count of numbers that appear four times, used for tower
  const cm6 = matchNumber(t2, 6); // count of numbers that appear six times
  // Check for full straight
  if (cm1 === 6 && !fullStraight) {
    // We have a full straight
    fullStraight = true;
    printOut("Full straight: " + t + " (throws: " + throws + ")");
  }
  // Check for yahtzee
  if (cm6 === 1 && !yahtzee) {
    // We have yahtzee
    yahtzee = true;
    printOut("Yahtzee: " + t + " (throws: " + throws + ")");
  }
  //check for tower
  if (cm4 === 1 && cm2 === 1 && !tower) {
    // We have a tower
    tower = true;
    printOut("Tower: " + t + " (throws: " + throws + ")");
  }
  //check for three pairs
  if (cm2 === 3 && !threePairs) {
    // We have three pairs
    threePairs = true;
    printOut("Three pairs: " + t + " (throws: " + throws + ")");
  }
} while (!fullStraight || !yahtzee || !tower || !threePairs);
printOut(newLine);

printOut("=== end of task_3-2.mjs ===");
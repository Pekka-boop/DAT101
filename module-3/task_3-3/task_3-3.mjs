"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function formatDateNorwegian(date) {
const myDate = new Date();
console.log(myDate.toLocaleString("no-NB"));
printOut("Current date and time is: " + myDate.toString());
}
formatDateNorwegian();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function formatDateNorwegian1(date) {
const myDate1 = new Date();
console.log(myDate1.toLocaleString("no-NB"));
printOut("Current date and time is: " + myDate1.toString());
}
function DaysUntilRelease() {
const today = new Date();
const release = new Date("2026-11-15T12:15");
const timeDiff = release - today;
const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
printOut("Days until the release of Mega Milburds Mega Adventures: " + daysDiff + " days"); 
}
formatDateNorwegian1();
DaysUntilRelease();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleMetrics(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;
    printOut("Diameter: " + 2 * radius.toFixed(2) );
    printOut("Areal: " + area.toFixed(2));
    printOut("Circumference: " + circumference.toFixed(2));
}
circleMetrics(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function RectangleMetrics(length, width) {
    const areaRect = length * width;
    const perimeterRect = 2 * (length + width);
    printOut("Length: " + length.toFixed(2) + ", Width: " + width.toFixed(2));
    printOut("Areal: " + areaRect.toFixed(2));
    printOut("Circumference: " + perimeterRect.toFixed(2));
}
RectangleMetrics(4, 3);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ETempType = {
  Kelvin: 1,
  Celsius: 2,
  Fahrenheit: 3,
}

function Part5ConvertTemp(aTemp, aTempType){
  let kelvin = 0, celsius = 0, fahrenheit = 0;
  let tempTypeName = "";

  switch(aTempType){
    case ETempType.Kelvin:
      kelvin = aTemp;
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin - 273.15) * 9/5 + 32;
      tempTypeName = "Kelvin";
    break;
    case ETempType.Celsius:
      celsius = aTemp;
      kelvin = celsius + 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      tempTypeName = "Celsius";
    break;
    case ETempType.Fahrenheit:
      fahrenheit = aTemp;
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = celsius + 273.15;
      tempTypeName = "Fahrenheit";
    break;
  }
  printOut(`Convert from ${aTemp} ${tempTypeName}:`);
  printOut(`&nbsp;Kelvin: ${Math.round(kelvin)}`);
  printOut(`&nbsp;Celsius: ${celsius.toFixed(0)}`);
  printOut(`&nbsp;Fahrenheit: ${fahrenheit.toFixed(0)}`);
  printOut("");
}

Part5ConvertTemp(300, ETempType.Kelvin);
Part5ConvertTemp(26.85, ETempType.Celsius);
Part5ConvertTemp(80.33, ETempType.Fahrenheit);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function Part6Calculate(aGrossAmount, aTaxGroup) {
  const taxGroup = aTaxGroup.toLowerCase();
  let taxRate = 0;
  switch (taxGroup) {
    case "normal":
      taxRate = 25;
      break;
    case "food":
      taxRate = 15;
      break;
    case "hotel":
    case "transport":
    case "cinema":
      taxRate = 10;
      break;
    default:
      printOut("Error: Unknown tax group!");
      return;
  }
  const netAmount = (100 * aGrossAmount) / (taxRate + 100);
  printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
  printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`);
  printOut(`Net amount: ${netAmount.toFixed(2)}`);
  printOut("");
}

Part6Calculate(100, "Normal");
Part6Calculate(100, "Food");
Part6Calculate(100, "Hotel");
Part6Calculate(100, "Transport");
Part6Calculate(100, "Cinema");
Part6Calculate(100, "Car");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function SpeedTimeDistance(speed, time, distance) {
    if (speed === 0) {
        speed = distance / time;
        printOut("Calculated Speed: " + speed.toFixed(2) + " units/hour");
    } else if (time === 0) {
        time = distance / speed;
        printOut("Calculated Time: " + time.toFixed(2) + " hours");
    } else if (distance === 0) {
        distance = speed * time;
        printOut("Calculated Distance: " + distance.toFixed(2) + " units");
    } else {
        return;
    }
}
SpeedTimeDistance(0, 2, 100); 
SpeedTimeDistance(50, 0, 100); 
SpeedTimeDistance(50, 2, 0); 
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function resizeText(text, maxSize, padChar, insertAtEnd) {
    const needed = Math.max(maxSize - text.length, 0);
    const padding = padChar.repeat(needed);
    const result = insertAtEnd ? text + padding : padding + text;
    console.log(result);
    return result;
}

// Now you can call it anywhere below
printOut(resizeText("Help me", 8, ".", false));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function mathsFun() {
  let currentNumber = 1;

  for (let line = 1; line <= 200; line++) {
    let leftSum = 0;
    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber;
      currentNumber++;
    }

    let rightSum = 0;
    for (let i = 0; i < line; i++) {
      rightSum += currentNumber;
      currentNumber++;
    }

    if (leftSum !== rightSum) {
      printOut("Line ${line} failed! Left = ${leftSum}, Right = ${rightSum}");
      return;
    }
  }
 }

  printOut("Maths fun!");

printOut(newLine);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const num = 9;
const result = factorial(num);
printOut(`Factorial of ${num} is: ${result}`);
printOut(newLine);
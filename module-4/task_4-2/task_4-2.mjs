"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

printOut("Length = " + array1.length + ", Values = " + array1[array1.length - 1]);

let text1 = ("");
for (let i = 0; i < array1.length; i++) {
  text1 += array1[i];
  if (i < array1.length - 1) {
    text1 += ", ";
  }
}
printOut(text1);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text2 = array1.join(" - ");
printOut(text2);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const greetings1 = "Hei på deg, hvordan har du det?";
const words1 = greetings1.split(" ");
let text3 = "";
for(let i = 0; i < words1.length; i++){
  const word = words1[i];
    
  text3 += "Index: " + i.toString() + " = " + word + newLine;
}
printOut(text3);
printOut(newLine);

printOut("--- Part 4-5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];

function removeNameFromArray(aArray, aName){
  let deleteIndex = -1;
  for(let i = 0; i < aArray.length; i++){
    const name = aArray[i];
    if(name === aName){

      deleteIndex = i;
      break; // 
    }
  }

  if(deleteIndex >= 0){
    printOut(aName + " is found, and deleted.");
    aArray.splice(deleteIndex, 1);
  }else{
    printOut(aName + " is not found!");
  }
}

removeNameFromArray(girls, "Fart Man");
removeNameFromArray(boys, "Oliver");
printOut(girls);
printOut(boys);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {

    constructor(aTitle, aAuthor, aISBN) {
        this.title = aTitle;
        this.author = aAuthor;
        this.ISBN = aISBN;
    }

    toString() {
        return this.title + ", " + this.author + ", " + this.ISBN;
    }
}

let books = [
    new TBook("The Tiny Man", "J.R.R. Trolling", "12345"),
    new TBook("1967", "George Ohwell", "67890"),
    new TBook("June", "Frank N. Stein", "54321")
];

for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"},
    WeekDay2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x08, name: "Torsdag"},
    WeekDay5: {value: 0x10, name: "Fredag"},
    WeekDay6: {value: 0x20, name: "Lørdag"},
    WeekDay7: {value: 0x40, name: "Søndag"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
};
Object.keys(EWeekDays).forEach(function(key) {
    const day = EWeekDays[key];
    printOut("Name: " + day.name + ", Value: " + day.value);
});
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const RandomNumberGenerator = [12, 3, 19, 7, 1, 15, 8, 14, 20, 6, 4, 18, 9, 13, 2, 5, 11, 17, 10, 16, 7, 12, 3, 19, 14, 6, 1, 8, 5, 20, 9, 11, 4, 17, 13]
  .sort((a, b) => a - b)
  .filter((value, index, self) => self.indexOf(value) === index);

printOut("Sorted unique values: " + RandomNumberGenerator);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Create empty array
let table = [];

// Build 5 rows and 9 columns
for (let row = 0; row < 5; row++) {
    table[row] = [];      // create a row

    for (let col = 0; col < 9; col++) {
        table[row][col] = "Row " + row + ", Col " + col;
    }
}

// Print the array
for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
        printOut(table[row][col]);
    }
}

printOut(newLine);
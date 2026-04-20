"use strict"
import { TSpriteButton, TSpriteNumber, ESpriteNumberJustifyType } from "libSprite";
import { TPoint } from "lib2d";
import { gameLevel } from "./Minesweeper.mjs";

export class TGameInfo {
    #leftNumber;
    #rightNumber;
    #aSmiley;
    #hndTimer;

    constructor (aSpcvs, aSPI) {
        console.log("create");
        const pos = new TPoint ();
        pos.x = aSPI.Board.LeftMiddle.width;
        pos.y = 22;
        this.#leftNumber = new TSpriteNumber(aSpcvs, aSPI.Numbers, pos.x, pos.y);
        pos.x = aSpcvs.width - 24;
        this.#leftNumber.digits = 3;
        this.#leftNumber.value = gameLevel.Mines
        this.#rightNumber = new TSpriteNumber(aSpcvs, aSPI.Numbers, pos.x, pos.y);
        this.#rightNumber.justify = ESpriteNumberJustifyType.Right;
        this.#rightNumber.digits = 3;
        pos.x = (aSpcvs.width/2) - (aSPI.ButtonSmiley.width/2);
        this.#aSmiley = new TSpriteButton (aSpcvs, aSPI.ButtonSmiley, pos.x, pos.y);
        this.#hndTimer = setInterval(this.onTime.bind(this), 1000);
    }

get flagCount(){
    return this.#leftNumber.value;

}

set flagCount(aValue){
    this.#leftNumber.value = aValue;
}

setSmileyIndex(aIndex){
    this.#aSmiley.index = aIndex;
}

draw() {
    this.#leftNumber.draw();
    this.#rightNumber.draw();
    this.#aSmiley.draw();
}
    onTime(){
        this.#rightNumber.value++;
    }
}
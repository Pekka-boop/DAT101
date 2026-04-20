"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, setSoundMuted, soundMuted, EGameStatus, restartGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";
let highestScore = [];

export class TMenu{
  #gameOver;
  #medal;
  #gameTop;
  #gameTotal;
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore; 
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber (aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.7;
    this.#gameOver = new TSprite(aSpcvs, aSPI.gameOver, 180, 180);
    this.#gameOver.hidden = true;
    this.#medal = new TSprite(aSpcvs, aSPI.medal, 205, 220);
    this.#medal.hidden = true;
    this.#gameTotal = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 360, 215);
    this.#gameTotal.visible = false;
    this.#gameTop = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 360, 260);
    this.#gameTop.visible = false;
    
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

 setSoundMute(aIsMuted){
    setSoundMuted(aIsMuted);

    if(this.#sfRunning){

      if(aIsMuted){
         this.#sfRunning.stop();
      }else {
        if(!soundMuted){
          this.#sfRunning.play();
        }
      }
    }
  
  console.log("SoundMuted:", aIsMuted);


    // if(aIsMuted){
    //   if(this.#sfRunning) {
    //     this.#sfRunning.pause();
    //   }
    //   if(this.#sfCountDown){
    //     this.#sfCountDown.pause();
    //   }
    //   }else {
    //   if(this.#sfRunning) {
    //     this.#sfRunning.play();
    //   }
    //   if(this.#sfCountDown){
    //     this.#sfCountDown.play();
    //   }
    //   }
    }

  draw(){
    this.#spTitle.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#gameOver.draw();
    this.#gameTotal.draw();
    this.#medal.draw();
    this.#gameTop.draw();
    this.#spPlayBtn.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);  
    }else{
      this.#spCountDown.visible = false;
      this.#spTitle.hidden = true;
      this.#sfRunning = new TSoundFile(fnRunning);
      
      if(!soundMuted){
      this.#sfRunning.play();
      }
      startGame();
      
    }
    
  }

  gameOverMenu(){
    console.log("i dieded HARD");
    this.#gameOver.hidden = false;
    this.#medal.hidden = false;
    this.#gameTotal.visible = true;
    this.#gameTop.hidden = false;
    this.#gameTop.visible = true;
    this.#spPlayBtn.hidden = false;
    this.#spPlayBtn.visible = true;

    if (EGameStatus.state === EGameStatus.gameOver){
      this.#spPlayBtn.y = 300;
      this.#spPlayBtn.x = 245;
      this.#sfCountDown.stop();
      this.#sfRunning.stop();
    }

    this.#gameTotal.value = this.#spGameScore.value;

  if (this.#gameTotal.value >= 1 && this.#gameTotal.value <=3) {
    this.#medal.index = 3;
    console.log("Bronze! That's a start!");
  } else if (this.#gameTotal.value >= 4 && this.#gameTotal.value <=7) {
    this.#medal.index = 1;
    console.log("Silver! getting better!");
  } else if (this.#gameTotal.value >= 8) {
    this.#medal.index = 2;
    console.log("Gold! Amazing, good job!");
  } else {
    this.#medal.index = 0; }
    console.log("Better luck next time..."); 

    highestScore.push(this.#gameTotal.value);
    const mostHigh = Math.max(...highestScore)
    console.log("Your highest score!");
    this.#gameTop.value = mostHigh;
  }

 resetMenu() {
  this.#gameTotal.value = 0;
  this.#spGameScore.value = 0;
  console.log("Im restarting")
  this.#spTitle.hidden = false;
  this.#gameOver.hidden = true;
  this.#medal.hidden = true;
  this.#gameTotal.visible = false;
  this.#gameTop.hidden = true;
  this.#gameTop.visible = false;
  this.#spPlayBtn.hidden = true;
  this.#spPlayBtn.visible = false;
  return this.#gameTotal.value;

}

spPlayBtnClick(){
    console.log("Click!");
    this.#spPlayBtn.hidden = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    this.#sfCountDown.play();
    setTimeout(this.countDown.bind(this), 1000);

    if (EGameStatus.state === EGameStatus.gameOver) {
      this.resetMenu();
      restartGame();
      EGameStatus.state = EGameStatus.idle;
    }
  }

}
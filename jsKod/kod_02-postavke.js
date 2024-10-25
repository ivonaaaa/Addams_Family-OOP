//POSTAVLJANJE OBJEKATA

//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
/// <reference path="kod_01-likovi.js"/>

//---EVENTS---
const btnGame = document.getElementById("btnStop");

//game over
const gameoverEvent = new CustomEvent("gameover", {
  detail: {
    win: false
  }
});

//win
const winEvent = new CustomEvent("gameover", {
  detail: {
    win: true
  }
});

function kraj(ev) {
  btnStop_click();
  if (ev.detail.win) {
    console.log("POBIJEDILI STE!");
  }
  else {
    console.log("IZGUBILI STE!");
  }
  GameSettings.output("Život: " + Postavke.gomez.health + "\nBodovi: " + Postavke.gomez.points);
}

btnGame.addEventListener("gameover", kraj);

//level up
const btnLevelUp = document.getElementById("btnStop");
const levelUpEvent = new Event("LevelUp");
btnGame.addEventListener("LevelUp", setup2);


// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup() {

  GAME.clearSprites();

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "mapa1":
      setup1();
      break;

    case "mapa2":
      setup2();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

//---LEVELS---
function setup1() {

  GAME.clearSprites();

  GAME.activeWorldMap.setCollisions("ground");

  //ubacivanje igrača:
  let gomez = new Gomez(0, 0, GAME.getSpriteLayer("Gomez"));
  GAME.addSprite(gomez);
  Postavke.gomez = gomez;

  //ubacivanje svih items-a:
  let c = ["coin1", "coin2", "coin3"];
  let h = ["heart1"];
  let d = ["door1"]

  for(let index = 0; index < c.length; index++){
    let layer=GAME.getSpriteLayer(c[index]);
    let coin=new Coin(layer);
    coin.visible=true;
    GAME.addSprite(coin);
    Postavke.coin.push(coin);
  }

  for(let index = 0; index < h.length; index++){
    let layer=GAME.getSpriteLayer(h[index]);
    let heart=new Heart(layer);
    heart.visible=true;
    GAME.addSprite(heart);
    Postavke.heart.push(heart);
  }

  for(let index = 0; index < d.length; index++){
    let layer=GAME.getSpriteLayer(d[index]);
    let door=new Door(layer);
    door.visible=true;
    GAME.addSprite(door);
    Postavke.door.push(door);
  }

  //ubacivanje enemies-a:
  // let mumija = new Mummy(128, 0, GAME.getSpriteLayer("enemies"));
  // GAME.addSprite(mumija);
  // Postavke.mumija = mumija;


}//setup1

function setup2() {

  btnStop_click();

  alert("NEW LEVEL!");

  GAME.clearSprites();

  GAME.activeWorldMap.setCollisions("ground");

  //ubacivanje igrača:
  let gomez = new Gomez(32, 416, GAME.getSpriteLayer("Gomez")); //koordinate na vratima
  GAME.addSprite(gomez);
  Postavke.gomez = gomez;

  //ubacivanje svih items-a:
  let c = ["coin4", "coin5", "coin6", "coin7"];
  let h = ["heart2"];
  let d = ["door3"]

  for(let index = 0; index < c.length; index++){
    let layer=GAME.getSpriteLayer(c[index]);
    let coin=new Coin(layer);
    coin.visible=true;
    GAME.addSprite(coin);
    Postavke.coin.push(coin);
  }

  for(let index = 0; index < h.length; index++){
    let layer=GAME.getSpriteLayer(h[index]);
    let heart=new Heart(layer);
    heart.visible=true;
    GAME.addSprite(heart);
    Postavke.heart.push(heart);
  }

  for(let index = 0; index < d.length; index++){
    let layer=GAME.getSpriteLayer(d[index]);
    let door=new Door(layer);
    door.visible=true;
    GAME.addSprite(door);
    Postavke.door.push(door);
  }

  btnStart_click();

}//setup2

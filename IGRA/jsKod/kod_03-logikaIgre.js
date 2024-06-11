//SVE INTERAKCIJE

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
/// <reference path="kod_02-postavke.js"/>

//---INTERAKCIJE---
function update_main() {

  if (GAME.activeWorldMap.name == "mapa1")
    level1();
  else if (GAME.activeWorldMap.name == "mapa2")
    level2();

  GAME.update();

};

function level1() {
  if (SENSING.right.active) {
    Postavke.gomez.moveRight();
  }
  if (SENSING.left.active) {
    Postavke.gomez.moveLeft();
  }
  if (SENSING.up.active) {
    Postavke.gomez.jump();
  }


  for (let index = 0; index < Postavke.coin.length; index++) {
    const c = Postavke.coin[index];
    if (Postavke.gomez.touching(c)) {
      Postavke.gomez.collectCoins(c);
      Postavke.brojac++;
    }
  }

  for (let index = 0; index < Postavke.heart.length; index++) {
    const h = Postavke.heart[index];
    if (Postavke.gomez.touching(h)) {
      Postavke.gomez.collectHearts(h);
    }
  }

  for (let index = 0; index < Postavke.door.length; index++) {
    const d = Postavke.door[index];
    if (Postavke.gomez.touching(d)) {
      btnGame.dispatchEvent(levelUpEvent);
    }
  }

}//level1





function level2() {
  if (SENSING.right.active) {
    Postavke.gomez.moveRight();
  }
  if (SENSING.left.active) {
    Postavke.gomez.moveLeft();
  }
  if (SENSING.up.active) {
    Postavke.gomez.jump();
  }


  for (let index = 0; index < Postavke.coin.length; index++) {
    const c = Postavke.coin[index];
    if (Postavke.gomez.touching(c)) {
      Postavke.gomez.collectCoins(c);
      Postavke.brojac++;
    }
  }

  for (let index = 0; index < Postavke.heart.length; index++) {
    const h = Postavke.heart[index];
    if (Postavke.gomez.touching(h)) {
      Postavke.gomez.collectHearts(h);
    }
  }

  for (let index = 0; index < Postavke.door.length; index++) {
    const d = Postavke.door[index];
    if (Postavke.gomez.touching(d)) {
      btnGame.dispatchEvent(winEvent);
    }
  }

}//level2
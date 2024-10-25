//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

//---KLASE---

class Gomez extends Sprite {
    #health;
    constructor(x, y, layer) {
        super(x + 2, y + 2, 32 - 4, 32 - 4); //smanjeno da ne zapinje za druge pločice
        this.frame_sets = {
            "up": [8],
            "walk-up": [8],
            "right": [1],
            "walk-right": [2, 3, 4, 5, 6],
            "down": [1],
            "walk-down": [1],
            "left": [31],
            "walk-left": [32, 33, 34, 35, 36]
            //nema animacije za skakanje
        };

        this.#health = 3;
        this.points = 0;

        this.layer = layer;
        this.visible = true; //tek kad se postavi layer

    }//constructor

    get health() {
        return this.#health;
    }

    set health(h) {
        if (h = 0) {
            GameSettings.output("GAME OVER!");
            btnStop_click();
            this.x = 0*32;
            this.y = 0*32;
        }
        else {
            this.#health = h;
        }
    }

    //OVERRIDE METODE --> jer smo promijenili vrijednosti
    moveRight() {
        this.direction = 90;
        this.velocity_x += 1.4;

        if (Postavke.gomez.touching(Postavke.door)) {
            btnGame.dispatchEvent(levelUpEvent);
        }
    }
    
    moveLeft() {
        this.direction = 270;
        this.velocity_x -= 1.4;
    }

    jump(h = 40) {
        if (!this.jumping) {

            this.jumping = true;
            this.velocity_y -= h;
      
        }
    }

    collectCoins(c){
        c.visible=false;
        this.points+=c.value;
    }

    collectHearts(g){
        g.visible = false;
        this.health += g.value;
        //g.start();
    
        if(this.health > 3){
          this.health = 3;
        }
    }

}//Gomez

class Enemies extends Sprite {
    constructor(x, y, layer) {
        super(x + 2, y + 2, 32 - 4, 32 - 4);
        this.frame_sets = {
            "right": [1],
            "walk-right": [1],
            "left": [1],
            "walk-left": [1]
        };

        this.layer = layer;
        this.visible = true;
    }

}//Enemies

class Mummy extends Enemies {
    constructor(x, y, layer) {
        super();
        this.frame_sets = {
            "right": [27],
            "walk-right": [27, 28, 29, 30],
            "left": [57],
            "walk-left": [57, 58, 59, 60]
        };
    }

}//Mummy

class Chef extends Enemies {
    constructor(x, y, layer) {
        super();
        this.frame_sets = {
            "right": [21],
            "walk-right": [21, 22, 23, 24, 25, 26],
            "left": [51],
            "walk-left": [51, 52, 53, 54, 55, 56]
        };
    }

}//Chef

class Bird extends Enemies {
    constructor(x, y, layer) {
        super();
        this.frame_sets = {
            "right": [28],
            "walk-right": [28, 29, 30],
            "left": [58],
            "walk-left": [58, 59, 60]
        };
    }

}//Bird

class Collectable extends Item {
    constructor(x, y, layer) {
        super(x, y, layer);
    }

    updatePosition(){
        //ništa se ne događa - ne vrijedi gravitacija
    }

}//Collectable

class Coin extends Collectable {
    constructor(x, y, layer) {
        super(x, y, layer);
        this.value = 1;
    }

}//Coin

class Heart extends Collectable {
    constructor(x, y, layer) {
        super(x, y, layer);
        this.health = 1;
    }

}//Heart

class Door extends Item {
    constructor(x, y, layer) {
        super(x, y, layer);
    }

}//Door
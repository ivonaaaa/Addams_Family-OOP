class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  //---SPRITE-OVI---
  /** @type {Gomez} */
  static gomez = null;

  /** @type {Mummy} */
  static mumija = null;

  /** @type {Chef} */
  static kuhar = null;

  /** @type {Bird} */
  static ptica = null;

  //---ITEMS---
  static coin = [];
  static heart = [];
  static door = [];

  //---VARIJABLE---
  static brojac = 0;
  //static krajIgre = false;


  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
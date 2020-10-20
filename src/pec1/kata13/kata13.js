export default class Tree {
  //ESlint error
  #species;
  #fruit;
  #regex;
  constructor(species, fruit) {
    this.#species = species;
    this.#fruit = fruit;
    this.#regex = new RegExp('^' + species.substring(0, 4));
  }

  get getSpecies() {
    return this.#species;
  }

  get getFruit() {
    return this.#fruit ? this.#fruit : 'No fruit';
  }

  set setFruit(fruit) {
    if (typeof fruit === 'string' && fruit.match(this.#regex)) {
      this.#fruit = fruit;
    } else {
      throw new Error('You must provide a valid fruit as a String');
    }
  }

  set setSpecies(species) {
    if (typeof species === 'string') {
      this.#species = species;
    } else {
      throw new Error('You must provide a string value');
    }
  }
}

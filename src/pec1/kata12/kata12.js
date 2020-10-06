export default function plantTree(species, fruit) {
  let mySpecie = species;
  let myFruit = fruit;
  let regex = new RegExp('^' + species.substring(0, 4));
  if (typeof mySpecie === 'string' && typeof myFruit == 'string') {
    return {
      getSpecies() {
        return mySpecie;
      },
      getFruit() {
        return myFruit;
      },
      setSpecies(species) {
        if (typeof species === 'string') {
          mySpecie = species;
        } else {
          throw new Error('You must provide a string value');
        }
      },
      setFruit(fruit) {
        if (typeof fruit === 'string' && fruit.match(regex)) {
          myFruit = fruit;
        } else {
          throw new Error('You must provide a valid fruit as a String');
        }
      },
    };
  }
  return null;
}

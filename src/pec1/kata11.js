export default function plantTree(species, fruit) {
  let mySpecie = species;
  let myFruit = fruit;
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
        if (typeof fruit === 'string') {
          myFruit = fruit;
        } else {
          throw new Error('You must provide a string value');
        }
      },
    };
  }
  return null;
}

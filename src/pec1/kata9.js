export default function plantTree(species, fruit) {
  if (typeof species === 'string' && typeof fruit == 'string') {
    return {
      species: species,
      fruit: fruit,
      getFruit() {
        return this.fruit;
      },
    };
  }
  return null;
}

// For exercises 9.3 and 9.4
export function plantTreeWithGetters(species, fruit) {
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
        }
      },
      setFruit(fruit) {
        if (typeof fruit === 'string') {
          myFruit = fruit;
        }
      },
    };
  }
  return null;
}

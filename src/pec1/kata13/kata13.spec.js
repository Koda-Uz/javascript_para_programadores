import Tree from './kata13';

describe('Kata #13: Clases', () => {
  const treeObject = new Tree('Especie', 'Fruta');
  const appleTree = new Tree('Manzano', 'manzana');
  const pineTree = new Tree('Pino');

  // Tree properties check
  test('treeObject has property getFruit', () => {
    expect(treeObject).toHaveProperty('getFruit');
  });

  test('treeObject has property getSpecies', () => {
    expect(treeObject).toHaveProperty('getSpecies');
  });

  test('treeObject has property setFruit', () => {
    expect(treeObject).toHaveProperty('setFruit');
  });

  test('treeObject has property setSpecies', () => {
    expect(treeObject).toHaveProperty('setSpecies');
  });

  // Tree propertie values check
  test('appleTree has specie and is "Manzano"', () => {
    expect(appleTree.getSpecies).toBe('Manzano');
  });

  test('appleTree has fuit and is "manzana"', () => {
    expect(appleTree.getFruit).toBe('manzana');
  });

  test('pineTree has no fuit and getFruit returns "No fruit"', () => {
    expect(pineTree.getFruit).toBe('No fruit');
  });

  // Tree error check
  test('treeObject throws error when no string value is provided in setFruit property', () => {
    expect(() => {
      treeObject.setFruit = 12;
    }).toThrow('You must provide a valid fruit as a String');
  });

  test('treeObject keeps original value after invoking setFruit with invalid value', () => {
    expect(treeObject.getFruit).toBe('Fruta');
  });

  // Tree RegEx check
  test('appleTree throws error when invalid fruit is provided in setFruit method', () => {
    expect(() => {
      appleTree.setFruit = 'Pera';
    }).toThrow('You must provide a valid fruit as a String');
  });

  test('pearTree fruit value when a valid fruit is provided in setfruit method', () => {
    let pearTree = new Tree('Peral');
    pearTree.setFruit = 'Pera';
    expect(pearTree.getFruit).toBe('Pera');
  });
});

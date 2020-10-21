import plantTree from './kata9_4';

describe('Kata #9.4: factoría de objetos', () => {
  test('plantTree has property getFruit', () => {
    expect(plantTree('pearTree', 'pear')).toHaveProperty('getFruit');
  });

  test('plantTree has property getSpecies', () => {
    expect(plantTree('pearTree', 'pear')).toHaveProperty('getSpecies');
  });

  test('plantTree has property setFruit', () => {
    expect(plantTree('pearTree', 'pear')).toHaveProperty('setFruit');
  });

  test('plantTree has property setSpecies', () => {
    expect(plantTree('pearTree', 'pear')).toHaveProperty('setSpecies');
  });

  test('plantTree setFruit does not set value when it is not a string', () => {
    var tree = plantTree('pearTree', 'pear');
    tree.setFruit(12);
    expect(tree.getFruit()).toBe('pear');
  });

  test('plantTree setFruit set fruit value when it is a string', () => {
    var tree = plantTree('pearTree', 'pear');
    tree.setFruit('apple');
    expect(tree.getFruit()).toBe('apple');
  });
});

import plantTree from './kata9';
import { plantTreeWithGetters } from './kata9';

describe('Kata #9: factoría de objetos', () => {
  // 9.1
  test('plantTree returns object with species and fruit', () => {
    expect(plantTree('pearTree', 'pear')).toMatchObject({
      species: 'pearTree',
      fruit: 'pear',
    });
  });

  test('plantTree returns null when species is not string', () => {
    expect(plantTree(17, 'pear')).toBeNull();
  });

  test('plantTree returns null when fruit is not string', () => {
    expect(plantTree('pearTree', 17)).toBeNull();
  });

  test('plantTree returns null when species and fruit are not string', () => {
    expect(plantTree(77, 17)).toBeNull();
  });

  // 9.2
  test('plantTree returns object with species property', () => {
    expect(plantTree('pearTree', 'pear').species).not.toBeNull();
  });

  test('plantTree returns object with fruit property', () => {
    expect(plantTree('pearTree', 'pear').fruit).not.toBeNull();
  });

  test('plantTree returns object with getFruit property', () => {
    expect(plantTree('pearTree', 'pear').getFruit).not.toBeNull();
  });

  test('plantTree getFruit method returns "pear"', () => {
    expect(plantTree('pearTree', 'pear').getFruit()).toBe('pear');
  });

  // 9.3
  test('plantTreeWithGetters has property getFruit', () => {
    expect(plantTreeWithGetters('pearTree', 'pear')).toHaveProperty('getFruit');
  });

  test('plantTreeWithGetters has not property fruit', () => {
    expect(plantTreeWithGetters('pearTree', 'pear')).not.toHaveProperty('fruit');
  });

  test('plantTreeWithGetters has property getSpecies', () => {
    expect(plantTreeWithGetters('pearTree', 'pear')).toHaveProperty('getSpecies');
  });

  test('plantTreeWithGetters has not property species', () => {
    expect(plantTreeWithGetters('pearTree', 'pear')).not.toHaveProperty('species');
  });

  test('plantTreeWithGetters getFruit method returns "pear"', () => {
    expect(plantTreeWithGetters('pearTree', 'pear').getFruit()).toBe('pear');
  });

  test('plantTreeWithGetters getSpecies method returns "pearTree"', () => {
    expect(plantTreeWithGetters('pearTree', 'pear').getSpecies()).toBe('pearTree');
  });

  //9.4
  test('plantTreeWithGetters has property getFruit', () => {
    expect(plantTreeWithGetters('pearTree', 'pear')).toHaveProperty('getFruit');
  });

  test('plantTreeWithGetters has property getSpecies', () => {
    expect(plantTreeWithGetters('pearTree', 'pear')).toHaveProperty('getSpecies');
  });

  test('plantTreeWithGetters has property setFruit', () => {
    expect(plantTreeWithGetters('pearTree', 'pear')).toHaveProperty('setFruit');
  });

  test('plantTreeWithGetters has property setSpecies', () => {
    expect(plantTreeWithGetters('pearTree', 'pear')).toHaveProperty('setSpecies');
  });

  test('plantTreeWithGetters setFruit does not set value when it is not a string', () => {
    var tree = plantTreeWithGetters('pearTree', 'pear');
    tree.setFruit(12);
    expect(tree.getFruit()).toBe('pear');
  });

  test('plantTreeWithGetters setFruit set fruit value when it is a string', () => {
    var tree = plantTreeWithGetters('pearTree', 'pear');
    tree.setFruit('apple');
    expect(tree.getFruit()).toBe('apple');
  });
});

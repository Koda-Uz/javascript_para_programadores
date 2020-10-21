import plantTree from './kata9_3';

describe('Kata #9.3: factoría de objetos', () => {
  test('plantTree has property getFruit', () => {
    expect(plantTree('pearTree', 'pear')).toHaveProperty('getFruit');
  });

  test('plantTree has not property fruit', () => {
    expect(plantTree('pearTree', 'pear')).not.toHaveProperty('fruit');
  });

  test('plantTree has property getSpecies', () => {
    expect(plantTree('pearTree', 'pear')).toHaveProperty('getSpecies');
  });

  test('plantTree has not property species', () => {
    expect(plantTree('pearTree', 'pear')).not.toHaveProperty('species');
  });

  test('plantTree getFruit method returns "pear"', () => {
    expect(plantTree('pearTree', 'pear').getFruit()).toBe('pear');
  });

  test('plantTree getSpecies method returns "pearTree"', () => {
    expect(plantTree('pearTree', 'pear').getSpecies()).toBe('pearTree');
  });
});

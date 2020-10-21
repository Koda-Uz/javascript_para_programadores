import plantTree from './kata9_1';

describe('Kata #9.1: factoría de objetos', () => {
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
});

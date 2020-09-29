import plantTree from './kata9';

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
});

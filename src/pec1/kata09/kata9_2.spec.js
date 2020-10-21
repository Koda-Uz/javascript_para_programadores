import plantTree from './kata9_2';

describe('Kata #9.2: factoría de objetos', () => {
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

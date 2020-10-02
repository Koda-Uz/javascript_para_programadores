import plantTree from './kata11';

describe('Kata #11: gestión de errores', () => {
  test('tree throws error when no string value is provided in setFruit method', () => {
    var tree = plantTree('appleTree', 'apple');
    expect(() => {
      tree.setFruit(12);
    }).toThrow('You must provide a string value');
  });
});

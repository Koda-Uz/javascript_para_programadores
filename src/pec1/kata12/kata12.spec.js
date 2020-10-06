import plantTree from './kata12';

describe('Kata #12: expresiones regulares', () => {
  test('tree throws error when invalid fruit is provided in setFruit method', () => {
    var tree = plantTree('manzano', 'manzana');
    expect(() => {
      tree.setFruit('pera');
    }).toThrow('You must provide a valid fruit as a String');
  });

  test('tree changes fruit value when a valid fruit is provided in setfruit method', () => {
    var tree = plantTree('peral', 'manzana');
    tree.setFruit('pera');
    expect(tree.getFruit()).toBe('pera');
  });
});

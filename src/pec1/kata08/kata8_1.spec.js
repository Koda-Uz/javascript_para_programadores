import { tree } from './kata8_1';

describe('Kata #8.1: objetos', () => {
  test('tree has propertie species', () => {
    expect(tree).toHaveProperty('species');
  });

  test('tree has propertie fruit', () => {
    expect(tree).toHaveProperty('fruit');
  });

  test('tree has specie and is "appleTree"', () => {
    expect(tree.species).toBe('appleTree');
  });

  test('tree has fuit and is "apple"', () => {
    expect(tree.fruit).toBe('apple');
  });
});

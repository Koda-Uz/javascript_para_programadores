import { tree } from './kata8';
import getFruit from './kata8';

describe('Kata #8: objetos', () => {
  // 8.1
  test('tree has specie and is "appleTree"', () => {
    expect(tree.species).toBe('appleTree');
  });

  test('tree has fuit and is "apple"', () => {
    expect(tree.fruit).toBe('apple');
  });

  // 8.2
  test('getFruit returns fruit when it exist', () => {
    expect(getFruit(tree)).toBe('apple');
  });

  const mockTree = {
    species: 'pineTree',
  };

  test('getFruit retuns "No fruit" when property is undefined', () => {
    expect(getFruit(mockTree)).toBe('No fruit');
  });

  // 8.3
  test('tree has a getFruit method and returns "apple"', () => {
    expect(tree.getFruit()).toBe('apple');
  });
});

import { tree } from './kata8_1';
import getFruit from './kata8_2';

describe('Kata #8.2: objetos', () => {
  test('getFruit returns fruit when it exist', () => {
    expect(getFruit(tree)).toBe('apple');
  });

  test('getFruit retuns "No fruit" when property is undefined', () => {
    const mockTree = {
      species: 'pineTree',
    };
    expect(getFruit(mockTree)).toBe('No fruit');
  });
});

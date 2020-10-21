import { tree } from './kata8_3';

describe('Kata #8.3: objetos', () => {
  test('tree has a getFruit method ', () => {
    expect(tree).toHaveProperty('getFruit');
  });

  test('tree getFruit method returns "apple"', () => {
    expect(tree.getFruit()).toBe('apple');
  });
});

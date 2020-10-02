import { plantTreeWithGetters } from './kata9';
import './kata10';

describe('Kata #10: prototipo', () => {
  test('tree has property getSpecies and returns a string with presentTree method', () => {
    expect(plantTreeWithGetters('pearTree', 'pear').getSpecies()).toHaveProperty('presentTree');
  });
});

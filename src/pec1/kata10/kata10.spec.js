import './kata10';
import { plantTreeWithGetters } from './kata10';

describe('Kata #10: prototipo', () => {
  test('tree has property getSpecies and returns a string with presentTree method', () => {
    expect(plantTreeWithGetters('pearTree', 'pear').getSpecies()).toHaveProperty('presentTree');
  });

  test('presentTree() method outputs "Este árbol es un pearTree" on console', () => {
    console.log = jest.fn();
    plantTreeWithGetters('pearTree', 'pear').getSpecies().presentTree();
    expect(console.log.mock.calls[0][0]).toBe('Este árbol es un pearTree');
  });

  test('presentTree("pear") method outputs "Este árbol es un pearTree y da pear" on console', () => {
    console.log = jest.fn();
    plantTreeWithGetters('pearTree', 'pear').getSpecies().presentTree('pear');
    expect(console.log.mock.calls[0][0]).toBe('Este árbol es un pearTree y da pear');
  });
});

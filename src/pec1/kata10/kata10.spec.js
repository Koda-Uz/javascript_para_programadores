import './kata10';
import { plantTree } from './kata10';

describe('Kata #10: prototipo', () => {
  test('tree has property getSpecies and returns a string with presentTree method', () => {
    expect(plantTree('pearTree', 'pear').getSpecies()).toHaveProperty('presentTree');
  });

  test('presentTree() method outputs "Este árbol es un pearTree" on console', () => {
    console.log = jest.fn();
    plantTree('pearTree', 'pear').getSpecies().presentTree();
    expect(console.log.mock.calls[0][0]).toBe('Este árbol es un pearTree');
  });

  test('presentTree("pear") method outputs "Este árbol es un pearTree y da pear" on console', () => {
    console.log = jest.fn();
    plantTree('pearTree', 'pear').getSpecies().presentTree('pear');
    expect(console.log.mock.calls[0][0]).toBe('Este árbol es un pearTree y da pear');
  });
});

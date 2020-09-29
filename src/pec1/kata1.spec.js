import evenOdd from './kata1';

describe('Kata #1: par o impar', () => {
  test('0 es par', () => {
    expect(evenOdd(0)).toBe('Even');
  });

  test('1 es impar', () => {
    expect(evenOdd(1)).toBe('Odd');
  });

  test('2 es par', () => {
    expect(evenOdd(2)).toBe('Even');
  });

  test('3 es impar', () => {
    expect(evenOdd(3)).toBe('Odd');
  });
});

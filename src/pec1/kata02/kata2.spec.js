import sumPositiveElements from './kata2';

describe('Kata #2: suma de elementos positivos de un array', () => {
  test('[] es 0', () => {
    expect(sumPositiveElements([])).toBe(0);
  });

  test('[1,2,3,4,5] es 15', () => {
    expect(sumPositiveElements([1, 2, 3, 4, 5])).toBe(15);
  });

  test('[1,-2,3,4,5] es 13', () => {
    expect(sumPositiveElements([1, -2, 3, 4, 5])).toBe(13);
  });

  test('[-1,2,3,4,-5] es 9', () => {
    expect(sumPositiveElements([-1, 2, 3, 4, -5])).toBe(9);
  });

  test('[-1,-2,-3,-4,-5] es 0', () => {
    expect(sumPositiveElements([-1, -2, -3, -4, -5])).toBe(0);
  });
});

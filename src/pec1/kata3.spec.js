import repeatString from './kata3';

describe('Kata #3: repite un string', () => {
  test('JavaScript, 0 es ""', () => {
    expect(repeatString('JavaScript', 0)).toBe('');
  });

  test('university, 1 es "university"', () => {
    expect(repeatString('university', 1)).toBe('university');
  });

  test('hello, 3 es "hellohellohello"', () => {
    expect(repeatString('hello', 3)).toBe('hellohellohello');
  });

  test('?, 10 es "??????????"', () => {
    expect(repeatString('?', 10)).toBe('??????????');
  });
});

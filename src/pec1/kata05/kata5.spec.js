import removeSpaces from './kata5';

describe('Kata #5: elimina los espacios', () => {
  test('"good morning" es "goodmorning"', () => {
    expect(removeSpaces('good morning')).toBe('goodmorning');
  });

  test('" carrot cake " es "carrotcake"', () => {
    expect(removeSpaces(' carrot cake ')).toBe('carrotcake');
  });

  test('"the abbot gave rice to the fox" es "theabbotgavericetothefox"', () => {
    expect(removeSpaces('the abbot gave rice to the fox')).toBe('theabbotgavericetothefox');
  });
});

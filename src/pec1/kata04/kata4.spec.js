import removeFirstAndLast from './kata4';

describe('Kata #4: elimina el primer y último carácter', () => {
  test('JavaScript es avaScrip', () => {
    expect(removeFirstAndLast('JavaScript')).toBe('avaScrip');
  });

  test('Alexandria es lexandri', () => {
    expect(removeFirstAndLast('Alexandria')).toBe('lexandri');
  });

  test('hydrogen es ydroge', () => {
    expect(removeFirstAndLast('hydrogen')).toBe('ydroge');
  });

  test('ok es ok', () => {
    expect(removeFirstAndLast('ok')).toBe('ok');
  });
});

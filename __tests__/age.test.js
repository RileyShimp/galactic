import Age from '../src/js/age.js';

describe('age', () => {

  test('should correctly return an age for 5 planets', () => {
    const age = new Age(21);
    expect(age.earth).toEqual(21)
    expect(age.mercury).toEqual(0);
    expect(age.venus).toEqual(0);
    expect(age.mars).toEqual(0);
    expect(age.jupiter).toEqual(0);
  });

  test('should correctly determine mercury age based on age entered', () => {
    const age1 = new Age(10);
    expect(age1.mercuryCalc()).toEqual(41);
  });
});
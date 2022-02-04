import Age from '../src/js/age.js';

describe('age', () => {

  test('should correctly return an age for 4 planets', () => {
    const age = new Age();
    expect(age.mercury).toEqual();
    expect(age.venus).toEqual();
    expect(age.mars).toEqual();
    expect(age.jupiter).toEqual();
  });

  test('should correctly determine mercury age based on age entered', () => {
    const age1 = new Age(10);
    expect(age1.mercuryCalc()).toEqual(41);
  })
});
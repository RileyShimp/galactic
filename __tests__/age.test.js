import Age from '../src/js/age.js';

describe('age', () => {

  let age;

  beforeEach(() => {
    age = new Age(10);
  });

  test('should correctly return an age for 5 planets', () => {
    expect(age.earth).toEqual(10)
    expect(age.mercury).toEqual(0);
    expect(age.venus).toEqual(0);
    expect(age.mars).toEqual(0);
    expect(age.jupiter).toEqual(0);
  });

  test('should correctly determine mercury age based on age entered', () => {
    expect(age.mercuryCalc()).toEqual(41);
  });

  test('should correctly determine venus age based on age entered', () => {
    expect(age.venusCalc()).toEqual(16);
  })
});
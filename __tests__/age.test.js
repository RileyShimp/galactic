import Age from '../src/js/age.js';

describe('age', () => {

  let age;

  beforeEach(() => {
    age = new Age(20);
  });

  test('should correctly return an age for 5 planets', () => {
    expect(age.earth).toEqual(20)
    expect(age.mercury).toEqual(0);
    expect(age.venus).toEqual(0);
    expect(age.mars).toEqual(0);
    expect(age.jupiter).toEqual(0);
  });

  test('should correctly determine mercury age based on age entered', () => {
    expect(age.mercuryCalc()).toEqual(83);
  });

  test('should correctly determine venus age based on age entered', () => {
    expect(age.venusCalc()).toEqual(32);
  });

  test('should correctly determine mars age based on age entered', () => {
    expect(age.marsCalc()).toEqual(10);
  });

  test('should correctly determine jupiter age based on age entered', () => {
    expect(age.jupiterCalc()).toEqual(1);
  });

  test('should correctly provide a life expectancy for each planet', () => {
    expect(age.earthExpect).toEqual(72);
    expect(age.mercuryExpect).toEqual(0);
    expect(age.venusExpect).toEqual(0);
    expect(age.marsExpect).toEqual(0);
    expect(age.jupiterExpect).toEqual(0);
  });
});
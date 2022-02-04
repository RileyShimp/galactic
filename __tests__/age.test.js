import Age from '../src/js/age.js';

describe('age', () => {

  test('should correctly return an age for 4 planets', () => {
    const age = new Age();
    expect(age.mercury).toEqual();
    expect(age.venus).toEqual();
    expect(age.mars).toEqual();
    expect(age.jupiter).toEqual();
  });
});
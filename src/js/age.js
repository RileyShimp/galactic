export default class Age {
  constructor(age) {
    this.earth = age
    this.earthExpect = 0;
    this.mercury = 0;
    this.mercuryExpect = 0;
    this.venus = 0;
    this.venusExpect = 0;
    this.mars = 0;
    this.marsExpect = 0;
    this.jupiter = 0;
    this.jupiterExpect = 0;
  }

  mercuryCalc() {
    return this.mercury = Math.floor(this.earth * 4.16)
  }

  venusCalc() {
    return this.venus = Math.floor(this.earth * 1.61);
  }

  marsCalc() {
    return this.mars = Math.floor(this.earth / 1.88);
  }

  jupiterCalc() {
    return this.jupiter = Math.floor(this.earth / 11.86);
  }

  earthYearsLeft() {
    return this.earthExpect = Math.floor(72 - this.earth);
  }

  mercuryYearsLeft() {
    return this.mercuryExpect = Math.floor(299 - Math.floor(this.earth * 4.16));
  }
}
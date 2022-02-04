export default class Age {
  constructor(age) {
    this.earth = age
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
  }

  mercuryCalc() {
    return this.mercury = Math.floor(this.earth * 4.16);
  }

  venusCalc() {
    return this.venus = Math.floor(this.earth * 1.61);
  }
}
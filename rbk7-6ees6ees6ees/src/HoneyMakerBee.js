class HoneyMakerBee extends Bee {
  constructor() {
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;

  }

  makeHoney() {
    this.honneyPot++;

  }

  giveHoney() {
    this.honeyPot--;
  }
};

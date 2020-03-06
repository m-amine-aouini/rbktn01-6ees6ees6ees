class ForagerBee extends Bee {
  constructor() {
    this.age = 10;
    this.canFly = true;
    this.treasureChest = [];
  }

  forage() {
    this.treasureChest.push('treasure');
  }
};

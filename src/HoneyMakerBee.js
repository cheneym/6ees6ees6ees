import Bee from './Bee'

class HoneyMakerBee extends Bee {
  // TODO..
  constructor() {  
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    if (honeyPot) { this.honeyPot--; }
  }
};

export default HoneyMakerBee;
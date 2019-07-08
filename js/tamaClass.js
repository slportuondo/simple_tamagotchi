class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.boredom = 0;
    this.sleepiness = 0;
  }
  changeHealth (tamaObjKey, plusOrMinus, posHealthTag, negHealthTag) {
    this[tamaObjKey] ++;
    if (plusOrMinus === '-1') {
      $(posHealthTag).css('flex-grow', '-=1');
      $(negHealthTag).css('flex-grow', '+=1');
    } else if (plusOrMinus === 1) {
      $(posHealthTag).css('flex-grow', '+=1');
      $(negHealthTag).css('flex-grow', '-=1');
    }
  }
  eat(){
      this.hunger -= 1;
      this.changeHealth('hunger', 1, '#notHungry', '#addHunger');
  }
  sleep(){
    this.sleepiness -= 1;
    this.changeHealth('sleepiness', 1, '#notSleepy', '#addSleepy');
  }
  play(){
      this.boredom -= 1;
      this.changeHealth('boredom', 1, '#notBored', '#addBored');
  }
}

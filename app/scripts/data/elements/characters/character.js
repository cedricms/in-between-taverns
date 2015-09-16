var Character = function() {
  this.movement = 0;
  this.strength = 0;
  this.life = 0;
  this.resistance = 0;
  this.actions = 4;
};

for(key in GameElement.prototype) {   // copying all GameElement prototype property into the Character property
 Character.prototype[key] = GameElement.prototype[key];
}
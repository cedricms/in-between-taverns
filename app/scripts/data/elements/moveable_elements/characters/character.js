var Character = function() {
  this.strength = 0;
  this.life = 0;
  this.resistance = 0;
  this.actions = 4;
};

for(key in GameElement.prototype) {   // copying all MoveableElement prototype property into the Character property
 Character.prototype[key] = MoveableElement.prototype[key];
}
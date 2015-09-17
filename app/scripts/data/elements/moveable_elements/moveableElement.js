var MoveableElement = function() {
  this.movement = 0;
};

for(key in GameElement.prototype) {   // copying all GameElement prototype property into the MoveableElement property
 MoveableElement.prototype[key] = GameElement.prototype[key];
}
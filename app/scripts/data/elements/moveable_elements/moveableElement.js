var MoveableElement = function() {
	this.movement = 0;
	this.strength = 0;
};

for(key in GameElement.prototype) {   // copying all GameElement prototype property into the MoveableElement property
	MoveableElement.prototype[key] = GameElement.prototype[key];
}

MoveableElement.prototype.moveTo = function(x, y, z) {
	console.log("Moving to X : " + x + ", Y : " + y + ", Z : " +  z);
};
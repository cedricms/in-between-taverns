var Character = function() {

};

for(key in GameElement.prototype) {   // copying all MoveableElement prototype property into the Character property
	Character.prototype[key] = MoveableElement.prototype[key];
}
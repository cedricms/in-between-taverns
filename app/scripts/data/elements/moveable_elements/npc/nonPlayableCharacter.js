var NonPlayableCharacter = function() {

};

for(key in GameElement.prototype) {   // copying all MoveableElement prototype property into the NonPlayableCharacter property
	NonPlayableCharacter.prototype[key] = MoveableElement.prototype[key];
}
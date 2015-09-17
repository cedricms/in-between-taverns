var LivingElement = function() {
	this.life = 0;
	this.resistance = 0;
	this.actions = 4;
   this.equipementList;
};

for(key in GameElement.prototype) {   // copying all GameElement prototype property into the LivingElement property
	LivingElement.prototype[key] = GameElement.prototype[key];
}
var Character = function() {

};

for(key in GameElement.prototype) {   // copying all LivingElement prototype property into the Character property
	Character.prototype[key] = LivingElement.prototype[key];
}
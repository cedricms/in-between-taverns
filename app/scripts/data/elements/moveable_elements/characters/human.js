var Human = function() {};

for(key in Character.prototype) {   // copying all Character prototype property into the Human property
	Human.prototype[key] = Character.prototype[key];
}

Human.prototype.movement = 4;
Human.prototype.strength = 4;
Human.prototype.life = 4;
Human.prototype.resistance = 4;
Human.prototype.intelligence = 6;
Human.prototype.sight = 6;
Human.prototype.aim = 4;
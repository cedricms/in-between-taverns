var Human = function() {};

for(key in Character.prototype) {   // copying all Character prototype property into the Human property
	Human.prototype[key] = Character.prototype[key];
}

Human.prototype.movement = 4;
Dwarf.prototype.strength = 4;
Dwarf.prototype.life = 4;
Dwarf.prototype.resistance = 4;
var Dwarf = function() {};

for(key in Character.prototype) {   // copying all Character prototype property into the Dwarf property
   Dwarf.prototype[key] = Character.prototype[key];
}

Dwarf.prototype.movement = 3;
Dwarf.prototype.strength = 5;
Dwarf.prototype.life = 5;
Dwarf.prototype.resistance = 5;
Dwarf.prototype.actions = 3;
Dwarf.prototype.intelligence = 7;
Dwarf.prototype.sight = 7;
Dwarf.prototype.aim = 3;
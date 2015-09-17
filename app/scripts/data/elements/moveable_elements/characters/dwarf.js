var Dwarf = function() {};

for(key in Character.prototype) {   // copying all Character prototype property into the Dwarf property
 Dwarf.prototype[key] = Character.prototype[key];
}

Dwarf.prototype.movement = 3;
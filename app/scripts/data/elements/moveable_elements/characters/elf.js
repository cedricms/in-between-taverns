var Elf = function() {};

for(key in Character.prototype) {   // copying all Character prototype property into the Elf property
   Elf.prototype[key] = Character.prototype[key];
}

Elf.prototype.movement = 5;
Elf.prototype.strength = 3;
Elf.prototype.life = 3;
Elf.prototype.resistance = 3;
Elf.prototype.actions = 5;
Elf.prototype.intelligence = 8;
Elf.prototype.sight = 8;
Elf.prototype.aim = 6;
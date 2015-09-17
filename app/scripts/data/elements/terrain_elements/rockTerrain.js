var RockElement = function() {};

for(key in TerrainElement.prototype) {   // copying all TerrainElement prototype property into the RockElement property
	RockElement.prototype[key] = TerrainElement.prototype[key];
}
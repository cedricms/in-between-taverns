var SandElement = function() {};

for(key in TerrainElement.prototype) {   // copying all TerrainElement prototype property into the SandElement property
	SandElement.prototype[key] = TerrainElement.prototype[key];
}
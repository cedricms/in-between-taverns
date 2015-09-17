var GrassElement = function() {};

for(key in TerrainElement.prototype) {   // copying all TerrainElement prototype property into the GrassElement property
	GrassElement.prototype[key] = TerrainElement.prototype[key];
}
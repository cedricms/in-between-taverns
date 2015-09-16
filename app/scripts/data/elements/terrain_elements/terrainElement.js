var TerrainElement = function() {};

for(key in GameElement.prototype) {   // copying all GameElement prototype property into the TerrainElement property
 TerrainElement.prototype[key] = GameElement.prototype[key];
}
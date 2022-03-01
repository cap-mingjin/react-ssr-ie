var dirTree = require('./lib/dirTree');
var cfg = require('./conf.js');
var fs = require('fs');

var jsonObj = dirTree.dirDFS(cfg.path, cfg.name, cfg.ignoreList);
var str = dirTree.stringifyDirTree(jsonObj, cfg.outputType);

if (cfg.type == 'console') {
  // output to console
  console.log(str);
} else {
  // output to file
}

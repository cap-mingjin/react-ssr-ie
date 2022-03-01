var fs = require('fs');

function needIgnore(name, ignoreList) {
  var result = false;
  ignoreList.forEach(function(regExp) {
    if (regExp.test(name)) result = true;
  });
  return result;
}

function dirDFS(path, dirName, ignoreList) {
  var rootStat = fs.statSync(path);
  if (!rootStat.isDirectory()) {
    console.log('"' + path + '" is not directory');
    return null;
  }

  var result = new Object();
  result['name'] = dirName;
  result['type'] = 'dir';
  result['childD'] = [];
  result['childF'] = [];

  files = fs.readdirSync(path);
  files.forEach(function(fileName) {
    var stat = fs.statSync(path + '/' + fileName);

    if (needIgnore(fileName, ignoreList)) {
    } else if (stat.isDirectory()) {
      var dirObj = dirDFS(path + '/' + fileName, fileName, ignoreList);
      result['childD'].push(dirObj);
    } else {
      var fileObj = new Object();
      fileObj['name'] = fileName;
      fileObj['type'] = 'file';
      result['childF'].push(fileObj);
    }
  });

  return result;
}

function stringifyHelper(type, obj, depth, isEnd) {
  var tmpStr = '';

  if (obj['type'] == 'dir') {
    if (type != 'simple') {
      for (let i = 1; i <= depth - 1; i++) {
        tmpStr += '  ' + (isEnd[i] ? ' ' : '│');
      }
      tmpStr += '  │\r\n';
    }

    for (let i = 1; i <= depth - 1; i++) {
      tmpStr += '  ' + (isEnd[i] ? ' ' : '│');
    }
    tmpStr += '  ' + (isEnd[depth] ? '└─' : '├─');
    tmpStr += obj['name'] + '\r\n';

    var arrLength = obj['childD'].length + obj['childF'].length;
    for (let i = 0; i < obj['childD'].length; i++) {
      isEnd[depth + 1] = --arrLength ? false : true;
      tmpStr += stringifyHelper(type, obj['childD'][i], depth + 1, isEnd);
    }
    for (let i = 0; i < obj['childF'].length; i++) {
      isEnd[depth + 1] = --arrLength ? false : true;
      tmpStr += stringifyHelper(type, obj['childF'][i], depth + 1, isEnd);
    }
  } else {
    if (type != 'simple') {
      for (let i = 1; i <= depth - 1; i++) {
        tmpStr += '  ' + (isEnd[i] ? ' ' : '│');
      }
      tmpStr += '  │\r\n';
    }

    for (let i = 1; i <= depth - 1; i++) {
      tmpStr += '  ' + (isEnd[i] ? ' ' : '│');
    }
    tmpStr += '  ' + (isEnd[depth] ? '└─' : '├─');
    tmpStr += obj['name'] + '\r\n';
  }

  return tmpStr;
}

function stringifyDirTree(dirTree, type) {
  var str = '';
  var depth = 0;
  var arrLength = dirTree['childD'].length + dirTree['childF'].length;
  var isEnd = [true];

  str += dirTree['name'] + '\r\n';

  for (let i = 0; i < dirTree['childD'].length; i++) {
    isEnd[depth + 1] = --arrLength ? false : true;
    str += stringifyHelper(type, dirTree['childD'][i], depth + 1, isEnd);
  }
  for (let i = 0; i < dirTree['childF'].length; i++) {
    isEnd[depth + 1] = --arrLength ? false : true;
    str += stringifyHelper(type, dirTree['childF'][i], depth + 1, isEnd);
  }

  return str;
}

module.exports = {
  dirDFS: dirDFS,
  stringifyDirTree: stringifyDirTree
};

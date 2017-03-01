var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

const examplesPath = path.join(__dirname, 'src', 'app', 'examples');

// The object we'll stringify to a file
const examples = [];

function getDirectories (srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
}

function getFiles (srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isFile())
}

const exampleFolders = getDirectories(examplesPath);

exampleFolders.map(dir => {
  var fullPath = path.join(examplesPath, dir);
  var files = getFiles(fullPath);
  const example = {
    component: dir,
    examples: []
  };

  files.map(file => {
    example.examples.push({
      component: file,
      description: 'desc',
      code: 'code here'
    });
  });
  examples.push(example);
});

function writeFile(fileContent) {
  fs.writeFile(path.join(__dirname, 'exampleMetadata.js'), fileContent, function(err) {
      if (err) return console.log(err);
      console.log(chalk.green("Example data saved."));
  });
}

writeFile("exports = " + JSON.stringify(examples));
